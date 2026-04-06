import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  try {
    const posts = await getCollection('articles');
    
    return rss({
      title: 'מצפן הלב - יוסי מדלסי',
      description: 'ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים',
      site: 'https://heartcompass.vercel.app',
      items: posts.map((post: any) => ({
        title: post.data.title || 'מאמר חדש',
        pubDate: post.data.pubDate || new Date(),
        description: post.data.description || '',
        link: `/articles/${post.id}/`,
      })),
    });
  } catch (error) {
    // במקרה של תקלה בשליפת המאמרים, ייווצר פיד ריק כדי שה-Build לא ייכשל
    return rss({
      title: 'מצפן הלב - בדיקה',
      description: 'פיד זמני - בדיקת תקינות',
      site: 'https://heartcompass.vercel.app',
      items: [],
    });
  }
}
