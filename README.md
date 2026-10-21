# TinyChef website

Public site for TinyChef, a social recipe app by SiCo Labs, planned for https://startup-recipes.com.
Next.js 15 (App Router), TypeScript and Tailwind CSS v4, generated statically.

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, strict mode |
| `npm test` | Unit tests (Vitest and Testing Library) |
| `npm run test:e2e` | Playwright smoke tests with axe accessibility checks. Builds and serves the site on port 3100. Run `npx playwright install chromium` once first. |
| `npm run format` | Prettier |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, unit tests, build and the Playwright tests.

## Where to edit things

| What | File |
| --- | --- |
| App name, domain, tagline, contact email, store links | `lib/site.ts` |
| Store badges turn into links | set `appStoreUrl` and `playStoreUrl` in `lib/site.ts` |
| Homepage sections | `components/sections/*.tsx`, assembled in `app/page.tsx` |
| FAQ questions (also feeds the FAQ structured data) | `content/faq.ts` |
| Dietary badge names and colours | `lib/diets.ts` |
| Privacy, terms, community guidelines, support, delete account | `content/legal/*.md` |
| Colours, theme tokens, fonts | `app/globals.css`, `app/layout.tsx` |
| Phone screenshots | add images to `public/screens/` and pass `src` to `DeviceFrame` |
| Favicon and share image | `app/icon.svg`, `app/opengraph-image.tsx` (both placeholders) |

Legal pages are Markdown with a small front matter block (`title`, `description`, `status`, `updated`).
Set `status: draft` to show the "waiting for legal review" notice, and remove it once the text is approved.
Anything in square brackets, such as `[TODO(legal): ...]` or `[CONFIRM: ...]`, still needs an answer.
Find them all with `grep -rnE "TODO\(legal\)|\[CONFIRM" content`.

## Design rules

Type sizes come from Tailwind's default scale, spacing from the 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96 pixel
steps, and motion uses `cubic-bezier(0.32,0.72,0,1)`. Scroll reveals use IntersectionObserver and respect
`prefers-reduced-motion`. There are no analytics or tracking scripts. Adding any would change the privacy policy.

## Deploy

Vercel is the assumed target. Import the repo, keep the default Next.js settings, and attach the domain.
