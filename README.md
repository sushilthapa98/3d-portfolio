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

The site runs on the Cloudflare Worker `3d-portfolio` (see `wrangler.jsonc`).
Cloudflare Workers Builds is connected to this repo: every push to `main` runs
`npm run build` and then `npx wrangler deploy`, which uploads `dist/`.
