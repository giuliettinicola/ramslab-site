# RAMSLAB Site Handoff

## Purpose
This file records the work completed so far on the RAMSLAB Astro site, the main technical and design decisions already taken, and the practical instructions for continuing the project later without rebuilding context from scratch.

## Project Goal
Rebuild the RAMSLAB website so it feels structurally and visually close to the reference in `public/reference/`, while using:
- Astro
- content collections
- reusable components
- static-first architecture
- structured placeholder content for now

Hard constraints currently being followed:
- no warm palette
- no beige, ochre, brown, terracotta, cream
- no gradients
- no playful UI
- no startup/SaaS hero
- no long one-page landing page
- black / white / neutral gray only
- editorial, institutional, research-oriented tone

## Reference and Source Material
- Local visual reference screenshots: `public/reference/`
- Official RAMSLAB / UNIPV brand assets were fetched from `https://rams.unipv.it/`

Downloaded brand assets currently stored in:
- `public/images/brand/unipv-main-logo-white.png`
- `public/images/brand/ramslab-logo-white.svg`
- `public/images/brand/ramslab-icon-black.png`

## Work Completed So Far

### 1. Site Architecture
The required routes are in place:
- `/`
- `/projects`
- `/projects/[slug]`
- `/people`
- `/people/[slug]`
- `/publications`
- `/news`
- `/news/[slug]`
- `/consortium`
- `/about`

Collections in use:
- `people`
- `projects`
- `publications`
- `news`
- `consortium`
- `settings`

Key files:
- `src/content/config.ts`
- `src/content/settings/site.json`

### 2. Editorial UI Refactor
The original generic card layout was replaced with a stricter editorial system:
- compact institutional header
- denser typography hierarchy
- page headers closer to archive/editorial patterns
- archive rows instead of generic cards
- detail pages with metadata sidebar
- grayscale-only design tokens

Primary UI files:
- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/PageHeader.astro`
- `src/components/ArchiveItem.astro`
- `src/components/MediaTile.astro`

### 3. Placeholder Content Expansion
Additional placeholder content was added so the site can be evaluated as an archive rather than as an empty shell.

Current placeholder depth:
- multiple people entries
- multiple project entries
- grouped publications
- multiple news items
- multiple consortium entries

This was done intentionally so layout rhythm and archive density can be judged before real RAMSLAB content migration.

### 4. Homepage Project Strip
The homepage project section is no longer a simple grid.
It is now a horizontal scrolling strip meant to simulate a larger archive and allow quick visual evaluation of many project entries.

Relevant files:
- `src/pages/index.astro`
- `src/styles/global.css`
- `src/content/projects/`

### 5. GitHub Pages Deployment
The project was configured for GitHub Pages deployment under:

`https://giuliettinicola.github.io/ramslab-site/`

Relevant files:
- `astro.config.mjs`
- `.github/workflows/deploy.yml`

Current Astro config uses:
- `site: 'https://giuliettinicola.github.io'`
- `base: '/ramslab-site'`
- `trailingSlash: 'always'`

### 6. GitHub Pages Fixes Already Done
Important GitHub Pages-specific fixes already applied:

- asset paths now use the Astro base path helper so logos and images resolve under `/ramslab-site/`
- internal links in header and key homepage/archive areas were updated to stay inside the repository subpath instead of jumping to the domain root
- content slugs were normalized so routes no longer contain `.md`

Helper files involved:
- `src/lib/assets.ts`
- `src/lib/entries.ts`
- `src/lib/format.ts`

### 7. Current Site Subtitle
The current structured site subtitle is:

`Research on Advanced Mechanical Systems`

Stored in:
- `src/content/settings/site.json`

## Commit History So Far
Recent commits:
- `64f2ee5` Add more placeholder projects and horizontal project strip
- `2dcc17e` Fix RAMSLAB subtitle
- `7d63446` Fix GitHub Pages asset paths
- `6dfde56` Initial Astro site

## How To Run Locally

Install and run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Preview static build:

```bash
npm run preview
```

## Standard Session Startup
For future Codex sessions on this project, the preferred startup routine is:

1. Open the project root
2. Read `AGENTS.md`
3. Read `DESIGN_SPEC.md`
4. Read `SITE_HANDOFF.md`
5. Start the Astro dev server:

```bash
npm run dev
```

6. Open:

`http://localhost:4321/`

7. Make the requested edits
8. Check the affected pages visually in the browser
9. Run a production build before closing the task:

```bash
npm run build
```

This is the default working mode for future frontend/site-editing sessions.
If the task is a visual or editorial change, the dev server should normally be started early in the session.

## How To Publish Updates

Standard flow:

```bash
git add .
git commit -m "Describe change"
git push
```

Then:
- open GitHub Actions for `ramslab-site`
- wait for `Deploy to GitHub Pages`
- hard refresh the browser or use an incognito window if the old version appears

## Important Gotchas Already Encountered

### GitHub Pages base path
Absolute links like `/about` or `/projects` break under repository Pages hosting.
For anything internal, prefer the Astro base-aware helper:
- `withBase('/about/')`
- `withBase('/projects/.../')`
- `withBase('/images/...')`

### Browser cache
GitHub Pages updates can appear stale because of browser cache.
If content looks old:
- use `Ctrl+Shift+R`
- or open the site in an incognito window

### Placeholder content only
The project currently uses placeholder content by design.
Do not migrate final RAMSLAB content until structure, pacing, and reference alignment are approved.

## Recommended Next Steps
Logical next tasks:
- tighten typography and spacing further against the reference screenshots
- improve archive density on `/projects`, `/people`, `/publications`, `/news`
- replace remaining placeholder text blocks only after layout is locked
- decide whether to keep the homepage horizontal strip exactly as-is or tune the card width and scroll feel
- review live GitHub Pages output after each visual change, not only local dev output

## Skills To Use In Future Codex Sessions

### Recommended skill
Use:
- `ui-ux-pro-max`

Reason:
- most remaining work is UI refinement
- editorial layout tuning
- typography and hierarchy control
- navigation and page rhythm alignment with the reference

### Other available skills
These are not needed for normal RAMSLAB continuation unless the task changes:
- `openai-docs` only if future work is about OpenAI APIs or OpenAI product docs
- `skill-creator` only if creating a new Codex skill
- `skill-installer` only if installing extra skills

## MCP / Server Guidance
No special MCP server is required to continue normal site work.
For this project, standard shell access plus the local codebase is enough.

Notes:
- the OpenFOAM MCP server visible in the environment is unrelated to this website work
- do not start or use the OpenFOAM tools for RAMSLAB site editing
- use web access only when checking live deployment behavior or fetching official brand assets / current remote state

## If Work Resumes Later
Suggested restart checklist:

1. Read `AGENTS.md`
2. Read `DESIGN_SPEC.md`
3. Read this file
4. Start `npm run dev`
5. Check local site at `http://localhost:4321/`
6. Check latest live site at `https://giuliettinicola.github.io/ramslab-site/`
7. Compare against `public/reference/`
8. Continue with `ui-ux-pro-max` skill if the task is visual/editorial

## Short Status Summary
Current state:
- site structure exists
- design is substantially more editorial than the starter
- GitHub Pages deployment is configured
- brand assets are in the repo
- placeholder content is sufficiently populated for layout evaluation
- homepage projects can now be tested as a horizontal scroll strip

The project is not content-final.
It is currently in editorial shell and archive-behavior refinement mode.
