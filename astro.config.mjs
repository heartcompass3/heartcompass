import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://heartcompass.vercel.app',
  output: 'server',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (url) => {
        const pathname = url.pathname

        // Exclude test route
        if (pathname === '/sanity-test') return false

        // Exclude legacy redirect aliases
        if (pathname === '/blog') return false
        if (pathname.startsWith('/method/')) return false

        return true
      },
    }),
  ],
})
