import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion, { FAQItem } from '@/components/faq-accordion';

export const metadata: Metadata = {
	title: {
		absolute: 'Preguntas Frecuentes | Industria Gráfica Córdoba',
	},
	description:
		'Respuestas a preguntas frecuentes sobre pedidos, horarios, archivos para imprenta, materiales, envíos y producción gráfica en Córdoba.',
	alternates: {
		canonical: '/preguntas-frecuentes',
	},
};

const FAQ_ITEMS: FAQItem[] = [
	{
		id: 'como-solicitar-cotizacion',
		question: '¿Cómo solicito una cotización?',
		answer: (
			<div className="space-y-3">
				<p>
					Podés solicitar una cotización mediante el{' '}
					<Link
						href="/contacto#formulario"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						formulario de contacto
					</Link>
					, escribiendo a{' '}
					<a
						href="mailto:presupuestos@prematgrafica.com.ar"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						presupuestos@prematgrafica.com.ar
					</a>{' '}
					o enviando un{' '}
					<a
						href="https://wa.me/5493514597594?text=Hola%20Industria%20Gr%C3%A1fica%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n"
						target="_blank"
						rel="noopener noreferrer"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						WhatsApp al +54 9 351 459-7594
					</a>
					. Contanos qué trabajo necesitás cotizar y la cantidad aproximada.
				</p>
			</div>
		),
	},
	{
		id: 'horarios-ubicacion',
		question: '¿Cuáles son los horarios y dónde están ubicados?',
		answer: (
			<div className="space-y-3">
				<p>
					Atendemos de lunes a viernes de 08:00 a 17:00. Estamos en{' '}
					<Link
						href="/quienes-somos#ubicacion"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						Entre Ríos 2650, Barrio San Vicente, Córdoba Capital, X5006, Argentina
					</Link>
					.
				</p>
			</div>
		),
	},
	{
		id: 'tipos-trabajos',
		question: '¿Qué tipos de trabajos realizan?',
		answer: (
			<div className="space-y-3">
				<p>
					Realizamos papelería comercial, packaging, trabajos editoriales y piezas publicitarias: hojas membretadas, tarjetas, formularios, sobres, carpetas, cajas, bolsas, etiquetas, estuches, libros, revistas, agendas, cuadernos, catálogos, volantes, afiches y otras piezas impresas en papel o cartulina.
				</p>
			</div>
		),
	},
	{
		id: 'materiales',
		question: '¿Qué materiales trabajan?',
		answer: (
			<div className="space-y-3">
				<p>
					Trabajamos con papeles industriales como obra, ilustración, kraft, comercial, bookcel y NAT, en gramajes de 70 a 350 g. También utilizamos cartulinas encapadas como dúplex, tríplex, rígida y Naturale de hasta 350 g, además de cartón microcorrugado simple o montado con cartulina impresa.
				</p>
			</div>
		),
	},
	{
		id: 'terminaciones',
		question: '¿Qué terminaciones y encuadernaciones realizan?',
		answer: (
			<div className="space-y-3">
				<p>
					Realizamos abrochado a caballo, encuadernación cosida con tapa blanda o dura, encuadernación pegada, anillado, intercalado de pliegos, barniz UV brillante, plastificado OPP mate o brillante, troquelado, perforado, puntillado, doblado, redondeado de puntas, pegado, encapado de tapas y retractilado termofusionado.
				</p>
			</div>
		),
	},
	{
		id: 'impresion-offset',
		question: '¿Cuándo conviene imprimir en offset?',
		answer: (
			<div className="space-y-3">
				<p>
					Como referencia, el offset suele resultar conveniente en tiradas superiores a 1.000 pliegos. Sin embargo, algunas piezas con terminaciones especiales también pueden resultar convenientes en cantidades menores. Consultanos para evaluar las características de cada trabajo.
				</p>
			</div>
		),
	},
	{
		id: 'preparacion-archivos',
		question: '¿Cómo debo preparar los archivos?',
		answer: (
			<div className="space-y-3">
				<p>
					Como referencia general:
				</p>
				<ul className="list-disc pl-5 space-y-1.5">
					<li>Trabajá en modo de color CMYK.</li>
					<li>Utilizá imágenes de 350 DPI.</li>
					<li>Prepará el archivo en tamaño real.</li>
					<li>Incluí al menos 3 mm de demasía para el corte.</li>
					<li>Convertí las tipografías a curvas.</li>
					<li>Dejá márgenes internos adecuados.</li>
				</ul>
				<p>
					Los formatos recomendados son PDF, AI, EPS, CDR, JPG sin compresión y TIF. Si necesitás preparar un PDF, consultanos para recibir orientación según el programa que utilices.
				</p>
			</div>
		),
	},
	{
		id: 'ayuda-diseno',
		question: '¿Me pueden ayudar con el diseño o la preparación del archivo?',
		answer: (
			<div className="space-y-3">
				<p>
					Actualmente brindamos acompañamiento y asesoramiento técnico para preparar los archivos de impresión. No ofrecemos un servicio integral de diseño desde cero.
				</p>
			</div>
		),
	},
	{
		id: 'tiempos-entrega',
		question: '¿Cuánto tarda un trabajo?',
		answer: (
			<div className="space-y-3">
				<p>
					Consultanos el plazo correspondiente al solicitar la cotización.
				</p>
			</div>
		),
	},
	{
		id: 'envios',
		question: '¿Hacen envíos?',
		answer: (
			<div className="space-y-3">
				<p>
					Sí, realizamos envíos a todo el país.
				</p>
			</div>
		),
	},
];

export default function FAQPage() {
	return (
		<main className="min-h-screen bg-[#eef1f4] py-14 sm:py-20 lg:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Encabezado */}
				<div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
					<span className="text-xs font-bold uppercase tracking-widest text-brand-electric-violet block mb-2">
						Centro de ayuda
					</span>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
						Preguntas frecuentes
					</h1>
					<p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
						Encontrá respuestas rápidas sobre cómo solicitar un presupuesto, preparar tus archivos, materiales disponibles y tiempos de entrega.
					</p>
				</div>

				{/* Lista interactiva de acordeones idéntica a la referencia visual */}
				<FAQAccordion items={FAQ_ITEMS} />

				{/* Bloque CTA inferior para consultas adicionales */}
				<div className="mt-14 sm:mt-16 rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-slate-200/80 text-center">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
						¿Tu proyecto requiere especificaciones especiales?
					</h2>
					<p className="text-slate-600 text-base max-w-xl mx-auto mb-6">
						Si necesitás asesoramiento sobre formatos de pliego, troqueles a medida o producción confidencial para agencias, conversá con nuestro equipo técnico.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contacto#formulario"
							className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-electric-violet px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#4324db] transition-colors"
						>
							Solicitar presupuesto
						</Link>
						<a
							href="https://wa.me/5493514597594?text=Hola%20Industria%20Gr%C3%A1fica%2C%20tengo%20una%20consulta%20espec%C3%ADfica"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
						>
							Consultar por WhatsApp
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
