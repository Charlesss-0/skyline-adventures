import { FaFacebook, FaInstagram } from 'react-icons/fa'

import { Button } from './ui/button'
import { Compass } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer(): React.ReactNode {
	return (
		<footer className="bg-gray-900 text-neutral-50">
			<div className="px-4 py-8 mx-auto md:py-12 max-w-7xl sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div>
						<div className="flex items-center mb-2 md:mb-4">
							<Compass className="w-8 h-8 stroke-blue-500" />

							<span className="ml-2 text-xl font-bold text-blue-500">Skyline</span>
						</div>

						<p className="text-gray-400">
							Your trusted partner in creating unforgettable travel experiences.
						</p>
					</div>

					<div>
						<h3 className="mb-2 text-lg font-semibold md:mb-4">Quick Links</h3>

						<ul className="space-y-1 md:space-y-2">
							<li>
								<a href="#destinations" className="text-gray-400 hover:text-white">
									Destinations
								</a>
							</li>

							<li>
								<a href="#experiences" className="text-gray-400 hover:text-white">
									Experiences
								</a>
							</li>

							<li>
								<a href="#testimonials" className="text-gray-400 hover:text-white">
									Testimonials
								</a>
							</li>

							<li>
								<a href="/app" className="text-gray-400 hover:text-white">
									Open App
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-2 text-lg font-semibold md:mb-4">Contact</h3>

						<ul className="space-y-1 text-gray-400 md:space-y-2">
							<li>Email: skyline@skyline.com</li>

							<li>Phone: +1 (555) 123-4567</li>

							<li>Address: 123 Travel Street</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-2 text-lg font-semibold md:mb-4">Follow Us</h3>

						<div className="flex space-x-2 md:space-x-4">
							<Button variant="ghost" size="icon">
								<FaFacebook className="w-6 h-6" />
							</Button>

							<Button variant="ghost" size="icon">
								<FaXTwitter className="w-6 h-6" />
							</Button>

							<Button variant="ghost" size="icon">
								<FaInstagram className="w-6 h-6" />
							</Button>
						</div>
					</div>
				</div>

				<div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800 md:pt-12">
					<p>&copy; {new Date().getFullYear()} Skyline. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
