// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Set `site` to your GitHub Pages URL: https://<org>.github.io or https://<org>.github.io/<repo>
export default defineConfig({
  site: 'https://sane-av.github.io',
  integrations: [mdx(), sitemap()],
  output: 'static',
});