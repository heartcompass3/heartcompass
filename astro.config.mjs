import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),

  integrations: [
    react(),
    markdoc(),
    keystatic(),
  ],

  vite: {
    // prevent "process is not defined" during keystatic hydration
    define: {
      'process.env': {},
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
    },
  },
});
