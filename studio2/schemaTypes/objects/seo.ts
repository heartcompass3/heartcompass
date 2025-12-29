import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת SEO',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'תיאור',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'תמונת OG',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noindex',
      title: 'לא לאנדוקס בגוגל',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical (אם צריך)',
      type: 'url',
    }),
  ],
})
