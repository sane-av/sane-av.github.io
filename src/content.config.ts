import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const standards = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/standards' }),
  schema: z.object({
    saneId: z.string(),        // e.g. "SANE-001"
    title: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'review', 'published', 'deprecated']),
    version: z.string(),       // e.g. "1.0.0"
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    relatedStandards: z.array(z.string()).default([]),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    abbreviation: z.string().optional(),
    category: z.string(),
    relatedTerms: z.array(z.string()).default([]),
    redirectTo: z.string().optional(), // slug of canonical entry, e.g. "635mm-phone-connector"
  }),
});

const whitepapers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/whitepapers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, standards, glossary, whitepapers };
