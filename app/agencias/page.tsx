import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Agencias y Marca Blanca | PREMAT Industria Gráfica',
	description:
		'Servicios B2B para agencias de publicidad, estudios de diseño y distribuidores. Tarifas gremiales, marca blanca y producción confidencial en Córdoba.',
};

export default function AgenciasPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400 mb-4">
						Servicios B2B2B
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
						Agencias y<br />
						<span className="text-fuchsia-400">Marca Blanca</span>
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl">
						Producción confidencial bajo tu marca. Tarifas gremiales para agencias,
						estudios de diseño y distribuidores con entrega a todo el país.
					</p>
				</div>
			</section>

			<section className="py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-slate-900 mb-4">
						Tu marca, nuestra producción
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl">
						Trabajamos como planta de producción invisible para agencias que necesitan
						entregar proyectos de impresión de alta complejidad sin infraestructura propia.
						Confidencialidad total garantizada.
					</p>
				</div>
			</section>
		</main>
	);
}
