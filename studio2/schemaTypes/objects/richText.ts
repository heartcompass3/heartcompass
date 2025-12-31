import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'richText',
  title: 'תוכן עומק',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'טקסט',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
