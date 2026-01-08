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
          name: 'headline',
          title: 'כותרת ראשית (H1)',
          type: 'string',
          validation: (Rule) => Rule.required(),
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

    // ✅ חדש: תמונת נשימה באמצע הדרך
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

    // ✅ חדש: מאמר רציף
    defineField({
      name: 'body',
      title: 'תוכן הדף (מאמר רציף)',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'מדביקים כאן את הטקסט כרצף. כותרות פרקים מסמנים כ-Heading 2.',
    }),

    // --- תאימות אחורה (אם יש אצלך כבר תוכן ישן) ---
    defineField({
      name: 'pain',
      title: 'הכאב והמציאות (תאימות אחורה)',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'כותרת סקשן', type: 'string'}),
        defineField({name: 'body', title: 'טקסט', type: 'array', of: [{type: 'block'}]}),
      ],
    }),

    defineField({
      name: 'bridge',
      title: 'גשר לשיטה (תאימות אחורה)',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'כותרת סקשן', type: 'string'}),
        defineField({name: 'body', title: 'טקסט', type: 'array', of: [{type: 'block'}]}),
      ],
    }),

    defineField({
      name: 'msa',
      title: 'מ.ס.ע – הליבה (תאימות אחורה)',
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

    // ✅ מחזירים כדי להעלים את אזהרת Unknown fields
    defineField({
      name: 'examples',
      title: 'דוגמאות לפי כאבים (SEO + הזדהות)',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'כותרת', type: 'string'}),
        defineField({name: 'items', title: 'דוגמאות', type: 'array', of: [{type: 'object', fields: [
          defineField({name: 'title', title: 'כותרת', type: 'string'}),
          defineField({name: 'body', title: 'טקסט', type: 'array', of: [{type: 'block'}]}),
        ]}]}),
      ],
    }),

    defineField({
      name: 'links',
      title: 'קישורים לתחומי התמחות',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'כותרת', type: 'string'}),
        defineField({
          name: 'items',
          title: 'קישורים',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'כותרת', type: 'string'}),
                defineField({name: 'href', title: 'קישור', type: 'string'}),
              ],
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
      headline: 'שיטת מ.ס.ע – דרך פשוטה לעשות סדר פנימי',
      subheadline: 'תהליך רגשי תודעתי שמחזיר בהירות ושקט פנימי.',
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
