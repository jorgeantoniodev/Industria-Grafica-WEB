import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
	title: 'Contacto y Presupuestos | Industria Gráfica Córdoba',
	description:
		'Solicitá un presupuesto de producción offset, troquelado, encuadernación o marca blanca en Córdoba. Planta en Barrio San Vicente.',
};

export default function ContactoPage() {
	return (
		<main
			className="min-h-screen bg-gray-100 px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20"
			style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
		>
			<div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-2">

				{/* ── Columna izquierda: Formulario conectado ────────── */}
				<section id="formulario" className="scroll-mt-32">
					<h1 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
						Hablemos de tu proyecto
					</h1>
					<p className="mb-8 text-base text-gray-600">
						Completá el formulario de solicitud o escribinos directamente a{' '}
						<a
							href="mailto:presupuestos@prematgrafica.com.ar"
							className="text-blue-600 underline underline-offset-2 hover:text-blue-800 font-semibold"
						>
							presupuestos@prematgrafica.com.ar
						</a>
						.
					</p>

					<ContactForm />
				</section>

				{/* ── Columna derecha: Información de Planta y Canales ── */}
				<aside id="datos-contacto" className="flex flex-col justify-between scroll-mt-32">
					<div className="flex flex-col gap-8">
						<div>
							<h2 className="mb-5 text-3xl font-black text-slate-900">
								Producción industrial con respaldo real.
							</h2>
							<p className="text-base leading-relaxed text-gray-600">
								Prensas offset, troquelado, laminado y encuadernación en nuestra planta de Barrio San Vicente. Atención personalizada, seguimiento directo y posibilidad de coordinar visitas técnicas para revisar tu tirada.
							</p>
						</div>

						{/* Bloque informativo de canales directo */}
						<div className="rounded-2xl bg-slate-900 p-8 text-white space-y-6 shadow-lg border border-slate-800">
							<div>
								<span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
									Canal de atención rápida
								</span>
								<p className="text-sm text-slate-300 mb-3">
									Para consultas rápidas o coordinar una visita a planta:
								</p>
								<a
									href="https://wa.me/5493514597594?text=Hola%20Industria%20Gr%C3%A1fica%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
								>
									<span>Contactar por WhatsApp</span>
									<span>→</span>
								</a>
							</div>
						</div>
					</div>

					{/* Link de regreso */}
					<div className="mt-8 pt-4">
						<Link
							href="/"
							className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 transition-colors"
						>
							← Volver al inicio
						</Link>
					</div>
				</aside>

			</div>
		</main>
	);
}
