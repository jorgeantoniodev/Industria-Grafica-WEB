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
	Target,
	ChartLineUp,
} from '@phosphor-icons/react';
import HandHeartIcon from '@/components/ui/hand-heart-icon';
import ShredderIcon from '@/components/ui/shredder-icon';
import { PackagingBoxIcon } from '@/components/ui/packaging-box-icon';
import { TargetArrowIcon } from '@/components/ui/target-arrow-icon';

// ─── Datos de audiencias ───────────────────────────────────────────────────────

const audiences: AudienceItem[] = [
	{
		id: 'agencias',
		title: 'Agencias e imprentas',
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
		image: '/images/agencias-marca-blanca-colaboracion.jpg',
		imageAlt: 'Dos profesionales revisando una pieza gráfica',
		floatingBadgeIcon: HandHeartIcon,
		priority: true,
		layout: 'feature-left',
		theme: {
			colorText: 'text-brand-electric-violet',
			colorBg: 'bg-brand-electric-violet',
			colorLightBg: 'bg-brand-electric-violet/10',
			blobGradient: 'bg-[#5332ed]/20',
			floatingBadgeBg: 'bg-brand-electric-violet',
		},
	},
	{
		id: 'corporativo',
		title: 'Empresas e instituciones',
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
		ctaLink: '/servicios',
		image: '/images/mario.png',
		imageAlt: 'Operario en máquina offset Roland Miehle en planta de producción',
		floatingBadgeIcon: ShredderIcon,
		layout: 'portrait',
		theme: {
			colorText: 'text-brand-electric-violet',
			colorBg: 'bg-brand-electric-violet',
			colorLightBg: 'bg-brand-electric-violet/10',
			blobGradient: 'bg-[#5332ed]/20',
			floatingBadgeBg: 'bg-brand-electric-violet',
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
				icon: PackagingBoxIcon,
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
		ctaLink: '/servicios#troquelados',
		image: '/images/marcas-pymes-produccion-real.png',
		imageAlt: 'Pieza impresa con distintos sellos editoriales en la planta de Industria Gráfica Córdoba',
		objectPosition: 'center 30%',
		floatingBadgeIcon: TargetArrowIcon,
		layout: 'landscape',
		theme: {
			colorText: 'text-brand-electric-violet',
			colorBg: 'bg-brand-electric-violet',
			colorLightBg: 'bg-brand-electric-violet/10',
			blobGradient: 'bg-[#5332ed]/20',
			floatingBadgeBg: 'bg-brand-electric-violet',
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
		id: 'offset',
		title: 'Impresión offset',
		description: 'Full color y monocolor en distintos formatos.',
		href: '/servicios#offset',
		theme: {
			gradient: 'card-print',
			glow: 'bg-[#ff6000]/35',
		},
		imageSrc: '/services/igc-flashback-00005.png',
		imageAlt: '',
		imageShape: 'circle',
		objectPosition: 'center 40%',
	},
	{
		id: 'corporativo-salud',
		title: 'Corporativo e institucional',
		description: 'Formularios, comprobantes y carpetas.',
		href: '/servicios',
		theme: {
			gradient: 'card-marketing',
			glow: 'bg-[#11b8ff]/35',
		},
		imageSrc: '/services/talonario-joan-Photoroom.png',
		imageAlt: 'Talonario comercial y formularios corporativos',
		imageShape: 'arch',
		imageScaleClass: 'scale-[1.8]',
		backdropColor: '#103ABF',
	},
	{
		id: 'troquelados-packaging',
		title: 'Packaging y troquelado',
		description: 'Cajas, estuches, etiquetas y fajas.',
		href: '/servicios#troquelados',
		theme: {
			gradient: 'card-packaging',
			glow: 'bg-[#e200ff]/35',
		},
		imageSrc: '/services/caja-mockup.png',
		imageAlt: 'Caja de packaging personalizada para hamburguesas y gastronomía',
		imageShape: 'arch',
		backdropColor: '#730AB0',
		eagerLoad: true,
	},
	{
		id: 'encuadernacion-editorial',
		title: 'Editorial y encuadernación',
		description: 'Libros, revistas, catálogos y cuadernos.',
		href: '/servicios#encuadernacion',
		theme: {
			gradient: 'card-fulfillment',
			glow: 'bg-[#00ffdb]/35',
		},
		imageSrc: '/services/igc-flashback-00007.png',
		imageAlt: 'Servicios de encuadernación editorial',
		imageShape: 'rounded-rect',
		imageFit: 'cover',
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
						<span className="bg-gradient-to-r from-[#7026CE] to-[#A31198] bg-clip-text text-transparent">
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
				}}
				theme={{
					backgroundGradient: 'bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]',
					ctaBg: 'bg-brand-electric-violet',
					ctaHoverBg: 'hover:bg-[#4327C2]'
				}}
			/>
			<AudiencesSection
				audiences={audiences}
				sectionTitle="Soluciones según tu perfil"
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
