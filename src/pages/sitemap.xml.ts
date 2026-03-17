import type { APIRoute } from 'astro'
import { sanity } from '../lib/sanity'

export const GET: APIRoute = async () => {

  const baseUrl = 'https://heartcompass.vercel.app'

  const posts = await sanity.fetch(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `)

  const staticPages = [
    { url: '/', lastmod: new Date().toISOString() },
    { url: '/about', lastmod: new Date().toISOString() },
    { url: '/method', lastmod: new Date().toISOString() },
    { url: '/articles', lastmod: new Date().toISOString() }
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