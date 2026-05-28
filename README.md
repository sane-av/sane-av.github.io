# SANE - Society for AV Norms & Engineering

> Open source AV standards, data, and tools for the professional audiovisual industry.

[![License: MIT](https://img.shields.io/badge/Code-MIT-blue.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/Content-CC%20BY%204.0-lightgrey.svg)](LICENSE-CONTENT)

**Website:** https://sane-av.github.io

SANE is a community-driven alternative to proprietary AV standards bodies. All standards,
data, and tools are freely published, version-controlled, and open for community contribution.
No membership fees. No paywalls. No gatekeeping.

---

## What's in this repo

| Path | Contents |
|------|----------|
| `src/content/standards/` | SANE technical standards (Markdown) |
| `src/content/blog/` | Community blog posts (Markdown / MDX) |
| `src/content/glossary/` | AV terminology definitions (Markdown) |
| `src/content/whitepapers/` | Technical white papers (Markdown / MDX) |
| `src/data/equipment/` | Equipment specifications (JSON) |
| `src/pages/tools/` | Client-side AV calculators (Astro) |
| `.github/ISSUE_TEMPLATE/` | RFC and content submission templates |

## Getting Started

```bash
git clone https://github.com/sane-av/sane-av.github.io.git
cd sane-av
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/
```

**Node.js ≥ 22** required.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

Quick summary:
- **Standards**: Open an [RFC issue](https://github.com/sane-av/sane-av.github.io/issues/new?template=rfc.yml) first
- **Content**: Submit a [content issue](https://github.com/sane-av/sane-av.github.io/issues/new?template=content_submission.yml) or open a PR directly
- **Equipment data**: Add JSON entries to `src/data/equipment/` following `schema.json`
- **Tools**: Add an `.astro` file to `src/pages/tools/` - client-side JS only

## Standards Process

SANE standards follow an RFC process inspired by the IETF:

1. **Proposal** - Open an RFC issue
2. **Discussion** - Public comment on the issue
3. **Draft PR** - Open a PR with the standards document
4. **14-day review** - Public review period
5. **Ratification** - Merge on consensus

See [sane-av.github.io/rfc](https://sane-av.github.io/rfc) for full details.

## License

- **Code** (site, tools, components): [MIT](LICENSE)
- **Content** (standards, blog, glossary, whitepapers, data): [CC BY 4.0](LICENSE-CONTENT)

