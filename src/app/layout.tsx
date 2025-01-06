import './globals.css'

import MainHeader from '@/components/main-header'
import type { Metadata } from 'next'
import { instrumentSans } from './fonts'

export const metadata: Metadata = {
	title: 'Skyline Adventures',
	description:
		'Discover your next adventure with personalized touristic experiences tailored just for you',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
	return (
		<html lang="en" className={`${instrumentSans.variable} antialiased`}>
			<body className="font-instrument-sans bg-gray-50 text-neutral-900">
				<MainHeader />
				{children}
			</body>
		</html>
	)
}
