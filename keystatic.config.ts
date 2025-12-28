import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  // חשוב: זה מה שמאפשר שמירה בפרודקשן (Vercel) באמצעות commit ל-GitHub
  storage: {
    kind: 'github',
    repo: 'heartcompass3/heartcompass',
    branch: 'main',
  },

  ui: {
    brandName: 'מצפן הלב',
  },

  singletons: {
    site: singleton({
      label: 'הגדרות אתר',
      path: 'src/content/site',
      schema: {
        siteUrl: fields.text({ label: 'כתובת האתר', validation: { isRequired: true } }),
        brand: fields.text({ label: 'שם המותג', validation: { isRequired: true } }),
        fullName: fields.text({ label: 'שם מלא', validation: { isRequired: true } }),

        // Hero
        heroBadge: fields.text({ label: 'תגית עליונה' }),
        heroTitleLine1: fields.text({ label: 'כותרת שורה 1', validation: { isRequired: true } }),
        heroTitleLine2: fields.text({ label: 'כותרת שורה 2' }),
        heroSubheadline: fields.text({ label: 'תת כותרת' }),
        heroDescription: fields.text({
          label: 'תיאור קצר בדף הבית',
          multiline: true,
        }),

        // CTA
        primaryCtaText: fields.text({ label: 'טקסט כפתור ראשי', validation: { isRequired: true } }),
        primaryCtaLink: fields.text({ label: 'קישור כפתור ראשי', validation: { isRequired: true } }),

        // Social / Contact
        whatsappNumber: fields.text({ label: 'מספר וואטסאפ (רק ספרות)' }),
        instagramUrl: fields.text({ label: 'קישור אינסטגרם' }),
      },
    }),
  },

  collections: {
    pages: collection({
      label: 'דפים',
      slugField: 'slug',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'כותרת', validation: { isRequired: true } }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        description: fields.text({ label: 'תיאור קצר', multiline: true }),
        seoTitle: fields.text({ label: 'SEO Title' }),
        seoDescription: fields.text({ label: 'SEO Description', multiline: true }),
        content: fields.document({
          label: 'תוכן הדף',
          formatting: {
            headingLevels: [2, 3, 4],
            blockTypes: {
              blockquote: true,
              code: false,
            },
            inlineMarks: {
              bold: true,
              italic: true,
              code: false,
              strikethrough: false,
              underline: false,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
          },
        }),
        isDraft: fields.checkbox({ label: 'טיוטה' }),
      },
    }),

    posts: collection({
      label: 'מאמרים',
      slugField: 'slug',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'כותרת', validation: { isRequired: true } }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        excerpt: fields.text({ label: 'תקציר', multiline: true }),
        publishedAt: fields.date({ label: 'תאריך פרסום' }),
        tags: fields.array(fields.text({ label: 'תג' }), { label: 'תגיות', itemLabel: (p) => p.value }),
        content: fields.document({
          label: 'תוכן המאמר',
          formatting: {
            headingLevels: [2, 3, 4],
            blockTypes: {
              blockquote: true,
              code: false,
            },
            inlineMarks: {
              bold: true,
              italic: true,
              code: false,
              strikethrough: false,
              underline: false,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
          },
        }),
        isDraft: fields.checkbox({ label: 'טיוטה' }),
      },
    }),

    guides: collection({
      label: 'מדריכים',
      slugField: 'slug',
      path: 'src/content/guides/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'כותרת', validation: { isRequired: true } }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        summary: fields.text({ label: 'סיכום קצר', multiline: true }),
        content: fields.document({
          label: 'תוכן המדריך',
          formatting: {
            headingLevels: [2, 3, 4],
            blockTypes: { blockquote: true, code: false },
            inlineMarks: { bold: true, italic: true, code: false, underline: false, strikethrough: false },
            listTypes: { ordered: true, unordered: true },
          },
        }),
        isDraft: fields.checkbox({ label: 'טיוטה' }),
      },
    }),
  },
});
