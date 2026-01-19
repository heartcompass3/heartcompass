import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

function getSiteUrl() {
  // Vercel sets these at build-time
  const env = process.env.VERCEL_ENV // 'production' | 'preview' | 'development'
  const vercelUrl = process.env.VERCEL_URL // e.g. heartcompass-xxxx-projects.vercel.app

  // Always keep canonical domain in production sitemaps
  if (env === 'production') return 'https://heartcompass.vercel.app'

  // In Preview, generate sitemap URLs for the preview deployment itself
  if (vercelUrl) return `https://${vercelUrl}`

  // Local/dev fallback
  return 'http://localhost:4321'
}

export default defineConfig({
  site: getSiteUrl(),
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

          // Normalize trailing slashes so comparisons are consistent
          const normalized = pathname.replace(/\/+$/, '') || '/'

          // Exclude test route
          if (normalized === '/sanity-test') return false

          // Exclude legacy redirect aliases
          if (normalized === '/blog') return false

          // Exclude legacy method subroutes (keep /method itself)
          if (normalized.startsWith('/method/')) return false

          return true
        } catch {
          // Never fail sitemap generation
          return true
        }
      },
    }),
  ],
})
