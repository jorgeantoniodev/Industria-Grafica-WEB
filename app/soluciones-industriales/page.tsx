import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Impresión Offset Comercial en Córdoba | Industria Gráfica Córdoba',
	description:
		'Impresión offset, troquelado, laminado y encuadernación desde Córdoba. Producción de catálogos, packaging, papelería y libros. Pedí presupuesto.',
};

export default function SolucionesIndustrialesPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero de sección */}
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
						Capacidad Industrial
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
						Soluciones Industriales<br />
						<span className="text-blue-400">de Impresión en Córdoba</span>
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl">
						Producción offset, troquelado, laminado y encuadernación para empresas, agencias e imprentas desde Córdoba.
					</p>
				</div>
			</section>

			{/* Sección Offset */}
			<section id="offset" className="py-20 lg:py-28 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
						Impresión Offset Comercial
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Producción de folletos, catálogos, revistas y papelería comercial en tiradas donde el offset resulta conveniente. Cuatro máquinas offset para optimizar trabajos monocolor y full color en pliegos de hasta 102 × 72 cm (área máxima de impresión 100 × 70 cm). Trabajamos papeles industriales (obra, ilustración, kraft, comercial, bookcel y NAT) de 70 a 350 g.
					</p>
				</div>
			</section>

			{/* Sección Troquelados */}
			<section id="troquelados" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
						Troquelados y Terminaciones Especiales
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas. Cartulinas encapadas (duplex, triplex, rígida, Naturale) hasta 350 g y cartón microcorrugado simple o montado. Terminaciones con plastificado OPP mate o brillante, barniz UV brillante, troquelado, perforado, puntillado, redondeado de puntas y pegado.
					</p>
				</div>
			</section>

			{/* Sección Encuadernación */}
			<section id="encuadernacion" className="py-20 lg:py-28 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
						Encuadernación de Libros, Revistas y Catálogos
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Encuadernación abrochada a caballo, cosida con tapa blanda o tapa dura, pegada (binder) y anillado metálico o plástico. Servicio de intercalado de pliegos para revistas y libros, encapado de tapas para agendas y cuadernos, y retractilado termofusionado.
					</p>
				</div>
			</section>
		</main>
	);
}
