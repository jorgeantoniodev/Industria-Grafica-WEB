import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Lightbulb } from 'lucide-react';

export interface ServiceItem {
	id: string;
	title: string;
	description: string;
	href: string;
	/**
	 * Configuración de color de la tarjeta.
	 * Usar strings completos de clases Tailwind para compatibilidad con JIT.
	 * Ej: { gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400', glow: 'bg-cyan-300/40' }
	 */
	theme: {
		gradient: string;
		glow: string;
	};
	/** Ruta a la imagen PNG (idealmente con fondo transparente). Opcional. */
	imageSrc?: string;
	imageAlt?: string;
	/** Si es true, la imagen carga de forma eager (usar en la tarjeta más visible de la página). */
	eagerLoad?: boolean;
	/** Forma de renderizado de la imagen: 'default', 'circle', 'rounded-rect' o 'arch'. */
	imageShape?: 'default' | 'circle' | 'rounded-rect' | 'arch';
	/** Posición del objeto en la máscara circular (ej: 'center 40%'). */
	objectPosition?: string;
	/** Si la imagen debe actuar como máscara de recorte ('cover') o contenerse libremente ('contain') */
	imageFit?: 'contain' | 'cover';
	/** Clases extra para escalar la imagen individualmente (ej: 'scale-125') */
	imageScaleClass?: string;
	/** Color de fondo para el área con forma (ej: '#16089D', '#730AB0'). */
	backdropColor?: string;
}

export interface ServicesSectionProps {
	services: ServiceItem[];
	badgeText?: string;
	titlePrefix?: string;
	titleHighlight?: string;
	subtitle?: string;
	description?: string;
}

