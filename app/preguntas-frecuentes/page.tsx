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
		id: 'como-solicitar-presupuesto',
		question: '¿Cómo realizo un pedido?',
		answer: (
			<div className="space-y-3">
				<p>
					Podés solicitar tu cotización o iniciar un pedido enviándonos el detalle de tu proyecto a través de nuestro{' '}
					<Link
						href="/contacto#formulario"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						formulario web de contacto
					</Link>
					, por correo electrónico a{' '}
					<a
						href="mailto:presupuestos@prematgrafica.com.ar"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						presupuestos@prematgrafica.com.ar
					</a>{' '}
					o escribiéndonos directamente por{' '}
					<a
						href="https://wa.me/5493514597594?text=Hola%20Industria%20Gr%C3%A1fica%2C%20quisiera%20solicitar%20un%20presupuesto"
						target="_blank"
						rel="noopener noreferrer"
						className="text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						WhatsApp al +54 9 351 459-7594
					</a>
					.
				</p>
				<p>
					Para responderte con la propuesta técnica adecuada, indicanos qué pieza necesitás producir, tamaño final, cantidad estimada, tipo de material o gramaje y las terminaciones deseadas (troquelado, barniz UV, plastificado OPP o encuadernación).
				</p>
			</div>
		),
	},
	{
		id: 'ubicacion-horarios',
		question: '¿Cuáles son sus horarios?',
		answer: (
			<div className="space-y-3">
				<p>
					Nuestro horario de atención y recepción en planta es de <strong>lunes a viernes de 08:00 a 17:00 hs</strong>.
				</p>
				<p>
					El taller y oficinas se encuentran ubicados en <strong>Entre Ríos 2650, Barrio San Vicente, Córdoba Capital</strong> (X5006). Si querés realizar una visita técnica a planta o retirar mercadería en persona, te sugerimos avisarnos previamente para coordinar la entrega.
				</p>
				<div>
					<Link
						href="/quienes-somos#ubicacion"
						className="inline-flex items-center gap-1.5 text-brand-electric-violet font-semibold underline underline-offset-2 hover:opacity-85"
					>
						<span>Ver mapa y ubicación exacta</span>
						<span>→</span>
					</Link>
				</div>
			</div>
		),
	},
	{
		id: 'compra-web',
		question: 'Realicé una compra por la web, ¿qué hago ahora?',
		answer: (
			<div className="space-y-3">
				<p>
					Una vez enviada tu solicitud de presupuesto o pedido a través de nuestro sitio web, el equipo comercial y de preimpresión procesa la información y se comunica con vos (habitualmente vía WhatsApp o email) para los siguientes pasos:
				</p>
				<ul className="list-disc pl-5 space-y-1.5">
					<li>Confirmar la cotización y verificar la disponibilidad de pliegos y materiales.</li>
					<li>Revisar los archivos originales de diseño para asegurar que cumplan las normas de imprenta.</li>
					<li>Coordinar la emisión de factura, formas de pago y fecha programada de entrega o despacho.</li>
				</ul>
			</div>
		),
	},
	{
		id: 'tiempos-entrega',
		question: '¿Cuánto tarda mi pedido?',
		answer: (
			<div className="space-y-3">
				<p>
					Los tiempos de producción dependen de la magnitud de la tirada, el formato y los procesos de acabado posteriores requeridos (troquelado, plastificado OPP, barniz UV o encuadernación abrochada/cosida).
				</p>
				<p>
					Como referencia general, las tiradas offset habituales se completan en un plazo aproximado de <strong>3 a 7 días hábiles</strong> tras la aprobación final de los archivos. Si tenés una fecha límite estricta o un evento, comunicanos el plazo al momento de cotizar para evaluar la viabilidad de una entrega prioritaria.
				</p>
			</div>
		),
	},
	{
		id: 'preparacion-archivos',
		question: '¿Cómo preparo mi archivo para que salga bien impreso?',
		answer: (
			<div className="space-y-3">
				<p>
					Para garantizar la máxima nitidez y fidelidad de color en prensa offset industrial, recomendamos preparar los originales siguiendo estas especificaciones:
				</p>
				<ul className="list-disc pl-5 space-y-1.5">
					<li><strong>Formato de entrega:</strong> Archivo PDF de alta resolución (PDF/X-1a o exportación de calidad de impresión) en escala 1:1.</li>
					<li><strong>Espacio de color:</strong> CMYK al 100% en imágenes, fondos y tipografías (no utilizar modo RGB ni colores no convertidos).</li>
					<li><strong>Resolución:</strong> Imágenes a un mínimo de 300 DPI en su tamaño real de reproducción.</li>
					<li><strong>Demasía y marcas:</strong> Incluir 3 a 5 mm de sangrado (bleed) perimetral y marcas de corte para evitar bordes blancos tras el refilado.</li>
					<li><strong>Tipografías:</strong> Todas las fuentes convertidas a curvas (trazados) o incrustadas en el PDF.</li>
					<li><strong>Líneas de troquel:</strong> En piezas troqueladas (cajas, carpetas, estuches), ubicar el trazado de corte y plegado en una capa independiente con un color directo claramente identificado.</li>
				</ul>
			</div>
		),
	},
	{
		id: 'papeles-materiales',
		question: '¿Qué materiales usan?',
		answer: (
			<div className="space-y-3">
				<p>
					Disponemos de un amplio stock de sustratos para cubrir las distintas necesidades de la industria gráfica, publicitaria y editorial:
				</p>
				<ul className="list-disc pl-5 space-y-1.5">
					<li><strong>Papeles:</strong> Obra blanco (70 a 120 g), ilustración mate y brillante (90 a 350 g), papel kraft, comercial, bookcel ahuesado y papel reciclado/NAT.</li>
					<li><strong>Cartulinas:</strong> Cartulinas encapadas dúplex y tríplex, cartulina rígida y Naturale de hasta 350 g para estuchería, packaging y carpetas.</li>
					<li><strong>Cartón microcorrugado:</strong> Microcorrugado simple faz o montado con cartulina impresa para cajas de alta resistencia estructural.</li>
					<li><strong>Acabados:</strong> Plastificado OPP mate o brillante, barniz de máquina y barniz UV para protección y realce visual.</li>
				</ul>
			</div>
		),
	},
	{
		id: 'envios',
		question: '¿Hacen envíos?',
		answer: (
			<div className="space-y-3">
				<p>
					<strong>Sí, realizamos envíos a todo el país.</strong>
				</p>
				<p>
					En <strong>Córdoba Capital y alrededores</strong> ofrecemos entregas programadas en tu empresa o retiro directo en nuestro taller en Barrio San Vicente. Para el interior de la provincia de Córdoba y el <strong>resto de la Argentina</strong>, embalamos y despachamos la mercadería a través de empresas de transporte de carga, expresos o comisionistas de tu preferencia o con los que operamos de manera habitual.
				</p>
			</div>
		),
	},
	{
		id: 'problemas-pedido',
		question: '¿Qué hago si tengo un problema con mi pedido?',
		answer: (
			<div className="space-y-3">
				<p>
					En Industria Gráfica Córdoba nos hacemos responsables de la calidad de nuestro trabajo. Si al recibir tu producción encontrás cualquier observación respecto a cortes, colores, cantidades o acabados:
				</p>
				<ol className="list-decimal pl-5 space-y-1.5">
					<li>Escribinos de inmediato por WhatsApp al <strong>+54 9 351 459-7594</strong> o contactá directamente a tu asesor de cuenta.</li>
					<li>Compartinos una fotografía o video donde se aprecie la observación junto con el número de remito o pedido.</li>
					<li>Nuestro equipo técnico cotejará la muestra física con los archivos aprobados de prensa para darte una solución ágil y adecuada.</li>
				</ol>
			</div>
		),
	},
	{
		id: 'ayuda-diseno',
		question: 'No tengo diseño, ¿me pueden ayudar?',
		answer: (
			<div className="space-y-3">
				<p>
					<strong>Sí, brindamos asesoramiento técnico integral de preimpresión.</strong>
				</p>
				<p>
					Si bien la mayoría de nuestros clientes industriales y agencias entregan sus propios originales listos para prensa, nuestro equipo puede:
				</p>
				<ul className="list-disc pl-5 space-y-1.5">
					<li>Entregarte planos y plantillas técnicas de troquel con las medidas exactas para que tu diseñador arme la gráfica sobre seguro.</li>
					<li>Revisar y adecuar archivos preexistentes (resolución, demasías, conversión de colores y sangrados).</li>
					<li>Orientarte técnicamente sobre el formato más eficiente para aprovechar el pliego y reducir desperdicios de papel.</li>
				</ul>
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
