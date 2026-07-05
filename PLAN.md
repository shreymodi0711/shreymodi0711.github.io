# Portfolio Website — Shrey Modi

## Context

Shrey has 5 role-specific CVs (Business Analyst, Data Analyst, Data Engineer, Data Scientist, Commercial/FP&A) but no web presence. He's job-searching (Toronto-based, open to relocation anywhere) and wants a modern, impressive portfolio to showcase himself, hosted **free on GitHub Pages**.

The distinctive requirement: the site presents Shrey through **5 selectable "lanes"** — **BA, DA, DE, DS, AI/ML** — a role-switcher that lets a visitor (or recruiter) pick the framing most relevant to them. Under the hood all lanes share the same experience, projects, education, and certifications (they're the same person); only the **headline, tagline, professional summary, highlighted metrics, and skill emphasis** change per lane. Commercial/FP&A content folds into the BA lane; the AI/ML lane is built from the Data Scientist CV's ML/MLOps/NLP content.

**Outcome:** A polished dark-themed React SPA, deployed at `shreymodi786.github.io`, that a recruiter can scan in 30 seconds and instantly see Shrey framed for the exact role they're hiring.

## Decisions (confirmed with user)

- **Stack:** React + Vite (JavaScript, not TS — keep it approachable to maintain).
- **Lanes:** BA, DA, DE, DS, AI/ML (role-switcher).
- **Sections:** Hero, About, Metrics highlights, Skills, Experience timeline, Projects, Certifications & Education, Downloadable CVs, Contact.
- **Style:** Dark, modern, gradient accents, subtle motion.
- **Hosting:** `shreymodi786.github.io` repo → served at root. Vite `base: '/'`. Deploy via GitHub Actions.
- **Contact shown publicly:** Email (shreymodi0711@gmail.com), LinkedIn (linkedin.com/in/shreymodi786), GitHub profile, Phone (+1 905 783 9118), Location "Toronto, Canada — open to relocation anywhere".

## Architecture

Single-page app; lane state held in top-level React state and drives content across sections. All content lives in **one data module** so it's trivial to edit later without touching components.

```
shreymodi786.github.io/
├─ .github/workflows/deploy.yml     # Actions: build + deploy to Pages
├─ index.html                       # meta tags, title, favicon
├─ vite.config.js                   # base: '/'
├─ package.json
├─ public/
│  └─ cv/                           # the 5 PDFs, copied from "CV Reference"
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx                       # holds activeLane state, renders sections
│  ├─ data/
│  │  ├─ profile.js                 # shared: name, contact, experience, projects, education, certs
│  │  └─ lanes.js                   # per-lane: label, headline, tagline, summary, topSkills, heroMetrics, cvFile
│  ├─ components/
│  │  ├─ LaneSwitcher.jsx           # the 5-way toggle (pill/segmented control)
│  │  ├─ Hero.jsx                   # name + lane headline + tagline + CTA + lane-specific metrics
│  │  ├─ About.jsx
│  │  ├─ Metrics.jsx                # animated impact-stat strip (count-up on scroll)
│  │  ├─ Skills.jsx                 # grouped skill chips; lane's top skills emphasized/reordered
│  │  ├─ Experience.jsx             # vertical timeline (Brock, Red Wireless, Vosyn)
│  │  ├─ Projects.jsx               # project cards (Mental Health Analytics, JupyterHub)
│  │  ├─ Education.jsx              # education + certifications + awards
│  │  ├─ ContactCV.jsx              # contact links + per-lane "Download CV" + all-CVs
│  │  ├─ Navbar.jsx                 # sticky nav, smooth-scroll anchors
│  │  └─ Footer.jsx
│  ├─ hooks/useCountUp.js           # count-up animation + IntersectionObserver reveal
│  └─ styles/global.css             # CSS variables for theme
```

**Lane switching behavior:** Changing the lane re-renders Hero (headline/tagline/summary/metrics), reorders/re-emphasizes Skills, and swaps the primary "Download CV" button target. Experience, Projects, Education stay constant. Persist selected lane in `localStorage` and reflect it in the URL hash (e.g. `#lane=de`) so a link can deep-link to a framing.

## Per-lane content (from the CVs)

All five share: **experience** (Brock Canada BA, Red Wireless DA contract, Vosyn MLOps intern), **projects** (Mental Health Apprehension Analytics; JupyterHub Sandbox), **education** (2× PG Cert 4.0 GPA Georgian College; BEng KSV 3.7), **certs** (DP-900, Azure ML, AWS ML for NLP, AWS Cloud Architecting, Advanced Power BI DAX, Stanford Supervised ML), **awards** (MVP @ Brock, Dean's List ×2), **languages** (English C2, Hindi C1, Gujarati C1).

Per-lane deltas (drawn from each CV's headline + summary):

| Lane | Headline | Emphasis / top skills | Hero metrics |
|---|---|---|---|
| **BA** | Business Analyst — Requirements & Process Mapping · Power BI & SQL | Requirements (JAD, BRD/FRD, RTM, BPMN/UML), stakeholder mgmt, Power BI, SAP B1 | 20+ leaders served · 30% reporting accuracy · 15% faster turnaround |
| **DA** | Data Analyst — Power BI (Advanced DAX) & SQL · Python & BI Automation | Power BI/DAX/RLS, SQL, Python (Pandas/NumPy), dashboards, data storytelling | 50% less manual reporting · 30% accuracy · 25% data quality |
| **DE** | Data Engineer — SQL, Python & ETL · AWS, Azure, Databricks & CI/CD | ETL/ELT, AWS (Lambda/EC2/S3/ECS), Docker, GitHub Actions, Databricks, REST APIs | 40% faster builds · 50% higher throughput · 25% lower latency |
| **DS** | Data Scientist — Python, R & Predictive Modeling · ML & MLOps | Regression/classification, Scikit-learn, model eval, Streamlit, R, forecasting | 4.0 GPA · 60% less preprocessing · Stanford ML certified |
| **AI/ML** | AI / ML Engineer — MLOps, NLP & Model Deployment | MLOps (CI/CD, Docker), TensorFlow/PyTorch, NLP, AWS ML, Streamlit deployment | 40% faster CI/CD · 99.9% uptime target · AWS ML for NLP |

## Visual design

- **Theme:** near-black background (`#0d0d0d`), elevated card surfaces, one accent gradient (indigo→violet: `#3987e5` → `#9085e9`) used sparingly on the lane switcher active state, section accents, buttons, and metric numbers.
- **Type:** system sans stack; large confident hero heading.
- **Motion:** fade/slide-in on scroll (IntersectionObserver, respect `prefers-reduced-motion`), count-up metrics.
- **Responsive:** mobile-first; lane switcher collapses to a horizontally scrollable pill row on small screens; body never scrolls horizontally.
- **A11y:** semantic landmarks, keyboard-navigable lane switcher (radio-group semantics), sufficient contrast.

## Deployment (GitHub Pages, free)

1. Create repo **`shreymodi786.github.io`** on GitHub (public).
2. `vite.config.js` → `base: '/'`.
3. `.github/workflows/deploy.yml`: on push to `main` → `npm ci && npm run build` → upload `dist/` as Pages artifact → `actions/deploy-pages`.
4. In repo Settings → Pages → Source = "GitHub Actions".
5. Site live at `https://shreymodi786.github.io`.

## Default lane

First visit shows a short **generalist hero** — presents Shrey as a versatile data professional and invites the visitor to pick a lane — with the **Data Scientist** pill pre-highlighted as the default. Visitors can switch at any time; the choice persists via localStorage and the URL hash.

## Verification

1. **Local:** `npm install` then `npm run dev`. Verify all 5 lanes switch correctly, lane persists on reload, every section renders real CV content, CV downloads work, mobile viewport has no horizontal scroll, `prefers-reduced-motion` disables animations.
2. **Build:** `npm run build && npm run preview` — confirm production build works with `base: '/'`.
3. **Deploy:** push to `main`, watch the Actions run go green, load `https://shreymodi786.github.io` and re-check the lane switcher + CV downloads live.