export default function ServicesSection({
	services,
	badgeText = 'Servicios & Producción',
	titlePrefix = 'Tus proyectos. Tu empresa.',
	titleHighlight = 'Potenciá tu marca.',
	subtitle = 'Lo que producimos en nuestra planta',
	description = 'Nos dedicamos a transformar tus ideas en realidades tangibles desde hace más de 30 años. Ofrecemos soluciones que destacan por su creatividad, por nuestro compromiso de atención y seguimiento a nuestros clientes.',
}: ServicesSectionProps) {
	if (!services || services.length === 0) return null;

	return (
		<section className="w-full py-16 lg:py-24 bg-slate-50 text-slate-900">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Header principal */}
				<div className="mb-14 max-w-4xl">
					{/* Badge con ícono */}
					<div className="mb-6 flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700">
							<Lightbulb className="h-5 w-5" />
						</div>
						<span className="text-sm font-semibold tracking-wide text-purple-800 uppercase">
							{badgeText}
						</span>
					</div>

					{/* Encabezado principal */}
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
						{titlePrefix}{' '}
						<span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
							{titleHighlight}
						</span>
					</h2>

					<h3 className="mt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
						{subtitle}
					</h3>
					<p className="mt-3 text-lg text-slate-600 max-w-3xl leading-relaxed">
						{description}
					</p>
				</div>

				{/* Grilla: 2×2 en pantallas grandes (≥ 1024px), 1 columna en pantallas intermedias y móviles */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
					{services.map((service) => (
						<div key={service.id} className="@container mx-auto h-full w-full max-w-[600px] lg:max-w-none">
							<Link
								href={service.href}
								className={`group relative overflow-hidden rounded-[2rem] h-full min-h-[clamp(390px,88cqi,520px)] p-[clamp(1.5rem,6.75cqi,2.5rem)] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-xl ${service.theme.gradient}`}
							>
								{/* Glow en el fondo */}
								<div
									className={`absolute -bottom-10 -right-10 w-72 h-72 ${service.theme.glow} rounded-full blur-3xl pointer-events-none z-0`}
								/>

								{/* Contenido textual (z-20 para estar siempre por encima de las imágenes/formas) */}
								<div className="relative z-20 max-w-[calc(100%_-_4rem)] @min-[480px]:max-w-[50%] @min-[560px]:max-w-[45%] pointer-events-none">
									<h4 className="text-[clamp(1.75rem,6cqi,2.25rem)] font-bold text-white tracking-tight leading-snug mb-3 @min-[480px]:mb-4">
										{service.title}
									</h4>
									<p className="text-[clamp(0.875rem,3cqi,1.125rem)] text-white/90 font-normal leading-relaxed">
										{service.description}
									</p>
								</div>

								{/* Botón ArrowUpRight — esquina superior derecha */}
								<div className="absolute top-[clamp(1.25rem,4cqi,2rem)] right-[clamp(1.25rem,4cqi,2rem)] z-30 flex h-[clamp(2.5rem,8cqi,3rem)] w-[clamp(2.5rem,8cqi,3rem)] items-center justify-center rounded-xl bg-white p-2.5 @min-[560px]:p-3 text-black shadow-md transition-all duration-300 group-hover:scale-110">
									<ArrowUpRight className="h-[clamp(1.25rem,4cqi,1.5rem)] w-[clamp(1.25rem,4cqi,1.5rem)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</div>

								{/* Imagen de la tarjeta */}
								{service.imageSrc && (
									service.imageShape === 'circle' ? (
										<div
											className={`card-circle-mask absolute bottom-2 right-2 @min-[480px]:bottom-4 @min-[480px]:right-4 w-[clamp(195px,57.5cqi,340px)] h-[clamp(195px,57.5cqi,340px)] rounded-full z-10 pointer-events-auto ${
												service.backdropColor ? 'p-3 sm:p-4 lg:p-5 flex items-center justify-center' : ''
											}`}
											style={service.backdropColor ? { backgroundColor: service.backdropColor } : undefined}
										>
											<div className="relative w-full h-full rounded-full overflow-hidden">
												<Image
													src={service.imageSrc}
													alt={service.imageAlt ?? ''}
													fill
													sizes="(max-width: 1024px) 340px, 400px"
													loading={service.eagerLoad ? 'eager' : 'lazy'}
													className="object-cover"
													style={{ objectPosition: service.objectPosition || 'center 40%' }}
												/>
											</div>
										</div>
									) : service.imageShape === 'rounded-rect' ? (
										<div
											className="group/rect absolute bottom-0 right-0 w-[62%] @min-[480px]:w-[58%] h-[52%] @min-[480px]:h-[60%] @min-[560px]:h-[68%] rounded-tl-[40px] @min-[480px]:rounded-tl-[55px] @min-[560px]:rounded-tl-[70px] overflow-hidden z-10 pointer-events-auto transition-transform duration-[350ms] ease-out group-hover:scale-[1.02] group-hover/rect:scale-[1.04]"
											style={service.backdropColor ? { backgroundColor: service.backdropColor } : undefined}
										>
											{/* Imagen del talonario o máscara cover */}
											<div className="relative w-full h-full flex items-center justify-center">
												<Image
													src={service.imageSrc}
													alt={service.imageAlt ?? ''}
													fill
													sizes="(max-width: 1024px) 260px, 350px"
													loading={service.eagerLoad ? 'eager' : 'lazy'}
													className={
														service.imageFit === 'cover'
															? "object-cover object-center w-full h-full transition-transform duration-[350ms] ease-out group-hover:scale-105 group-hover/rect:scale-110"
															: "object-contain object-center scale-[1.40] @min-[480px]:scale-[1.46] @min-[560px]:scale-[1.50] transition-transform duration-[350ms] ease-out group-hover:scale-[1.45] @min-[480px]:group-hover:scale-[1.49] @min-[560px]:group-hover:scale-[1.53] drop-shadow-2xl"
													}
												/>
											</div>
										</div>
									) : service.imageShape === 'arch' ? (
										<div className="group/arch absolute bottom-0 right-3 @min-[480px]:right-6 @min-[560px]:right-8 w-[clamp(190px,54cqi,320px)] h-[clamp(220px,59cqi,350px)] z-10 pointer-events-auto">
											{/* Arco con base en la parte inferior */}
											<div
												className="absolute bottom-0 right-0 w-full h-full rounded-t-full flex items-center justify-center p-[clamp(1rem,4cqi,2rem)] pb-[clamp(1.5rem,6cqi,2.5rem)] transition-transform duration-[350ms] ease-out group-hover:scale-[1.02] group-hover/arch:scale-[1.04]"
												style={{ backgroundColor: service.backdropColor || '#730AB0' }}
											>
												{/* Imagen de la caja dentro del arco, sin recortarse */}
												<div className="relative w-full h-[70%] transition-transform duration-[350ms] ease-out group-hover:scale-105 group-hover/arch:scale-[1.08]">
													<Image
														src={service.imageSrc}
														alt={service.imageAlt ?? ''}
														fill
														sizes="(max-width: 1024px) 250px, 320px"
														loading={service.eagerLoad ? 'eager' : 'lazy'}
														className={`object-contain object-center drop-shadow-2xl ${service.imageScaleClass || ''}`}
													/>
												</div>
											</div>
										</div>
									) : (
										<div className="absolute bottom-0 right-0 w-[clamp(220px,62cqi,380px)] h-[clamp(240px,68cqi,420px)] z-0 overflow-hidden pointer-events-none">
											<div className="relative h-full w-full">
												<Image
													src={service.imageSrc}
													alt={service.imageAlt ?? ''}
													fill
													sizes="(max-width: 1024px) 280px, 380px"
													loading={service.eagerLoad ? 'eager' : 'lazy'}
													className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
												/>
											</div>
										</div>
									)
								)}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

