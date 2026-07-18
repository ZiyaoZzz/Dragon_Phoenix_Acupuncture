Dragon Phoenix Acupuncture

Website for a Traditional Chinese Medicine clinic in Kissimmee, Florida.

🌿 Overview

- Responsive, mobile-first design
- Multilingual support (English / Chinese / Spanish)
- Admin-protected gallery management
- SEO and AI crawler optimized

🧩 Tech Stack

Frontend

- React + TypeScript
- Tailwind CSS
- i18next
- Vite

Backend

- Node.js + Express
- JWT-based authentication
- CORS-controlled API

🏗 Architecture

Frontend (SPA) and backend are deployed separately:

- `dragonphoenixacupuncture.com` → Static frontend
- `api.dragonphoenixacupuncture.com` → Node backend (Render)

🔎 SEO & Search

- `sitemap.xml`
- `robots.txt` (AI crawler policies included)
- `llms.txt` for model attribution guidelines
- Integrated with Google Search Console

🎨 UI/Design Tooling

Design review during development is assisted by two Claude Code skills:

- [Impeccable](https://github.com/pbakaus/impeccable) — design audit/critique commands and
  anti-pattern detection (`npx impeccable install`)
- [taste-skill](https://github.com/leonxlnx/taste-skill) — design-taste guidance for AI-generated
  UI, including a redesign-existing-projects skill (`npx skills add https://github.com/Leonxlnx/taste-skill`)

These install as local agent-tooling files (`.agents/`, `.claude/skills/`, `.github/skills/`,
`.github/hooks/`, `skills-lock.json`) that are gitignored and not part of the shipped site — they
only affect how AI coding assistants review/generate UI code in this repo, not the built output.
