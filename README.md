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

No Vercel-specific config is needed — Nitro detects Vercel automatically at build time.

1. Push this repository to GitHub (or use the GitHub sync from Lovable).
2. In Vercel, click **Add New → Project** and import the repository.
3. Vercel auto-detects Vite. Set **Node.js Version** to **22.x** in Project Settings (or leave the default if it is 22).
4. Click **Deploy**.

Build settings (defaults usually work):

- **Build command:** `npm run build`
- **Output directory:** leave empty — Vercel reads the generated `.vercel/output/` Build Output
- **Install command:** auto-detected (uses `bun.lock`, so Vercel runs Bun)

The build runs outside the Lovable sandbox, so the app builds for Vercel's server runtime instead of Cloudflare — that switch is automatic.

## Environment variables

The app currently needs none. If you later add Lovable Cloud or other secrets, set them in Vercel under **Project Settings → Environment Variables**.

## Test before switching traffic

- Open a server-rendered page (the homepage) and confirm it renders.
- Trigger anything backed by a server function and confirm it responds.
