import './globals.css'

import { geistMono, geistSans } from './fonts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tourism Project',
	description: 'A website for tourism projects',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
			<body className="font-sans bg-gray-100 text-neutral-900">{children}</body>
		</html>
	)
}
