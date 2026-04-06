import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const articles = await getCollection('articles');
  
  return rss({
    title: "מצפן הלב - יוסי מדלסי",
    description: "ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים",
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title || "מאמר חדש",
      pubDate: post.data.pubDate || new Date(),
      description: post.data.description || "",
      link: `/articles/${post.slug}/`,
    })),
  });
}
