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
    status: z.enum(["draft", "under-review", "published", "deprecated"]),
    version: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).default(() => []),
    relatedStandards: z.array(z.string()).default(() => []),
    category: z.string().optional(),
    maintainer: z.string().optional(),
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
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    ...commonFields,
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
  }),
});

// === Pages ===
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({ ...commonFields }),
});

// === About ===
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({ ...commonFields }),
});

// === Contact ===
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({ ...commonFields }),
});

export const collections = {
  blog: blogCollection,
  standards: standardsCollection,
  whitepapers: whitepapersCollection,
  glossary: glossaryCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
};
