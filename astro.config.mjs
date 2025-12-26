import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://heartcompass.co.il',
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    keystatic(),
  ],
});
