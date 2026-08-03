'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
	Printer, 
	Palette, 
	Stack, 
	ShieldCheck,
	Package,
	Target,
	ChartLineUp,
	ArrowRight,
    Warning
} from '@phosphor-icons/react';

const audiences = [
	{
		id: 'agencias',
		title: 'Marca blanca para agencias',
		badge: 'MÁS DE 30 AÑOS EN EL RUBRO',
		headline: 'Escala tus operaciones sin límites.',
		description:
			'Proveemos infraestructura gráfica completa. Operamos en segundo plano como tu socio de producción, garantizando calidad superior y márgenes rentables para tu agencia.',
		themeColorText: 'text-blue-700',
        themeColorBg: 'bg-blue-700',
        themeColorLightBg: 'bg-blue-50',
		blobClass: 'bg-gradient-to-br from-blue-100 to-indigo-50 rounded-[8rem_8rem_8rem_1rem]',
		features: [
			{
				title: 'Producción offset a gran escala',
				description: 'Capacidad para imprimir tiradas masivas con tiempos de respuesta inmejorables.',
				icon: <Printer weight="duotone" className="h-6 w-6 text-blue-700" />
			},
			{
				title: 'Acabados complejos',
				description: 'Desde barnices sectorizados hasta cortes especiales que añaden valor premium.',
				icon: <Palette weight="duotone" className="h-6 w-6 text-blue-700" />
			}
		],
		ctaText: 'Explorar soluciones para agencias',
		ctaLink: '#agencias',
		image: '/agencias.jpg',
        floatingBadgeIcon: <ShieldCheck weight="fill" className="h-7 w-7 text-white" />,
        floatingBadgeBg: 'bg-blue-700',
		variant: 1,
	},
	{
		id: 'corporativo',
		title: 'Corporativo e institucional',
		badge: 'ALTO VOLUMEN',
		headline: 'Soluciones institucionales de alto rendimiento.',
		description:
			'Producimos formularios, recetarios, revistas institucionales y catálogos corporativos. Trabajamos bajo planificación industrial',
		themeColorText: 'text-orange-600',
        themeColorBg: 'bg-orange-600',
        themeColorLightBg: 'bg-orange-50',
		blobClass: 'bg-gradient-to-bl from-orange-100 to-amber-50 rounded-[1rem_8rem_8rem_8rem]',
		features: [
			{
				title: 'Formularios y fichas médicas',
				description: 'Impresión de alta precisión para documentos corporativos y sector salud.',
				icon: <Stack weight="duotone" className="h-6 w-6 text-orange-600" />
			},
			{
				title: 'Calidad sostenida en el tiempo',
				description: 'Mismo estándar de calidad, plazos y atención en cada tirada, año tras año.',
				icon: <Target weight="duotone" className="h-6 w-6 text-orange-600" />
			}
		],
		ctaText: 'Solicitar asesoría institucional',
		ctaLink: '#corporativo',
		image: '/corporativo.jpg',
        floatingBadgeIcon: <Warning weight="fill" className="h-7 w-7 text-white" />,
        floatingBadgeBg: 'bg-orange-600',
		variant: 2,
	},
	{
		id: 'pymes',
		title: 'Marcas y pymes',
		badge: 'DISEÑO A MEDIDA',
		headline: 'Materiales que hacen destacar tu identidad.',
		description:
			'Trabajos de diseño no repetitivo, packaging chico y materiales de marca para negocios medianos. Llevamos tu identidad visual a otro nivel.',
		themeColorText: 'text-purple-600',
        themeColorBg: 'bg-purple-600',
        themeColorLightBg: 'bg-purple-50',
		blobClass: 'bg-gradient-to-tr from-purple-200 to-fuchsia-100 rounded-[8rem_1rem_8rem_8rem]',
		features: [
			{
				title: 'Packaging personalizado',
				description: 'Cajas y empaques a medida para productos boutique y de consumo.',
				icon: <Package weight="duotone" className="h-6 w-6 text-purple-600" />
			},
			{
				title: 'Impresión variable',
				description: 'Personalización de cada pieza para campañas de marketing únicas.',
				icon: <ChartLineUp weight="duotone" className="h-6 w-6 text-purple-600" />
			}
		],
		ctaText: 'Ver opciones de packaging',
		ctaLink: '#pymes',
		image: '/pymes.jpg',
        floatingBadgeIcon: <Target weight="fill" className="h-7 w-7 text-white" />,
        floatingBadgeBg: 'bg-pink-600',
		variant: 3,
	},
];

