import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  try {
    // אנחנו מושכים את 'posts' כי זה השם שמוגדר ב-config.ts שלך
    const allPosts = await getCollection('posts');
    
    return rss({
      title: 'מצפן הלב - יוסי מדלסי',
      description: 'ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים',
      site: 'https://heartcompass.vercel.app',
      items: allPosts.map((post) => ({
        title: post.data.title,
        // שימוש בשדה date כפי שמופיע ב-config שלך
        pubDate: post.data.date, 
        // שימוש בשדה excerpt כתיאור עבור פינטרסט
        description: post.data.excerpt,
        // יצירת הקישור לפי המבנה המקובל (id ב-Astro 5)
        link: `/articles/${post.id}/`,
      })),
    });
  } catch (error) {
    return rss({
      title: 'מצפן הלב',
      description: 'שגיאה בסנכרון מאמרים',
      site: 'https://heartcompass.vercel.app',
      items: [],
    });
  }
}
