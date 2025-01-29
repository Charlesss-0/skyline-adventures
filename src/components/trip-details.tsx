import { Calendar, Car, Clock, Hotel, Info, MapPin, Users, Utensils, X } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'

import { Button } from './ui/button'
import Image from 'next/image'

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
				</CardHeader>

				<CardContent className="p-5 text-neutral-900">
					<h2 className="text-3xl font-semibold">{trip.title}</h2>

					<div className="flex gap-4 py-2 text-gray-600 mb-4 [&>span]:flex [&>span]:gap-1 [&>span]:text-sm">
						<span>
							<MapPin size={20} />
							{trip.location}
						</span>

						<span>
							<Clock size={20} />
							{trip.duration}
						</span>

						<span>
							<Calendar size={20} />
							Available year-round
						</span>
					</div>

					<div className="p-6 mb-8 bg-gray-50 rounded-xl">
						<div className="flex items-center justify-between mb-4">
							<div>
								<p className="text-lg font-medium">Price per person</p>
								<p className="text-3xl font-semibold">${trip.price.toLocaleString()}</p>
							</div>

							<Button>Book Now</Button>
						</div>

						<p className="text-sm text-gray-600">
							* Price includes all accommodations, activities, and local transportation
						</p>
					</div>

					{/* Trip Details */}
					<div className="grid md:grid-cols-2 gap-8 mb-8">
						<div>
							<h2 className="text-xl font-semibold mb-4">Trip Highlights</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Hotel className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Luxury Accommodations</p>
										<p className="text-gray-600">Stay in carefully selected 4-5 star hotels</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Utensils className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Culinary Experiences</p>
										<p className="text-gray-600">Authentic local cuisine and fine dining</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Users className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Small Groups</p>
										<p className="text-gray-600">Maximum 12 travelers per group</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Car className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Private Transportation</p>
										<p className="text-gray-600">Comfortable and convenient transfers</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-4">Important Information</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Info className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Physical Level</p>
										<p className="text-gray-600">Moderate - Some walking and hiking involved</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Users className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Group Size</p>
										<p className="text-gray-600">2-12 people</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Calendar className="w-5 h-5 text-gray-600 mt-1" />
									<div>
										<p className="font-medium">Best Time to Visit</p>
										<p className="text-gray-600">March to November</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>

				<Button
					variant="ghost"
					size="icon"
					className="fixed rounded-full top-3 right-3 text-neutral-900 bg-neutral-100 hover:bg-neutral-100/90 hover:text-neutral-900"
					onClick={onClose}
				>
					<X size={20} />
				</Button>
			</Card>
		</div>
	)
}
