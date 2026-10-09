# Anusha Palia — Portfolio

Modern personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark-only UI with glassmorphism, scroll animations, and a single content file for easy edits (theme is locked to dark for consistent contrast).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All copy, links, and structured data live in:

**`src/data/portfolio.ts`**

Update name, experience, projects, certifications, social URLs, and the contact form endpoint there—no need to hunt through components.

### Images & assets

| Asset | Location |
|--------|----------|
| Resume PDF | `public/resume.pdf` (linked from hero) |
| OG image (1200×630) | `public/og-image.png` |
| Project screenshots | Add under `public/projects/` and wire URLs in `portfolio.ts` / `ProjectCard` |
| Favicon | Generated via `src/app/icon.tsx` (optional: add `public/favicon.ico`) |

### Project thumbnails

In `ProjectCard`, replace the gradient block with `<Image />` when you have screenshots, e.g. `src="/projects/music-streaming.png"`.

### Contact form

1. Create a form at [Formspree](https://formspree.io) (or use EmailJS / a Resend API route).
2. Set `contact.formspreeEndpoint` in `portfolio.ts` to your endpoint (replace `YOUR_FORM_ID`).

### Site URL (SEO)

Set `siteConfig.url` in `portfolio.ts` to your production domain before deploy (used in sitemap, Open Graph, and robots).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy.

Add environment variables only if you move the contact form to a server route (e.g. `RESEND_API_KEY`).

## Project structure

```
src/
  app/              # Routes, layout, metadata, sitemap
  components/       # UI, layout, sections
  data/portfolio.ts # All editable content
  hooks/
  lib/
public/             # Static assets (resume, images)
```

## Accessibility & motion

- Semantic landmarks and focus styles on interactive elements.
- `prefers-reduced-motion` disables heavy animations (preloader, cursor glow, typing effect, marquee, parallax).

## Placeholders to fill

See the end of your setup notes or search `TODO` in `portfolio.ts` for:

- Project GitHub / live links
- Certificate `[CERT_LINK]` values
- `public/resume.pdf`
- Formspree (or other) API endpoint
- Production `siteConfig.url` and `og-image.png`
