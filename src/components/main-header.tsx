import { Button } from './ui/button'
import { CompassIcon } from 'lucide-react'

export default function MainHeader(): React.ReactNode {
	return (
		<div className="fixed top-0 z-50 flex items-center justify-between w-full p-4 bg-white/80 backdrop-blur-md">
			<div className="flex items-center gap-2">
				<CompassIcon className="text-blue-500 w-9 h-9" />
				<span className="text-xl font-bold">Wanderlust</span>
			</div>

			<div className="flex items-center gap-2">
				<Button variant="ghost">Destinations</Button>

				<Button variant="ghost">Features</Button>

				<Button variant="ghost">Testimonials</Button>

				<Button>Get Started</Button>
			</div>
		</div>
	)
}
