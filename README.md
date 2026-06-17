# Nullhype Hub

The root hub at [nullhype.tech](https://nullhype.tech) — a lightweight landing page that points to the Nullhype products (HypeCheck, AdoptCheck) and proof links.

Previously this lived inside the `hypecheck` app via host-based routing. It has been split into its own standalone Next.js app so the hub can grow independently as more builds are listed.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Geist font

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Deployed on Vercel and served at `nullhype.tech` / `www.nullhype.tech`.
