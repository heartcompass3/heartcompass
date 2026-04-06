import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  try {
    const allPosts = await getCollection('posts');
    
    // סינון מאמרים שאין להם תאריך או כותרת כדי למנוע תקלות
    const validPosts = allPosts.filter(post => post.data.title && post.data.date);

    return rss({
      title: 'מצפן הלב - יוסי מדלסי',
      description: 'ליווי רגשי-קוגניטיבי לשחרור דפוסים אוטומטיים',
      site: 'https://heartcompass.vercel.app',
      items: validPosts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        // הוספת הכתובת המלאה כדי שפינטרסט ידע לאן להפנות
        link: `https://heartcompass.vercel.app/articles/${post.id}/`,
      })),
    });
  } catch (error) {
    return rss({
      title: 'מצפן הלב',
      description: 'סנכרון תכנים',
      site: 'https://heartcompass.vercel.app',
      items: [],
    });
  }
}
