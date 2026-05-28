# AGENTS.md

Operational guide for AI coding agents working on **sane-av** - the static
documentation site for the Society for AV Norms & Engineering, published at
<https://sane-av.github.io>.

Read this file before making changes. It captures hard-won lessons that are
easy to repeat as mistakes.

---

## 1. Project at a glance

| | |
|---|---|
| **Stack** | [Astro](https://astro.build) v6 (`output: 'static'`), TypeScript, Markdown content collections, MDX |
| **Repo** | `https://github.com/sane-av/sane-av.github.io` (org/repo names must match for GitHub Pages org-site routing) |
| **Deploy** | GitHub Actions to GitHub Pages on push to `main` (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml)) |
| **Node** | v22 in CI; any recent LTS locally |
| **Build** | `npm ci && npm run build` -> `dist/` |
| **Dev** | `npm run dev` (default port 4321) |
| **Site URL** | `https://sane-av.github.io` (set in [astro.config.mjs](astro.config.mjs)) |

## 2. Repository layout

```
.github/workflows/deploy.yml  # CI/CD - Node 24-native action versions only
astro.config.mjs              # `site` MUST be set for sitemap & canonical URLs
src/
  content.config.ts           # Zod schemas for all content collections
  content/
    standards/                # SANE-NNN-*.md - normative documents
    glossary/                 # term entries (saneId-style refs encouraged)
    blog/                     # blog posts
    whitepapers/              # long-form articles
  data/                       # JSON/YAML data (e.g. equipment registry)
  layouts/BaseLayout.astro    # site shell (header, footer, meta)
  pages/                      # routes; folder index.astro + [slug].astro
  styles/global.css           # SINGLE stylesheet - all theme + components
LICENSE                       # MIT (code)
CONTENT-LICENSE.md            # CC BY 4.0 (content) - DO NOT rename to LICENSE-*
                              # (GitHub's license scanner will flag it)
```

## 3. Design system - read this before changing colors

The site is **dark-mode only** with a Radix-aligned amber accent. All choices
are deliberate; "improvements" that brighten or saturate the palette will be
reverted. See the comments at the top of [src/styles/global.css](src/styles/global.css).

### Palette tokens (semantic, do not rename without sweeping templates)

| Token | Value | Purpose | Contrast |
|---|---|---|---|
| `--color-bg` | `#0a0a0b` | App background | - |
| `--color-navy` | `#0f0f12` | Header/footer chrome (legacy name) | - |
| `--color-surface` | `#141417` | Cards, page-header, panels | - |
| `--color-navy-mid` | `#1a1a1f` | Gradient end | - |
| `--color-teal-lt` | `#1c1c20` | Inline code bg, abbr pill bg | - |
| `--color-border` | `#26262d` | Borders, dividers | - |
| `--color-text` | `#ededf0` | Primary text | 17:1 on bg |
| `--color-muted` | `#8b8b94` | Secondary text | 5.85:1 on bg |
| `--color-teal` | `#f1a10d` | Links, accents (warm amber, legacy name) | 9.27:1 on bg |
| `--color-orange` | `#b45309` | Solid CTA bg (white text) | 5.02:1 |
| `--color-success` | `#4ade80` | Pass/success | 8.3:1 |
| `--color-warn` | `#fcd34d` | Caution | 12:1 |
| `--color-danger` | `#f87171` | Error text | 6.9:1 |

### Why these specific values
- **Neutrals are true grays, not navy-tinted** - reads as "serious technical document" (think IETF, MDN) rather than "startup landing page".
- **Amber, not teal/cyan** - teal is the 2020s SaaS cliche. Amber maps to AV instrumentation (tally lights, voltage indicators) and is uncommon in dark UIs.
- **Amber is muted (Radix amber-11 `#f1a10d`), not bright (Tailwind amber-400 `#fbbf24`)** - bright yellow on near-black reads as a warning sign. We tested both.
- **CTA uses amber-700 `#b45309`, not amber-500** - solid but grounded; not shouty.

### Accessibility rules (enforced)
- Body text: WCAG AA = **>= 4.5:1**.
- Large text/UI: AA = **>= 3:1**.
- **Never use `--color-navy` or `--color-navy-mid` as a TEXT color.** They are the same value family as the backgrounds and disappear. These tokens have legacy names from when the site was light-mode; in dark mode they are surface tiers.
- Before adding a new color, compute contrast against the surface it sits on.

## 4. Critical Windows / PowerShell gotchas

The repo lives on Windows. `src/styles/global.css` (and possibly other files
written by PowerShell scripts) have **CRLF line endings**.

### `replace_string_in_file` and `multi_replace_string_in_file` silently fail on CRLF files for multi-line strings.

The tool reports success, the file is unchanged. This has happened multiple times.

**Workarounds**:

1. **Single-line replacements**: usually work. Always verify with a grep after.

