import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// === Common fields ===
const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
};

// === Blog ===
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/!(README|CONTRIBUTING).{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default("SANE"),
    authors: z.array(z.string()).optional(),
    categories: z.array(z.string()).default(() => ["others"]),
    tags: z.array(z.string()).default(() => ["others"]),
    draft: z.boolean().default(false),
  }),
});

// === Standards ===
const standardsCollection = defineCollection({
  loader: glob({ pattern: "**/!(README|CONTRIBUTING).md", base: "src/content/standards/specs" }),
  schema: z.object({
    saneId: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "under-review", "published", "deprecated", "superseded"]),
    version: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).default(() => []),
    relatedStandards: z.array(z.string()).default(() => []),
    category: z.string().optional(),
    type: z.enum(["specification", "practice", "terminology", "reference", "informational"]).optional(),
    maintainer: z.string().optional(),
    updates: z.array(z.string()).default(() => []),
    obsoletes: z.array(z.string()).default(() => []),
    supersededBy: z.array(z.string()).default(() => []),
  }),
});

// === Whitepapers ===
const whitepapersCollection = defineCollection({
  loader: glob({ pattern: "**/!(README|CONTRIBUTING).{md,mdx}", base: "src/content/whitepapers" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default("SANE"),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).default(() => []),
    draft: z.boolean().default(false),
  }),
});

// === Glossary ===
const glossaryCollection = defineCollection({
  loader: glob({ pattern: "**/!(README|CONTRIBUTING).md", base: "src/content/glossary" }),
  schema: z.object({
    term: z.string(),
    abbreviation: z.string().optional(),
    category: z.string(),
    relatedTerms: z.array(z.string()).default(() => []),
    redirectTo: z.string().optional(),
  }),
});

// === Authors ===
// (removed — author pages were Astroplate demo content; cards render authors as plain text)

// === Pages ===
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({ ...commonFields }),
});

export const collections = {
  blog: blogCollection,
  standards: standardsCollection,
  whitepapers: whitepapersCollection,
  glossary: glossaryCollection,
  pages: pagesCollection,
};
