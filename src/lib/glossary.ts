import { getCollection } from "astro:content";

const termFiles = import.meta.glob<{ default: JsonTerm[] }>("../content/glossary/terms/*.json", { eager: true });
const baseTerms: JsonTerm[] = Object.values(termFiles).flatMap((f) => f.default);

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  categories: string[];
  abbreviation: string | null;
  relatedTerms: string[];
  hasPage: boolean;
  redirectTo?: string;
}

interface JsonTerm {
  term: string;
  slug: string;
  definition: string;
  categories?: string[];
  category?: string;
  abbreviation: string | null;
  relatedTerms?: string[];
}

let glossaryCache: GlossaryTerm[] | null = null;

function scoreRelatedTerms(terms: GlossaryTerm[], targetSlug: string, targetCategories: string[]): string[] {
  const scored = terms
    .filter((t) => t.slug !== targetSlug)
    .map((t) => ({
      term: t.term,
      shared: t.categories.filter((c) => targetCategories.includes(c)).length,
    }))
    .filter((t) => t.shared > 0)
    .sort((a, b) => b.shared - a.shared || a.term.localeCompare(b.term))
    .slice(0, 5);
  return scored.map((t) => t.term);
}

export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
  if (glossaryCache) return glossaryCache;
  const mdEntries = await getCollection("glossary");
  const mdBySlug = new Map<string, (typeof mdEntries)[number]>();
  for (const e of mdEntries) {
    mdBySlug.set(e.id, e);
  }

  const merged: GlossaryTerm[] = [];

  for (const t of baseTerms as JsonTerm[]) {
    const mdEntry = mdBySlug.get(t.slug);
    merged.push({
      term: t.term,
      slug: t.slug,
      definition: t.definition,
      categories: t.categories ?? [t.category ?? "General"],
      abbreviation: t.abbreviation,
      relatedTerms: t.relatedTerms ?? [],
      hasPage: !!mdEntry,
      redirectTo: mdEntry?.data.redirectTo,
    });
  }

  for (const e of mdEntries) {
    if (!merged.find((m) => m.slug === e.id)) {
      merged.push({
        term: e.data.term,
        slug: e.id,
        definition: "",
        categories: [e.data.category],
        abbreviation: e.data.abbreviation ?? null,
        relatedTerms: e.data.relatedTerms ?? [],
        hasPage: true,
        redirectTo: e.data.redirectTo,
      });
    }
  }

  merged.sort((a, b) => a.term.localeCompare(b.term));

  for (const term of merged) {
    if (term.hasPage && term.relatedTerms.length === 0) {
      term.relatedTerms = scoreRelatedTerms(merged, term.slug, term.categories);
    }
  }

  glossaryCache = merged;
  return merged;
}

export function getRelatedTerms(slug: string, categories: string[]): string[] {
  const allTerms: GlossaryTerm[] = (baseTerms as JsonTerm[]).map((t) => ({
    term: t.term,
    slug: t.slug,
    definition: t.definition,
    categories: t.categories ?? [t.category ?? "General"],
    abbreviation: t.abbreviation,
    relatedTerms: t.relatedTerms ?? [],
    hasPage: false,
  }));

  const entry = allTerms.find((t) => t.slug === slug);
  if (!entry) return [];

  if (entry.relatedTerms.length > 0) return entry.relatedTerms;

  return scoreRelatedTerms(allTerms, slug, categories);
}
