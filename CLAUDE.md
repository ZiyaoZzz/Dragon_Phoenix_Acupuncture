# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

If you're a new contributor using an AI coding agent (Antigravity, Cursor, etc.), also read
`AGENTS.md` — it covers edit scope (keep changes small, no drive-by refactors) and the branch/merge
rules (never push or merge directly into `react-version` or `main`, both of which auto-deploy).

## What this is

Marketing site for Dragon Phoenix Acupuncture, a TCM clinic in Kissimmee, FL. A React SPA
(frontend) plus a small Express API (backend, admin auth + appointment intake), deployed as two
separate services. Trilingual (English / Spanish / Chinese).

## Commands

```bash
# Frontend (repo root)
npm run dev       # Vite dev server, http://localhost:5173
npm run build     # tsc -b && vite build -> dist/
npm run lint      # eslint .
npm run preview   # serve the built dist/ locally
npm run deploy    # gh-pages -d dist (manual publish; CI also does this on push, see below)

# Backend (server/)
cd server && npm run dev    # node --watch index.js, http://localhost:3001
cd server && npm start      # node index.js
```

There is no test suite in this repo. Verify changes with `npm run build` (type errors surface at
build time via `tsc -b`) and `npm run lint`, plus a manual check in the browser for anything visual.

Frontend dev server proxies `/api/*` to `http://localhost:3001` (see `vite.config.ts`), so run the
backend alongside the frontend when testing the contact form or admin dashboard locally.

## Architecture

### Frontend/backend split

- Frontend is a static SPA built by Vite, deployed to GitHub Pages at `dragonphoenixacupuncture.com`
  (`.github/workflows/deploy.yml`: on push to `main`, `master`, or `react-version` — `react-version`
  is the actual production branch in practice — builds with `VITE_API_URL` injected from a repo
  secret, publishes `dist/` via the official `actions/upload-pages-artifact` +
  `actions/deploy-pages`, with the repo's Pages "Source" set to "GitHub Actions" rather than the
  older "Deploy from a branch" mode).
- Backend (`server/`) is a standalone Express app, deployed separately (Render, per README) at
  `api.dragonphoenixacupuncture.com`. It only exists to gate the `/admin` dashboard behind a
  single hardcoded admin account and to accept appointment-request submissions.
- The two are not in the same npm workspace — `server/` has its own `package.json` and
  `node_modules`. Root `.env`/`server/.env` are gitignored; copy `server/.env.example`.

### Backend (`server/index.js`)

- Single admin user, credentials from env (`ADMIN_USER_ID`, `ADMIN_PASSWORD_HASH` — generate with
  `server/scripts/hash-password.js`), JWT (`JWT_SECRET`) returned to the client and sent back as
  `Authorization: Bearer <token>` (not a cookie, despite `cookie-parser` being a dependency).
- `POST /api/appointments` accepts the contact form's appointment requests and stores them in a
  plain in-memory array — **this resets on every server restart/deploy and there is no email/DB
  persistence.** `GET /api/admin/appointments` (JWT-protected) is how the admin dashboard reads
  them back. If appointments start actually mattering operationally, this in-memory store is the
  first thing to replace.
- Everything is in one file; there's no router/controller split. Fine at this size — don't add
  layers preemptively if extending it.

### Frontend structure

- `src/pages/*.tsx` — one file per route, wired up in `src/main.tsx`. Admin routes live under
  `src/pages/admin/` (`AdminLoginPage`, `AdminDashboard`, `authApi.ts` for the fetch wrapper that
  attaches the JWT from `localStorage`).
- `src/common/<feature>/` — the shared component/content layer. Two flavors coexist under the same
  convention:
  - **Real components**: `header`, `footer`, `ServiceCard`, `doctorCard`, `physicianDetailCard`,
    `sidebar`, `historySection`, `hoursSection`, `homepageBanner`, `brochures`,
    `LanguageSwitcher` — each has an `index.tsx`.
  - **Translation-only namespaces**: `conditionsCard`, `contact`, `gallery` have *no* component —
    just a `translations/` folder. The corresponding page (`ConditionsPage.tsx`, `ContactPage.tsx`,
    `GalleryPage.tsx`) renders inline and pulls copy from that namespace. Don't go looking for a
    `ConditionsCard` component; it doesn't exist by design.
