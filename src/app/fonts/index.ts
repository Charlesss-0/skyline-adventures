import { Instrument_Sans } from 'next/font/google'

export const instrumentSans = Instrument_Sans({
	variable: '--font-instrument-sans',
	subsets: ['latin'],
	weight: '500',
	style: 'normal',
	display: 'swap',
	fallback: ['sans-serif'],
})
