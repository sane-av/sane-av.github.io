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
  loader: glob({ pattern: "**/!(README|CONTRIBUTING).md", base: "src/content/standards" }),
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

// === Homepage ===
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    features: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        bulletpoints: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

// === Sections ===
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const collections = {
  homepage: homepageCollection,
  blog: blogCollection,
  standards: standardsCollection,
  whitepapers: whitepapersCollection,
  glossary: glossaryCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
  ctaSection: ctaSectionCollection,
  testimonialSection: testimonialSectionCollection,
};
