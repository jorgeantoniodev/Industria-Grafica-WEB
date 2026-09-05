import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Casos de Éxito | Industria Gráfica Córdoba',
	description:
		'Proyectos y producción gráfica industrial en Córdoba. Consultá muestras y referencias técnicas para tu empresa.',
};

export default function CasosDeExitoPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-20 lg:py-28 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
						Referencias de producción
					</p>
					<h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-none mb-6">
						Casos y Fichas de Producción
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
						Estamos documentando las especificaciones técnicas y fotografías de trabajos
						recientes en packaging, impresión editorial y formularios continuos.
					</p>
				</div>
			</section>

			<section className="py-16 lg:py-24 bg-slate-50">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-2xl bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
						<h2 className="text-2xl font-bold text-slate-900">
							¿Necesitás evaluar muestras físicas de trabajos similares?
						</h2>
						<p className="text-base text-slate-600 leading-relaxed">
							Podés conocer en detalle nuestras capacidades de pliego, encuadernación y
							terminaciones en la sección de Soluciones Industriales, o coordinar el envío
							de muestras físicas para tu equipo de compras.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-2">
							<Link
								href="/soluciones-industriales"
								className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
							>
								Ver Soluciones Industriales
							</Link>
							<Link
								href="/contacto"
								className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-100 transition-colors"
							>
								Solicitar Muestras en Contacto
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
