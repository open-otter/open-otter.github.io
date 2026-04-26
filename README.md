# OpenOtter Website Bootstrap

This worktree is bootstrapped for a current `Next.js` + `Nextra` app-router site with `Tailwind CSS` via PostCSS.

## Initialize From Scratch

```bash
npx create-next-app@latest open-otter.github.io --use-npm --yes --no-src-dir
cd open-otter.github.io
npm install nextra nextra-theme-docs
```

## Reproduce The Exact Bootstrap Used Here

```bash
npm install
```

Available package scripts:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

`npm run start` serves the exported `out/` directory for a production-style local preview.

Notes:

- `Nextra 4` requires the `app` router.
- `create-next-app` defaults currently include TypeScript, ESLint, Tailwind CSS, the App Router, and Turbopack.
- `next lint` was removed in `Next.js 16`, so linting is wired through the ESLint CLI for this repo.
- `tailwind.config.js` is included as a project extension point even though Tailwind v4 can run without custom config.
