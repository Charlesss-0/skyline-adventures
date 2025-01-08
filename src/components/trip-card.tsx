import { Calendar, Clock, DollarSign, MapPin } from 'lucide-react'

import { Button } from './ui/button'
import Image from 'next/image'

interface TripProps {
	id: string
	title: string
	location: string
	duration: string
	price: number
	image: string
	featured?: boolean
}

export default function TripCard(props: TripProps): React.ReactNode {
	const { title, location, duration, price, image, featured } = props

	return (
		<div
			className={`relative group overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
				featured ? 'md:col-span-2 md:row-span-2' : ''
			}`}
		>
			<div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10" />

				<Image
					src={image}
					alt={title}
					fill={true}
					quality={70}
					loading="lazy"
					className="object-cover group-hover:scale-110 transition-transform duration-300"
				/>

				<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
					<h3 className="text-2xl items-center gap-4 mb-3">{title}</h3>

					<div className="flex items-center gap-4 mb-3">
						<div className="flex items-center gap-1">
							<MapPin className="w-4 h-4" />

							<span className="text-sm">{location}</span>
						</div>

						<div className="flex items-center gap-1">
							<Clock className="w-4 h-4" />

							<span className="text-sm">{duration}</span>
						</div>
					</div>

					<div>
						<div className="flex items-center gap-1">
							<DollarSign className="w-4 h-4" />

							<span className="text-xl font-bold">{price.toLocaleString()}</span>
						</div>

						<Button className="px-4 py-2 rounded-lg font-semibold gap-2 mt-4">
							<Calendar className="w-4 h-4" />
							View Details
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
