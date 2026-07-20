import Hero from '@/components/hero';
import Services from '@/components/services';

export default function Home() {
	return (
		<main className="min-h-full bg-white font-sans">
			<Hero />
			<Services />
		</main>
	);
}
