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
	subtitle = 'Soluciones para el Alcance de tus Operaciones',
	description = 'Atendemos tus necesidades en cada etapa del proceso con capacidad industrial líder y modelos de servicio escalables diseñados para acompañar el crecimiento de tu organización.',
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

				{/* Grilla 2×2 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{services.map((service) => (
						<Link
							key={service.id}
							href={service.href}
							className={`group relative overflow-hidden rounded-[2rem] p-8 lg:p-10 min-h-[520px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-xl ${service.theme.gradient}`}
						>
							{/* Glow en el fondo */}
							<div
								className={`absolute -bottom-10 -right-10 w-72 h-72 ${service.theme.glow} rounded-full blur-3xl pointer-events-none z-0`}
							/>

							{/* Contenido textual (z-10 para estar encima de la imagen) */}
							<div className="relative z-10 max-w-[55%]">
								<h4 className="text-4xl font-bold text-white tracking-tight leading-snug mb-4">
									{service.title}
								</h4>
								<p className="text-base lg:text-lg text-white font-normal leading-relaxed">
									{service.description}
								</p>
							</div>

							{/* Botón ArrowUpRight — esquina superior derecha */}
							<div className="absolute top-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white p-3 text-black shadow-md transition-all duration-300 group-hover:scale-110">
								<ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</div>

							{/* Imagen flotante — solo se renderiza si imageSrc tiene valor */}
							{service.imageSrc && service.imageAlt && (
								<div className="absolute bottom-0 right-0 w-[80%] h-full z-0 overflow-hidden pointer-events-none">
									<div className="relative h-full w-full">
										<Image
											src={service.imageSrc}
											alt={service.imageAlt}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											loading={service.eagerLoad ? 'eager' : 'lazy'}
											className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
										/>
									</div>
								</div>
							)}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

