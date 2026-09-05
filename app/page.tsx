'use client';

// 'use client' es necesario porque este archivo pasa componentes (React.ElementType)
// como props a AudiencesSection, lo cual requiere un contexto de cliente.

import Hero from '@/components/hero';
import AudiencesSection, { AudienceItem } from '@/components/audiences-section';
import LogoCarousel, { ClientLogo } from '@/components/logo-carousel';
import ServicesSection, { ServiceItem } from '@/components/services-section';
import {
	Printer,
	Palette,
	Stack,
	ShieldCheck,
	Package,
	Target,
	ChartLineUp,
	Warning,
} from '@phosphor-icons/react';

// ─── Datos de audiencias ───────────────────────────────────────────────────────

const audiences: AudienceItem[] = [
	{
		id: 'agencias',
		title: 'Producción confidencial para agencias',
		badge: 'MÁS DE 30 AÑOS EN EL RUBRO',
		headline: 'Tu cliente sigue siendo tu cliente. Nosotros nos ocupamos de la producción.',
		description:
			'Imprimimos, troquelamos y encuadernamos respetando la confidencialidad de cada proyecto. Operamos en segundo plano como tu taller de producción, para que puedas concentrarte en la relación con tu cliente.',
		features: [
			{
				icon: Printer,
				title: 'Capacidad de pliego offset',
				description:
					'Impresión en pliegos de hasta 102 × 72 cm (área máxima de impresión 100 × 70 cm) en tiradas donde el offset marca la diferencia.',
			},
			{
				icon: Palette,
				title: 'Terminaciones en planta',
				description:
					'Plastificado OPP mate o brillante, barniz UV, troquelado, perforado y doblado.',
			},
		],
		ctaText: 'Explorar soluciones para agencias',
		ctaLink: '/agencias',
		image: '/agencias.jpg',
		floatingBadgeIcon: ShieldCheck,
		priority: true,
		layout: 'feature-left',
		theme: {
			colorText: 'text-blue-700',
			colorBg: 'bg-blue-700',
			colorLightBg: 'bg-blue-50',
			blobGradient: 'bg-gradient-to-br from-blue-100 to-indigo-50',
			floatingBadgeBg: 'bg-blue-700',
		},
	},
	{
		id: 'corporativo',
		title: 'Corporativo e institucional',
		badge: 'ALTO VOLUMEN',
		headline: 'Papelería institucional y documentación corporativa.',
		description:
			'Producimos formularios continuos, comprobantes fiscales, recetarios, carpetas y catálogos. Planificación y seguimiento directo de cada pedido.',
		features: [
			{
				icon: Stack,
				title: 'Comprobantes y formularios',
				description:
					'Facturas, remitos, recibos, planillas y blocs recetarios Rp.',
			},
			{
				icon: Target,
				title: 'Atención y seguimiento directo',
				description:
					'Atención personalizada y posibilidad de coordinar visitas a planta para el seguimiento de la producción.',
			},
		],
		ctaText: 'Solicitar asesoría institucional',
		ctaLink: '/soluciones-industriales',
		image: '/corporativo.jpg',
		floatingBadgeIcon: Warning,
		layout: 'portrait',
		theme: {
			colorText: 'text-orange-600',
			colorBg: 'bg-orange-600',
			colorLightBg: 'bg-orange-50',
			blobGradient: 'bg-gradient-to-bl from-orange-100 to-amber-50',
			floatingBadgeBg: 'bg-orange-600',
		},
	},
	{
		id: 'pymes',
		title: 'Marcas y pymes',
		badge: 'PACKAGING Y PIEZAS A MEDIDA',
		headline: 'Packaging, etiquetas y materiales impresos para tu marca.',
		description:
			'Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas. Asesoramiento sobre cantidades mínimas según el tipo de pieza.',
		features: [
			{
				icon: Package,
				title: 'Packaging y estuchería',
				description:
					'Cajas, estuches, fajas, marbetes y bolsas en cartulinas encapadas o cartón microcorrugado.',
			},
			{
				icon: ChartLineUp,
				title: 'Piezas comerciales y promocionales',
				description:
					'Afiches, volantes, almanaques, stickers en papel, individuales y posavasos.',
			},
		],
		ctaText: 'Ver opciones de packaging',
		ctaLink: '/soluciones-industriales#troquelados',
		image: '/pymes.jpg',
		floatingBadgeIcon: Target,
		layout: 'landscape',
		theme: {
			colorText: 'text-purple-600',
			colorBg: 'bg-purple-600',
			colorLightBg: 'bg-purple-50',
			blobGradient: 'bg-gradient-to-tr from-purple-200 to-fuchsia-100',
			floatingBadgeBg: 'bg-pink-600',
		},
	},
];

// ─── Datos de logos ────────────────────────────────────────────────────────────

