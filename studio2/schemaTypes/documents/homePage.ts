import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'דף בית',
  type: 'document',

  // Singleton: רק עדכון ופרסום
  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),

    defineField({
      name: 'h1Title',
      title: 'כותרת H1 (מתחת להירו)',
      type: 'string',
      initialValue: 'תהליכי ברור',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bridgeText',
      title: 'פסקת גשר (פחד מול תשוקה)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'cardGrid',
      title: '3 תחומים (Grid)',
      type: 'cardGrid',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'methodSection',
      title: 'סקשן קצר על השיטה',
      type: 'richText',
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'faq',
    }),

    defineField({
      name: 'bottomCta',
      title: 'CTA תחתון',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'טקסט כפתור',
          type: 'string',
          initialValue: 'בוא נדבר תכל׳ס',
        }),
        defineField({
          name: 'href',
          title: 'קישור',
          type: 'url',
        }),
      ],
    }),

    // Variant B: עתידי מוכן להתרחבות
    defineField({
      name: 'future',
      title: 'עתידי (מוכן להתרחבות)',
      type: 'object',
      fields: [
        defineField({
          name: 'testimonials',
          title: 'המלצות (עתידי)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'שם', type: 'string' },
                { name: 'text', title: 'טקסט', type: 'text', rows: 3 },
              ],
            },
          ],
        }),
        defineField({
          name: 'secondarySections',
          title: 'סקשנים נוספים (עתידי)',
          type: 'array',
          of: [{ type: 'richText' }],
        }),
      ],
    }),
  ],
})
