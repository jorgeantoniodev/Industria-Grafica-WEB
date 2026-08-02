import Hero from '@/components/hero';
import AudiencesSection from '@/components/audiences-section';
import LogoCarousel from '@/components/logo-carousel';
import ServicesSection from '@/components/services-section';
import ProcessSection from '@/components/process-section';

export default function Home() {
	return (
		<main className="min-h-full bg-white font-sans">
			<Hero />
			<AudiencesSection />
			<LogoCarousel />
			<ServicesSection />
			<ProcessSection />
		</main>
	);
}
