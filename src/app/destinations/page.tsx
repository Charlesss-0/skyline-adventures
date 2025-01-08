'use client'

import { AnimatePresence, motion } from 'framer-motion'

import TripCard from '@/components/trip-card'
import { trips } from '@/data/trips'

export default function Destinations(): React.ReactNode {
	return (
		<div className="bg-slate-400 pt-20 text-neutral-50">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="h-full px-10 pb-10"
				>
					<div className="w-full text-center space-y-4 mb-20">
						<motion.h1
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-2xl font-bold md:text-4xl tracking-wide"
						>
							Unforgettable Experiences
						</motion.h1>

						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="text-sm md:text-lg"
						>
							It&apos;s time to go
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[300px]">
						{trips.map(trip => (
							<TripCard key={trip.id} {...trip} />
						))}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
