# Moderneer — Outcome Engineering (React + Vite + MDX)

Production-ready, modular site. Swap the design system, edit content, and extend pages without lock-in.

## Stack

* **React + TypeScript + Vite** — fast dev server and build.
* **React Router** — file-based routes defined in `src/routes`.
* **Tailwind CSS** — consumes tokens from `@mod/config` via a preset.
* **MDX** — content for insights and about pages.
* **ESLint + Prettier + Husky** — code quality and formatting.
* **Vitest** — test runner.
* **SEO** — meta tags, OpenGraph, sitemap, robots.
* **Analytics** — simple hook; swap for your provider.

## Monorepo structure

* `apps/site` — the Vite application.
* `packages/ui` — component library built around design tokens.
* `packages/config` — tokens, site metadata, copy, and Tailwind preset.
* `content` — MDX posts and pages.
* `scripts` — build helpers (sitemap, content lint).

## Quick start

```bash
npm ci
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Build & preview

```bash
npm run build
npm run preview
```

`npm run build` writes the compiled site to `apps/site/dist` and generates a `sitemap.xml`.

## Theming

Design tokens live in `packages/config/tokens.ts`. Tailwind utilities are derived from `packages/config/tailwind-preset.cjs`. CSS variables are defined in `packages/ui/styles.css`. To change colours, radius, or shadows, update the tokens and rebuild.

## Content

Page copy and CTA labels live in `packages/config/content.ts`. Long-form posts and pages are MDX files under `content/insights` and `content/pages`. New MDX files automatically appear in the Insights list via `import.meta.glob`. Ensure each file includes `title`, `date`, `excerpt`, and `slug` in the frontmatter.

## Deploy

For Vercel or Netlify, set the root directory to `apps/site`, build command to `npm run build`, and publish directory to `apps/site/dist`. GitHub Pages can be set up by publishing the `dist` folder.

## Continuous Integration

The GitHub Actions workflow in `.github/workflows/ci.yml` runs type checking, linting, tests, and the build on every push and pull request to `main`.

## License

MIT
