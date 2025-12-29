import { defineType, defineField } from 'sanity'

const page = defineType({
  name: 'page',
  title: 'דף',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'כתובת (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'תיאור קצר (אופציונלי)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'תוכן',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})

export default page
