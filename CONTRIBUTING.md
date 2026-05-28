# Contributing to SANE

Thank you for your interest in contributing to SANE - Society for AV Norms & Engineering.
All contributions, large and small, are welcome.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Proposing a Standard (RFC Process)](#proposing-a-standard-rfc-process)
- [Content Contributions](#content-contributions)
- [Equipment Database](#equipment-database)
- [Tools & Calculators](#tools--calculators)
- [Commit & PR Guidelines](#commit--pr-guidelines)
- [License](#license)

## Code of Conduct

SANE follows the [Contributor Covenant v2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Be respectful, constructive, and assume good faith. Technical disagreements are welcome;
personal attacks are not.

## Ways to Contribute

### Propose or Improve a Standard

Open a [GitHub issue using the RFC template](https://github.com/sane-av/sane-av/issues/new?template=rfc.yml).
See the [RFC Process](#proposing-a-standard-rfc-process) section for the full workflow.

### Add Glossary Terms

Add a Markdown file to `src/content/glossary/`. File name should be the term in kebab-case
(e.g. `gain-structure.md`). Follow the frontmatter schema in `src/content.config.ts`.

### Write a Blog Post

Add a Markdown or MDX file to `src/content/blog/`. Follow the frontmatter schema.
Blog posts should be relevant to professional AV, open standards, or the SANE community.

### Submit a Whitepaper

Add a Markdown or MDX file to `src/content/whitepapers/`. Whitepapers should be
substantive technical documents, not product promotions.

### Add Equipment Data

Add JSON entries to the appropriate file in `src/data/equipment/` (or create a new file
for a new category). All entries must conform to `src/data/equipment/schema.json`.
Specs must be sourced from official manufacturer documentation - include the source URL
in the `notes` field.

### Build a Tool

Add an Astro page to `src/pages/tools/`. Tools must be:
- Client-side only (no server required)
- Self-contained in a single `.astro` file
- Technically accurate
- Free of dependencies on proprietary libraries

### Fix Bugs or Improve the Site

Open an issue or PR for any site bugs, accessibility issues, or design improvements.

## Development Setup

```bash
git clone https://github.com/sane-av/sane-av.git
cd sane-av
npm install
npm run dev     # dev server at http://localhost:4321
npm run build   # production build to dist/
npm run preview # preview the production build
```

**Requirements:** Node.js ≥ 22, npm ≥ 10

## Proposing a Standard (RFC Process)

1. **Open an RFC issue** using the [RFC template](https://github.com/sane-av/sane-av/issues/new?template=rfc.yml)
2. **Community discussion** happens on the issue - typically 14+ days
3. **Open a draft PR** once rough consensus is reached, adding a Markdown document to
   `src/content/standards/` following the SANE-001 document as a template
4. **14-day review period** - the PR must be open for at least 14 days with no blocking objections
5. **Merge** - a maintainer merges the PR and the standard is published

**Guiding principles:**
- Rough consensus, not unanimity
- Technical merit backed by evidence
- No IP encumbrances - freely implementable without licensing fees
- Plain English - write for the working AV professional

## Content Contributions

### Frontmatter Requirements

Each content type has a required frontmatter schema defined in `src/content.config.ts`.
Your PR will fail CI if the frontmatter is invalid.

### Attribution

If you are adapting or quoting existing work, include attribution inline and in the PR
description. All content must be compatible with CC BY 4.0.

## Equipment Database

Equipment entries follow the JSON schema in `src/data/equipment/schema.json`.

**Required fields:** `id`, `manufacturer`, `model`, `category`, `specs`, `tags`

**ID format:** `{category-prefix}-{sequential-number}`, e.g. `amp-042`

**Specs:** Key-value pairs where all values are strings. Keep key names consistent with
existing entries in the same category.

**No commercial bias:** Do not add entries for the purpose of promoting specific products.
Data should be accurate and complete regardless of brand.

## Commit & PR Guidelines

- Use [Conventional Commits](https://www.conventionalcommits.org/) style:
  - `feat(glossary): add dBFS entry`
  - `fix(tools): correct SPL formula`
  - `docs(standards): publish SANE-003`
  - `data(equipment): add Crown DCi entries`
- One logical change per PR - keep diffs small and focused
- PR descriptions should explain *what* and *why*, not just *what*

## License

By contributing to this repository, you agree that:
- Your **code contributions** are licensed under [MIT](LICENSE)
- Your **content contributions** (standards, blog posts, glossary, whitepapers, data) are
  licensed under [CC BY 4.0](LICENSE-CONTENT)
