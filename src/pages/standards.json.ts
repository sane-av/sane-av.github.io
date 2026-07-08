import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import config from "@/config/config.json";

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(config.site.base_url);
  const standards = await getCollection("standards");

  const entries = standards
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map((entry) => ({
      saneId: entry.data.saneId,
      title: entry.data.title,
      description: entry.data.description,
      status: entry.data.status,
      version: entry.data.version,
      url: new URL(`/standards/${entry.id}/`, site).toString(),
      pubDate: entry.data.pubDate.toISOString(),
      updatedDate: entry.data.updatedDate?.toISOString(),
      authors: entry.data.authors,
      tags: entry.data.tags,
      relatedStandards: entry.data.relatedStandards,
      category: entry.data.category,
      maintainer: entry.data.maintainer,
    }));

  return new Response(JSON.stringify({ standards: entries }, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
