# Nullhype Hub (nullhype.tech) — build context (resume here)

The root landing/hub at **nullhype.tech** — points to the Nullhype products (HypeCheck, AdoptCheck) and proof links. Split out of the hypecheck app so it can grow independently as more builds ship.

## Where it lives
- **Folder:** `~/nullhype-hub`
- **Repo:** `nullhypeai/nullhype-hub` (`origin`) + `saikiranandula/nullhype-hub` (`fork`)
- **Vercel project:** `nullhype-hub` (team `saikiranandulas-projects`) → **https://nullhype.tech** + **www.nullhype.tech**
- Git auto-deploy from `nullhypeai/nullhype-hub` `main` is connected. Manual: `vercel --prod --yes --scope saikiranandulas-projects`.

## Stack
Next.js 16 (App Router), **Tailwind v4**, `@vercel/analytics`. Static — no backend, no env vars.

## Architecture (tiny on purpose)
- `src/app/page.tsx` — the whole hub: `productLinks` (HypeCheck, AdoptCheck cards), `proofLinks` (Product Hunt, GitHub, X), structured data. **To add a new build: add an entry to `productLinks`.**
- `src/app/layout.tsx` — metadata (nullhype.tech), Geist fonts, Analytics.
- `src/app/globals.css` — Tailwind v4 import + dark theme tokens.

## Local dev / deploy
```bash
npm install
npm run dev
npm run build
```

## Current state
Live. Hub renders product cards + proof. Domains `nullhype.tech` / `www` were moved here off the hypecheck Vercel project (DNS unchanged — they're verified at the team level).

## Next ideas
- Add cards as new builds ship (it's designed for this).
- Optional: a `/changelog` or `/now` page, a simple blog, or an email capture.
- Analytics already wired (`@vercel/analytics`); add custom events if you want click-through tracking to each product.

## Gotchas
Vercel CLI on this machine is old/flaky for domain ops → use the Vercel REST API or dashboard.
