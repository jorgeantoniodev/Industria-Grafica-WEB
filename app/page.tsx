import Hero from '@/components/hero';
import LogoCarousel from '@/components/logo-carousel';
import ServicesSection from '@/components/services-section';

export default function Home() {
	return (
		<main className="min-h-full bg-white font-sans">
			<Hero />
			<LogoCarousel />
			<ServicesSection />
		</main>
	);
}
