# OpenOtter Site Maintenance

This repo publishes the root GitHub Pages site at `https://open-otter.github.io/`. The docs pages under `/docs/*` come from the top-level `content/` directory and are statically exported into `out/`.

## Add a docs page

1. Create a new MDX file in `content/`.
2. Use a kebab-case filename that matches the final route, for example `content/power-system.mdx` -> `/docs/power-system`.
3. Add frontmatter at the top of the file:

   ```mdx
   ---
   title: Power System
   description: Short summary for the page.
   ---
   ```

4. Link to the page with `/docs/<slug>` paths from other docs pages as needed.
5. Run `npm run build` before pushing so the static export catches MDX and rendering errors. Treat ordinary link checking and media validation as a separate review step.

The current docs tree is flat. If you introduce nested directories later, keep the filenames and `_meta.ts` entries aligned with the generated route structure.

## Update navigation in `_meta.ts`

Navigation labels live in `content/_meta.ts`.

1. Add a new key that matches the MDX filename without the `.mdx` suffix.
2. Set the value to the sidebar label you want rendered.
3. Keep the object order in the same order you want the pages shown in the docs navigation.

Example:

```ts
export default {
  index: "Overview",
  "hardware-build": "Hardware Build",
  "power-system": "Power System",
};
```

## Images and video in MDX

- Store site assets in `public/` and reference them with root-relative URLs such as `/media/hero/openotter-hero-poster.png`.
- Prefer descriptive subfolders under `public/media/` so related assets stay grouped.
- Keep exported images web-friendly. Large originals should be optimized before they land in the repo.
- Because the site uses static export with `images.unoptimized`, use ordinary Markdown image syntax or HTML/MDX elements that point at files already in `public/`.
- For video, prefer MP4 assets in `public/media/...` and embed them with a native `<video>` element so the export stays simple:

  ```mdx
  <video controls playsInline preload="metadata" src="/media/demos/bench-test.mp4" />
  ```

- Add a poster image for larger videos when practical, and avoid committing oversized raw clips if a trimmed demo conveys the same information.

## Asset locations

- `public/media/...`: screenshots, photos, diagrams, posters, videos, and other docs content assets
- `public/brand/...`: logos, icons, and brand-specific artwork reused across the site

Keep docs-specific media out of `public/brand/`, and keep reusable logos out of `public/media/`.
