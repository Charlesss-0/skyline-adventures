import Image from 'next/image'

export default function MainHero(): React.ReactNode {
	return (
		<div className="w-full h-screen overflow-hidden">
			<Image
				src="https://images.unsplash.com/photo-1472981935331-8e297dd011d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="a house with a thatched roof surrounded by greenery"
				width={1920}
				height={1080}
				quality={80}
				className="object-cover"
			/>
		</div>
	)
}
