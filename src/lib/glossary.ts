import { getCollection } from 'astro:content';
import avixaTerms from '../data/glossary/avixa-terms.json';

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  categories: string[];
  abbreviation: string | null;
  relatedTerms: string[];
  hasPage: boolean;
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

/**
 * Load all glossary terms by merging the JSON AVIXA reference data
 * with content-collection .md entries that provide expanded definitions.
 *
 * A .md file whose slug matches a JSON entry overrides that entry's
 * term/category on the detail page and gets a "hasPage" flag on the index.
 *
 * Returns terms sorted alphabetically by term name.
 */
export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
  const mdEntries = await getCollection('glossary');
  const mdBySlug = new Map<string, (typeof mdEntries)[number]>();
  for (const e of mdEntries) {
    mdBySlug.set(e.id, e);
  }

  const merged: GlossaryTerm[] = [];

  for (const t of avixaTerms as JsonTerm[]) {
    const mdEntry = mdBySlug.get(t.slug);
    merged.push({
      term: t.term,
      slug: t.slug,
      definition: t.definition,
      categories: t.categories ?? [t.category ?? 'General'],
      abbreviation: t.abbreviation,
      relatedTerms: t.relatedTerms ?? [],
      hasPage: !!mdEntry,
    });
  }

  for (const e of mdEntries) {
    if (!merged.find((m) => m.slug === e.id)) {
      merged.push({
        term: e.data.term,
        slug: e.id,
        definition: '',
        categories: [e.data.category],
        abbreviation: e.data.abbreviation ?? null,
        relatedTerms: e.data.relatedTerms ?? [],
        hasPage: true,
      });
    }
  }

  merged.sort((a, b) => a.term.localeCompare(b.term));
  return merged;
}

/**
 * Build a lookup map from content-collection glossary entries.
 */
export function buildMdLookup(mdEntries: Awaited<ReturnType<typeof getCollection<'glossary'>>>): Map<string, (typeof mdEntries)[number]> {
  const map = new Map<string, (typeof mdEntries)[number]>();
  for (const e of mdEntries) {
    map.set(e.id, e);
  }
  return map;
}
