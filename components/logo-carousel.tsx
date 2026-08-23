'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

export interface ClientLogo {
	id: string;
	src: string;
	alt: string;
}

export interface LogoCarouselProps {
	/** Título opcional que aparece por encima del carrusel */
	title?: string;
	/** Arreglo de logos a mostrar */
	logos: ClientLogo[];
	/** Duración de la animación (ej: '30s', '40s') */
	duration?: string;
}

export default function LogoCarousel({ 
	title = 'Empresas y marcas que confían en nuestra producción',
	logos,
	duration = '30s'
}: LogoCarouselProps) {
	if (!logos || logos.length === 0) return null;

	return (
		<section className="relative w-full py-12 bg-white overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{title && (
					<p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
						{title}
					</p>
				)}

				{/* Contenedor relativo con difuminado (fade) a los lados */}
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
					<Marquee pauseOnHover className={`[--duration:${duration}] [--gap:3rem]`}>
						{logos.map((logo) => (
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
