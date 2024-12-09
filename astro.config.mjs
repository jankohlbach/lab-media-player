// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: change to final domain
  site: 'https://astro-creative-base.vercel.app',
  integrations: [
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    }),
    sitemap(),
  ],
});
