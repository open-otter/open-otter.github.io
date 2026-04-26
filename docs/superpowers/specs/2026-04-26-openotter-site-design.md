# OpenOtter Website Design

Date: 2026-04-26

## Goal

Build `open-otter.github.io` as the official OpenOtter project website and documentation hub using the latest stable `Next.js` and `Nextra`, exported statically for GitHub Pages.

The site should combine:

- a polished landing page inspired by the user journey of `roboracer.ai`
- the visual restraint and docs ergonomics of `vercel.com` and `vercel.com/docs`
- a documentation structure aligned with the real OpenOtter repository layout and terminology

## Constraints

- Use the latest Nextra architecture, which means `Nextra 4` with the Next.js `app` router.
- Support GitHub Pages static export.
- Default to dark mode and keep native theme support.
- Use `next/font` with `Geist Sans` and `Geist Mono`.
- Use Tailwind CSS for layout and typography.
- Keep the site content-focused, not marketing-heavy.
- Preserve a clean documentation authoring model for future maintainers.

## Recommended Approach

Use `Next.js + Nextra 4 docs theme + App Router`, with:

- a custom homepage implemented in `app/page.tsx`
- docs served from `app/docs/[[...mdxPath]]/*`
- documentation content stored under `content/docs/**`
- Nextra docs theme configuration in `theme.config.tsx`

This approach is preferred because it keeps the homepage flexible enough to match the requested Roboracer-like journey while keeping the docs on the current Nextra path with built-in sidebar, search, table of contents, and edit-link support.

## Site Architecture

### Runtime structure

- `app/layout.tsx`
  - global metadata
  - font setup
  - dark-mode-first root shell
  - imports global styles
- `app/page.tsx`
  - custom landing page
  - independent from docs layout
- `app/docs/[[...mdxPath]]/page.tsx`
  - dynamic Nextra docs page loader
- `app/docs/[[...mdxPath]]/layout.tsx`
  - Nextra docs layout wrapper
- `content/docs/**`
  - MDX docs pages
  - section metadata for sidebar order and labels
- `theme.config.tsx`
  - Nextra docs theme configuration
- `public/**`
  - logos
  - architecture image
  - media placeholders

### Static export and GitHub Pages

`next.config.mjs` will use:

- `output: 'export'`
- `images.unoptimized: true`
- `basePath: '/open-otter.github.io'`
- `assetPrefix: '/open-otter.github.io/'`
- `trailingSlash: true`

These settings are required so the exported site works correctly when deployed from the repository root path on GitHub Pages.

## Information Architecture

### Top-level navigation

- `/`
  - landing page
- `/docs`
  - documentation home
- external GitHub link

### Initial docs structure

The first docs tree should reflect the actual OpenOtter hardware and software split:

- `content/docs/index.mdx`
  - docs overview
- `content/docs/hardware-build.mdx`
  - chassis assembly
  - ESC and servo integration
  - STM32 Discovery kit mounting and wiring
- `content/docs/software-build.mdx`
  - iOS app setup and deployment
  - STM32 toolchain, build, and flashing
  - local development prerequisites
- `content/docs/running-instructions.mdx`
  - boot order
  - BLE connection flow
  - app bring-up
  - entering autonomous operation safely

Sidebar metadata will live in the docs content tree using current Nextra conventions instead of legacy `pages/docs/_meta.json`.

## Homepage Design

### Intent

The homepage should behave like a project front door:

- immediate statement of what OpenOtter is
- fast path into docs and source code
- clear explanation of the platform stack
- visible connection between mobile perception, embedded control, and RC hardware

### Sections

1. Hero
   - dark, high-contrast layout
   - looping background video placeholder with poster fallback
   - headline: `OpenOtter: The Open-Source Autonomous RC Platform`
   - supporting copy grounded in the source repository positioning
   - primary CTA: `Read the Docs`
   - secondary CTA: `View Source`

2. Feature grid
   - mobile perception
   - embedded control
   - hardware-agnostic platform design
   - physical AI agent runtime

3. System architecture band
   - architecture image from project assets
   - short explanation of the layered system

4. Build flow / docs entry section
   - direct links into hardware, software, and run guides

5. Footer
   - project identity
   - GitHub link
   - concise ownership text

### Visual direction

- dark mode default
- restrained border-based styling
- no decorative gradients or marketing cards
- compact but readable typography
- Vercel-like spacing rhythm and contrast
- project visuals should show real assets or clear placeholders, not abstract illustration

## Theme Configuration

The docs theme should provide:

- OpenOtter wordmark/logo in navbar
- GitHub project link to `https://github.com/JuneJulyAugust/openotter`
- edit-link base targeting the docs site repository
- concise footer
- dark mode enabled and defaulted
- table of contents and sidebar behavior consistent with Nextra docs defaults

## Content Strategy

Initial docs content should be intentionally high-level boilerplate with correct structure:

- clear headings
- TODO-ready sections for maintainers to extend
- direct references to the main OpenOtter repository where appropriate
- safe wording around hardware setup and autonomous operation

The site should not duplicate every repository README on day one. It should provide a guided entry point and link outward where deeper subsystem docs already exist.

## Media Strategy

Media should be managed under `public/` in stable, predictable paths:

- `public/media/hero/`
- `public/media/docs/`
- `public/brand/`

The homepage hero video will ship as a placeholder path and fallback poster so maintainers can replace the media asset without touching layout code.

Docs guidance will prefer:

- local image and video assets checked into the repo when stable
- descriptive alt text
- width-conscious usage in MDX
- avoiding oversized binaries unless the media materially improves the docs

## Build and Deployment

### Local development

Project initialization should use:

- `create-next-app`
- `nextra`
- `nextra-theme-docs`
- `tailwindcss`

The repo should include the exact setup commands in generated documentation so a maintainer can recreate the stack from scratch.

### GitHub Actions

The deployment workflow should:

1. run on pushes to `main`
2. install dependencies
3. build the static export
4. upload the `out/` artifact
5. deploy to GitHub Pages

This will target GitHub Pages’ native deployment flow rather than manually pushing built assets into a branch via ad hoc shell scripting.

## Testing and Verification

Implementation verification should include:

- dependency install succeeds
- `npm run build` succeeds with static export enabled
- exported output lands in `out/`
- local dev server renders homepage and docs pages
- internal navigation works under the GitHub Pages base path

## Deliverables

Implementation should produce:

- fully scaffolded latest-version Next.js/Nextra site
- homepage
- initial docs pages
- theme config
- Tailwind and global styles
- GitHub Actions deploy workflow
- `MAINTENANCE.md`

## Non-Goals

- building a full blog
- integrating analytics
- reproducing every repository document verbatim
- implementing custom search infrastructure beyond Nextra defaults
- adding dynamic server-only features that break static export
