import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// ─── Interfaces ────────────────────────────────────────────────────────────────

export interface HeroTheme {
	/**
	 * Clase Tailwind del gradiente de fondo de la tarjeta principal.
	 * Ej: 'bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]'
	 */
	backgroundGradient: string;
	/**
	 * Clases Tailwind para el botón principal (color estático).
	 * Ej: 'bg-blue-600'
	 */
	ctaBg: string;
	/**
	 * Clases Tailwind para el estado hover del botón principal.
	 * Ej: 'hover:bg-blue-700'
	 */
	ctaHoverBg: string;
}

export interface HeroMedia {
	type: 'video' | 'image';
	src: string;
	/** Opcional. Usado como poster si es video, ignorado si es imagen. */
	poster?: string;
	/** Opcional. Texto alternativo, usado si es imagen. */
	alt?: string;
}

export interface HeroProps {
	/** Título principal (H1). Soporta ReactNode para inyectar spans de colores o `<br>`. */
	headline: React.ReactNode;
	/** Subtítulo (H2). Texto corto. */
	subheadline?: string;
	/** Descripción (P). Párrafo introductorio. */
	description?: string;
	/** Texto del botón CTA. */
	ctaText: string;
	/** Enlace del botón CTA. */
	ctaLink: string;
	/** Media (Video o Imagen) para la columna derecha. */
	media: HeroMedia;
	/** Configuración de colores del tema. */
	theme: HeroTheme;
}

// ─── Componente ────────────────────────────────────────────────────────────────

export default function Hero({
	headline,
	subheadline,
	description,
	ctaText,
	ctaLink,
	media,
	theme,
}: HeroProps) {
	return (
		<section className="font-sans px-2 py-3 lg:px-4 lg:py-4">
			<div className={cn(
				"mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-3 lg:p-4",
				theme.backgroundGradient
			)}>
				{/* minHeight 560px asegura que el contenedor tenga espacio de respiración */}
				<div className="flex flex-col lg:flex-row" style={{ minHeight: '560px' }}>
					
					{/* ── Columna izquierda ─────────────────────────── */}
					<div className="flex flex-col justify-center p-6 lg:w-1/2 lg:p-12">
						<h1 className="mb-5 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
							{headline}
						</h1>

						{subheadline && (
							<h2 className="mb-3 text-xl font-bold text-slate-700">
								{subheadline}
							</h2>
						)}

						{description && (
							<p className="mb-7 max-w-sm text-base text-slate-600">
								{description}
							</p>
						)}

						<a
							href={ctaLink}
							className={cn(
								"inline-flex w-fit rounded-full px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03]",
								theme.ctaBg,
								theme.ctaHoverBg
							)}
						>
							{ctaText}
						</a>
					</div>

					{/* ── Columna derecha: Media ──────────────────────── */}
					<div className="relative w-full aspect-[9/16] overflow-hidden rounded-3xl lg:aspect-auto lg:w-1/2 lg:rounded-l-[15rem] lg:rounded-r-2xl bg-black/5">
						{media.type === 'video' ? (
							<video
								autoPlay
								loop
								muted
								playsInline
								preload="auto"
								poster={media.poster}
								className="absolute inset-0 h-full w-full object-cover"
							>
								<source src={media.src} type="video/mp4" />
							</video>
						) : (
							<Image
								src={media.src}
								alt={media.alt ?? ''}
								fill
								priority
								className="absolute inset-0 h-full w-full object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						)}
						{/* Overlay sutil para oscurecer ligeramente el media */}
						<div className="pointer-events-none absolute inset-0 bg-black/5" />
					</div>

				</div>
			</div>
		</section>
	);
}
