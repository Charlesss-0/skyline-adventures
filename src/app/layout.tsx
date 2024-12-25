import './globals.css'

import { geistMono, geistSans } from './fonts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Skyline Adventures',
	description:
		'Discover your next adventure with personalized travel experiences tailored just for you',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
			<body className="font-sans bg-gray-50 text-neutral-900">{children}</body>
		</html>
	)
}
