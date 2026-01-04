// studio2/schemaTypes/documents/homePage.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'דף בית',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'כותרת פנימית',
      type: 'string',
      initialValue: 'דף הבית',
    }),

    // SEO (כולל noindex פעם אחת בלבד – בתוך seo)
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),

    // גשר (H1 + פסקה)
    defineField({
      name: 'h1',
      title: 'כותרת H1 (מתחת להירו)',
      type: 'string',
    }),
    defineField({
      name: 'introParagraph',
      title: 'פסקת גשר',
      description: 'פחד מול תשוקה – הפסקה שמתחת ל־H1',
      type: 'text',
      rows: 4,
    }),

    // כרטיסים
    defineField({
      name: 'cardsHeading',
      title: 'כותרת הכרטיסים',
      type: 'string',
    }),
    defineField({
      name: 'cardsSubheading',
      title: 'תת כותרת הכרטיסים',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'כרטיסים',
      type: 'cardGrid',
    }),

    // מ.ס.ע (משאיר גם תאימות לשדה msa שכבר קיים בדאטה)
    defineField({
      name: 'methodHeading',
      title: 'כותרת המודל',
      type: 'string',
    }),
    defineField({
      name: 'methodIntro',
      title: 'טקסט פתיחה למודל',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'methodTitle',
      title: 'שם המודל',
      type: 'string',
    }),
    defineField({
      name: 'msa',
      title: 'שלבי מ.ס.ע',
      type: 'msaSection',
    }),

    // FAQ
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'faq',
    }),

    // CTA תחתון
    defineField({
      name: 'bottomCtaText',
      title: 'CTA תחתון טקסט כפתור',
      type: 'string',
    }),
    defineField({
      name: 'bottomCtaHref',
      title: 'CTA תחתון קישור',
      type: 'string',
    }),
  ],

  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'דף הבית'}
    },
  },
})
