// studio2/schemaTypes/documents/homePage.ts
import {defineType, defineField} from 'sanity'

// שימוש באובייקטים קיימים בלבד
import hero from '../objects/hero'
import cardGrid from '../objects/cardGrid'
import faq from '../objects/faq'
import seo from '../objects/seo'
import msaSection from '../objects/msaSection'
import msaGrid from '../objects/msaGrid'

export default defineType({
  name: 'homePage',
  title: 'דף בית',
  type: 'document',

  // סינגלטון: לא מאפשרים ליצור/למחוק, רק לערוך ולפרסם
  __experimental_actions: ['update', 'publish'],

  groups: [
    {name: 'seo', title: 'SEO'},
    {name: 'hero', title: 'Hero'},
    {name: 'content', title: 'תוכן'},
    {name: 'msa', title: 'מודל מ.ס.ע'},
    {name: 'faq', title: 'FAQ'},
    {name: 'bottom', title: 'CTA תחתון'},
    {name: 'legacy', title: 'Legacy (מוסתר)'},
  ],

  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'h1',
      title: 'H1 (כותרת ראשית בדף הבית)',
      type: 'string',
      description: 'מופיע מתחת לכותרת העיצובית. H1 אחד בלבד בדף.',
      group: 'seo',
      validation: (Rule) => Rule.max(90).warning('מומלץ עד 90 תווים'),
    }),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      group: 'hero',
    }),

    defineField({
      name: 'introParagraph',
      title: 'פסקת גשר (פחד מול תשוקה)',
      type: 'text',
      rows: 3,
      group: 'content',
    }),

    defineField({
      name: 'cards',
      title: 'כרטיסים (3 תחומים)',
      type: 'array',
      of: [{type: 'cardGrid'}],
      validation: (Rule) => Rule.max(3).warning('מומלץ 3 כרטיסים'),
      group: 'content',
    }),

    defineField({
      name: 'methodHeading',
      title: 'כותרת קטנה לסקשן השיטה',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'methodTitle',
      title: 'כותרת סקשן השיטה',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'methodIntro',
      title: 'טקסט קצר על השיטה',
      type: 'text',
      rows: 4,
      group: 'content',
    }),

    defineField({
      name: 'msa',
      title: 'מודל מ.ס.ע',
      type: 'object',
      group: 'msa',
      fields: [
        defineField({
          name: 'heading',
          title: 'כותרת (H2)',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'כותרת גדולה',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'טקסט פתיחה',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'steps',
          title: 'שלבים',
          type: 'array',
          of: [{type: 'msaSection'}],
          validation: (Rule) => Rule.max(3).warning('מומלץ 3 שלבים'),
        }),
        defineField({
          name: 'grid',
          title: 'גריד (אופציונלי)',
          type: 'msaGrid',
        }),
      ],
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'faq',
      group: 'faq',
    }),

    defineField({
      name: 'bottomCtaText',
      title: 'טקסט CTA תחתון',
      type: 'string',
      group: 'bottom',
    }),

    defineField({
      name: 'bottomCtaHref',
      title: 'קישור CTA תחתון',
      type: 'string',
      group: 'bottom',
    }),

    // ===== שדות מיותרים כרגע (משאירים תאימות אבל מסתירים מהסטודיו) =====

    defineField({
      name: 'cardsHeading',
      title: 'כותרת הכרטיסים',
      type: 'string',
      hidden: true,
      group: 'legacy',
    }),

    defineField({
      name: 'cardsIntro',
      title: 'טקסט פתיחה לכרטיסים',
      type: 'text',
      rows: 3,
      hidden: true,
      group: 'legacy',
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA טקסט',
      type: 'string',
      hidden: true,
      group: 'legacy',
    }),

    defineField({
      name: 'ctaHref',
      title: 'CTA קישור',
      type: 'string',
      hidden: true,
      group: 'legacy',
    }),

    defineField({
      name: 'title',
      title: 'שם המודל',
      type: 'string',
      hidden: true,
      group: 'legacy',
    }),
  ],

  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'דף הבית'}
    },
  },
})