- `src/common/doctorCard/doctors.ts` is the single source of truth for physician bios (experience,
  education, credentials, memberships) as structured data, consumed by both `HomePage` (summary
  cards) and `PhysiciansPage` (full profile via `physicianDetailCard`). Update a doctor's info once
  here, not per-page.
- `src/assets/` — all images, imported directly into components (Vite fingerprints them on build).

### i18n

Full guide: `src/i18n/README.md`. The short version: every translatable namespace lives at
`<folder>/translations/<namespace>.<lang>.json` (lang ∈ `en`, `es`, `zh`), and `src/i18n/index.ts`
auto-discovers all of them via `import.meta.glob` — **no manual registration needed**, just add the
three JSON files and use `useTranslation('namespace')`. All three language files should be kept in
sync; a missing key silently falls back to English rather than erroring, so gaps are easy to miss.

### SEO / GitHub Pages prerendering

GitHub Pages is a plain static host with no server-side routing. Client-side routes like
`/physicians` only exist as files at build time if something generates them; otherwise a direct
request 404s at the HTTP level even though the SPA would render the right page once JS loads.
`scripts/prerender.mjs` fixes this: it runs automatically after `vite build` (wired up as the
`postbuild` npm script, see `package.json`), boots the built app in headless Chromium (Playwright),
visits every known route, and writes the fully-rendered HTML to a physical file
(`dist/physicians/index.html`, etc.) so GitHub Pages serves each route with a real 200.

