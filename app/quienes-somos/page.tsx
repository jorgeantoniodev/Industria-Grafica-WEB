import type { Metadata } from 'next';
import MediaGridSection from '@/components/media-grid-section';
import { LightRays } from '@/components/ui/light-rays';

export const metadata: Metadata = {
	title: 'Quiénes Somos | Industria Gráfica Córdoba — Barrio San Vicente',
	description:
		'Conocé la trayectoria y la planta de Industria Gráfica Córdoba en Entre Ríos 2650, Barrio San Vicente: prensas offset, troquelado, laminado y encuadernación. Coordiná una visita técnica.',
};

export default function QuienesSomosPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="relative overflow-hidden py-24 lg:py-32 bg-[#f3ebf9] border-b border-purple-100">
				<LightRays
					count={8}
					color="#506dfb"
					blur={36}
					opacity={0.65}
					speed={14}
					length="100%"
					className="z-0"
				/>
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-brand-electric-violet mb-4">
						Entre Ríos 2650 · Barrio San Vicente · Córdoba
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-slate-900">
						Quiénes somos<br />
						<span className="text-brand-electric-violet">Oficio en movimiento</span>
					</h1>
					<p className="text-lg text-slate-600 max-w-2xl">
						Offset, troquelado y encuadernación bajo un mismo techo. Más de
						30 años de producción gráfica industrial en Córdoba Capital.
					</p>
				</div>
			</section>

			<section className="py-20 lg:py-28 bg-white border-b border-slate-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna izquierda: bloque de texto */}
						<div>
							<h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
								Equipamiento de taller y capacidades
							</h2>
							<div className="w-12 h-1 bg-brand-electric-violet rounded-full mb-6" />
							<p className="text-lg text-slate-600 leading-relaxed mb-4">
								Contamos con cuatro prensas offset para cubrir distintos formatos y tipos de tirada: Roland 600 (full color, pliego máx. 102 × 72 cm, impresión máx. 100 × 70 cm), Heidelberg GTO (full color, pliego máx. 49 × 36 cm, impresión máx. 47 × 34 cm), Komori (monocolor, pliego máx. 65 × 47,5 cm, impresión máx. 64 × 45 cm) y Multilith (monocolor, pliego máx. 36 × 24 cm, impresión máx. 34 × 22 cm).
							</p>
							<p className="text-lg text-slate-600 leading-relaxed">
								Área de troquelado, plastificado OPP mate o brillante, barniz UV y encuadernación.
							</p>
						</div>

						{/* Columna derecha: espacio en blanco para futura imagen (ver imagen adjunta) */}
						<div className="relative w-full max-w-lg mx-auto lg:ml-auto">
							{/* Marco exterior desplazado (estilo diseño de referencia) */}
							<div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-slate-300 rounded-2xl pointer-events-none" />
							{/* Contenedor principal de la imagen (en blanco por ahora) */}
							<div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-xs" />
						</div>
					</div>
				</div>
			</section>

			{/* Sección de video y fotos de la planta */}
			<MediaGridSection
				title="Oficio en movimiento"
				description="Offset, troquelado y encuadernación, en la planta de Barrio San Vicente."
				primaryCta={{ label: 'Cotizar producción', href: '/contacto' }}
				secondaryCta={{ label: 'Ver servicios', href: '/servicios' }}
				images={[
					{ src: '/process-1.jpg', alt: 'Máquina Offset Industrial' },
					{ src: '/process-2.jpg', alt: 'Rodillos Offset en detalle' },
					{ src: '/process-3.jpg', alt: 'Apilado de packaging' },
				]}
				video={{
					mp4Src:  '/process.mp4',
					webmSrc: '/process.webm',
					poster:  '/process-poster.jpg',
				}}
			/>

			{/* Bloque de Ubicación y Horarios con Previsualización de Mapa */}
			<section id="ubicacion" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200 scroll-mt-32">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
						{/* Tarjeta de información */}
						<div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-slate-200">
							<div>
								<span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
									Planta y Taller
								</span>
								<h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
									Ubicación y horarios
								</h2>
								<p className="text-base text-gray-700 mb-2">
									<strong className="text-slate-900">Dirección:</strong> Entre Ríos 2650, Barrio San Vicente, Córdoba Capital, X5006, Argentina.
								</p>
								<p className="text-base text-gray-700 mb-6">
									<strong className="text-slate-900">Horario de atención:</strong> Lunes a viernes de 08:00 a 17:00.
								</p>
							</div>
							<div>
								<a
									href="https://www.google.com/maps/search/?api=1&query=Entre+R%C3%ADos+2650%2C+Barrio+San+Vicente%2C+C%C3%B3rdoba+Capital%2C+Argentina"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
								>
									<span>Cómo llegar con Google Maps</span>
									<span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>

						{/* Previsualización interactiva de Google Maps */}
						<div className="lg:col-span-7 h-[360px] lg:h-auto min-h-[360px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
							<iframe
								src="https://www.google.com/maps?q=Entre+R%C3%ADos+2650%2C+Barrio+San+Vicente%2C+C%C3%B3rdoba&t=&z=16&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Ubicación de Industria Gráfica Córdoba en Google Maps"
								className="w-full h-full min-h-[360px]"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
