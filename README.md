# 3d-portfolio

Personal Portfolio website designed using ThreeJS

Install Dependencies

```sh
npm install
```

Start the development server

```sh
npm run dev
```

Preview: https://sushil-thapa.com.np/

## Deploy

The site runs on the Cloudflare Worker `3d-portfolio` (see `wrangler.jsonc`) at
https://sushil-thapa.com.np. `src/worker.js` serves the built files from `dist/`
and redirects `www` to the main domain.

```sh
npm run build
npx wrangler deploy
```

Cloudflare Workers Builds is also connected to this repo (build command
`npm run build`, deploy command `npx wrangler deploy`), so pushes to `main`
deploy automatically when the build service is working.
