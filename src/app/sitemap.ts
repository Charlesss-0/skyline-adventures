import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'skyline-adventures.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'skyline-adventures.vercel.app/destinations',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'skyline-adventures.vercel.app/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	]
}
