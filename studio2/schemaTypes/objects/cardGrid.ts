import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'cardGrid',
  title: 'כרטיסים',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת החלק',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'כרטיסים',
      type: 'array',
      of: [
        defineField({
          name: 'card',
          type: 'object',
          fields: [
            {name: 'title', title: 'כותרת', type: 'string'},
            {name: 'text', title: 'טקסט קצר', type: 'text', rows: 3},
            {name: 'link', title: 'קישור', type: 'string'},
          ],
        }),
      ],
    }),
  ],
})
