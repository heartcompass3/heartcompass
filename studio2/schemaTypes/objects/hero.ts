import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'תגית עליונה',
      type: 'string',
    }),
    defineField({
      name: 'titleLine1',
      title: 'כותרת שורה ראשונה',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleLine2',
      title: 'כותרת שורה שנייה',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'שורת הזמנה',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      title: 'פסקת פתיחה',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ctaText',
      title: 'טקסט כפתור',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'קישור כפתור',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'תמונת Hero',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
