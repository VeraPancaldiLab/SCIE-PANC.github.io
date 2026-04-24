# SCIE-PANC — Astro Website

Migrated from Jekyll (Minimal Mistakes) to **Astro 4**, with a full redesign.

## Stack

- **Framework**: [Astro 4](https://astro.build) — static-site generation, zero JS by default
- **Styling**: Plain CSS with CSS variables (no framework dependency)
- **Fonts**: Playfair Display (headings) + DM Sans (body) via Google Fonts
- **Deployment**: GitHub Pages (same as before)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Output → dist/
npm run preview    # Preview the build locally
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro        # Main layout (nav + footer)
├── pages/
│   ├── index.astro         # Home — hero, team
│   ├── project.astro       # Project description
│   ├── news.astro          # News (ready for content)
│   ├── publications.astro  # Publications (ready for content)
│   └── 404.astro           # 404 page
└── styles/
    └── global.css          # Design tokens + global styles
public/
└── images/
    ├── flags/              # Country flag images
    ├── network_banner.png  # Hero background
    └── trasncan_logo.png   # Logo / favicon
```

## Adding Content

### News items

Edit `src/pages/news.astro` and populate the `newsItems` array:

```ts
const newsItems = [
  {
    date: '2025-03-01',
    title: 'Kick-off meeting in Göttingen',
    excerpt: 'The consortium gathered for the first time...',
  },
];
```

### Publications

Edit `src/pages/publications.astro` and populate the `publications` array:

```ts
const publications = [
  {
    year: 2025,
    title: 'Spatial epigenomics reveals TME remodeling in PDAC',
    authors: 'Papantonis A, Javierre BM, Pancaldi V, et al.',
    journal: 'Nature Cancer',
    doi: 'https://doi.org/...',
  },
];
```

## GitHub Pages Deployment

The `astro.config.mjs` already sets `site` and `base` to match the original Jekyll config.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
        with:
          artifact_name: github-pages
          folder: dist
```

## Migration Notes (Jekyll → Astro)

| Jekyll concept       | Astro equivalent                        |
|----------------------|-----------------------------------------|
| `_layouts/*.html`    | `src/layouts/*.astro`                   |
| `_pages/*.md`        | `src/pages/*.astro`                     |
| `_data/*.yml`        | Data arrays inside `.astro` frontmatter |
| `_sass/custom.scss`  | `src/styles/global.css`                 |
| `_config.yml`        | `astro.config.mjs`                      |
| Liquid `{{ var }}`   | Astro `{var}`                           |
| Jekyll plugins       | Astro integrations                      |
