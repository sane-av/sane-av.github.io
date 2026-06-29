# SANE — Society for AV Norms & Engineering

> Open source AV standards, data, and tools for the professional audiovisual industry.

[![License: Apache 2.0](https://img.shields.io/badge/Code-Apache%202.0-blue.svg)](LICENSE)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC%20BY--SA%204.0-lightgrey.svg)](CONTENT-LICENSE.md)

**Website:** https://sane-av.github.io

SANE is building free, open, and transparent standards for professional audiovisual systems.

No membership fees. No paywalls. No gatekeeping.

Are your AV systems SANE?

---

## Architecture

Content lives in separate repos, synced into this site at build time.

| Collection | Repo | License |
|---|---|---|
| Standards | [sane-av/sane-av-standards](https://github.com/sane-av/sane-av-standards) | CC BY-SA 4.0 |
| Blog | [sane-av/sane-av-blog](https://github.com/sane-av/sane-av-blog) | CC BY-SA 4.0 |
| Whitepapers | [sane-av/sane-av-whitepapers](https://github.com/sane-av/sane-av-whitepapers) | CC BY-SA 4.0 |
| Glossary | [sane-av/sane-av-glossary](https://github.com/sane-av/sane-av-glossary) | CC BY-SA 4.0 |
| Equipment | [sane-av/sane-av-equipment-list](https://github.com/sane-av/sane-av-equipment-list) | CC BY-SA 4.0 |

The site rebuilds on every push to `main` and daily at midnight UTC, so content changes appear within 24 hours without a manual deploy.

---

## Contributing

Everything starts at [sane-av.github.io/contributing](https://sane-av.github.io/contributing).

| I want to... | Go here |
|---|---|
| Propose a new standard | [Start an RFC](https://github.com/sane-av/sane-av.github.io/issues/new?template=rfc.yml) |
| Submit a whitepaper | [Open a proposal](https://github.com/sane-av/sane-av-whitepapers/issues/new?template=new-whitepaper.yml) |
| Add or edit a glossary term | [New term](https://github.com/sane-av/sane-av-glossary/issues/new?template=new-term.yml) or [edit term](https://github.com/sane-av/sane-av-glossary/issues/new?template=edit-term.yml) |
| Submit equipment data | [New entry](https://github.com/sane-av/sane-av-equipment-list/issues/new?template=new-equipment.yml) |
| Report a site bug | [Bug report](https://github.com/sane-av/sane-av.github.io/issues/new?template=bug.yml) |
| Write a blog post | Blog is editor-maintained — reach out to the [SANE team](https://github.com/sane-av) |

---

## Standards Process

SANE standards follow an RFC process inspired by the IETF:

1. **Proposal** — Open an RFC issue on this repo
2. **Discussion** — Public comment and refinement
3. **Draft PR** — Submit a PR with the standards document to `sane-av/sane-av-standards`
4. **60-day review** — Public review period; major changes restart the clock
5. **Ratification** — Merge on rough consensus

---

## Support

SANE is funded by community donations. Sponsors help cover infrastructure, legal review, and maintainer time.

- [Sponsor us on GitHub Sponsors](https://github.com/sponsors/sane-av)

---

## License

- **Code** (site, tools, components): [Apache 2.0](LICENSE)
- **Content** (standards, blog, whitepapers, glossary, data): [CC BY-SA 4.0](CONTENT-LICENSE.md)
- **Trademarks** (SANE name, logo, certification marks): See [NOTICE](NOTICE) — not open-licensed
