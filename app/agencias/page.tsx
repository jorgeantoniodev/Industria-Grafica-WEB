import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Agencias y Marca Blanca | Industria Gráfica Córdoba',
	description:
		'Producción gráfica confidencial para agencias de publicidad, estudios de diseño e imprentas desde Córdoba. Impresión offset, troquelado y terminaciones bajo tu marca.',
};

export default function AgenciasPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400 mb-4">
						Producción para agencias e imprentas
					</p>
					<h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
						Agencias y<br />
						<span className="text-fuchsia-400">Marca Blanca</span>
					</h1>
					<p className="text-lg text-slate-400 max-w-2xl">
						Producción confidencial para agencias, estudios e imprentas. Trabajamos como tu taller de producción gráfica desde Córdoba, respetando la confidencialidad de cada proyecto.
					</p>
				</div>
			</section>

			<section className="py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-slate-900 mb-4">
						Tu marca, nuestra producción
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Trabajamos como proveedor de marca blanca, respetando la confidencialidad de cada proyecto. Tu cliente sigue siendo tu cliente: nosotros nos ocupamos de la producción para que puedas concentrarte en la relación con tu cliente.
					</p>
				</div>
			</section>
		</main>
	);
}
