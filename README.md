# Shrey Modi — Portfolio

A React + Vite portfolio with a 5-lane role switcher (Business Analyst, Data Analyst, Data Engineer, Data Scientist, AI/ML). Deployed free on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build & preview production bundle

```bash
npm run build
npm run preview
```

## Editing content

- `src/data/profile.js` — shared content: contact info, experience, projects, education, certifications, awards, full skills list.
- `src/data/lanes.js` — per-lane content: headline, tagline, summary, hero metrics, top skills, CV file path.
- `public/cv/` — the downloadable CV PDFs, one per lane.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages via the official `actions/deploy-pages` flow. In the repo settings, set **Settings → Pages → Source** to "GitHub Actions". The site serves at `https://<username>.github.io`.
