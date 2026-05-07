import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'methodPage',
  title: 'השיטה (מ.ס.ע)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת פנימית (לניהול בלבד)',
      type: 'string',
      initialValue: 'השיטה (מ.ס.ע)',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'headlineLine1',
          title: 'כותרת ראשית שורה 1 (H1)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'headlineLine2',
          title: 'כותרת ראשית שורה 2 (H1) (אופציונלי)',
          type: 'string',
        }),
        defineField({
          name: 'subheadline',
          title: 'שורת זהב מתחת לכותרת',
          type: 'text',
          rows: 2,
          description: 'משפט אחד קצר שמגדיר כיוון, לא מסביר.',
        }),
        defineField({
          name: 'intro',
          title: 'פתיחה קצרה (אופציונלי)',
          type: 'text',
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: 'interludeImage',
      title: 'תמונה – נשימה באמצע הדרך',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'טקסט חלופי (Alt)',
          type: 'string',
          description: 'מומלץ ל-SEO ולנגישות',
        }),
        defineField({
          name: 'caption',
          title: 'כיתוב קטן (אופציונלי)',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'body',
      title: 'תוכן הדף (מאמר רציף)',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'מדביקים כאן את הטקסט כרצף. כותרות פרקים מסמנים כ-Heading 2.',
    }),

    defineField({
      name: 'msa',
      title: 'מ.ס.ע – הליבה',
      type: 'object',
      fields: [
        defineField({
          name: 'intro',
          title: 'משפט פתיחה קצר (אופציונלי)',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'steps',
          title: 'שלבים (חייב בדיוק 3)',
          type: 'array',
          validation: (Rule) => Rule.required().min(3).max(3),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'letter',
                  title: 'אות (מ / ס / ע)',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'כותרת',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'הסבר',
                  type: 'array',
                  of: [{type: 'block'}],
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'exampleTitle',
                  title: 'כותרת דוגמה',
                  type: 'string',
                  initialValue: 'דוגמה מהחיים',
                }),
                defineField({
                  name: 'example',
                  title: 'דוגמה מהחיים',
                  type: 'array',
                  of: [{type: 'block'}],
                }),
              ],
              preview: {
                select: {t: 'title', l: 'letter'},
                prepare({t, l}) {
                  return {title: `${l}. ${t}`}
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'כותרת', type: 'string'}),
        defineField({name: 'text', title: 'טקסט', type: 'text', rows: 3}),
        defineField({name: 'buttonLabel', title: 'טקסט כפתור', type: 'string'}),
        defineField({name: 'buttonHref', title: 'קישור כפתור', type: 'string'}),
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],

  initialValue: {
    hero: {
      headlineLine1: 'שיטת מ.ס.ע',
      headlineLine2: 'לצאת מהלופ ולחזור לעצמך',
      subheadline: 'תהליך רגשי תודעתי שמחזיר בהירות ושקט מבפנים.',
      intro: '',
    },
    cta: {
      title: 'רוצה לבדוק אם זה מתאים?',
      text: 'אפשר לדבר כמה דקות, להבין איפה אתה נמצא עכשיו, ולבדוק אם מ.ס.ע היא הדרך הנכונה עבורך.',
      buttonLabel: 'יוסי, בוא נבדוק התאמה',
      buttonHref: '',
    },
  },
})
