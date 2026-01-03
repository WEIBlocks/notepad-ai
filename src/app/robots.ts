import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.notepad-ai.online';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/note/'], // Disallow API routes and shared note pages from indexing
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
      },
      {
        userAgent: 'facebot', // Facebook
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
