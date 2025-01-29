'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CompassIcon, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './ui/button'
import Link from 'next/link'
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
	const [showMenu, setShowMenu] = useState(false)

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
		<>
			<header
				className={cn(
					'fixed top-0 z-50 flex items-center justify-between w-full p-4 transition-all duration-300 ease-in-out text-neutral-50 hover:bg-neutral-100/70 hover:backdrop-blur-md group',
					scrolled && 'bg-neutral-100/70 backdrop-blur-md shadow-md'
				)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<Link
					href="/"
					className={cn(
						'flex items-center gap-2 group-hover:text-blue-500 cursor-pointer',
						scrolled && 'text-blue-500'
					)}
				>
					<CompassIcon
						className={cn(
							'w-9 h-9 stroke-neutral-50 group-hover:stroke-blue-500',
							scrolled && 'stroke-blue-500'
						)}
					/>

					<span className="text-3xl font-bold tracking-wide font-nuchileda">SKYLINE</span>
				</Link>

				<div className="items-center hidden gap-2 tracking-wider sm:flex">
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

				<Button
					size="icon"
					variant="ghost"
					className="sm:hidden"
					onClick={() => setShowMenu(!showMenu)}
				>
					<Menu className={cn('w-8 h-8', scrolled && 'stroke-neutral-800', 'text-neutral-50')} />
				</Button>
			</header>

			<AnimatePresence>
				{showMenu && (
					<>
						{/* Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 z-50 bg-black/50 sm:hidden"
							onClick={() => setShowMenu(false)}
						/>

						{/* Sidebar */}
						<motion.aside
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							className="fixed top-0 left-0 z-50 w-64 h-screen p-4 shadow-lg rounded-tr-xl rounded-br-xl bg-white/80 sm:hidden backdrop-blur-md"
						>
							<Button
								size="icon"
								variant="ghost"
								className="mb-5 text-neutral-900"
								onClick={() => setShowMenu(!showMenu)}
							>
								<Menu className={'w-8 h-8'} />
							</Button>

							<div className="space-y-4">
								{links.map((link, index) => (
									<Button
										key={index}
										className={cn(
											'text-sm text-neutral-900',
											pathname === link.href && 'text-blue-500'
										)}
										variant="ghost"
										size="sm"
										onClick={() => router.push(link.href)}
									>
										{link.name}
									</Button>
								))}
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
