import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.SANITY_PROJECT_ID || 'bk4y5jiw'
const dataset = import.meta.env.SANITY_DATASET || 'production'
const apiVersion = import.meta.env.SANITY_API_VERSION || '2025-01-01'

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)
export const urlFor = (source: any) => builder.image(source)
