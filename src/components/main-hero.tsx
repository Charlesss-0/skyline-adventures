import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function MainHero(): React.ReactNode {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div className="absolute inset-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
				<Image
					src="https://images.unsplash.com/photo-1472981935331-8e297dd011d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="a house with a thatched roof surrounded by greenery"
					width={1920}
					height={1080}
					quality={80}
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="absolute flex flex-col gap-6 top-[50%] translate-y-[-50%] left-4 right-4 md:left-8 lg:left-12 text-neutral-50 lg:max-w-[800px] lg:w-full">
				<h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">Discover Your Next Adventure</h1>

				<p className="text-lg text-neutral-200 lg:text-xl">
					Experience unforgettable journeys with personalized travel experiences tailored just for
					you.
				</p>

				<Button className="gap-2 px-6 py-3 lg:px-8 md:gap-4 w-max group" size="lg">
					<span className="text-lg md:text-xl">Explore</span>

					<ArrowRight className="w-5 h-5 transition-all duration-300 ease-in-out md:w-6 md:h-6 group-hover:translate-x-1" />
				</Button>
			</div>
		</div>
	)
}
