import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Highlight', value: 'highlight'},
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              defineField({title: 'URL', name: 'href', type: 'url'}),
              defineField({
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              }),
            ],
          },
        ],
      },
    }),

    // בלוק רווח (באותו שדה)
    defineArrayMember({
      name: 'spacer',
      title: 'רווח',
      type: 'object',
      fields: [
        defineField({
          name: 'size',
          title: 'גודל רווח',
          type: 'string',
          options: {
            list: [
              {title: 'קטן', value: 'sm'},
              {title: 'בינוני', value: 'md'},
              {title: 'גדול', value: 'lg'},
            ],
            layout: 'radio',
          },
          initialValue: 'md',
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: {size: 'size'},
        prepare({size}) {
          const label =
            size === 'sm' ? 'רווח קטן' : size === 'lg' ? 'רווח גדול' : 'רווח בינוני'
          return {title: label}
        },
      },
    }),

    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
