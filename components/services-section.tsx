import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Lightbulb } from 'lucide-react';

interface ServiceItem {
	id: string;
	title: string;
	description: string;
	href: string;
	bgGradient: string;
	glowColor: string;
	imageSrc: string;
	imageAlt: string;
	/** 'multiply' para fotos con fondo blanco; undefined para PNG con transparencia */
	imageBlend?: 'multiply';
}

const servicesData: ServiceItem[] = [
	{
		id: 'corporativo-salud',
		title: 'Corporativo & Salud',
		description:
			'Impresión a gran escala de formularios, recetarios, carpetas e institucionales, con altos estándares de calidad y cumplimiento estricto de plazos.',
		href: '/soluciones-industriales',
		bgGradient: 'bg-gradient-to-br from-[#084298] via-[#0d6efd] to-[#0dcaf0]',
		glowColor: 'bg-[#0dcaf0]/25',
		imageSrc: '/services/corporativo-salud-mockup.png',
		imageAlt: 'Carpeta institucional y formularios de impresión corporativa y salud',
		// PNG con canal alfa, sin blend mode necesario
	},
	{
		id: 'offset',
		title: 'Impresión Offset Comercial',
		description:
			'Producción física pesada para grandes tirajes, folletería masiva y papelería comercial donde la precisión es clave.',
		href: '/soluciones-industriales#offset',
		bgGradient: 'bg-gradient-to-br from-[#6816e2] via-[#9e77ed] to-[#d63384]',
		glowColor: 'bg-[#d63384]/25',
		imageSrc: '/services/offset.jpg',
		imageAlt: 'Pliegos de papel impresos apilados para producción offset comercial',
		imageBlend: 'multiply',
	},
	{
		id: 'troquelados-packaging',
		title: 'Troquelados & Packaging',
		description:
			'Estuches, cajas personalizadas, troquelados complejos y acabados con laminado en polipropileno o barniz UV.',
		href: '/soluciones-industriales#troquelados',
		bgGradient: 'bg-gradient-to-br from-[#664d03] via-[#fd7e14] to-[#ffc720]',
		glowColor: 'bg-[#ffc720]/25',
		imageSrc: '/services/troquelados-packaging.jpg',
		imageAlt: 'Caja de cartón personalizada para troquelados y packaging industrial',
		imageBlend: 'multiply',
	},
	{
		id: 'encuadernacion-editorial',
		title: 'Encuadernación & Editorial',
		description:
			'Trenes de encuadernación abrochada y lomo cuadrado perfecto (Hotmelt) para libros, revistas y catálogos.',
		href: '/soluciones-industriales#encuadernacion',
		bgGradient: 'bg-gradient-to-br from-[#1e5208] via-[#198754] to-[#20c997]',
		glowColor: 'bg-[#20c997]/25',
		imageSrc: '/services/encuadernacion-editorial.png',
		imageAlt: 'Libro editorial tapa dura impreso para encuadernación y editorial',
		imageBlend: 'multiply',
	},
];

export default function ServicesSection() {
	return (
		<section className="w-full py-16 lg:py-24 bg-slate-50 text-slate-900">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Header principal al estilo Taylor */}
				<div className="mb-14 max-w-4xl">
					{/* Badge con ícono */}
					<div className="mb-6 flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700">
							<Lightbulb className="h-5 w-5" />
						</div>
						<span className="text-sm font-semibold tracking-wide text-purple-800 uppercase">
							Capacidad Industrial & Producción
						</span>
					</div>

					{/* Encabezado principal con frase destacada en gradiente */}
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
						Tus proyectos. Tu empresa.{' '}
						<span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
							Potenciá tu marca con Industria Gráfica.
						</span>
					</h2>

					{/* Título de sección y subtítulo gris opaco */}
					<h3 className="mt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
						Soluciones para el Alcance de tus Operaciones
					</h3>
					<p className="mt-3 text-lg text-slate-600 max-w-3xl leading-relaxed">
						Atendemos tus necesidades en cada etapa del proceso con capacidad industrial
						líder y modelos de servicio escalables diseñados para acompañar el crecimiento
						de tu organización.
					</p>
				</div>

				{/* Grilla CSS puro (2 columnas en escritorio) */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{servicesData.map((service) => (
						<Link
							key={service.id}
							href={service.href}
							className={`group relative overflow-hidden rounded-[2rem] p-8 lg:p-10 min-h-[440px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-xl ${service.bgGradient}`}
						>
							{/* Div de resplandor (glow) en el fondo abajo a la derecha */}
							<div className={`absolute -bottom-10 -right-10 w-72 h-72 ${service.glowColor} rounded-full blur-3xl pointer-events-none z-0`} />

							{/* Contenido textual (flujo normal arriba a la izquierda, max-w 60%) */}
							<div className="relative z-10 max-w-[60%]">
								<h4 className="text-3xl font-bold text-white tracking-tight leading-snug mb-3">
									{service.title}
								</h4>
								<p className="text-sm lg:text-base text-white/80 font-normal leading-relaxed">
									{service.description}
								</p>
							</div>

							{/* Botón de acción absoluto (Top-Right) */}
							<div className="absolute top-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm p-3 text-white transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
								<ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</div>

							{/* Contenedor de la imagen (Bottom-Right, 65% width, 75% height) */}
							<div className="absolute bottom-0 right-0 w-[65%] h-[75%] z-0 overflow-hidden pointer-events-none">
								<div className="relative h-full w-full">
									<Image
										src={service.imageSrc}
										alt={service.imageAlt}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										loading={service.id === 'corporativo-salud' ? 'eager' : 'lazy'}
										className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105"
										style={service.imageBlend ? { mixBlendMode: service.imageBlend } : undefined}
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
