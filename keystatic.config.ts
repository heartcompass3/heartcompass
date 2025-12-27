// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  ui: {
    brand: { name: 'מצפן הלב' },
    navigation: {
      תוכן: ['site', 'pages', 'posts', 'guides'],
    },
  },

  singletons: {
    site: singleton({
      label: 'הגדרות אתר',
      path: 'src/content/site',
      schema: {
        siteUrl: fields.url({ label: 'כתובת אתר', defaultValue: 'https://heartcompass.co.il' }),
        brand: fields.text({ label: 'שם המותג', defaultValue: 'מצפן הלב' }),
        fullName: fields.text({ label: 'שם מלא', defaultValue: 'יוסי מדלסי' }),
        tagline: fields.text({ label: 'תג לוגו', defaultValue: 'אימון רגשי תודעתי' }),

        heroBadge: fields.text({ label: 'תגית עליונה', defaultValue: 'משנים דפוסים מהשורש' }),
        heroTitleLine1: fields.text({ label: 'כותרת שורה 1', defaultValue: 'לבחור מתוך תשוקה,' }),
        heroTitleLine2: fields.text({ label: 'כותרת שורה 2', defaultValue: 'לא מתוך הפחד.' }),
        heroSubheadline: fields.text({
          label: 'תת כותרת',
          defaultValue: 'תהליך עומק לשחרור חסמים, מציאת זוגיות ופריצת דרך בקריירה ועסקים',
        }),
        heroDescription: fields.text({
          label: 'פסקת פתיחה',
          multiline: true,
          defaultValue:
            'התשובות כבר קיימות אצלך, אבל הרעש של הפחד והריצוי מסתיר אותן. במצפן הלב אנחנו מנמיכים את הרעש, ומשחררים את החסם כדי שתוכל להתקדם.',
        }),

        primaryCtaLabel: fields.text({ label: 'טקסט כפתור ראשי', defaultValue: "בוא נדבר תכל'ס" }),
        primaryCtaHref: fields.text({ label: 'קישור כפתור ראשי', defaultValue: '/contact' }),

        whatsAppPhone: fields.text({ label: 'טלפון וואטסאפ (ללא +)', defaultValue: '972544580285' }),
        whatsAppDefaultMessage: fields.text({
          label: 'הודעת וואטסאפ ברירת מחדל',
          defaultValue: 'היי יוסי, אני רוצה לשאול כמה שאלות לפני שנקבע שיחה.',
        }),
        whatsAppQuickQuestions: fields.array(fields.text({ label: 'שאלה' }), {
          label: 'שאלות מהירות',
          itemLabel: (props) => props.value || 'שאלה',
        }),
      },
    }),
  },

  collections: {
    pages: collection({
      label: 'דפים',
      path: 'src/content/pages/*',
      slugField: 'slug',
      format: { contentField: 'body' },
      schema: {
        title: fields.text({ label: 'כותרת' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        description: fields.text({ label: 'תיאור (SEO)', multiline: true }),
        hidden: fields.checkbox({ label: 'מוחבא מהתפריט', defaultValue: false }),
        body: fields.markdoc({ label: 'תוכן', extension: 'md' }),
      },
    }),

    posts: collection({
      label: 'מאמרים',
      path: 'src/content/posts/*',
      slugField: 'slug',
      format: { contentField: 'body' },
      schema: {
        title: fields.text({ label: 'כותרת' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        date: fields.date({ label: 'תאריך' }),
        excerpt: fields.text({ label: 'תקציר', multiline: true }),
        coverImage: fields.image({
          label: 'תמונת קאבר',
          directory: 'public/uploads',
          publicPath: '/uploads',
        }),
        tags: fields.array(fields.text({ label: 'תגית' }), { label: 'תגיות' }),
        body: fields.markdoc({ label: 'תוכן', extension: 'md' }),
      },
    }),

    guides: collection({
      label: 'מדריכים',
      path: 'src/content/guides/*',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'כותרת' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        description: fields.text({ label: 'תיאור (SEO)', multiline: true }),
        file: fields.file({
          label: 'קובץ (PDF/אודיו)',
          directory: 'public/files',
          publicPath: '/files',
        }),
      },
    }),
  },
});
