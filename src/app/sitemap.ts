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
			priority: 0.9,
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
			priority: 0.9,
		},
		{
			url: `${baseUrl}/tools/character-counter`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/tools/sentence-counter`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/tools/paragraph-counter`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		// Wave 1 — Counter Family Expansion (5 pages)
		{ url: `${baseUrl}/tools/line-counter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/syllable-counter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/reading-time-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/speaking-time-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/word-frequency-counter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

		// Wave 2 — Case Converters (5 pages)
		{ url: `${baseUrl}/tools/text-case-converter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/uppercase-converter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/lowercase-converter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/title-case-converter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/sentence-case-converter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

		// Wave 3 — Text Cleaners (5 pages)
		{ url: `${baseUrl}/tools/remove-line-breaks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/remove-extra-spaces`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/text-reverser`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/duplicate-line-remover`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/text-sorter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

		// Wave 4 — Generators & Encoders (4 pages)
		{ url: `${baseUrl}/tools/lorem-ipsum-generator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/password-generator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/base64-encoder-decoder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${baseUrl}/tools/text-to-speech`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

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
		{
			url: `${baseUrl}/blog/what-is-nlp-note-taking`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/best-online-notepad-2026`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/google-keep-alternative`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/evernote-alternative-free`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/notion-alternative-simple`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/online-notepad-for-students`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/private-notepad-no-cloud`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/notepad-dark-mode`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
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
