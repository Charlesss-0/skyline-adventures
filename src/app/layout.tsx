import './globals.css'

import { instrumentSans, nuchileda } from './fonts'

import Footer from '@/components/footer'
import { GoogleTagManager } from '@next/third-parties/google'
import MainHeader from '@/components/main-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Skyline Adventures',
	description:
		'Discover your next adventure with personalized touristic experiences tailored just for you',
	verification: {
		google: 'zkagBrTOB5Gf1AY9cA_vWbqZt1QpClKDJ_z4eq4z7hU',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
	return (
		<html lang="en" className={`${instrumentSans.variable} ${nuchileda.variable} antialiased`}>
			<GoogleTagManager gtmId="GTM-NGSQ475B" />

			<body className="font-instrument-sans bg-gray-50 text-neutral-900">
				<MainHeader />
				{children}
				<Footer />
			</body>
		</html>
	)
}
