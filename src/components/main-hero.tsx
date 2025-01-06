'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { cn } from '@/utils/tw-merge'
import { useRouter } from 'next/navigation'

const slides = [
	{
		image: '/asset-1.jpg',
		title: 'Explore Hidden Wonders',
		description: "Venture into breathtaking canyons and discover nature's most spectacular views",
		cta: 'Find Natural Wonders',
	},
	{
		image: '/asset-2.jpg',
		title: 'Journey Through Paradise',
		description: 'Experience the freedom of scenic routes and peaceful countryside escapes',
		cta: 'Plan Your Route',
	},
	{
		image: '/asset-3.jpg',
		title: 'Discover Adventure Together',
		description: 'Join guided group hikes and create unforgettable memories with your friends',
		cta: 'Join a Group Tour',
	},
	{
		image: '/asset-4.jpeg',
		title: 'Stay in Eco Paradise',
		description: 'Experience authentic accommodations that blend seamlessly with nature',
		cta: 'Book Eco Lodges',
	},
] as const

export default function MainHero(): React.ReactNode {
	const router = useRouter()
	const [current, setCurrent] = useState(0)
	const [autoPlay, setAutoPlay] = useState(true)

	useEffect(() => {
		if (!autoPlay) {
			setTimeout(() => {
				setAutoPlay(true)
			}, 6000)
		}

		const slideShowTimer = setInterval(() => {
			setCurrent(current => (current === slides.length - 1 ? 0 : current + 1))
		}, 6000)

		return (): void => {
			clearInterval(slideShowTimer)
		}
	}, [autoPlay])

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={current}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="absolute inset-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
						<Image
							src={slides[current].image}
							alt={slides[current].title}
							fill={true}
							quality={70}
							priority={current === 0}
							loading={current === 0 ? 'eager' : 'lazy'}
							className="object-cover"
						/>
					</div>

					<div className="absolute flex flex-col gap-6 top-[50%] translate-y-[-50%] left-4 right-4 md:left-8 lg:left-12 text-neutral-50 lg:max-w-[800px] lg:w-full">
						<motion.h1
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-3xl font-bold md:text-4xl lg:text-6xl"
						>
							{slides[current].title}
						</motion.h1>

						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="text-lg text-neutral-200 lg:text-xl"
						>
							{slides[current].description}
						</motion.p>

						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
						>
							<Button
								className="gap-2 px-6 py-3 lg:px-8 md:gap-4 w-max group"
								size="lg"
								onClick={() => router.push('/destinations')}
							>
								<span className="text-lg md:text-xl">{slides[current].cta}</span>

								<ArrowRight className="w-5 h-5 transition-all duration-300 ease-in-out md:w-6 md:h-6 group-hover:translate-x-1" />
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</AnimatePresence>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, index) => (
					<Button
						key={index}
						onClick={() => {
							setAutoPlay(false)
							setCurrent(index)
						}}
						variant="ghost"
						size="icon"
						className={cn('w-2 h-2 rounded-full', index === current ? 'bg-white' : 'bg-white/50')}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
