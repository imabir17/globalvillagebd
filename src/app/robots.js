export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://www.globalvillageacademybd.com/sitemap.xml',
  }
}
