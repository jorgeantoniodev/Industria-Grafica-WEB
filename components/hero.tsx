export default function Hero() {
	return (
		<section className="px-2 py-3 lg:px-4 lg:py-4" style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}>
			<div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7] p-3 lg:p-4">

				{/* minHeight 560px → el video respira igual que en Taylor */}
				<div className="flex flex-col lg:flex-row" style={{ minHeight: '560px' }}>

					{/* ── Columna izquierda ─────────────────────────── */}
					<div className="flex flex-col justify-center p-6 lg:w-1/2 lg:p-12">

						{/*
						 * H1 — Formato exacto de Taylor:
						 *   • Texto negro/oscuro en las primeras líneas
						 *   • Última parte en color (gradiente azul→violeta)
						 *   • Font: Lato 900 (Black) — extraído del DevTools
						 *   • Tamaño: text-5xl lg:text-6xl  ≈ 82px de Taylor
						 *   • SEO keywords: imprenta Córdoba, producción offset, impresión industrial
						 */}
						<h1
							className="mb-5 text-5xl font-black leading-tight text-slate-900 lg:text-6xl"
						>
							30 años de producción{' '}
							<br className="hidden lg:block" />
							gráfica en Córdoba,{' '}
							<br className="hidden lg:block" />
							<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
								al servicio de tu marca.
							</span>
						</h1>

						{/*
						 * H2 — Equivalente al "A Global Printing Company" de Taylor
						 *   • Corto, con peso semibold, sin color extra
						 *   • SEO: "imprenta offset industrial", "Córdoba Argentina"
						 */}
						<h2 className="mb-3 text-xl font-bold text-slate-700">
							Imprenta Offset Industrial — Córdoba, Argentina
						</h2>

						{/* Descripción mínima — 1 línea */}
						<p className="mb-7 max-w-sm text-base text-slate-600">
							Troquelado, encuadernación y marca blanca para agencias y corporaciones.
						</p>

						{/* CTA — azul sólido, tamaño grande */}
						<a
							href="/contacto"
							className="inline-flex w-fit rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:scale-[1.03]"
						>
							Hablemos de tu proyecto
						</a>
					</div>

					{/* ── Video — aspect-[9/16] en mobile para que el contenedor tenga altura real ── */}
					<div className="relative w-full aspect-[9/16] overflow-hidden rounded-3xl lg:aspect-auto lg:w-1/2 lg:rounded-l-[15rem] lg:rounded-r-2xl">
						<video
							autoPlay
							loop
							muted
							playsInline
							preload="auto"
							poster="/hero-poster.jpg"
							className="absolute inset-0 h-full w-full object-cover"
						>
							<source src="/hero.mp4" type="video/mp4" />
						</video>
						<div className="pointer-events-none absolute inset-0 bg-black/5" />
					</div>

				</div>
			</div>
		</section>
	)
}
