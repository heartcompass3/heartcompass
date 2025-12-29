import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'הגדרות אתר',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'שם מסמך',
      type: 'string',
      initialValue: 'מצפן הלב',
    }),
    defineField({
      name: 'nav',
      title: 'תפריט',
      type: 'array',
      of: [{ type: 'navItem' }],
    }),
  ],
})
