<!-- BEGIN:astro-agent-rules -->

# Astro: ALWAYS read docs before coding

Before any Astro work, connect to the "Astro docs" MCP server configured in `.mcp.json` to find and read the relevant documentation. Your training data is outdated — the docs are the source of truth.

<!-- END:astro-agent-rules -->

<!-- BEGIN:astro-template-guidance-rules -->

# Astro Template Architecture: ALWAYS read template guidance

Before modifying the template structure, styles, pages, or configuration, trigger the `astro-template-guidance` skill to read the relevant architectural documentation. This ensures you follow the project's established conventions instead of inventing your own.

<!-- END:astro-template-guidance-rules -->

<!-- BEGIN:project-rules -->

# Project: sane-av.github.io

This is a GitHub Pages user site (`sane-av.github.io`) built with the [Astroplate](https://github.com/zeon-studio/astroplate) template.

## Stack
- **Framework:** Astro v7
- **Styling:** TailwindCSS v4
- **Language:** TypeScript
- **Package manager:** pnpm

## Commands
- `pnpm dev` — Sync content repos, start dev server
- `pnpm build` — Sync content repos, build static site to `dist/`
- `pnpm preview` — Preview the built site

## Content Architecture
Content is stored in separate repos and synced at build time via `scripts/contentSync.js`.

| Collection | Repo | License |
|---|---|---|
| Standards | `sane-av/sane-av-standards` | CC BY-SA 4.0 |
| Blog | `sane-av/sane-av-blog` | CC BY-SA 4.0 |
| Whitepapers | `sane-av/sane-av-whitepapers` | CC BY-SA 4.0 |
| Glossary | `sane-av/sane-av-glossary` | CC BY-SA 4.0 |
| Equipment | `sane-av/sane-av-equipment-list` | CC BY-SA 4.0 |

Each repo contains `.md` files at its root (plus a `README.md` which is excluded from loading). The content sync clones/pulls into `src/content/<type>/` before every build and dev start. Repo URLs are configured in `src/config/config.json` → `settings.content_repos`.

To add content: commit `.md` files to the appropriate repo, then run `pnpm build` (or wait for the next CI deploy which runs the sync automatically).

## Workspace Layout
```
C:\dev\
  sane-av.github.io\       ← this repo (site code)
  sane-av-standards\       ← standards content
  sane-av-blog\            ← blog content
  sane-av-whitepapers\     ← whitepapers content
  sane-av-glossary\        ← glossary content
  sane-av-equipment-list\  ← equipment data
```
All five repos should be cloned as siblings for convenient editing.

## Page Conventions

### Intro boxes
Content list pages (standards, whitepapers, blog, why-sane, about) use a unified intro box pattern below the PageHeader:
```astro
<section class="pt-6 pb-4">
  <div class="container text-center">
    <div class="rounded-2xl bg-gradient px-8 py-4">
      <p>Page description</p>
      <a href="/contributing" class="btn btn-primary btn-sm">Contribute →</a>
      <a href="/feeds" class="btn btn-outline-primary btn-sm">Feeds</a>
    </div>
  </div>
</section>
```

### Breadcrumbs
Single-post pages (blog, whitepapers, standards) use the same gradient box for breadcrumbs:
```astro
<section class="pt-6 pb-4">
  <div class="container text-center">
    <div class="rounded-2xl bg-gradient px-8 py-4">
      <Breadcrumbs />
    </div>
  </div>
</section>
```

### Card components
All card types (BlogCard, StandardCard, WhitepaperCard) follow the same pattern:
- `h-full flex flex-col rounded-lg border border-border p-6` wrapper
- `grow line-clamp-4 overflow-hidden` on description text
- `mt-auto` on the "Read More" button to pin it to the bottom
- Tag pills: `underline decoration-text-light/50 underline-offset-2` (light mode) + `dark:decoration-darkmode-primary/40` (dark mode)

### Homepage sections
- Use `section-sm py-10 xl:py-14` for reduced vertical padding
- Alternating backgrounds: black → `bg-gradient` → black → `bg-gradient` → etc.

## Routing
- `/rfc` no longer exists. The RFC process and contribution guide are consolidated at `/contributing`
- `/rfc/status` is the standalone standards status dashboard
- `/feeds` lists all machine-readable data feeds (JSON, RSS)
- All "contribute" / "propose" / "open an RFC" buttons route to `/contributing`

## License
- **Code** (site, tools, components): Apache 2.0
- **Content** (standards, blog, whitepapers, glossary, data): CC BY-SA 4.0
- **Trademarks** (SANE name, logo, certification marks): See NOTICE — not open-licensed

## Configuration
- Site URL: `src/config/config.json` → `site.base_url` (set to `https://sane-av.github.io`)
- Astro config: `astro.config.mjs` (reads from `config.json` and `theme.json`)
- Content repo URLs: `src/config/config.json` → `settings.content_repos`
- Content folder names: `config.json` → `settings.blog_folder`, `settings.whitepapers_folder`

## Deployment
- Triggered on push to `main` via `.github/workflows/deploy-to-github-pages.yml`
- Also runs daily at midnight UTC via cron schedule to pick up content repo changes
- Uses `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`
- Build output: `dist/`
- **IMPORTANT:** GitHub Pages must be set to "GitHub Actions" source in repo Settings > Pages

## Build Scripts
- `scripts/contentSync.js` — clones/pulls content repos before build
- `scripts/themeGenerator.js` — generates CSS variables from `theme.json`
- `scripts/jsonGenerator.js` — generates JSON feeds for search
- `scripts/llmsGenerator.js` — generates `llms.txt` and `llms-full.txt` for AI discoverability

## Git
- Branch: `main` (not `master`)
- `dist/` is gitignored — only source is committed

<!-- END:project-rules -->
