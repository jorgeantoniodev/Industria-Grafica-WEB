'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const audiences = [
	{
		id: 'agencias',
		title: 'Marca blanca para agencias',
		badge: 'MÁS DE 30 AÑOS EN EL RUBRO',
		headline: (
			<>
				Detrás de cada gran marca, está{' '}
				<span className="text-blue-600">Premat.</span>
			</>
		),
		subtitle: 'Imprenta Industrial en Córdoba',
		description:
			'Producción offset a gran escala, troquelados complejos y encuadernación. Proveemos infraestructura gráfica y operamos como marca blanca para agencias y corporaciones.',
		ctaText: 'Cotizar producción',
		ctaLink: '#cotizar',
		image: '/agencias.jpg',
		bgGradient: 'from-[#dcfce7] via-[#eff6ff] to-[#f3e8ff]',
	},
	{
		id: 'corporativo',
		title: 'Corporativo e institucional',
		badge: 'ALTO VOLUMEN',
		headline: (
			<>
				Soluciones institucionales de{' '}
				<span className="text-blue-600">alto rendimiento.</span>
			</>
		),
		subtitle: 'Talonarios y formularios médicos',
		description:
			'Especialistas en talonarios, fichas médicas y formularios de alto volumen. Garantizamos fidelidad de color sostenida en el tiempo y entregas precisas para las necesidades institucionales más exigentes.',
		ctaText: 'Solicitar asesoría',
		ctaLink: '#contacto',
		image: '/corporativo.jpg',
		bgGradient: 'from-[#fef08a] via-[#fef9c3] to-[#eff6ff]',
	},
	{
		id: 'pymes',
		title: 'Marcas y pymes',
		badge: 'DISEÑO A MEDIDA',
		headline: (
			<>
				Materiales que hacen destacar tu{' '}
				<span className="text-blue-600">identidad.</span>
			</>
		),
		subtitle: 'Diseño puntual y variable',
		description:
			'Trabajos de diseño no repetitivo, packaging chico y materiales de marca para negocios medianos. Llevamos tu identidad visual a otro nivel con la mejor calidad de impresión.',
		ctaText: 'Ver opciones de packaging',
		ctaLink: '#servicios',
		image: '/pymes.jpg',
		bgGradient: 'from-[#ffedd5] via-[#ffedd5] to-[#fce7f3]',
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
		<section className="font-sans px-4 py-8 lg:px-8 lg:py-12">
			{/* Tab Selector */}
			<div className="mx-auto mb-10 flex max-w-7xl justify-center">
				<div
					role="tablist"
					aria-label="Audiencias a las que servimos"
					className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] bg-slate-50/50 p-2 shadow-sm ring-1 ring-slate-200/50 backdrop-blur-sm lg:gap-4 lg:p-3 lg:shadow-none lg:ring-0 lg:bg-transparent"
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
									'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lg:text-base lg:px-6 lg:py-3',
									isActive
										? 'bg-blue-600 text-white shadow-md'
										: 'border border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900'
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
					return (
						<div
							key={audience.id}
							role="tabpanel"
							id={`panel-${audience.id}`}
							aria-labelledby={`tab-${audience.id}`}
							hidden={!isActive}
							className={cn(
								'mx-auto max-w-7xl transition-opacity duration-500',
								isActive ? 'block opacity-100' : 'hidden opacity-0'
							)}
						>
							<div
								className={cn(
									'overflow-hidden rounded-[2.5rem] bg-gradient-to-br p-4 lg:p-6',
									audience.bgGradient
								)}
							>
								<div className="flex flex-col lg:flex-row">
									{/* Contenido de Texto */}
									<div className="flex flex-col justify-center p-10 lg:w-1/2 lg:p-16">
										<span className="mb-6 inline-block w-fit rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
											{audience.badge}
										</span>

										<h2 className="mb-6 text-4xl font-extrabold text-slate-700 lg:text-5xl">
											{audience.headline}
										</h2>

										<h3 className="mb-3 text-xl font-bold text-slate-700 lg:text-2xl">
											{audience.subtitle}
										</h3>

										<p className="mb-8 max-w-md text-lg text-slate-600">
											{audience.description}
										</p>

										<a
											href={audience.ctaLink}
											className="inline-flex w-fit rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-transform hover:scale-105"
											tabIndex={isActive ? 0 : -1}
										>
											{audience.ctaText}
										</a>
									</div>

									{/* Imagen en blob */}
									<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl lg:min-h-[500px] lg:w-1/2 lg:rounded-l-[15rem] lg:rounded-r-2xl">
										<Image
											src={audience.image}
											alt={audience.title}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
											priority={audience.id === 'agencias'}
										/>
										<div className="pointer-events-none absolute inset-0 bg-black/5" />
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
