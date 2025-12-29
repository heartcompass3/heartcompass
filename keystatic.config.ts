import { config, fields, collection } from '@keystatic/core';

export default config({
  // חובה – בלי זה OAuth מחזיר 401 ואין Cookie
  auth: {
    kind: 'github',
  },

  // חיבור לריפו שלך
  storage: {
    kind: 'github',
    repo: {
      owner: 'heartcompass3',
      name: 'heartcompass',
    },
    branch: 'main',
  },

  // מיתוג הסטודיו
  ui: {
    brandName: 'מצפן הלב',
  },

  // קולקשן מינימלי לבדיקה שהסטודיו נטען
  collections: {
    pages: collection({
      label: 'Pages',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
        published: fields.checkbox({
          label: 'Published',
          defaultValue: true,
        }),
      },
    }),
  },
});
