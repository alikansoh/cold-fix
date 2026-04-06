/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.freezfix.co.uk', // ← match your canonical www domain
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};