2. **Multi-line replacements on CRLF files**: use PowerShell `[System.IO.File]::ReadAllText/.Replace/.WriteAllText`. Write the script to a `.ps1` file first; chained heredocs piped through `run_in_terminal` get mangled by the shell:

   ```powershell
   $p = 'C:\dev\sane-av\src\styles\global.css'
   $c = [System.IO.File]::ReadAllText($p)
   $cLf = $c.Replace("`r`n","`n")
   # ... do .Replace() calls on $cLf using LF-only heredocs ...
   [System.IO.File]::WriteAllText($p, $cLf.Replace("`n","`r`n"))
   ```

3. **Verify every edit** with `Select-String` or `grep_search` immediately.

## 5. CI/CD - GitHub Actions versions

GitHub deprecated Node.js 20 in May 2026. The workflow uses **only Node 24-native action versions**:

| Action | Pinned version |
|---|---|
| `actions/checkout` | `@v6` |
| `actions/setup-node` | `@v6` (with `node-version: 22`) |
| `actions/upload-pages-artifact` | `@v5` |
| `actions/deploy-pages` | `@v5` |

Do **not** add `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` - the pinned major versions target Node 24 natively. If an action version is bumped, check its release notes for the Node target version.

## 6. Content authoring conventions

### Standards (`src/content/standards/`)
- Filename: `SANE-NNN-kebab-case-title.md`
- Frontmatter must satisfy the schema in [src/content.config.ts](src/content.config.ts) (`saneId`, `version`, `status`, `pubDate`, `description`, `tags`, optional `relatedStandards`).
- `status`: one of `published`, `review`, `draft`, `deprecated`. Determines badge color.
- Use RFC 2119 normative language (`MUST`, `SHOULD`, `MAY`).
- Cross-reference other standards as `[SANE-001](/standards/SANE-001-audio-levels)`.

### Glossary (`src/content/glossary/`)
- One term per file. Use `abbr` for the short form (renders as a pill).
- Cross-link to standards and other glossary terms where relevant.

### Punctuation
- **No em-dashes (`U+2014`).** Use ` - ` (space-hyphen-space) or `: ` instead. This is enforced; a prior pass removed all 49 from the repo.
- Plain ASCII only in normative text. Curly quotes, en-dashes, and ellipsis chars (...) are acceptable in prose but avoid in code blocks.

### Repo URLs in content/templates
- Always `https://github.com/sane-av/sane-av.github.io` (not `sane-av/sane-av`). The bare `sane-av/sane-av` repo does not exist. There were 16 of these wrong URLs in initial scaffolding; if you add new ones, double-check.

## 7. Commit conventions

Conventional Commits style. Examples from this repo's history:

- `style: redesign dark theme - <one-line summary>`
- `fix: accessibility - <what was unreadable> (WCAG AA)`
- `ci: upgrade actions to node24-native versions (<list>)`
- `feat: add <thing>`
- `docs: <change>`
- `chore: <housekeeping>`

Commit messages are imperative, lowercase after the type, no trailing period.

## 8. Common pitfalls (with prevention)

| Pitfall | Symptom | Prevention |
|---|---|---|
| Using `--color-navy` as text color | Element invisible on cards | Use `--color-text` or `--color-teal` for SANE IDs; navy is surface chrome only |
| Multi-line `replace_string_in_file` on global.css | "Success" reported, no change | Use PowerShell raw replace via `.ps1` script |
| Adding bright accents | "Looks like a warning, not a link" | Stick to Radix amber-11 family; muted, not saturated |
| Renaming a CSS token | Templates break silently (inline `style=`) | Add new token as alias; sweep templates first; never remove the old name without verifying with grep |
| Creating `LICENSE-CONTENT` file | GitHub flags repo as "Unknown licenses found" | Name it `CONTENT-LICENSE.md` (any name not starting with `LICENSE`) |
| Forgetting `astro.config.mjs` `site` | Broken sitemap / canonical URLs | Always set to deployed origin |
| Em-dashes sneaking back in | Inconsistency with prior content | Search for `U+2014` after any content edit |

## 9. Pre-commit checklist for agents

Before `git add`:

1. `npm run build` succeeds with zero warnings.
2. New colors checked for >= 4.5:1 contrast on the surface they sit on.
3. No `--color-navy` / `--color-navy-mid` used as text color.
4. No em-dashes introduced (grep `[\u2014]`).
5. No `github.com/sane-av/sane-av/` (missing `.github.io`).
6. If you edited a CRLF file with multi-line replacements, you verified the change with `Select-String`.

## 10. What NOT to do

- Do not add a light-mode toggle "to be nice". The site is intentionally dark-only; light mode would require duplicating every token and re-validating contrast on every component. If genuinely needed, open an RFC first.
- Do not introduce a CSS framework (Tailwind, Bootstrap). The site is ~450 lines of hand-written CSS - keeping it that way is a feature.
- Do not add client-side JS frameworks (React, Vue, Svelte). Astro static + tiny inline scripts is the contract.
- Do not auto-add docstrings, type annotations, or comments to code you did not change.
- Do not "improve" file structure (extracting components, splitting CSS, etc.) without an explicit ask. Small repo; flat is fine.

---

*Last updated: May 2026. If something here is outdated, fix it in the same PR as the change that outdated it.*
