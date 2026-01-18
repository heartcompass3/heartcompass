import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional().default([]),
    coverImage: z.string().optional(),
  }),
})

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hidden: z.boolean().optional().default(false),
  }),
})

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.boolean().optional().default(true),
  }),
})

export const collections = { posts, pages, guides }
