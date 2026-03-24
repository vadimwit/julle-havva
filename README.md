# Julle Havva — Massage Therapy Website

A modern, bilingual (Portuguese/English) single-page website for Julle Havva, Massoterapeuta Certificada.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Icons** (icons)
- **React Scroll** (smooth navigation)

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Customizing Content

All website text, services, pricing, and contact details live in one file:

```
src/data/content.ts
```

Edit that file to update any text on the site. No other files need to change for content updates.

## Adding Images & Videos

See **CONTENT_GUIDE.md** for a complete list of all media assets, exact filenames, and recommended dimensions.

## Project Structure

```
julle-havva/
├── public/
│   ├── images/
│   │   ├── hero/          ← Hero background image
│   │   ├── about/         ← Therapist portrait
│   │   ├── services/      ← Service card images
│   │   └── gallery/       ← Gallery photos (already has 4 photos)
│   └── videos/
│       └── hero/          ← Hero background video (already has video)
├── src/
│   ├── components/
│   │   ├── layout/        ← Navbar, Footer
│   │   ├── sections/      ← Hero, About, Services, Gallery, Testimonials, Pricing, Contact
│   │   └── ui/            ← Reusable UI components
│   ├── data/
│   │   └── content.ts     ← ALL editable content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
└── tailwind.config.js
```
