'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export interface OffsetImagesCompositionProps {
	title: string;
	description?: string;
	tagline?: string;
	showCartel?: boolean;
	leftImageSrc?: string;
	leftImageAlt?: string;
	centerImageSrc?: string;
	centerImageAlt?: string;
	rightImageSrc?: string;
	rightImageAlt?: string;
}

export default function OffsetImagesComposition({
	title,
	description,
	tagline = 'De tu idea al producto terminado.',
	showCartel = false,
	leftImageSrc = '/images/soluciones-industriales/impresion-offset-izquierda.webp',
	leftImageAlt = 'Impresión offset comercial - Panel izquierdo',
	centerImageSrc = '/images/soluciones-industriales/impresion-offset-centro.webp',
	centerImageAlt = 'Impresión offset comercial - Panel central',
	rightImageSrc = '/images/soluciones-industriales/impresion-offset-derecha.webp',
	rightImageAlt = 'Impresión offset comercial - Panel derecho',
}: OffsetImagesCompositionProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;
		const width = track.clientWidth;
		if (width <= 0) return;
		const nextIndex = Math.round(track.scrollLeft / width);
		setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
	}, []);

	const scrollToSlide = (index: number) => {
		const track = trackRef.current;
		if (!track) return;
		const targetLeft = index * track.clientWidth;
		track.scrollTo({ left: targetLeft, behavior: 'smooth' });
		setActiveIndex(index);
	};

	const prevSlide = () => {
		scrollToSlide(Math.max(0, activeIndex - 1));
	};

	const nextSlide = () => {
		scrollToSlide(Math.min(2, activeIndex + 1));
	};

	const slidesMeta = [
		{ id: 'center', name: 'Imagen 1 de 3: Panel central' },
		{ id: 'left', name: 'Imagen 2 de 3: Panel izquierdo' },
		{ id: 'right', name: 'Imagen 3 de 3: Panel derecho' },
	];

	return (
		<div
			className="relative w-full h-[calc(100svh-5rem)] lg:h-[calc(100vh-5rem)] min-h-[540px] max-h-[920px] overflow-hidden bg-slate-100"
			role="region"
			aria-roledescription="carousel"
			aria-label="Galería visual de Impresión Offset Comercial"
		>
			{/* Carrusel en móvil y Tablet / Fila de 3 columnas en escritorio */}
			<div
				ref={trackRef}
				onScroll={handleScroll}
				className="flex flex-row w-full h-full overflow-x-auto lg:overflow-hidden snap-x snap-mandatory scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
			>
				{/* ── Panel Central ────────────────────────────────────────────── */}
				{/* Móvil: Diapositiva 1 inicial (sin salto de hidratación). Escritorio: Columna central (order-2) */}
				<div
					role="group"
					aria-roledescription="slide"
					aria-label={slidesMeta[0].name}
					className="relative w-full min-w-full lg:min-w-0 lg:w-1/3 h-full shrink-0 lg:shrink snap-center order-1 lg:order-2 overflow-hidden flex items-center justify-center"
				>
					<Image
						src={centerImageSrc}
						alt={centerImageAlt}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 33vw"
					/>
					{/* Cartel central con fondo negro transparente (oculto por ahora, preservado en código) */}
					{showCartel && (
						<div className="relative z-10 w-[calc(100%-2rem)] max-w-xl mx-auto rounded-2xl bg-black/[0.45] p-6 lg:p-8 text-center">
							<h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
								{title}
							</h2>
							{tagline ? (
								<p className="text-xl lg:text-2xl font-bold text-[#F5EB27] tracking-tight">
									{tagline}
								</p>
							) : description ? (
								<p className="text-lg text-white/90 max-w-3xl leading-relaxed">
									{description}
								</p>
							) : null}
						</div>
					)}
				</div>

				{/* ── Panel Izquierdo ──────────────────────────────────────────── */}
				{/* Móvil: Diapositiva 2 (deslizable). Escritorio: Columna izquierda (order-1) */}
				<div
					role="group"
					aria-roledescription="slide"
					aria-label={slidesMeta[1].name}
					className="relative w-full min-w-full lg:min-w-0 lg:w-1/3 h-full shrink-0 lg:shrink snap-center order-2 lg:order-1 overflow-hidden"
				>
					<Image
						src={leftImageSrc}
						alt={leftImageAlt}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 33vw"
					/>
				</div>

				{/* ── Panel Derecho ────────────────────────────────────────────── */}
				{/* Móvil: Diapositiva 3 (deslizable). Escritorio: Columna derecha (order-3) */}
				<div
					role="group"
					aria-roledescription="slide"
					aria-label={slidesMeta[2].name}
					className="relative w-full min-w-full lg:min-w-0 lg:w-1/3 h-full shrink-0 lg:shrink snap-center order-3 lg:order-3 overflow-hidden"
				>
					<Image
						src={rightImageSrc}
						alt={rightImageAlt}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 33vw"
					/>
				</div>
			</div>

			{/* ── Controles de navegación en móvil (ocultos en escritorio) ─── */}
			{/* Botón Anterior */}
			<button
				type="button"
				onClick={prevSlide}
				disabled={activeIndex === 0}
				aria-label="Ver imagen anterior"
				className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-md backdrop-blur-sm transition-opacity disabled:opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
			>
				<CaretLeft size={22} weight="bold" />
			</button>

			{/* Botón Siguiente */}
			<button
				type="button"
				onClick={nextSlide}
				disabled={activeIndex === 2}
				aria-label="Ver imagen siguiente"
				className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-md backdrop-blur-sm transition-opacity disabled:opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
			>
				<CaretRight size={22} weight="bold" />
			</button>

			{/* Indicadores de paginación discretos */}
			<div
				className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center gap-2 lg:hidden"
				role="tablist"
				aria-label="Indicadores de diapositiva"
			>
				{slidesMeta.map((slide, idx) => (
					<button
						key={slide.id}
						type="button"
						role="tab"
						aria-selected={activeIndex === idx}
						aria-label={slide.name}
						onClick={() => scrollToSlide(idx)}
						className={cn(
							'h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900',
							activeIndex === idx
								? 'w-6 bg-slate-900 shadow-sm'
								: 'w-2 bg-slate-900/40 hover:bg-slate-900/70'
						)}
					/>
				))}
			</div>
		</div>
	);
}
