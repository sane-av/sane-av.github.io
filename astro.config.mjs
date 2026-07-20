import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharp() },
  vite: { plugins: [tailwindcss()] },
  integrations: [react(), sitemap()],
  markdown: {
    // Astro v7 deprecated markdown.remarkPlugins; the unified() processor from
    // @astrojs/markdown-remark keeps the remark pipeline for our plugins.
    processor: unified({
      remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    }),
    shikiConfig: { theme: "one-dark-pro", wrap: true },
  },
});
