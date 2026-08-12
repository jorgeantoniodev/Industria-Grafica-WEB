import type { Metadata } from 'next';
import ProcessSection from '@/components/process-section';

export const metadata: Metadata = {
	title: 'La Planta | Industria Gráfica Córdoba — Barrio San Vicente',
	description:
		'Conocé la planta de producción de Industria Gráfica Córdoba en Barrio San Vicente: maquinaria offset, trenes de encuadernación, capacidad técnica y equipo.',
};

export default function LaPlantaPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">
						Barrio San Vicente · Córdoba
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
						La Planta<br />
						<span className="text-amber-400">Oficio en movimiento</span>
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl">
						Offset, troquelado y encuadernación bajo un mismo techo. Más de
						30 años de producción gráfica industrial en Córdoba Capital.
					</p>
				</div>
			</section>

			<section className="py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-slate-900 mb-6">
						Capacidad técnica y maquinaria
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl">
						Prensas offset de 4 y 5 cuerpos, troqueladora de cama plana,
						trenes de encuadernación abrochada y hotmelt, guillotinas y
						acabado en barniz UV y laminado BOPP.
					</p>
				</div>
			</section>

			{/* Sección de video y fotos de la planta */}
			<ProcessSection />
		</main>
	);
}
