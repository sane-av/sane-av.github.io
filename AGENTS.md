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
- `.content-card` wrapper (h-full flex flex-col rounded-lg border border-border p-6)
- `.card-title` link for post title
- `.card-meta` row for author/date/ID
- `.card-desc` for description text
- `.card-tags` container for tag pills
- `.card-link` pinned to bottom with `mt-auto`
- Tag pills use the `.tag-pill` class (see `src/styles/components.css:186`)
- Tag pills are `<a href="/section?tag=X">` links, NOT buttons

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

## Tag Filtering System

### Architecture
Tag pills in card components are plain `<a href="/section?tag=X">` links. **No `filter-tag` class, no `data-tag` attributes on cards, no click interception.** The browser handles all navigation.

Listing pages (blog, standards, whitepapers) use a single shared script `src/lib/tagFilter.ts` that:
1. Reads `?tag=X` from URL on page load
2. Filters cards by `data-tags` attribute on wrapper `<div>`s
3. Highlights sidebar tags with `data-tag` attribute using `.tag-pill-active` CSS class
4. Shows/hides filter banner and sidebar clear button

### Key rules
- Show ALL items unpaginated so filtering works (hidden items are still in DOM)
- Use `data-collapse-when-empty` on standards status groups for group-level hiding
- Sidebar tags link to `?tag=X` (relative URL, resolves to current page path)
- Card tag pills link to absolute paths: `/blog?tag=X`, `/standards?tag=X`, `/whitepapers?tag=X`
- Clear buttons use inline `onclick="window.location.href=window.location.pathname"` — NO JavaScript event listeners for clear buttons

### Client-side scripts and Astro view transitions
This site uses Astro view transitions (`<ClientRouter />` in `Base.astro`). Critical rules:
- **ALWAYS listen for `astro:page-load`** event for any script that runs on navigation
- **Use inline onclick handlers** for buttons that get replaced during navigation — never rely on JS event listeners attached to specific DOM elements
- **Reset state before applying new state** — always clear old highlights/filters before applying new URL params
- **Get DOM references fresh on every invocation** — don't cache element references across navigations

### Import conventions
- Use `node:` prefix for all Node.js built-ins: `import fs from "node:fs"`, not `import fs from "fs"`
- Use `@/` alias for project imports per tsconfig paths
- Use relative paths for scripts loaded via `<script src="...">` in Astro components

### CSS state classes
- Prefer dedicated CSS classes (e.g., `.tag-pill-active`) over inline `classList` manipulation with Tailwind utilities — avoids specificity battles with `@apply` utility base styles
- Use `hidden` class (Tailwind's `display: none`) for initial hidden state on server-rendered elements

### Build verification
- Always run `pnpm check` before building to catch type errors
- `pnpm build` must pass with 0 errors before commit
- Remember: PowerShell does not support `&&` — use `;` to chain commands on Windows

## Git
- Branch: `main` (not `master`)
- `dist/` is gitignored — only source is committed
- Commit often, push each logical change separately

<!-- END:project-rules -->
