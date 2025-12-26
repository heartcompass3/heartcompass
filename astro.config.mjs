import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://heartcompass.co.il',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    keystatic(),
  ],
});
