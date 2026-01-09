// src/lib/sanityQueries.ts

export const HOME_PAGE_QUERY = /* groq */ `
*[_type == "homePage"][0]{
  seo,
  hero,
  h1,
  introParagraph,
  cards,
  methodHeading,
  methodTitle,
  methodIntro,
  msa,
  faq,
  bottomCtaText,
  bottomCtaHref
}
`

export const CONTACT_PAGE_QUERY = /* groq */ `
*[_type == "contactPage"][0]{
  seo,
  left{
    title,
    text,
    ctaLabel,
    helper
  },
  right{
    titleLine1,
    titleLine2,
    ctaLabel,
    helper
  }
}
`

export const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0]{
  title,
  tagline,

  contact{
    email
  },

  nav[]{
    label,
    href,
    children[]{
      label,
      href
    }
  },

  footerLinks[]{
    label,
    href
  },

  socials[]{
    label,
    href,
    icon
  },

  whatsapp{
    label,
    href
  },

  whatsappWarmups[]{
    label,
    message
  },

  tracking{
    enabled,
    gaMeasurementId,
    metaPixelId,
    tiktokPixelId
  }
}
`
