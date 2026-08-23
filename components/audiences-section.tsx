'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Tipos públicos ────────────────────────────────────────────────────────────

export interface AudienceFeature {
	/**
	 * Componente de icono compatible con className (Lucide, Phosphor, Heroicons, etc.).
	 * El componente renderizará el icono con h-6 w-6 y el color del tema.
	 * Ejemplo: { icon: Rocket }
	 */
	icon: React.ElementType;
	title: string;
	description: string;
}

/** Nombres semánticos que describen la composición visual del panel. */
export type AudienceLayout = 'feature-left' | 'portrait' | 'landscape';

export interface AudienceTheme {
	/** Clase Tailwind de texto con color del tema. Ej: 'text-blue-700' */
	colorText: string;
	/** Clase Tailwind de fondo sólido del tema. Ej: 'bg-blue-700' */
	colorBg: string;
	/** Clase Tailwind de fondo claro del tema. Ej: 'bg-blue-50' */
	colorLightBg: string;
	/**
	 * Clases Tailwind del gradiente del blob de fondo (solo color, sin shape).
	 * Ej: 'bg-gradient-to-br from-blue-100 to-indigo-50'
	 * La forma (border-radius asimétrico) la determina el componente según el layout.
	 */
	blobGradient: string;
	/** Clase Tailwind del fondo del badge flotante. Ej: 'bg-blue-700' */
	floatingBadgeBg: string;
}

export interface AudienceItem {
	id: string;
	/** Etiqueta visible en la pestaña de selección */
	title: string;
	/** Texto eyebrow (badge de texto) sobre el titular */
	badge: string;
	headline: string;
	description: string;
	features: AudienceFeature[];
	ctaText: string;
	ctaLink: string;
	/** Ruta a la imagen desde /public */
	image: string;
	/** Alt text explícito. Si no se define, usa el título de la audiencia. */
	imageAlt?: string;
	/**
	 * Componente de icono para el badge flotante.
	 * Compatible con className (Lucide, Phosphor, Heroicons, etc.).
	 */
	floatingBadgeIcon: React.ElementType;
	/** Si true, la imagen se carga con priority (usar en la pestaña activa por defecto). */
	priority?: boolean;
	/** Composición visual del panel derecho */
	layout: AudienceLayout;
	theme: AudienceTheme;
}

export interface AudiencesSectionProps {
	audiences: AudienceItem[];
	sectionTitle?: string;
	/**
	 * Si 'white', envuelve el componente en un contenedor con fondo blanco.
	 * Útil para aislarlo visualmente sobre fondos oscuros.
	 * Default: 'transparent'.
	 */
	background?: 'transparent' | 'white';
}

// ─── Mapa interno de geometría ─────────────────────────────────────────────────
// La estructura visual nunca sale del componente. Solo los colores vienen de los datos.

const LAYOUT_VARIANTS: Record<AudienceLayout, {
	composition: string;
	blob: string;
	blobShape: string;
	image: string;
	badge: string;
}> = {
	'feature-left': {
		composition: 'h-[450px] lg:h-[550px]',
		blob: 'top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%]',
		blobShape: 'rounded-[8rem_8rem_8rem_1rem]',
		image: 'bottom-0 left-0 w-[75%] h-[75%] z-10 shadow-2xl',
		badge: 'top-[10%] right-[10%] z-20 shadow-xl',
	},
	'portrait': {
		composition: 'h-[450px] lg:h-[550px]',
		blob: 'right-0 top-0 w-[70%] h-full',
		blobShape: 'rounded-[1rem_8rem_8rem_8rem]',
		image: 'bottom-[10%] left-0 w-[75%] h-[75%] z-10 shadow-2xl',
		badge: 'top-1/2 left-[5%] -translate-y-1/2 z-20 shadow-xl',
	},
	'landscape': {
		composition: 'h-[450px] lg:h-[550px]',
		blob: 'bottom-0 right-0 w-[80%] h-[75%]',
		blobShape: 'rounded-[8rem_1rem_8rem_8rem]',
		image: 'top-0 left-0 w-[75%] h-[75%] z-10 shadow-2xl',
		badge: 'bottom-[15%] left-[5%] z-20 shadow-xl',
	},
};