export default function AudiencesSection() {
	const [activeTab, setActiveTab] = useState(audiences[0].id);
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		const currentIndex = audiences.findIndex((a) => a.id === activeTab);
		let nextIndex = currentIndex;

		if (e.key === 'ArrowRight') {
			nextIndex = (currentIndex + 1) % audiences.length;
		} else if (e.key === 'ArrowLeft') {
			nextIndex = (currentIndex - 1 + audiences.length) % audiences.length;
		}

		if (nextIndex !== currentIndex) {
			e.preventDefault();
			const nextTabId = audiences[nextIndex].id;
			setActiveTab(nextTabId);
			tabsRef.current[nextIndex]?.focus();
		}
	};

	return (
		<section className="font-sans px-4 py-16 lg:px-8 lg:py-24 max-w-7xl mx-auto">
			{/* Título y Selector de Tabs */}
			<div className="mb-16 flex flex-col items-center">
				<h3 className="mb-6 text-lg font-bold text-slate-800 lg:text-xl">
					¿Qué te representa más?
				</h3>
				<div
					role="tablist"
					aria-label="Audiencias a las que servimos"
					className="flex flex-wrap items-center justify-center gap-3"
					onKeyDown={handleKeyDown}
				>
					{audiences.map((audience, index) => {
						const isActive = activeTab === audience.id;
						return (
							<button
								key={audience.id}
								ref={(el) => {
									tabsRef.current[index] = el;
								}}
								role="tab"
								aria-selected={isActive}
								aria-controls={`panel-${audience.id}`}
								id={`tab-${audience.id}`}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setActiveTab(audience.id)}
								className={cn(
									'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:text-base lg:px-8 lg:py-3 border',
									isActive
										? cn('text-white shadow-md border-transparent', audience.themeColorBg, 'focus-visible:ring-slate-900')
										: 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-slate-900'
								)}
							>
								{audience.title}
							</button>
						);
					})}
				</div>
			</div>

			{/* Tab Panels */}
			<div className="relative">
				{audiences.map((audience) => {
					const isActive = activeTab === audience.id;
					
					// Posicionamiento de la composición según variante
					let compositionClasses = '';
					let blobClasses = '';
					let imageClasses = '';
					let badgeClasses = '';

					if (audience.variant === 1) {
						// Variante 1: Blob arriba-centro, Imagen abajo-izq, Badge arriba-der del blob
						compositionClasses = 'h-[450px] lg:h-[550px]';
						blobClasses = 'top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%]';
						imageClasses = 'bottom-0 left-0 w-[75%] h-[75%] z-10 shadow-2xl';
						badgeClasses = 'top-[10%] right-[10%] z-20 shadow-xl';
					} else if (audience.variant === 2) {
						// Variante 2: Blob derecha completo, Imagen abajo-izq desfasada, Badge centro-izq
						compositionClasses = 'h-[450px] lg:h-[550px]';
						blobClasses = 'right-0 top-0 w-[70%] h-full';
						imageClasses = 'bottom-[10%] left-0 w-[75%] h-[75%] z-10 shadow-2xl';
						badgeClasses = 'top-1/2 left-[5%] -translate-y-1/2 z-20 shadow-xl';
					} else {
						// Variante 3: Blob abajo-derecha, Imagen arriba-izq, Badge abajo-izq de la imagen
						compositionClasses = 'h-[450px] lg:h-[550px]';
						blobClasses = 'bottom-0 right-0 w-[80%] h-[75%]';
						imageClasses = 'top-0 left-0 w-[75%] h-[75%] z-10 shadow-2xl';
						badgeClasses = 'bottom-[15%] left-[5%] z-20 shadow-xl';
					}

					return (
						<div
							key={audience.id}
							role="tabpanel"
							id={`panel-${audience.id}`}
							aria-labelledby={`tab-${audience.id}`}
							hidden={!isActive}
							className={cn(
								'transition-opacity duration-500',
								isActive ? 'block opacity-100' : 'hidden opacity-0'
							)}
						>
							{/* Contenedor Flex en 2 columnas sin tarjeta */}
							<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
								
								{/* Columna Izquierda: Texto */}
								<div className="flex flex-col lg:w-1/2">
									<span className={cn("mb-4 text-sm font-bold uppercase tracking-wider", audience.themeColorText)}>
										{audience.badge}
									</span>

									<h2 className="mb-4 text-4xl font-extrabold text-slate-800 lg:text-5xl leading-tight">
										{audience.headline}
									</h2>

									<p className="mb-10 text-lg text-slate-600">
										{audience.description}
									</p>

									{/* Lista de Features */}
									<div className="mb-10 flex flex-col gap-6">
										{audience.features.map((feature, idx) => (
											<div key={idx} className="flex items-start gap-4">
												<div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", audience.themeColorLightBg)}>
													{feature.icon}
												</div>
												<div>
													<h4 className="text-base font-bold text-slate-800">
														{feature.title}
													</h4>
													<p className="mt-1 text-sm text-slate-600">
														{feature.description}
													</p>
												</div>
											</div>
										))}
									</div>

									{/* Text Link CTA */}
									<a
										href={audience.ctaLink}
										className={cn("inline-flex items-center gap-2 font-bold transition-all hover:gap-3", audience.themeColorText)}
										tabIndex={isActive ? 0 : -1}
									>
										{audience.ctaText}
										<ArrowRight weight="bold" className="h-5 w-5" />
									</a>
								</div>

								{/* Columna Derecha: Composición en Capas */}
								<div className={cn("relative w-full lg:w-1/2", compositionClasses)}>
									{/* Blob de fondo */}
									<div className={cn("absolute", blobClasses, audience.blobClass)} />
									
									{/* Imagen Principal */}
									<div className={cn("absolute overflow-hidden rounded-2xl", imageClasses)}>
										<Image
											src={audience.image}
											alt={audience.title}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
											priority={audience.id === 'agencias'}
										/>
									</div>

									{/* Badge Flotante */}
									<div className={cn("absolute flex h-14 w-14 items-center justify-center rounded-full", badgeClasses, audience.floatingBadgeBg)}>
										{audience.floatingBadgeIcon}
									</div>
								</div>

							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
