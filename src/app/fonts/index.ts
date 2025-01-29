import { Instrument_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const instrumentSans = Instrument_Sans({
	variable: '--font-instrument-sans',
	subsets: ['latin'],
	weight: '500',
	style: 'normal',
	display: 'swap',
	fallback: ['sans-serif'],
})

export const nuchileda = localFont({
	src: './Nuchileda.otf',
	variable: '--font-nuchileda',
	weight: '500',
	style: 'normal',
	display: 'swap',
})
