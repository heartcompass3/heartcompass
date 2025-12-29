import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

import seo from './objects/seo'
import navItem from './objects/navItem'

import page from './documents/page'
import service from './documents/service'
import siteSettings from './documents/siteSettings'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  seo,
  navItem,
  page,
  service,
  siteSettings,
]
