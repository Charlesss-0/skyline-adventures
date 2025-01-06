'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function Destinations(): React.ReactNode {
	return (
		<div className="bg-gray-50">
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					Destinations
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
