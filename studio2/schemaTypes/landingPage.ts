export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'כותרת ראשית',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'תת כותרת',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'תמונה ראשית',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'תוכן',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'bullets',
      title: 'נקודות',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'cta',
      title: 'טקסט כפתור',
      type: 'string'
    }
  ]
}