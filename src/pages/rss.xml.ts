import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://sane-av.github.io");

  const [blogPosts, standards] = await Promise.all([
    getCollection("blog", (entry) => !entry.data.draft),
    getCollection("standards"),
  ]);

  const items = [
    ...blogPosts.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      link: `/blog/${entry.id}/`,
      pubDate: entry.data.pubDate,
      author: (entry.data.authors ?? [entry.data.author]).join(", "),
      categories: entry.data.tags,
    })),
    ...standards.map((entry) => ({
      title: `${entry.data.saneId}: ${entry.data.title}`,
      description: entry.data.description,
      link: `/standards/${entry.id}/`,
      pubDate: entry.data.pubDate,
      author: entry.data.authors.join(", "),
      categories: [...entry.data.tags, entry.data.status],
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "SANE - Society for AV Norms & Engineering",
    description: "Open source AV standards, data, and tools.",
    site,
    items,
    customData: "<language>en-us</language>",
  });
}
