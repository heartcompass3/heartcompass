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
        try {
          const pathname =
            typeof url === 'string'
              ? new URL(url).pathname
              : url?.pathname

          if (!pathname) return true

          // Exclude test route
          if (pathname === '/sanity-test') return false

          // Exclude legacy redirect aliases
          if (pathname === '/blog') return false
          if (pathname.startsWith('/method/')) return false

          return true
        } catch {
          // Never fail sitemap generation
          return true
        }
      },
    }),
  ],
})
