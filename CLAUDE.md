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

Single-page React 18 + TypeScript app with scroll-based navigation (no client router). Sections are stacked vertically in `App.tsx` and linked via `react-scroll`.

**Key layers:**
- **Vite 5.4** — bundler, dev server, base URL for GitHub Pages
- **Tailwind CSS 3.4** — custom wellness-themed palette (plum, mauve, gold, stone, cream) with custom fonts (Playfair Display, Inter, Cormorant Garamond) defined in `tailwind.config.js`
- **Framer Motion 11** — scroll-triggered animations, carousels (AnimatePresence)
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

Page sections render in order in `App.tsx`:
`SplashScreen → Navbar → Hero → About → Services → Testimonials → Influences → Gallery → Availability → Contact → Footer → WhatsAppButton`

- Sections: `src/components/sections/` — one file per section
- Shared UI: `src/components/ui/` — SectionTitle, WaveDivider, SplashScreen
- Custom Tailwind components in `src/index.css`: `.btn-primary`, `.ritual-glow`, `.ritual-petal-bg`

## Styling Conventions

- Dark wellness aesthetic: plum-900 backgrounds, cream/gold/mauve accents
- Custom color scales and animations defined in `tailwind.config.js`
- Three font families: `font-serif` (headings), `font-sans` (body), `font-ritual` (decorative italic)

## Git Conventions

- Keep commit messages short (one line, no body)
- Do not add Co-Authored-By lines
