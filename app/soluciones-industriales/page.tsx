import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Impresión Offset Comercial en Córdoba | PREMAT Industria Gráfica',
	description:
		'Offset comercial, troquelados y encuadernación industrial en Barrio San Vicente, Córdoba. Grandes tirajes, fidelidad colorimétrica y packaging a medida.',
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
						Producción offset de alta complejidad, troquelados y encuadernación
						para empresas, agencias y distribuidores en todo el país.
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
						Producción física pesada para grandes tirajes, folletería masiva y
						papelería comercial donde la precisión colorimétrica es clave.
						Trabajamos con papeles estucados, offset y especiales en pliegos
						de hasta 70×100 cm.
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
						Estuches, cajas personalizadas, troquelados complejos y acabados
						con laminado en polipropileno o barniz UV. Diseñamos y fabricamos
						troqueles propios para mayor flexibilidad de producción.
					</p>
				</div>
			</section>

			{/* Sección Encuadernación */}
			<section id="encuadernacion" className="py-20 lg:py-28 scroll-mt-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
						Encuadernación de Libros y Revistas
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Trenes de encuadernación abrochada y lomo cuadrado perfecto (Hotmelt)
						para libros, revistas y catálogos. Capacidad para tirajes desde
						500 hasta 50.000 ejemplares.
					</p>
				</div>
			</section>
		</main>
	);
}
