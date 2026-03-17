import type { APIRoute } from 'astro'
import { sanity } from '../lib/sanity'

export const GET: APIRoute = async () => {

  const baseUrl = 'https://heartcompass.vercel.app'

  // מאמרים
  const posts = await sanity.fetch(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `)

  // תחומי התמחות
  const specialties = await sanity.fetch(`
    *[_type == "specialty"]{
      "slug": slug.current,
      _updatedAt
    }
  `)

  // עמודים סטטיים (עם תאריך אמיתי, לא דינמי!)
  const staticPages = [
    { url: '/', lastmod: '2026-03-01' },
    { url: '/about', lastmod: '2026-03-01' },
    { url: '/method', lastmod: '2026-03-01' },
    { url: '/articles', lastmod: '2026-03-01' },
    { url: '/specialties', lastmod: '2026-03-01' }
  ]

  const urls = [
    ...staticPages.map(p => `
      <url>
        <loc>${baseUrl}${p.url}</loc>
        <lastmod>${p.lastmod}</lastmod>
      </url>
    `),

    ...posts.map(post => `
      <url>
        <loc>${baseUrl}/articles/${post.slug}</loc>
        <lastmod>${post._updatedAt}</lastmod>
      </url>
    `),

    ...specialties.map(item => `
      <url>
        <loc>${baseUrl}/specialties/${item.slug}</loc>
        <lastmod>${item._updatedAt}</lastmod>
      </url>
    `)
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
