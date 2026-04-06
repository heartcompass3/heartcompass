import rss from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'מצפן הלב',
    description: 'בדיקת תקינות מערכת',
    site: 'https://heartcompass.vercel.app',
    items: [{
      title: 'פוסט בדיקה',
      pubDate: new Date(),
      description: 'המערכת הוקמה בהצלחה',
      link: '/',
    }],
  });
}