import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.notepad-ai.online';

	return [
		// Main Pages
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/features`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/how-it-works`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},

		// Feature Pages
		{
			url: `${baseUrl}/share`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/password-protect`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/text-editor`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/ai-notepad`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/mobile`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/offline`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/text-to-docs`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/text-to-pdf`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},

		// Tools
		{
			url: `${baseUrl}/tools/word-counter`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/tools/character-counter`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},

		// Resources
		{
			url: `${baseUrl}/guides`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},

		// Blog
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/blog/what-is-ai-notepad`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/blog/note-taking-tips`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/blog/offline-note-taking`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},

		// Multilingual
		{
			url: `${baseUrl}/es`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/pt`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/fr`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},

		// Company & Legal
		{
			url: `${baseUrl}/about-us`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];
}
