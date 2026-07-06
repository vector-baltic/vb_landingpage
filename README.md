# vb_landingpage

Landing page for [Vector Baltic](https://vectorb.one) — AI-driven solutions for blue security.

Built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Editing content

- **All copy** (headlines, solutions, team, contact) lives in [src/data/content.ts](src/data/content.ts).
- **Product screenshots**: overwrite `src/assets/screenshots/osint-agent.png` and `src/assets/screenshots/cyber-agent.png` (keep the same filenames).
- **Demo video**: replace `public/vectorb-demo.mp4`.
- **Team photos**: `src/assets/team/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site
and deploys it to GitHub Pages.

> In the repo settings, **Pages → Source** must be set to **GitHub Actions**.
