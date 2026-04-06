import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  try {
    // שליפת כל המאמרים מתיקיית ה-articles
    const posts = await getCollection('articles');
    
    return rss({
      title: 'מצפן הלב - יוסי מדלסי',
      description: 'ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים',
      site: 'https://heartcompass.vercel.app',
      items: posts.map((post: any) => ({
        title: post.data.title || 'מאמר מבית מצפן הלב',
        pubDate: post.data.pubDate || new Date(),
        description: post.data.description || '',
        link: `/articles/${post.id}/`,
      })),
    });
  } catch (error) {
    // הגנה: אם יש תקלה בשליפה, נחזיר את פוסט הבדיקה כדי שהאתר לא יקרוס
    return rss({
      title: 'מצפן הלב',
      description: 'עדכון תוכן בביצוע',
      site: 'https://heartcompass.vercel.app',
      items: [{
        title: 'מערכת ה-RSS פעילה',
        pubDate: new Date(),
        description: 'המאמרים בטעינה',
        link: '/',
      }],
    });
  }
}
