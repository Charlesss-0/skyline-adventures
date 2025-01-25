import { Card, CardHeader } from './ui/card'

import { Button } from './ui/button'
import Image from 'next/image'
import { X } from 'lucide-react'

interface TripDetailsProps {
	trip: {
		id: string
		title: string
		location: string
		duration: string
		price: number
		image: string
		featured: boolean
	}
	onClose: () => void
}

export default function TripDetails({ trip, onClose }: TripDetailsProps): React.ReactNode {
	return (
		<div className="fixed inset-0 z-50 bg-black/50">
			<Card className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full max-h-[90vh] bg-white overflow-auto border-none rounded-2xl">
				<CardHeader className="flex-row justify-between p-4 overflow-hidden h-[50vh]">
					<Image
						src={trip.image}
						alt={trip.title}
						fill={true}
						quality={70}
						loading="lazy"
						className="object-cover"
					/>

					<Button
						variant="ghost"
						size="icon"
						className="fixed rounded-full top-3 right-3 text-neutral-900 bg-neutral-100 hover:bg-neutral-100/90 hover:text-neutral-900"
						onClick={onClose}
					>
						<X size={20} />
					</Button>
				</CardHeader>
			</Card>
		</div>
	)
}
