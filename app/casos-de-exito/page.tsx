import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Casos de Éxito | PREMAT Industria Gráfica',
	description:
		'Casos de éxito en impresión editorial, salud y corporativo. Cómo PREMAT resuelve proyectos de alta complejidad para marcas líderes en Córdoba.',
};

export default function CasosDeExitoPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
						Resultados reales
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
						Casos de Éxito<br />
						<span className="text-emerald-400">Editorial · Salud · Corporativo</span>
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl">
						Proyectos reales con clientes reales. Resultados medibles en tiempos
						de entrega, calidad y costo de producción.
					</p>
				</div>
			</section>

			<section className="py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-slate-500 text-lg">
						Próximamente: casos documentados de Carrara, CAPS Semillas,
						Parque Salud y más clientes de PREMAT.
					</p>
				</div>
			</section>
		</main>
	);
}
