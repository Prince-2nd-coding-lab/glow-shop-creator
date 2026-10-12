# Isaro Glow Shop

A storefront built with [Lovable](https://lovable.dev).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Stack

- TanStack Start (SSR + server functions)
- React 19, TypeScript, Tailwind CSS v4
- Built with Vite + Nitro (deploy target auto-detected)

## Run locally

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

The repo ships with everything Vercel needs (`vercel.json`, `.nvmrc`, and a
build that detects Vercel automatically):

1. Push this repository to GitHub (or use the GitHub sync from Lovable).
2. In Vercel, click **Add New → Project** and import the repository.
3. Click **Deploy** — no manual settings needed.

What's preconfigured:

- **Build command:** `npm run build` (set in `vercel.json`)
- **Install command:** `bun install` (set in `vercel.json`; Vercel also detects `bun.lock` on its own)
- **Node.js version:** 22 (pinned via `.nvmrc` and `"engines"` in `package.json`)
- **Server target:** `vite.config.ts` switches the Nitro preset to `vercel` when building on Vercel, emitting the Vercel Build Output API (`.vercel/output/`) with a Node 22 server function and cached static assets
- Elsewhere (Lovable hosting, local), the default Cloudflare target applies — no change needed

To override the preset manually, set `SERVER_PRESET` in Vercel's environment variables.

## Environment variables

The app currently needs none. If you later add Lovable Cloud or other secrets, set them in Vercel under **Project Settings → Environment Variables**.

## Test before switching traffic

- Open a server-rendered page (the homepage) and confirm it renders.
- Trigger anything backed by a server function and confirm it responds.
