import { Geist, Geist_Mono } from 'next/font/google'

export const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	style: 'normal',
	display: 'swap',
	fallback: ['sans-serif'],
})

export const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	style: 'normal',
	display: 'swap',
	fallback: ['monospace'],
})
