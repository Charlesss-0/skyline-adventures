import { Card, CardHeader } from './ui/card'

import { Button } from './ui/button'
import { X } from 'lucide-react'

interface TripDetailsProps {
	id: string
	title: string
	location: string
	duration: string
	price: number
	image: string
	featured: boolean
}

export default function TripDetails(props: TripDetailsProps): React.ReactNode {
	const { id, title, location, duration, price, image } = props

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50">
			<Card className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-white/50 backdrop-blur-sm text-neutral-900">
				<CardHeader className="flex-row justify-between p-4">
					<h3 className="font-semibold">{title}</h3>

					<Button variant="ghost" size="icon">
						<X />
					</Button>
				</CardHeader>
			</Card>
		</div>
	)
}
