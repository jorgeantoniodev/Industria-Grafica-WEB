import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Lightbulb } from 'lucide-react';

interface ServiceItem {
	id: string;
	title: string;
	description: string;
	href: string;
	bgGradient: string;
	imageSrc: string;
	imageAlt: string;
}

const servicesData: ServiceItem[] = [
	{
		id: 'corporativo-salud',
		title: 'Corporativo & Salud',
		description:
			'Impresión a gran escala de formularios, recetarios, carpetas e institucionales con fidelidad colorimétrica rigurosa.',
		href: '/soluciones-industriales',
		bgGradient: 'bg-gradient-to-br from-purple-950 via-indigo-900 to-slate-950',
		imageSrc: '/services/corporativo-salud.svg',
		imageAlt: 'Servicios de Impresión Corporativa y Salud',
	},
	{
		id: 'offset',
		title: 'Impresión Offset Comercial',
		description:
			'Producción física pesada para grandes tirajes, folletería masiva y papelería comercial donde la precisión es clave.',
		href: '/soluciones-industriales#offset',
		bgGradient: 'bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950',
		imageSrc: '/services/offset.svg',
		imageAlt: 'Impresión Offset Comercial a gran escala',
	},
	{
		id: 'troquelados-packaging',
		title: 'Troquelados & Packaging',
		description:
			'Estuches, cajas personalizadas, troquelados complejos y acabados con laminado en polipropileno o barniz UV.',
		href: '/soluciones-industriales#troquelados',
		bgGradient: 'bg-gradient-to-br from-fuchsia-950 via-purple-900 to-slate-950',
		imageSrc: '/services/troquelados-packaging.svg',
		imageAlt: 'Troquelados y Packaging industrial',
	},
	{
		id: 'encuadernacion-editorial',
		title: 'Encuadernación & Editorial',
		description:
			'Trenes de encuadernación abrochada y lomo cuadrado perfecto (Hotmelt) para libros, revistas y catálogos.',
		href: '/soluciones-industriales#encuadernacion',
		bgGradient: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950',
		imageSrc: '/services/encuadernacion-editorial.png',
		imageAlt: 'Encuadernación de libros y revistas',
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
										className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
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
