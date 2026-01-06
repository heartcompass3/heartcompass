import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'cardGrid',
  title: 'כרטיסים',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'כרטיסים',
      type: 'array',
      validation: (Rule) => Rule.max(3).warning('מומלץ 3 כרטיסים'),
      of: [
        {
          name: 'card',
          title: 'כרטיס',
          type: 'object',
          fields: [
            {name: 'title', title: 'כותרת', type: 'string'},
            {name: 'text', title: 'טקסט קצר', type: 'text', rows: 3},
            {name: 'link', title: 'קישור', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
