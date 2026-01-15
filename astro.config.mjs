import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://heartcompass.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
})
