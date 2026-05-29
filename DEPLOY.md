# Adventure Storytelling Media — hosting off Manus

This site is a static React + Vite single-page app. There is **no backend** — it
builds to plain HTML/CSS/JS that any static host can serve. It has been cleaned
up to remove all Manus-specific tooling.

## What changed when moving off Manus

- **Removed Manus build plugins** from `vite.config.ts` (`vite-plugin-manus-runtime`,
  the Builder.io JSX plugin, and the custom Manus debug-log collector). Config is
  now just React + Tailwind.
- **Dropped the Express server.** Manus used `server/index.ts` only to serve the
  static files. Static hosts do that for you, so `npm run build` now just runs
  Vite and outputs to `dist/`. (The `server/` folder is left in place but unused —
  safe to delete.)
- **Removed the broken analytics tag** in `index.html` (it referenced unset
  `%VITE_…%` placeholders). Add your own analytics snippet if you want one.
- **Neutralized unused Manus code:** `client/src/components/Map.tsx` (used a
  Manus Google-Maps proxy) and `ManusDialog.tsx` (Manus login) are now inert
  stubs — nothing in the site imports them. Safe to delete. The Map page renders
  a static event list and needs no API key.
- **Added GitHub Pages support:** a `404.html` SPA fallback, an SPA redirect
  handler in `index.html`, a `CNAME` for the custom domain, and a deploy workflow.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Self-hosting the images (recommended)

The page images currently load from Manus's CDN
(`d2xsxph8kpxj0f.cloudfront.net`). They keep working only as long as Manus keeps
that bucket online. To become fully independent, run once locally:

```bash
node migrate-images.mjs
```

This downloads every referenced image into `client/public/assets/` and rewrites
the source to use local `/assets/...` paths. Commit the result. (It leaves the
source untouched if any download fails, so the CDN keeps working until it
succeeds.)

## Current setup: free test deploy (no custom domain)

This is configured to deploy to the free GitHub Pages **project page**:

    https://sindbad-SH.github.io/adventure-storytelling-media/

What that required (already done):
- `vite.config.ts` base path is `/adventure-storytelling-media/`.
- `client/src/App.tsx` passes that base to the wouter router so internal
  links resolve under the sub-path.
- `404.html` + the script in `index.html` handle SPA deep links on the sub-path.
- The deploy workflow strips `CNAME` from the output (no custom domain in use).
- Images still load from the Manus CDN, so **do not** run `migrate-images.mjs`
  for this test — local `/assets` paths would need the sub-path prefix.

### To deploy
1. Push this project to the `main` branch of
   `github.com/sindbad-SH/adventure-storytelling-media` (already created, with
   Pages source set to **GitHub Actions**).
2. The workflow (`.github/workflows/deploy.yml`) builds and publishes on every
   push to `main`. Watch progress on the repo's **Actions** tab.

## Later: moving to the custom domain (adventurestorytellingmedia.com)
When the test looks good and you want the real domain:
1. In `vite.config.ts`, change the base default to `"/"`.
2. Remove the `rm -f dist/CNAME` step from the workflow (the `CNAME` file is
   already set to `adventurestorytellingmedia.com`).
3. Point the domain's DNS at GitHub Pages and set it under **Settings → Pages**.
The wouter and SPA-fallback code already handle base `/` automatically, so no
other changes are needed. (Optionally run `migrate-images.mjs` then to self-host
images at the root.)

## Other static hosts
The build is host-agnostic. For Netlify/Cloudflare Pages: build command
`npm run build`, publish directory `dist`. The existing `client/public/_redirects`
already handles SPA routing on Netlify.
