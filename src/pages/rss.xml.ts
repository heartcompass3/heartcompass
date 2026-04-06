import rss from '@astrojs/rss';
import { sanity } from '../lib/sanity';
import { ARTICLES_QUERY } from '../lib/sanityQueries';

export async function GET() {
  try {
    // משיכת המאמרים מ-Sanity לפי השאילתה הקיימת באתר
    const articles = await sanity.fetch(ARTICLES_QUERY);

    return rss({
      title: 'מצפן הלב - יוסי מדלסי',
      description: 'תובנות, מחקר וכלים לשחרור דפוסים ולתנועה פנימית קדימה.',
      site: 'https://heartcompass.vercel.app',
      items: articles.map((a: any) => ({
        title: a.title || 'מאמר ללא כותרת',
        // שימוש בשדה publishedAt כפי שמופיע ב-ARTICLES_QUERY
        pubDate: a.publishedAt ? new Date(a.publishedAt) : new Date(),
        description: a.excerpt || '',
        // בניית הקישור המדויק לפי ה-slug מתוך Sanity
        link: `https://heartcompass.vercel.app/articles/${a.slug?.current || ''}/`,
      })),
    });
  } catch (error) {
    // במקרה של שגיאה טכנית, נחזיר פיד ריק כדי שה-Build של האתר לא ייכשל
    return rss({
      title: 'מצפן הלב',
      description: 'סנכרון תכנים בתהליך',
      site: 'https://heartcompass.vercel.app',
      items: [],
    });
  }
}
