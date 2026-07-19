export default function Hero() {
	return (
		<section className="font-sans px-4 py-8 lg:px-8 lg:py-12">
			<div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#dcfce7] via-[#eff6ff] to-[#f3e8ff] p-4 lg:p-6">
				<div className="flex flex-col lg:flex-row">
					<div className="flex flex-col justify-center p-10 lg:w-1/2 lg:p-16">
						<span className="mb-6 inline-block w-fit rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
							MÁS DE 30 AÑOS EN EL RUBRO
						</span>

						<h1 className="mb-6 text-5xl font-extrabold text-slate-700 lg:text-6xl">
							Detrás de cada gran marca, está{' '}
							<span className="text-blue-600">Premat.</span>
						</h1>

						<h2 className="mb-3 text-2xl font-bold text-slate-700">
							Imprenta Industrial en Córdoba
						</h2>

						<p className="mb-8 max-w-md text-lg text-slate-600">
							Producción offset a gran escala, troquelados complejos y
							encuadernación. Proveemos infraestructura gráfica y operamos
							como marca blanca para agencias y corporaciones.
						</p>

						<a
							href="#cotizar"
							className="inline-flex w-fit rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-transform hover:scale-105"
						>
							Cotizar producción
						</a>
					</div>

					<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl lg:min-h-[500px] lg:w-1/2 lg:rounded-l-[15rem] lg:rounded-r-2xl">
						<video
							autoPlay
							loop
							muted
							playsInline
							className="absolute inset-0 h-full w-full object-cover"
						>
							<source src="/hero.mp4" type="video/mp4" />
						</video>
						<div className="pointer-events-none absolute inset-0 bg-black/5" />
					</div>
				</div>
			</div>
		</section>
	);
}