// ─── Componente ────────────────────────────────────────────────────────────────

export default function AudiencesSection({
	audiences,
	sectionTitle = '¿A quién servimos?',
	background = 'transparent',
}: AudiencesSectionProps) {
	const [activeTab, setActiveTab] = useState(audiences[0]?.id ?? '');
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

	if (!audiences || audiences.length === 0) return null;

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
			setActiveTab(audiences[nextIndex].id);
			tabsRef.current[nextIndex]?.focus();
		}
	};

	const inner = (
		<section className="font-sans px-4 py-16 lg:px-8 lg:py-24 max-w-7xl mx-auto">
			{/* Título y Selector de Tabs */}
			<div className="mb-16 flex flex-col items-center">
				{sectionTitle && (
					<h3 className="mb-6 text-lg font-bold text-slate-800 lg:text-xl">
						{sectionTitle}
					</h3>
				)}
				<div
					role="tablist"
					aria-label={sectionTitle}
					className="flex flex-wrap items-center justify-center gap-3"
					onKeyDown={handleKeyDown}
				>
					{audiences.map((audience, index) => {
						const isActive = activeTab === audience.id;
						return (
							<button
								key={audience.id}
								ref={(el) => { tabsRef.current[index] = el; }}
								role="tab"
								aria-selected={isActive}
								aria-controls={`panel-${audience.id}`}
								id={`tab-${audience.id}`}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setActiveTab(audience.id)}
								className={cn(
									'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:text-base lg:px-8 lg:py-3 border',
									isActive
										? cn('text-white shadow-md border-transparent', audience.theme.colorBg, 'focus-visible:ring-slate-900')
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
					const layoutConfig = LAYOUT_VARIANTS[audience.layout];
					const FloatingBadgeIcon = audience.floatingBadgeIcon;

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
							{/* Contenedor Flex en 2 columnas */}
							<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

								{/* Columna Izquierda: Texto */}
								<div className="flex flex-col lg:w-1/2">
									<span className={cn("mb-4 text-sm font-bold uppercase tracking-wider", audience.theme.colorText)}>
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
										{audience.features.map((feature) => {
											const FeatureIcon = feature.icon;
											return (
												<div key={feature.title} className="flex items-start gap-4">
													<div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", audience.theme.colorLightBg)}>
														<FeatureIcon className={cn("h-6 w-6", audience.theme.colorText)} />
													</div>
													<div>
														<h4 className="text-base font-bold text-slate-800">{feature.title}</h4>
														<p className="mt-1 text-sm text-slate-600">{feature.description}</p>
													</div>
												</div>
											);
										})}
									</div>

									{/* CTA */}
									<a
										href={audience.ctaLink}
										className={cn("inline-flex items-center gap-2 font-bold transition-all hover:gap-3", audience.theme.colorText)}
										tabIndex={isActive ? 0 : -1}
									>
										{audience.ctaText}
										<ArrowRight className="h-5 w-5" />
									</a>
								</div>

								{/* Columna Derecha: Composición en Capas */}
								<div className={cn("relative w-full lg:w-1/2", layoutConfig.composition)}>
									{/* Blob de fondo — geometría del componente, color del tema */}
									<div
										className={cn(
											"absolute",
											layoutConfig.blob,
											layoutConfig.blobShape,
											audience.theme.blobGradient
										)}
									/>

									{/* Imagen Principal */}
									<div className={cn("absolute overflow-hidden rounded-2xl", layoutConfig.image)}>
										<Image
											src={audience.image}
											alt={audience.imageAlt ?? audience.title}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
											priority={audience.priority}
										/>
									</div>

									{/* Badge Flotante */}
									<div className={cn(
										"absolute flex h-14 w-14 items-center justify-center rounded-full",
										layoutConfig.badge,
										audience.theme.floatingBadgeBg
									)}>
										<FloatingBadgeIcon className="h-7 w-7 text-white" />
									</div>
								</div>

							</div>
						</div>
					);
				})}
			</div>
		</section>
	);

	if (background === 'white') {
		return <div className="w-full bg-white">{inner}</div>;
	}

	return inner;
}
