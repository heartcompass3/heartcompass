export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'כותרת ראשית',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'כתובת הדף (Slug)',
      type: 'slug',
      description: 'הכתובת של הדף באתר (למשל: human-os-guide). חובה באנגלית וללא רווחים.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
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
      title: 'תוכן (אופציונלי)',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'bullets',
      title: 'נקודות (Bullets)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'הנקודות שמתארות את הכאב והפתרון.'
    },
    {
      name: 'cta',
      title: 'טקסט כפתור (Call to Action)',
      type: 'string',
      description: 'למשל: "שלח לי את המדריך עכשיו"'
    },
    {
      name: 'trustText',
      title: 'טקסט הרגעה (מתחת לכפתור)',
      type: 'string',
      description: 'משפט קצר שמשדר ביטחון ללקוח. למשל: "הפרטים שלך נשארים רק אצלי. מבטיח לא לשלוח ספאם."',
      initialValue: 'הפרטים שלך בטוחים. מבטיח לא לשלוח ספאם.'
    },
    {
      name: 'leadMagnet',
      title: 'קובץ המדריך (PDF)',
      type: 'file',
      description: 'העלה לכאן את קובץ ה-PDF שהגולש יקבל בדף התודה.'
    },
    {
      name: 'seoDescription',
      title: 'תקציר לשיתופים (SEO)',
      type: 'text',
      rows: 3,
      description: 'הטקסט הקצר שיופיע כשישתפו את הקישור בוואטסאפ או בפייסבוק. (מומלץ עד 160 תווים).'
    }
  ]
}
