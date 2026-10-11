# TinyChefApp Landing Page

Marketing site for TinyChefApp (https://tinychefapp.com). Next.js (App Router) + TypeScript, hosted on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # type check
npm run build   # production build
```

## Where to edit things

| What | File |
| --- | --- |
| App name, tagline, store URLs, contact email | `lib/site.ts` |
| Home page | `app/page.tsx` |
| Privacy policy | `app/privacy/page.tsx` |
| Terms of service | `app/terms/page.tsx` |
| Colors / styles | `app/globals.css` |

Store buttons render as disabled "Coming soon" until `appStoreUrl` / `playStoreUrl` are set in `lib/site.ts`.

## Deploy

Push to `main` on GitHub; Vercel builds and deploys automatically.
