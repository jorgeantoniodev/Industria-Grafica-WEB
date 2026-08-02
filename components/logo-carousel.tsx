'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

interface ClientLogo {
	id: string;
	src: string;
	alt: string;
}

const clientLogos: ClientLogo[] = [
	{ id: 'bando',        src: '/logos/LOGO Bando-1-Photoroom.png',            alt: 'Bando' },
	{ id: 'caps',         src: '/logos/LOGO Caps-1-Photoroom.png',             alt: 'CAPS Semillas' },
	{ id: 'carrara',      src: '/logos/LOGO Carrara-1-Photoroom.png',          alt: 'Carrara Pastelería Artesanal' },
	{ id: 'cofarsur',     src: '/logos/LOGO CoFarSur-1-Photoroom.png',         alt: 'CoFarSur Droguería' },
	{ id: 'sbacco',       src: '/logos/LOGO Cortinas Sbacco-1-Photoroom.png',  alt: 'Cortinas Sbacco' },
	{ id: 'fumivet',      src: '/logos/LOGO Fumivet-1-Photoroom.png',          alt: 'Fumivet' },
	{ id: 'ganados',      src: '/logos/LOGO Ganados-1-Photoroom.png',          alt: 'Ganados' },
	{ id: 'guia-express', src: '/logos/LOGO Guia Express-1-Photoroom.png',     alt: 'Guía Express' },
	{ id: 'insacor',      src: '/logos/LOGO InSaCor-1-Photoroom.png',          alt: 'InSaCor' },
	{ id: 'megline',      src: '/logos/LOGO MegLine-1-Photoroom.png',          alt: 'MegLine' },
	{ id: 'paper',        src: '/logos/LOGO Paper-1-Photoroom.png',            alt: 'Paper' },
	{ id: 'parque-salud', src: '/logos/LOGO Parque Salud-1-Photoroom.png',     alt: 'Parque Salud' },
	{ id: 'polidori',     src: '/logos/LOGO Polidori-1-Photoroom.png',         alt: 'Polidori' },
	{ id: 'porta',        src: '/logos/LOGO Porta-1-Photoroom.png',            alt: 'Porta' },
	{ id: 'buteler',      src: '/logos/LOGO Ramiro Buteler-1-Photoroom.png',   alt: 'Ramiro Buteler' },
	{ id: 'tomaselli',    src: '/logos/LOGO Tomaselli-1-Photoroom.png',        alt: 'Tomaselli' },
	{ id: 'vetacord',     src: '/logos/LOGO Vetacord-1-Photoroom.png',         alt: 'Vetacord' },
];

export default function LogoCarousel() {
	return (
		<section className="relative w-full py-12 bg-white overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
					Empresas y marcas que confían en nuestra producción
				</p>

				{/* Contenedor relativo con difuminado (fade) a los lados */}
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
					<Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
						{clientLogos.map((logo) => (
							<div
								key={logo.id}
								className="flex items-center justify-center px-4 h-16 lg:h-20 shrink-0"
							>
								<div className="relative h-16 lg:h-20 w-36 lg:w-44 flex items-center justify-center">
									<Image
										src={logo.src}
										alt={logo.alt}
										fill
										sizes="(max-width: 768px) 144px, 176px"
										className="object-contain"
									/>
								</div>
							</div>
						))}
					</Marquee>

					{/* Difuminado izquierdo (Fade Left) */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10" />

					{/* Difuminado derecho (Fade Right) */}
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10" />
				</div>
			</div>
		</section>
	);
}
