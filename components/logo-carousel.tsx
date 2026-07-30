'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

interface ClientLogo {
	id: string;
	src: string;
	alt: string;
}

const clientLogos: ClientLogo[] = [
	{ id: '1', src: '/logos/logo-1.svg', alt: 'Cliente 1 - Stark Tech' },
	{ id: '2', src: '/logos/logo-2.svg', alt: 'Cliente 2 - Apex Packaging' },
	{ id: '3', src: '/logos/logo-3.svg', alt: 'Cliente 3 - Vanguard Press' },
	{ id: '4', src: '/logos/logo-4.svg', alt: 'Cliente 4 - Nova Logistics' },
	{ id: '5', src: '/logos/logo-5.svg', alt: 'Cliente 5 - Zenith Media' },
	{ id: '6', src: '/logos/logo-6.svg', alt: 'Cliente 6 - Orion Foods' },
	{ id: '7', src: '/logos/logo-7.svg', alt: 'Cliente 7 - Pulse Agency' },
	{ id: '8', src: '/logos/logo-8.svg', alt: 'Cliente 8 - Aura Labs' },
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
