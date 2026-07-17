# Agentek Labz

Pixel-perfect agency portfolio for Agentek Labz — autonomous AI agent engineering lab.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and the App Router.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

The static export is output to `dist/`. Deploy the contents of that folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Project structure

```
app/
  components/       # Background, ShinyCta
  sections/         # Navbar, Hero, Stats, Services, Work, Process, Testimonial, Pricing, CTA, Footer
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Landing page composer
  globals.css       # Tailwind v4 theme, animations, custom styles
```

## Notes

- Fonts are loaded via `next/font/google` for optimal performance.
- Only the `Navbar` and `CTA` sections require client-side interactivity.
- The site is fully static and requires no runtime API.
