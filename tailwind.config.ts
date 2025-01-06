import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'geist-sans': ['--font-geist-sans', 'sans-serif'],
				'geist-mono': ['--font-geist-mono', 'monospace'],
				'instrument-sans': ['--font-instrument-sans', 'sans-serif'],
			},
		},
	},
} satisfies Config
