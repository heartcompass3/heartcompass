import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  return rss({
    title: "מצפן הלב - יוסי מדלסי",
    description: "ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים",
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/articles/${post.slug}/`,
    })),
  });
}