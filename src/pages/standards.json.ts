import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://sane-av.github.io");
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
    }));

  return new Response(JSON.stringify({ standards: entries }, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
