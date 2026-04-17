# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — Vite dev server on localhost:5173
- `npm run build` — TypeScript check + Vite production build
- `npm run preview` — Preview production build locally
- Node 20 required

## Deployment

- GitHub Pages auto-deploys on push to `main` via `.github/workflows/deploy.yml`
- Base URL: `/julle-havva/` (configured in `vite.config.ts`)
- Build output: `dist/`

## Architecture

React 18 + TypeScript SPA with HashRouter (react-router-dom v6). Routes: `/`, `/about`, `/influences`, `/gallery`, plus a `*` catch-all 404 page.

**Key layers:**
- **Vite 5.4** — bundler, dev server, base URL for GitHub Pages
- **Tailwind CSS 3.4** — custom wellness-themed palette (plum, mauve, gold, stone, cream) with custom fonts (Playfair Display, Inter, Cormorant Garamond) defined in `tailwind.config.js`
- **Framer Motion 11** — scroll-triggered animations, carousels (AnimatePresence)
- **react-helmet-async** — per-page `<title>`, `<meta>`, and `<html lang>` updates
- **Bilingual i18n** — English/Portuguese via React Context (`LanguageContext`)

## Content & Data Flow

All editable content lives in two files:
- `src/data/content.ts` — structured data: site config, about bio, services, pricing tiers, testimonials, gallery items
- `src/i18n/translations.ts` — UI strings for both `en` and `pt`, keyed by section

Components consume language via `useLanguage()` hook → `translations[lang].section.key`.

**When adding/editing content:** update both `en` and `pt` blocks in both files to keep languages in sync.

## Asset Handling

All public assets (images, videos) go in `public/` and must be referenced via the `asset()` utility from `src/utils/asset.ts`:
```ts
asset('/images/gallery/photo.jpg')  // resolves to /julle-havva/images/gallery/photo.jpg
```
This is required for GitHub Pages subdirectory deployment. Never hardcode paths without `asset()`.

## Component Structure

Pages in `src/pages/`: `HomePage`, `AboutPage`, `InfluencesPage`, `GalleryPage`, `NotFoundPage`

Each page includes a `<SEOHead>` component (`src/components/SEOHead.tsx`) with bilingual title/description.

- Sections: `src/components/sections/` — one file per section
- Shared UI: `src/components/ui/` — SectionTitle, WaveDivider, SplashScreen
- Custom Tailwind components in `src/index.css`: `.btn-primary`, `.ritual-glow`, `.ritual-petal-bg`

## SEO

- JSON-LD structured data (LocalBusiness, Reviews, WebSite, Person) in `index.html`
- `robots.txt` and `sitemap.xml` in `public/`
- hreflang tags (en, pt, x-default) in `index.html`
- Per-page meta tags via `react-helmet-async` + `SEOHead` component
- Canonical URL: `https://jullehavva.com/`

## Styling Conventions

- Dark wellness aesthetic: plum-900 backgrounds, cream/gold/mauve accents
- Custom color scales and animations defined in `tailwind.config.js`
- Three font families: `font-serif` (headings), `font-sans` (body), `font-ritual` (decorative italic)

## Git Conventions

- Keep commit messages short (one line, no body)
- Do not add Co-Authored-By lines
