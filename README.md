# Personal site

Portfolio, research notes, blog with comments, and poems for a medical student who also builds with data, Go, JavaScript, and growth systems.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Locally you still get the full site so you can edit. Preview the public gate at [http://localhost:3000/coming-soon](http://localhost:3000/coming-soon).

On Vercel, every URL shows that page until you set `comingSoon: false` in `src/lib/site.ts`.

## Ship to Vercel

1. Put the project on GitHub (once):

```bash
git init
git add .
git commit -m "Initial personal site with coming soon page"
gh repo create personal-site --private --source=. --remote=origin --push
```

Or create an empty GitHub repo in the browser and `git remote add origin <url>` then `git push -u origin main`.

2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, import `personal-site`.
3. Leave the defaults (Framework: Next.js). Vercel will pick up `pnpm-lock.yaml`.
4. Click **Deploy**. You get a URL like `personal-site.vercel.app`.
5. Later: Project → Settings → Domains to add `yourdomain.com`.

Each push to `main` redeploys. When the real site is ready, set `comingSoon: false` in `src/lib/site.ts` and push.

If you prefer the CLI instead of the GitHub import:

```bash
pnpm i -g vercel
vercel login
vercel
vercel --prod
```

## What to edit first

1. `src/lib/site.ts` — your name, email, social links.
2. `src/app/about/page.tsx` — the actual bio.
3. `content/work`, `content/blog`, `content/poems` — one Markdown/MDX file per piece.
4. Copy `.env.example` to `.env.local` and fill Giscus values so blog comments work.

## Add a post or poem

Create `content/blog/your-slug.mdx` (or `content/poems/`, `content/work/`):

```md
---
title: "Title"
date: "2026-10-12"
summary: "One sentence."
tags: ["example"]
---

Body in Markdown.
```

## Comments

[Giscus](https://giscus.app) uses GitHub Discussions. Enable Discussions on a public repo, generate the IDs on giscus.app, then set the env vars.

## Stack

Next.js (App Router), TypeScript, Tailwind, MDX via `next-mdx-remote`.
