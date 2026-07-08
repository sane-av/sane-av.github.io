import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getGlossaryTerms } from "../lib/glossary";
import config from "@/config/config.json";

interface SearchEntry {
  title: string;
  url: string;
  type: string;
  snippet: string;
  tags: string[];
  text: string;
}

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(config.site.base_url);
  const entries: SearchEntry[] = [];

  const standards = await getCollection("standards");
  for (const s of standards) {
    entries.push({
      title: `${s.data.saneId}: ${s.data.title}`,
      url: new URL(`/standards/${s.id}/`, site).toString(),
      type: "Standard",
      snippet: s.data.description,
      tags: [...s.data.tags, s.data.status],
      text: s.body ?? "",
    });
  }

  const blogPosts = await getCollection("blog", (e) => !e.data.draft);
  for (const p of blogPosts) {
    entries.push({
      title: p.data.title,
      url: new URL(`/blog/${p.id}/`, site).toString(),
      type: "Blog",
      snippet: p.data.description,
      tags: p.data.tags,
      text: p.body ?? "",
    });
  }

  const glossaryTerms = await getGlossaryTerms();
  const glossaryMds = await getCollection("glossary");
  const mdBySlug = new Map(glossaryMds.map((e) => [e.id, e]));
  for (const t of glossaryTerms) {
    const md = mdBySlug.get(t.slug);
    entries.push({
      title: t.abbreviation ? `${t.abbreviation} (${t.term})` : t.term,
      url: t.hasPage
        ? new URL(`/glossary/${t.slug}/`, site).toString()
        : new URL(`/glossary/?search=${encodeURIComponent(t.term)}`, site).toString(),
      type: "Glossary",
      snippet: t.definition,
      tags: t.categories,
      text: md?.body ?? t.definition,
    });
  }

  const equipmentFiles = import.meta.glob<{ default: unknown[] }>("../data/equipment/*.json", { eager: true });
  const equipment = Object.entries(equipmentFiles)
    .filter(([path]) => !path.endsWith("schema.json"))
    .flatMap(([, f]) => (Array.isArray(f.default) ? f.default : [])) as Array<{
      manufacturer: string;
      model: string;
      category: string;
      tags: string[];
      notes?: string;
      specs: Record<string, string>;
    }>;
  for (const e of equipment) {
    const specText = Object.entries(e.specs ?? {}).map(([k, v]) => `${k}: ${v}`).join(", ");
    entries.push({
      title: `${e.manufacturer} ${e.model}`,
      url: new URL(`/equipment/`, site).toString(),
      type: "Equipment",
      snippet: `${e.manufacturer} ${e.model} - ${e.category}`,
      tags: [...e.tags, e.category],
      text: `${e.manufacturer} ${e.model} ${e.category} ${specText} ${e.notes ?? ""}`,
    });
  }

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
}
