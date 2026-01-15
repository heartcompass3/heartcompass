import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'מאמר',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'כותרת ראשית',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'כותרת חקירתית וברורה. מגדירה בעיה או תופעה. לא סלוגן ולא הבטחה.',
    }),

    defineField({
      name: 'goldLine',
      title: 'שורת מסגור (זהב)',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
      description:
        'שורת מסגור מקצועית. מבהירה את זווית המאמר. לא רגשית, לא שיווקית.',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'תקציר ענייני',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
      description:
        'תקציר אינפורמטיבי: על מה המאמר, למי הוא רלוונטי, ומה הקורא יבין בסופו. לא טיזר רגשי.',
    }),

    defineField({
      name: 'mainImage',
      title: 'תמונה ראשית',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description:
            'תיאור ענייני של התמונה לטובת נגישות והקשר תוכני. לא פרשנות ולא שיווק.',
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'תאריך פרסום',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'מחבר',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'authorLine',
      title: 'שורת סמכות',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'שורת מיצוב מקצועית שמופיעה לקורא. לדוגמה: יוסי מדלסי · מורה דרך לשחרור דפוסים',
    }),

    defineField({
      name: 'body',
      title: 'גוף המאמר',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      description:
        'מאמר מקצועי, מבוסס תובנות ומחקר. אפשר חיבור אנושי, לא כתיבה פואטית.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'goldLine',
      media: 'mainImage',
    },
  },
})