const clientLogos: ClientLogo[] = [
	{ id: 'bando',        src: '/logos/LOGO Bando-1-Photoroom.png',            alt: 'Bando' },
	{ id: 'caps',         src: '/logos/LOGO Caps-1-Photoroom.png',             alt: 'CAPS Semillas' },
	{ id: 'carrara',      src: '/logos/LOGO Carrara-1-Photoroom.png',          alt: 'Carrara Pastelería Artesanal' },
	{ id: 'cofarsur',     src: '/logos/LOGO CoFarSur-1-Photoroom.png',         alt: 'CoFarSur Droguería' },
	{ id: 'sbacco',       src: '/logos/LOGO Cortinas Sbacco-1-Photoroom.png',  alt: 'Cortinas Sbacco' },
	{ id: 'fumivet',      src: '/logos/LOGO Fumivet-1-Photoroom.png',          alt: 'Fumivet' },
	{ id: 'ganados',      src: '/logos/LOGO Ganados-1-Photoroom.png',          alt: 'Ganados' },
	{ id: 'guia-express', src: '/logos/LOGO Guia Express-1-Photoroom.png',     alt: 'Guía Express' },
	{ id: 'insacor',      src: '/logos/LOGO InSaCor-1-Photoroom.png',          alt: 'InSaCor' },
	{ id: 'megline',      src: '/logos/LOGO MegLine-1-Photoroom.png',          alt: 'MegLine' },
	{ id: 'paper',        src: '/logos/LOGO Paper-1-Photoroom.png',            alt: 'Paper' },
	{ id: 'parque-salud', src: '/logos/LOGO Parque Salud-1-Photoroom.png',     alt: 'Parque Salud' },
	{ id: 'polidori',     src: '/logos/LOGO Polidori-1-Photoroom.png',         alt: 'Polidori' },
	{ id: 'porta',        src: '/logos/LOGO Porta-1-Photoroom.png',            alt: 'Porta' },
	{ id: 'buteler',      src: '/logos/LOGO Ramiro Buteler-1-Photoroom.png',   alt: 'Ramiro Buteler' },
	{ id: 'tomaselli',    src: '/logos/LOGO Tomaselli-1-Photoroom.png',        alt: 'Tomaselli' },
	{ id: 'vetacord',     src: '/logos/LOGO Vetacord-1-Photoroom.png',         alt: 'Vetacord' },
];

// ─── Datos de servicios ────────────────────────────────────────────────────────

const servicesData: ServiceItem[] = [
	{
		id: 'corporativo-salud',
		title: 'Corporativo & Institucional',
		description:
			'Papelería administrativa y comercial desde Córdoba: formularios continuos, comprobantes fiscales, carpetas institucionales y blocs recetarios Rp.',
		href: '/soluciones-industriales',
		theme: {
			gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400',
			glow: 'bg-cyan-300/40',
		},
		imageSrc: '/services/imagen-corporativo.png',
		imageAlt: 'Servicios corporativos e institucionales',
	},
	{
		id: 'offset',
		title: 'Impresión Offset Comercial',
		description:
			'Folletería, catálogos y papelería en tiradas medianas y altas. Impresión en pliegos de hasta 102 × 72 cm (área imprimible 100 × 70 cm) en cuatro colores o monocolor.',
		href: '/soluciones-industriales#offset',
		theme: {
			gradient: 'bg-gradient-to-br from-violet-700 to-fuchsia-400',
			glow: 'bg-fuchsia-300/40',
		},
		imageSrc: '/services/offset.png',
		imageAlt: 'Impresión offset comercial',
	},
	{
		id: 'troquelados-packaging',
		title: 'Troquelados & Packaging',
		description:
			'Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas y bolsas. Troquelado, plastificado OPP y barniz UV.',
		href: '/soluciones-industriales#troquelados',
		theme: {
			gradient: 'bg-gradient-to-br from-orange-500 to-yellow-400',
			glow: 'bg-yellow-300/40',
		},
		imageSrc: '/services/caja-packaging.png',
		imageAlt: 'Modelo sosteniendo caja de packaging personalizada con logo de cliente',
		eagerLoad: true,
	},
	{
		id: 'encuadernacion-editorial',
		title: 'Encuadernación & Editorial',
		description:
			'Libros, revistas, agendas, cuadernos y catálogos. Encuadernación abrochada a caballo, cosida (tapa blanda o dura), pegada (binder) y anillada.',
		href: '/soluciones-industriales#encuadernacion',
		theme: {
			gradient: 'bg-gradient-to-br from-teal-500 to-emerald-400',
			glow: 'bg-emerald-300/40',
		},
		imageSrc: '/services/encuadernacion.png',
		imageAlt: 'Servicios de encuadernación editorial',
	},
];

// ─── Página ────────────────────────────────────────────────────────────────────

export default function Home() {
	return (
		<main className="min-h-full bg-white font-sans">
			<Hero 
				headline={
					<>
						Más de 30 años de producción <br className="hidden lg:block" />
						gráfica en Córdoba, <br className="hidden lg:block" />
						<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
							al servicio de tu marca.
						</span>
					</>
				}
				subheadline="Imprenta Offset Industrial — Córdoba, Argentina"
				description="Impresión offset, troquelado, encuadernación y producción confidencial para agencias y empresas."
				ctaText="Hablemos de tu proyecto"
				ctaLink="/contacto"
				media={{
					type: 'video',
					src: '/hero.mp4',
					poster: '/hero-poster.jpg'
				}}
				theme={{
					backgroundGradient: 'bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]',
					ctaBg: 'bg-blue-600',
					ctaHoverBg: 'hover:bg-blue-700'
				}}
			/>
			<AudiencesSection
				audiences={audiences}
				sectionTitle="¿Qué te representa más?"
			/>
			<LogoCarousel logos={clientLogos} />
			<ServicesSection
				services={servicesData}
				badgeText="Capacidad Industrial & Producción"
				titleHighlight="Potenciá tu marca con Industria Gráfica."
				subtitle="Lo que producimos en nuestra planta"
				description="Nos dedicamos a transformar tus ideas en realidades tangibles desde hace más de 30 años. Ofrecemos soluciones que destacan por su creatividad, por nuestro compromiso de atención y seguimiento a nuestros clientes."
			/>
		</main>
	);
}
