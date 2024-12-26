import { Calendar, Map, MessagesSquare, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
	{
		title: 'Easy Scheduling',
		description: 'Book your next adventure with out intuitive scheduling system',
		icon: <Calendar className="stroke-blue-500" size={32} />,
	},
	{
		title: 'Travel History',
		description: 'Keep track of all your amazing journeys and visited destinations',
		icon: <Map className="stroke-blue-500" size={32} />,
	},
	{
		title: 'Rate & Review',
		description: 'Share your experiences and help other travelers make informed decisions',
		icon: <Star className="stroke-blue-500" size={32} />,
	},
	{
		title: 'Community',
		description: 'Connect with fellow travelers and share travel tips',
		icon: <MessagesSquare className="stroke-blue-500" size={32} />,
	},
]

export default function Features(): React.ReactNode {
	return (
		<div id="features" className="py-20 bg-white px-14">
			<div className="max-w-3xl mx-auto mb-12 space-y-4 text-center">
				<h2 className="text-2xl font-bold md:text-4xl">Why Choose Us?</h2>

				<p className="text-sm text-neutral-600 md:text-base">
					Experience travel planning and booking with ease. Our intuitive scheduling system and
					user-friendly interface make it simple to plan your next adventure.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
				{features.map((feature, index) => (
					<Card key={index} className="py-4 bg-transparent border-none shadow-none">
						<CardHeader className="flex flex-col items-center gap-4 p-2 py-4">
							{feature.icon}

							<CardTitle>
								<h3 className="">{feature.title}</h3>
							</CardTitle>
						</CardHeader>

						<CardContent className="text-center">
							<CardDescription>{feature.description}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
