import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'תגית קטנה',
      type: 'string',
    }),

    defineField({
      name: 'titleLine1',
      title: 'כותרת שורה 1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleLine2',
      title: 'כותרת שורה 2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleLine3',
      title: 'כותרת שורה 3',
      type: 'string',
      description: 'כדי שהכותרת הגדולה תישבר ל־3 שורות בדיוק',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subheadline',
      title: 'תת כותרת',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'תיאור',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'primaryCtaLabel',
      title: 'CTA ראשי טקסט',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'CTA ראשי קישור',
      type: 'url',
    }),
  ],
})
