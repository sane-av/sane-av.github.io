# SANE - Society for AV Norms & Engineering

> Open source AV standards, data, and tools for the professional audiovisual industry.

[![License: Apache 2.0](https://img.shields.io/badge/Code-Apache%202.0-blue.svg)](LICENSE)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC%20BY--SA%204.0-lightgrey.svg)](CONTENT-LICENSE.md)

**Website:** https://sane-av.github.io

SANE is building free, open, and transparent standards for professional audiovisual systems.

No membership fees. No paywalls. No gatekeeping.

Are your AV systems SANE?

---

## Architecture

Content is stored in separate repos and synced at build time via `scripts/contentSync.js`.

| Collection | Repo | License |
|---|---|---|---|
| Standards | [sane-av/sane-av-standards](https://github.com/sane-av/sane-av-standards) | CC BY-SA 4.0 |
| Blog | [sane-av/sane-av-blog](https://github.com/sane-av/sane-av-blog) | CC BY-SA 4.0 |
| Whitepapers | [sane-av/sane-av-whitepapers](https://github.com/sane-av/sane-av-whitepapers) | CC BY-SA 4.0 |
| Glossary | [sane-av/sane-av-glossary](https://github.com/sane-av/sane-av-glossary) | CC BY-SA 4.0 |
| Equipment | [sane-av/sane-av-equipment-list](https://github.com/sane-av/sane-av-equipment-list) | CC BY-SA 4.0 |

Each repo contains `.md` files at its root (plus a `README.md` which is excluded from loading). The sync clones/pulls into `src/content/<type>/` before every build and dev start. Repo URLs are configured in `src/config/config.json` → `settings.content_repos`.

The site rebuilds automatically:
- On every push to `main` (via GitHub Actions)
- **Daily at midnight UTC** — so content repo changes are picked up within 24 hours without a manual rebuild

## What's in this repo

| Path | Contents |
|---|---|
| `src/pages/` | Astro page components (standards, blog, whitepapers, glossary, tools, etc.) |
| `src/layouts/` | Shared layouts, partials, and card components |
| `src/styles/` | TailwindCSS v4 styles and theme configuration |
| `src/config/` | Site configuration, menu, and theme |
| `src/lib/` | Utility libraries (glossary merging, tools, formatting) |
| `src/data/equipment/` | Equipment specifications (JSON, synced from content repo) |
| `scripts/` | Build scripts (content sync, theme generation, JSON generation, LLMS generation) |
| `.github/workflows/` | CI/CD (deploy to GitHub Pages, scheduled rebuilds) |

## Workspace Layout

Clone all repos as siblings for convenient editing:

```
C:\dev\
  sane-av.github.io\
  sane-av-standards\
  sane-av-blog\
  sane-av-whitepapers\
  sane-av-glossary\
  sane-av-equipment-list\
```

## Getting Started

```bash
git clone https://github.com/sane-av/sane-av.github.io
cd sane-av.github.io
pnpm install
pnpm dev        # syncs content repos + dev server
pnpm build      # syncs content repos + builds to dist/
```

**Node.js >= 22** required. Package manager: **pnpm 11+**.

The `pnpm dev` and `pnpm build` commands automatically sync content repos before starting. Use the sibling repos for content editing — the site reads their output at build time.

## Contributing

Everything starts at [sane-av.github.io/contributing](https://sane-av.github.io/contributing) — the single hub for all contribution paths.

Quick summary:
- **Standards**: Start at `/contributing`, follow the RFC process
- **Whitepapers**: [Submit a proposal](https://github.com/sane-av/sane-av-whitepapers/issues/new?template=new-whitepaper.yml)
- **Glossary**: [Add a term](https://github.com/sane-av/sane-av-glossary/issues/new?template=new-term.yml) or [edit one](https://github.com/sane-av/sane-av-glossary/issues/new?template=edit-term.yml)
- **Equipment**: [Submit an entry](https://github.com/sane-av/sane-av-equipment-list/issues/new?template=new-equipment.yml)
- **Blog**: Editor-maintained for project news
- **Site / Tools**: [Report a bug](https://github.com/sane-av/sane-av.github.io/issues/new?template=bug.yml) or open a PR

## Standards Process

SANE standards follow an RFC process inspired by the IETF:

1. **Proposal** — Open an RFC issue
2. **Discussion** — Public comment on the issue
3. **Draft PR** — Open a PR with the standards document
4. **60-day review** — Public review period
5. **Ratification** — Merge on consensus

See [sane-av.github.io/contributing](https://sane-av.github.io/contributing) for the full RFC process.

## Support SANE

SANE is funded by community donations. Sponsors help cover infrastructure, legal review, and maintainer time.

- [Sponsor us on GitHub Sponsors](https://github.com/sponsors/sane-av)

## License

- **Code** (site, tools, components): [Apache 2.0](LICENSE)
- **Content** (standards, blog, whitepapers, glossary, data): [CC BY-SA 4.0](CONTENT-LICENSE.md)
- **Trademarks** (SANE name, logo, certification marks): See [NOTICE](NOTICE) — not open-licensed
