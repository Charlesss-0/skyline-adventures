'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import TripCard from './trip-card'
import { trips } from '@/data/trips'
import { useRouter } from 'next/navigation'

export default function FeaturedDestinations(): React.ReactNode {
	const router = useRouter()

	return (
		<div id="destinations" className="px-6 py-12 md:py-20 md:px-14">
			<div className="mb-12 space-y-2 text-center">
				<h2 className="text-3xl font-bold md:text-5xl font-nuchileda">Popular Destinations</h2>

				<p className="text-sm text-neutral-600 md:text-base">
					Explore our most sought-after destinations
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[300px]">
				{trips.map(trip => trip.featured && <TripCard key={trip.id} {...trip} />)}
			</div>

			<div className="flex justify-center mt-20 mb-9 md:mb-0">
				<Button
					className="gap-2 px-6 py-2 group"
					size="lg"
					onClick={() => router.push('/destinations')}
				>
					<span className="text-lg font-medium">Explore</span>

					<ArrowRight className="w-5 h-5 transition-all duration-300 ease-in-out md:w-6 md:h-6 group-hover:translate-x-1" />
				</Button>
			</div>
		</div>
	)
}
