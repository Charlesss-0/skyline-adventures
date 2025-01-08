import FeaturedDestinations from '@/components/featured-destinations'
import Features from '@/components/features'
import MainHero from '@/components/main-hero'

export default function Home(): React.ReactNode {
	return (
		<>
			<MainHero />
			<FeaturedDestinations />
			<Features />
		</>
	)
}
