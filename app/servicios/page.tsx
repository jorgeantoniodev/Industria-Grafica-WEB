import type { Metadata } from 'next';
import OffsetImagesComposition from '@/components/offset-images-composition';
import { LightRays } from '@/components/ui/light-rays';

export const metadata: Metadata = {
	title: 'Servicios de Impresión en Córdoba | Industria Gráfica Córdoba',
	description:
		'Impresión offset, troquelado, laminado y encuadernación desde Córdoba. Producción de catálogos, packaging, papelería y libros. Pedí presupuesto.',
	alternates: {
		canonical: '/servicios',
	},
};

export default function ServiciosPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero de sección */}
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
						Capacidad Industrial
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-slate-900">
						Nuestros Servicios<br />
						<span className="text-brand-electric-violet">de Impresión en Córdoba</span>
					</h1>
					<p className="text-lg text-slate-600 max-w-2xl">
						Producción offset, troquelado, laminado y encuadernación para empresas, agencias e imprentas desde Córdoba.
					</p>
				</div>
			</section>

			{/* Sección Offset */}
			<section id="offset" className="w-full scroll-mt-20">
				<OffsetImagesComposition
					title="Impresión Offset Comercial"
					tagline="De tu idea al producto terminado."
				/>

				{/* Bloque descriptivo en dos columnas (según diseño de referencia) */}
				<div className="py-20 lg:py-28 bg-white border-b border-slate-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
							{/* Columna izquierda: bloque de texto */}
							<div>
								<h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
									Producción en pliegos industriales
								</h3>
								<div className="w-12 h-1 bg-brand-electric-violet rounded-full mb-6" />
								<p className="text-lg text-slate-600 leading-relaxed mb-4">
									Producción de folletos, catálogos, revistas y papelería comercial en tiradas donde el offset resulta conveniente. Cuatro máquinas offset para optimizar trabajos monocolor y full color en pliegos de hasta 102 × 72 cm (área máxima de impresión 100 × 70 cm).
								</p>
								<p className="text-lg text-slate-600 leading-relaxed">
									Trabajamos papeles industriales (obra, ilustración, kraft, comercial, bookcel y NAT) de 70 a 350 g.
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
				</div>
			</section>

			{/* Sección Troquelados */}
			<section id="troquelados" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna izquierda: bloque de texto */}
						<div>
							<h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
								Troquelados y Terminaciones Especiales
							</h2>
							<div className="w-12 h-1 bg-brand-electric-violet rounded-full mb-6" />
							<p className="text-lg text-slate-600 leading-relaxed mb-4">
								Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas. Cartulinas encapadas (duplex, triplex, rígida, Naturale) hasta 350 g y cartón microcorrugado simple o montado.
							</p>
							<p className="text-lg text-slate-600 leading-relaxed">
								Terminaciones con plastificado OPP mate o brillante, barniz UV brillante, troquelado, perforado, puntillado, redondeado de puntas y pegado.
							</p>
						</div>

						{/* Columna derecha: espacio en blanco para futura imagen (ver imagen adjunta) */}
						<div className="relative w-full max-w-lg mx-auto lg:ml-auto">
							{/* Marco exterior desplazado (estilo diseño de referencia) */}
							<div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-slate-300 rounded-2xl pointer-events-none" />
							{/* Contenedor principal de la imagen (en blanco por ahora) */}
							<div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl bg-white border border-slate-200/80 shadow-xs" />
						</div>
					</div>
				</div>
			</section>

			{/* Sección Encuadernación */}
			<section id="encuadernacion" className="py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Columna izquierda: bloque de texto */}
						<div>
							<h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
								Encuadernación de Libros, Revistas y Catálogos
							</h2>
							<div className="w-12 h-1 bg-brand-electric-violet rounded-full mb-6" />
							<p className="text-lg text-slate-600 leading-relaxed mb-4">
								Encuadernación abrochada a caballo, cosida con tapa blanda o tapa dura, pegada (binder) y anillado metálico o plástico.
							</p>
							<p className="text-lg text-slate-600 leading-relaxed">
								Servicio de intercalado de pliegos para revistas y libros, encapado de tapas para agendas y cuadernos, y retractilado termofusionado.
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
		</main>
	);
}
