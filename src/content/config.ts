import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
    published: z.boolean().default(true),

    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),

    ctaText: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),

    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const site = defineCollection({
  type: 'content',
  schema: z.object({
    siteName: z.string(),
    siteDescription: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    whatsapp: z.string().optional(),

    defaultSeoTitle: z.string().optional(),
    defaultSeoDescription: z.string().optional(),
  }),
});

export const collections = { pages, guides, site };
