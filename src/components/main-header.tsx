'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { CompassIcon } from 'lucide-react'
import { cn } from '@/utils/tw-merge'

const links = [
	{
		name: 'Home',
		href: '/',
		btnVariant: 'ghost',
	},
	{
		name: 'Destinations',
		href: '/destinations',
		btnVariant: 'ghost',
	},
	{
		name: 'About',
		href: '/about',
		btnVariant: 'ghost',
	},
] as const

export default function MainHeader(): React.ReactNode {
	const router = useRouter()
	const pathname = usePathname()
	const [scrolled, setScrolled] = useState(false)
	const [hovered, setHovered] = useState(false)

	useEffect(() => {
		const handleScroll = (): void => {
			setScrolled(window.scrollY > 0)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return (): void => window.removeEventListener('scroll', handleScroll)
	}, [])

	const getButtonClass = (linkHref: string, btnVariant: string): string => {
		const isActive = pathname === linkHref

		if (btnVariant === 'default') {
			return 'text-neutral-50 no-underline'
		}

		if (scrolled) {
			return isActive ? 'text-neutral-900' : 'text-neutral-600'
		}

		if (hovered) {
			return isActive ? 'text-neutral-900' : 'text-neutral-600'
		}

		return isActive ? 'text-neutral-50' : 'text-neutral-300'
	}

	return (
		<div
			className={cn(
				'fixed top-0 z-50 flex items-center justify-between w-full p-4 transition-all duration-300 ease-in-out text-neutral-50 hover:bg-neutral-100/70 hover:backdrop-blur-md group',
				scrolled && 'bg-neutral-100/70 backdrop-blur-md shadow-md'
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
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

				<span className="text-xl font-bold tracking-wide">SKYLINE</span>
			</div>

			<div className="items-center gap-2  hidden sm:flex tracking-wider">
				{links.map((link, index) => (
					<Button
						key={index}
						variant={link.btnVariant}
						onClick={() => router.push(link.href)}
						className={cn(
							getButtonClass(link.href, link.btnVariant),
							pathname === link.href && 'underline underline-offset-2',
							'hover:text-neutral-900 hover:underline underline-offset-2'
						)}
					>
						{link.name}
					</Button>
				))}
			</div>

			<Button className="sm:hidden" onClick={() => router.push('/destinations')}>
				Get Started
			</Button>
		</div>
	)
}
