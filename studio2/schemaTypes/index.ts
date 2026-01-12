// studio2/schemaTypes/index.ts
import {documents} from './documents'
import {objects} from './objects'

import blockContent from './blockContent'
import post from './post'
import author from './author'
import category from './category'

export const schemaTypes = [
  ...documents,
  ...objects,

  // Portable Text
  blockContent,

  // Blog (אם תרצה להשתמש בעתיד – לא מפריע גם אם לא)
  post,
  author,
  category,
]
