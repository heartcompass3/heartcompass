import post from './post'
import author from './author'
import category from './category'
import blockContent from './blockContent'

import {documents} from './documents'
import {objects} from './objects'

export const schemaTypes = [
  // הקיים (אם תרצה להשאיר בלוג כרגע)
  post,
  author,
  category,
  blockContent,

  // החדש שלנו (Pages)
  ...documents,

  // אובייקטים (SEO/Hero/Sections)
  ...objects,
]
