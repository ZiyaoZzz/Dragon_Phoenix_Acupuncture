# AGENTS.md

Guidance for new contributors working with an AI coding agent (e.g. Antigravity, Cursor, or any
other tool that reads this file) on this repo. Read this alongside `CLAUDE.md`, which has the full
architecture reference — this file is about *how* to make edits, not *what* the code does.

## Keep edits small and scoped

This is a live marketing site for a small business, not a greenfield project. The existing
structure (frontend/backend split, i18n convention, per-topic brochure routes, etc. — see
`CLAUDE.md`) is intentional and already documented. Default behavior for any edit:

- **Do the smallest change that satisfies the request.** If you're asked to update a doctor's bio
  or fix a typo in a translation file, touch only that file/section — don't "while I'm in here"
  reorganize neighboring code.
- **No large-scale refactors, renames, or restructuring** unless the task explicitly asks for one.
  This includes: renaming files/folders to "fix" the inconsistent casing mentioned in `CLAUDE.md`,
  introducing new abstractions/helpers for one-off code, moving components between folders,
  changing the i18n system, or rewriting working CSS/Tailwind classes to use `brand-*` utilities
  instead of raw hex (that's a "nice to have," not something to do as a drive-by).
- **Don't touch all three language files unless the change is content.** Structural/code changes
  belong in `.tsx`/`.ts` files; only content edits need the matching `en`/`es`/`zh`
  `translations/*.json` updated together.
- It's fine to make the change that's actually needed, including editing multiple files, adding a
  new component, or wiring up a new route per the "adding a new public route" checklist in
  `CLAUDE.md` — "don't refactor" does not mean "don't make real changes." It means: match the
  request, don't expand it.
- If a task seems to require touching many unrelated files or restructuring existing patterns to
  work, stop and flag that back to the user before proceeding — that's a sign the ask is bigger
  than it looked, and worth a second opinion before a lot of code moves around.

## Verify before calling it done

- Run `npm run build` (catches type errors and broken i18n key references) and `npm run lint`.
- For anything visual, actually look at it in `npm run dev` — in English and at least one other
  language, since a missing translation key fails silently rather than erroring.

## Branch and merge rules

- `main` and `react-version` (the actual production branch — see `CLAUDE.md`) both auto-deploy to
  the live site on push, via `.github/workflows/deploy.yml`. **Never push or merge directly into
  `react-version` or `main`.**
- Do your work on a feature/topic branch. Open a pull request and get it reviewed and merged by the
  repo owner — don't merge your own PR into `react-version` or `main`.
- Corollary: don't force-push, rebase, or rewrite history on `react-version` or `main`, and don't
  delete branches other than your own without asking first.
