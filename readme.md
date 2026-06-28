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
|---|---|---|
| Standards | [sane-av/sane-av-standards](https://github.com/sane-av/sane-av-standards) | CC BY-SA 4.0 |
| Blog | [sane-av/sane-av-blog](https://github.com/sane-av/sane-av-blog) | CC BY-SA 4.0 |
| Whitepapers | [sane-av/sane-av-whitepapers](https://github.com/sane-av/sane-av-whitepapers) | CC BY-SA 4.0 |
| Glossary | [sane-av/sane-av-glossary](https://github.com/sane-av/sane-av-glossary) | CC BY-SA 4.0 |

Each repo contains `.md` files at its root (plus a `README.md` which is excluded from loading). The sync clones/pulls into `src/content/<type>/` before every build and dev start.

The site rebuilds automatically:
- On every push to `main` (via GitHub Actions)
- **Daily at midnight UTC** — so content repo changes are picked up within 24 hours without a manual rebuild

To add content: commit `.md` files to the appropriate repo. For glossary terms, edit the JSON files in `sane-av-glossary/terms/`.

## What's in this repo

| Path | Contents |
|---|---|
| `src/pages/` | Astro page components (standards, blog, whitepapers, glossary, tools, etc.) |
| `src/layouts/` | Shared layouts, partials, and card components |
| `src/styles/` | TailwindCSS v4 styles and theme configuration |
| `src/config/` | Site configuration, menu, and theme |
| `src/lib/` | Utility libraries (glossary merging, tools, formatting) |
| `src/data/equipment/` | Equipment specifications (JSON) |
| `scripts/` | Build scripts (content sync, theme generation, JSON generation) |
| `.github/workflows/` | CI/CD (deploy to GitHub Pages, scheduled rebuilds) |

## Getting Started

```bash
# Clone this repo and its content repos as siblings
git clone https://github.com/sane-av/sane-av.github.io
cd sane-av.github.io
pnpm install
pnpm dev        # syncs content + dev server
pnpm build      # syncs content + builds to dist/
```

**Node.js >= 22** required. Package manager: **pnpm 11+**.

The `pnpm dev` and `pnpm build` commands automatically sync content repos before starting. If you already have the content repos cloned as siblings, use them for editing — the site just reads their output.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

Quick summary:
- **Standards**: Open an [RFC issue](https://github.com/sane-av/sane-av.github.io/issues/new?template=rfc.yml) first
- **Blog / Whitepapers**: Submit content directly to [sane-av/sane-av-blog](https://github.com/sane-av/sane-av-blog) or [sane-av/sane-av-whitepapers](https://github.com/sane-av/sane-av-whitepapers)
- **Glossary**: Edit the JSON term files in [sane-av/sane-av-glossary](https://github.com/sane-av/sane-av-glossary)
- **Equipment data**: Submit a [content issue](https://github.com/sane-av/sane-av.github.io/issues/new?template=content_submission.yml)
- **Tools**: Add an `.astro` file to `src/pages/tools/` — client-side JS only

## Standards Process

SANE standards follow an RFC process inspired by the IETF:

1. **Proposal** — Open an RFC issue
2. **Discussion** — Public comment on the issue
3. **Draft PR** — Open a PR with the standards document
4. **60-day review** — Public review period
5. **Ratification** — Merge on consensus

See [sane-av.github.io/rfc](https://sane-av.github.io/rfc) for full details.

## Support SANE

SANE is funded by community donations. Sponsors help cover infrastructure, legal review, and maintainer time.

- [Sponsor us on GitHub Sponsors](https://github.com/sponsors/sane-av)

## License

- **Code** (site, tools, components): [Apache 2.0](LICENSE)
- **Content** (standards, blog, whitepapers, glossary, data): [CC BY-SA 4.0](CONTENT-LICENSE.md)
- **Trademarks** (SANE name, logo, certification marks): See [NOTICE](NOTICE) — not open-licensed
