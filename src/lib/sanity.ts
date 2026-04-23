import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID
const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET

// סלילת דרך חדשה עם תאריך של היום
const apiVersion = '2026-04-23'

if (!projectId) throw new Error('Missing PUBLIC_SANITY_PROJECT_ID')
if (!dataset) throw new Error('Missing PUBLIC_SANITY_DATASET')

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  
  // סילוק המטמון לחלוטין כדי להכריח את האתר לקרוא את שורת ההסכמה
  useCdn: false,
})

const builder = imageUrlBuilder(sanity)
export const urlFor = (source: any) => builder.image(source)
