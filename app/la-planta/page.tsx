import type { Metadata } from 'next';
import MediaGridSection from '@/components/media-grid-section';

export const metadata: Metadata = {
	title: 'La Planta | Industria Gráfica Córdoba — Barrio San Vicente',
	description:
		'Conocé la planta de Industria Gráfica Córdoba en Entre Ríos 2650, Barrio San Vicente: prensas offset, troquelado, laminado y encuadernación. Coordiná una visita técnica.',
};

export default function LaPlantaPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-24 lg:py-32 bg-slate-950 text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">
						Entre Ríos 2650 · Barrio San Vicente · Córdoba
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
						Equipamiento de taller y capacidades
					</h2>
					<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
						Contamos con cuatro prensas offset para cubrir distintos formatos y tipos de tirada: Roland 600 (full color, pliego máx. 102 × 72 cm, impresión máx. 100 × 70 cm), Heidelberg GTO (full color, pliego máx. 49 × 36 cm, impresión máx. 47 × 34 cm), Komori (monocolor, pliego máx. 65 × 47,5 cm, impresión máx. 64 × 45 cm) y Multilith (monocolor, pliego máx. 36 × 24 cm, impresión máx. 34 × 22 cm). Área de troquelado, plastificado OPP mate o brillante, barniz UV y encuadernación.
					</p>
				</div>
			</section>

			{/* Sección de video y fotos de la planta */}
			<MediaGridSection
				title="Oficio en movimiento"
				description="Offset, troquelado y encuadernación, en la planta de Barrio San Vicente."
				primaryCta={{ label: 'Cotizar producción', href: '/contacto' }}
				secondaryCta={{ label: 'Ver soluciones industriales', href: '/soluciones-industriales' }}
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
		</main>
	);
}
