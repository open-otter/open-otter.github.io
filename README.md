# OpenOtter Website Bootstrap

This repo is the root GitHub Pages site for OpenOtter. It is a `Next.js` + `Nextra` app-router site with static export enabled, so production output is written to `out/` and published at `https://open-otter.github.io/`.

## Initialize Base Project

```bash
npx create-next-app@latest open-otter.github.io --use-npm --yes --no-src-dir
cd open-otter.github.io
npm install nextra nextra-theme-docs
npm install -D serve
npm pkg set scripts.start="serve out"
```

These commands create the same base stack used by this site: a current `create-next-app` project plus `nextra` and a static preview server. The checked-in repo files such as `next.config.mjs`, `theme.config.tsx`, `content/`, and `.github/workflows/deploy.yml` are the project-specific layer on top of that base.

The current project also expects the standard `create-next-app` defaults used at bootstrap time: TypeScript, ESLint, Tailwind CSS, and the App Router.

## Local Development

```bash
npm ci
npm run dev
```

Common commands:

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run start
```

What they do:

- `npm ci`: install the exact locked dependency set
- `npm run dev`: start the local Next.js dev server
- `npm run lint`: run ESLint
- `npm run build`: generate the static export in `out/`
- `npm run start`: serve `out/` for a production-style local preview

Typical local flow:

1. `npm ci`
2. `npm run dev`
3. `npm run build`
4. `npm run start`

Notes:

- `Nextra 4` requires the `app` router.
- `create-next-app` defaults currently include TypeScript, ESLint, Tailwind CSS, the App Router, and Turbopack.
- `next lint` was removed in `Next.js 16`, so linting is wired through the ESLint CLI for this repo.
- `tailwind.config.js` is included as a project extension point even though Tailwind v4 can run without custom config.
- Deployment uses GitHub Pages with the official build, upload, and deploy workflow in `.github/workflows/deploy.yml`.
