import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const articles = await getCollection('articles');
  return rss({
    title: "מצפן הלב - יוסי מדלסי",
    description: "ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים",
    site: 'https://heartcompass.vercel.app', // הגדרת כתובת ישירה כאן
    items: articles.map((post) => ({
      title: post.data.title || "מאמר",
      pubDate: post.data.pubDate || new Date(),
      description: post.data.description || "",
      link: `/articles/${post.slug}/`,
    })),
  });
}
