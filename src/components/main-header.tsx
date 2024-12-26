'use client'

import { useEffect, useState } from 'react'

import { Button } from './ui/button'
import { CompassIcon } from 'lucide-react'
import { cn } from '@/utils/tw-merge'

export default function MainHeader(): React.ReactNode {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = (): void => {
			setScrolled(window.scrollY > 0)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return (): void => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			className={cn(
				'fixed top-0 z-50 flex items-center justify-between w-full p-4 transition-all duration-300 ease-in-out text-neutral-50 hover:bg-neutral-100/70 hover:backdrop-blur-md group',
				scrolled && 'bg-neutral-100/70 backdrop-blur-md shadow-md'
			)}
		>
			<div
				className={cn(
					'flex items-center gap-2 group-hover:text-blue-500',
					scrolled && 'text-blue-500'
				)}
			>
				<CompassIcon
					className={cn(
						'w-9 h-9 stroke-neutral-50 group-hover:stroke-blue-500',
						scrolled && 'stroke-blue-500'
					)}
				/>

				<span className="text-xl font-bold">Skyline</span>
			</div>

			<div
				className={cn(
					'items-center gap-2 group-hover:text-neutral-900 hidden sm:flex',
					scrolled && 'text-neutral-900'
				)}
			>
				<Button variant="ghost" asChild>
					<a href="#destinations">Destinations</a>
				</Button>

				<Button variant="ghost" asChild>
					<a href="#features">Features</a>
				</Button>

				<Button>Get Started</Button>
			</div>

			<Button className="sm:hidden">Get Started</Button>
		</div>
	)
}
