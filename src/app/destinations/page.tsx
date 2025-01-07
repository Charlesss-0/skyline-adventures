'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function Destinations(): React.ReactNode {
	return (
		<div className="bg-slate-400 pt-20 h-screen text-neutral-50">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="w-full text-center space-y-4">
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
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
