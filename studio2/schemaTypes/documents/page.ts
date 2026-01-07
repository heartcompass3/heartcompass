import {defineType, defineField} from 'sanity'

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
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    // היה "תיאור קצר" – עכשיו זה השדה שמזין את הטקסט הזהוב באודות
    defineField({
      name: 'excerpt',
      title: 'פתיחה (הטקסט הזהוב)',
      type: 'text',
      rows: 2,
      description: 'מופיע במסגרת הזהובה בראש הדף.',
    }),

    defineField({
      name: 'heroImage',
      title: 'תמונה (אופציונלי)',
      type: 'image',
      options: {hotspot: true},
      description: 'אם ריק, האתר ישתמש בתמונה הקיימת ולא ישבור עיצוב/אנימציה.',
    }),

    defineField({
      name: 'body',
      title: 'תוכן',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})

export default page