Per-route `<title>`, `<meta name="description">`, `<link rel="canonical">`, and
`<meta name="robots">` are set client-side by `src/common/seo/usePageSeo.ts`, called once near the
top of every page component (`usePageSeo('routeKey', '/path')`; pass `{ noindex: true }` for pages
that shouldn't be indexed, e.g. the admin routes). The prerender script waits for that effect to run
before capturing the HTML, so the static files carry the correct per-page tags too — this also
matters for crawlers that don't execute JavaScript (most non-Google bots, including AI crawlers).
Copy for these tags lives in `src/common/seo/translations/seo.*.json`, one `title`/`description`
pair per route key.

**When adding a new public route**, do all of:
1. Add the route in `src/main.tsx`.
2. Call `usePageSeo('newRouteKey', '/new-path')` in the page component.
3. Add a `newRouteKey` entry to all three `src/common/seo/translations/seo.*.json` files.
4. Add the path to the `ROUTES` array in `scripts/prerender.mjs`.
5. Add a `<url>` entry to `public/sitemap.xml`.
6. Run `npm run build` and check `dist/<new-path>/index.html` was generated with the right title/meta.

`public/robots.txt` disallows `/admin`; `public/llms.txt` is a short site summary for AI crawlers
that don't render JS. Both are static files, edit them directly.

`dist/404.html` (generated by the `copy-404` Vite plugin in `vite.config.ts`) stays a plain,
un-prerendered app shell — it's what GitHub Pages serves (with a real 404 status) for any path that
isn't one of the routes above, and it lets the client-side router show `NotFoundPage`.

**Structured data (JSON-LD)**: `src/common/seo/useJsonLd.ts` injects/removes a
`<script type="application/ld+json">` tag keyed by an id, same "runs client-side, prerender captures
it" mechanism as `usePageSeo`. Sitewide `MedicalBusiness`/`LocalBusiness` data lives statically in
`index.html`. Page-specific schema: `FAQPage` on `/faqs` (built from the same `faqData` that renders
the visible Q&A), `Physician` (one per doctor, `@graph`) on `/physicians`, `MedicalWebPage`/`about`
on `/conditions` (from the same proven/probable condition lists rendered on the page), and
`ImageGallery` on `/gallery`. Add more `useJsonLd(...)` calls the same way if another page has
structured data worth marking up.

**Brochures are one route per topic**: `/brochures` (intro) and `/brochures/:topic` (`fertility`,
`fibromyalgia`, `lower-back-pain`, `stop-smoking`, `weight-loss`, `migraine`, `joint-pain`,
`insomnia`, `anxiety`, `menopause`) each render `BrochuresPage`, which reads the topic from
`useParams()` and calls `usePageSeo` with a topic-specific key (`SEO_KEY_BY_TOPIC` map in
`BrochuresPage.tsx`) and its own canonical path. The sidebar calls `navigate()` instead of just
swapping local state, so each topic is a real, independently-crawlable, independently-titled URL —
before this, only whichever tab was selected by default ever made it into the prerendered HTML, so
the other topics were invisible to search engines. `BrochuresPage.tsx` also renders a prev/next
pager below the article (real `<Link>`s, not just buttons, so they're crawlable too), computed from
the same ordered `items` array the sidebar uses — first/last topic only render the side that exists.
If you add another brochure topic: add it to `BrochureSectionId` (`src/common/brochures/types.ts`),
a new section component + `renderer.tsx` case, the `items`/`SEO_KEY_BY_TOPIC` maps in
`BrochuresPage.tsx` (position in `items` determines its place in the pager and sidebar), a
`seo.*.json` entry (all 3 languages), the `scripts/prerender.mjs` `ROUTES` array, and
`public/sitemap.xml`.

The condition-specific topics (migraine, joint pain, insomnia, anxiety, menopause) were chosen by
cross-referencing US prevalence data (CDC) against NIH/NCCIH/Cochrane-documented acupuncture
evidence, and each cites real, named sources in a `sourceNote` paragraph at the end of its section.
Keep citing real, checkable sources if you add more condition brochures, and state honestly where
evidence is mixed (e.g. menopause: acupuncture beats no-treatment but not clearly sham acupuncture;
anxiety: mechanism-based rather than disorder-specific evidence). The anxiety topic in particular is
written to frame acupuncture as complementary to (not a replacement for) medical/mental-health care.

The original 6 topics (intro, fertility, fibromyalgia, lower-back-pain, stop-smoking, weight-loss)
used to mix real content with fabricated-sounding citations — specific named "Chinese researchers"
and journals (e.g. "Qiu Wan-Xing, in Zhe Jiang Zhong Yi Za Zhi") with suspiciously precise cure
rates, and an unsourced "90-95% quit smoking" claim that directly contradicts real evidence (Cochrane
found no consistent long-term quitting effect from acupuncture). These have been rewritten to the
same real-source standard as the newer topics — lower-back-pain in particular was restructured
(ACP 2017 guideline + a 2025 Kaiser Permanente/NIH study replaced ~20 paragraphs of invented study
data). If you're ever unsure whether a specific-sounding citation in this codebase is real, treat
that as a signal to verify or replace it, not to copy the pattern.

The sidebar wrapper (`BrochuresPage.tsx`) is just `sticky` with no `max-height`/`overflow` — an
earlier version capped it at viewport height with an inner scrollbar, which clipped items once the
topic list grew past ~6 entries. Keep it height-unconstrained if you add more topics.

**Image weight**: `npm run optimize-images` (`scripts/optimize-images.mjs`, uses `sharp`) resizes
anything in `src/assets/` wider than 1600px and re-compresses JPEG/PNG in place, same filename/
extension so no imports need updating. Run it after adding new photos — most clinic photos come
straight off a phone/camera at multiple MB and several thousand px wide, which is pure wasted
payload (and hurts LCP) since the largest they're ever displayed is the ~1500px hero banner.

### Styling

Tailwind, with brand colors defined in `tailwind.config.js` (`brand-primary` etc. = `#395c3b`).
In practice most components use raw hex classes like `text-[#395c3b]` instead of the `brand-*`
utilities — both work, but prefer the named `brand-*`/`clinic-*` utilities in new code so the
palette stays greppable in one place.

## Content update guide

Routine, no-code-change content edits — this is most of what "updating the site" means day to day:

- **Doctor bios / credentials**: `src/common/doctorCard/doctors.ts`
- **Any page copy (nav, hours, FAQs, conditions list, contact info, footer, homepage banner
  text)**: the relevant `translations/<namespace>.<lang>.json` files under `src/common/*/translations/`
  or `src/pages/*/translations/`. Edit all three languages together.
- **Services shown on the homepage**: `serviceItems` array in `src/pages/HomePage.tsx` (image +
  key) plus `src/common/ServiceCard/translations/services.*.json` (title/description text).
- **Gallery images**: add files to `src/assets/`, wire into `GalleryPage.tsx`, then run
  `npm run optimize-images` before committing.
- **Brochure content**: `src/common/brochures/sections.tsx` / `additional-sections.tsx` (structure)
  + `src/common/brochures/translations/` (copy).
- **SEO/meta**: per-route title/description in `src/common/seo/translations/seo.*.json` (see SEO
  section below); sitewide JSON-LD business info (address, hours, phone) in `index.html`;
  `public/sitemap.xml` if routes change.

After content edits: `npm run build` to catch typos in i18n key references, then eyeball the page
in `npm run dev` in at least English and one other language (missing keys fail silently).

## Known tech debt (not yet fixed, worth knowing about before "optimizing" further)

- Appointment submissions are in-memory only on the backend (see above) — no persistence, no
  notification email. Silent data loss on every backend restart.
- File/folder naming is inconsistent: most page files are PascalCase (`HomePage.tsx`) but
  `src/pages/faqPage.tsx` is camelCase; most `src/common/*` folders are lowercase-first
  (`header`, `gallery`) while a few are PascalCase (`ServiceCard`, `LanguageSwitcher`). Not worth a
  drive-by rename; fix opportunistically if you're already touching those files.
- Root-level `CNAME` and `public/CNAME` are duplicates (same content). `public/CNAME` is the one
  that actually matters — it gets copied into `dist/` by Vite and is what GitHub Pages reads from
  the deployed branch. The root one appears unused by the current build/deploy path.
- Brand color Tailwind utilities (`brand-*`, `clinic-*`) are underused in favor of raw hex
  arbitrary-value classes (see Styling above).
- All three languages share the same URL per page (language is a client-side `localStorage`
  preference, not part of the route). `public/sitemap.xml`'s `hreflang` alternates all point to the
  identical URL for en/es/zh, which is a valid-but-minimal pattern — Google's preferred setup is a
  distinct URL per language (e.g. `/es/physicians`). Not addressed here; would mean adding
  language-prefixed routing, a bigger change than today's fix.
- Playwright (used only by `scripts/prerender.mjs`) is a devDependency that downloads a Chromium
  binary; CI installs it explicitly in `.github/workflows/deploy.yml`. If prerendering is ever
  dropped, remove that step and the `postbuild` script too.
- No JSON-LD yet on `/brochures` (each topic's page) or `/contact` — reasonable next candidates
  (`Article`/`MedicalWebPage` and `MedicalBusiness`/`ContactPage` respectively) if you want more of
  the site eligible for rich results.

## Recently cleaned up

- Removed `backup-static-version/` (the pre-React static HTML site) and a stray WHOIS PDF from the
  repo — both were dead weight with no code depending on them; still recoverable from git history
  if ever needed.
- Renamed `src/asserts/` → `src/assets/` (was a typo) and updated all imports.
- Fixed `src/i18n/README.md`, which documented files (`translationLoader.ts`, `devTools.ts`) and a
  `LanguageSwitcher` path that no longer exist.
- Added `src/common/seo/usePageSeo.ts` + a post-build prerender step (`scripts/prerender.mjs`) so
  every route gets a real HTTP 200 and unique title/description/canonical on GitHub Pages, instead
  of all routes serving the homepage's meta tags behind an HTTP 404. Added `public/robots.txt` and
  `public/llms.txt`, which previously didn't exist despite being mentioned in the README. See the
  "SEO / GitHub Pages prerendering" section above.
- Added `FAQPage`/`Physician`/`MedicalWebPage`/`ImageGallery` JSON-LD (`src/common/seo/useJsonLd.ts`)
  on `/faqs`, `/physicians`, `/conditions`, and `/gallery`; split `/brochures` into one real route
  per topic (`/brochures/fertility`, etc.) instead of a single URL with client-side tab-switched
  content, so all 5 topics are independently indexable; deleted unused `back.jpg`/`hand.jpg`; and
  added `npm run optimize-images` (`scripts/optimize-images.mjs`) which cut `src/assets/` from ~9.7MB
  to ~1.9MB by resizing/recompressing in place (ran once already; re-run after adding new photos).
- Added 5 new brochure topics (migraine, osteoarthritis/joint pain, insomnia, anxiety, menopause),
  chosen from CDC prevalence data cross-referenced with NIH/NCCIH/Cochrane acupuncture evidence —
  see "Brochures are one route per topic" above for the sourcing/citation convention used.
- Added a prev/next pager to `BrochuresPage.tsx` (real links, ordered by the `items` array) and
  fixed the sidebar wrapper, which had a `max-height` + inner scrollbar that started clipping the
  topic list once it grew past ~6 items — it's now just `sticky` with no height cap.
- Rewrote the original 6 brochure topics' research/evidence claims to the same real-source standard
  as the newer ones — removed fabricated-sounding named-researcher citations (mainly in
  lower-back-pain, which was restructured around two real sources) and an unsourced "90-95% quit
  smoking" claim in stop-smoking that contradicted actual Cochrane evidence; added real citations to
  fertility, fibromyalgia, and weight-loss where claims previously had none.
