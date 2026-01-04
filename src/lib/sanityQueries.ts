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

export const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0]{
  title,
  nav[]{
    label,
    href
  }
}
`
