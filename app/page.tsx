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
		title: 'Marca blanca para agencias',
		badge: 'MÁS DE 30 AÑOS EN EL RUBRO',
		headline: 'Escala tus operaciones sin límites.',
		description:
			'Proveemos infraestructura gráfica completa. Operamos en segundo plano como tu socio de producción, garantizando calidad superior y márgenes rentables para tu agencia.',
		features: [
			{ icon: Printer, title: 'Producción offset a gran escala', description: 'Capacidad para imprimir tiradas masivas con tiempos de respuesta inmejorables.' },
			{ icon: Palette, title: 'Acabados complejos', description: 'Desde barnices sectorizados hasta cortes especiales que añaden valor premium.' },
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
		headline: 'Soluciones institucionales de alto rendimiento.',
		description:
			'Producimos formularios, recetarios, revistas institucionales y catálogos corporativos. Trabajamos bajo planificación industrial',
		features: [
			{ icon: Stack, title: 'Formularios y fichas médicas', description: 'Impresión de alta precisión para documentos corporativos y sector salud.' },
			{ icon: Target, title: 'Calidad sostenida en el tiempo', description: 'Mismo estándar de calidad, plazos y atención en cada tirada, año tras año.' },
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
		badge: 'DISEÑO A MEDIDA',
		headline: 'Materiales que hacen destacar tu identidad.',
		description:
			'Trabajos de diseño no repetitivo, packaging chico y materiales de marca para negocios medianos. Llevamos tu identidad visual a otro nivel.',
		features: [
			{ icon: Package, title: 'Packaging personalizado', description: 'Cajas y empaques a medida para productos boutique y de consumo.' },
			{ icon: ChartLineUp, title: 'Impresión variable', description: 'Personalización de cada pieza para campañas de marketing únicas.' },
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
		title: 'Corporativo & Salud',
		description: 'Papelería institucional e insumos médicos a gran escala desde Córdoba. Formularios, recetarios y carpetas corporativas.',
		href: '/soluciones-industriales',
		theme: {
			gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400',
			glow: 'bg-cyan-300/40',
		},
		imageSrc: '/services/imagen-corporativo.png',
		imageAlt: 'Servicios corporativos y de salud',
	},
	{
		id: 'offset',
		title: 'Impresión Offset Comercial',
		description: 'Imprenta offset B2B para grandes tiradas. Catálogos, folletería comercial y papelería masiva con capacidad industrial.',
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
		description: 'Packaging personalizado para empresas: cajas troqueladas y acabados premium con barniz UV o laminado.',
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
		description: 'Imprimió tu libro con respaldo industrial. Lomo cuadrado (Hotmelt), encuadernación abrochada y servicios editoriales para escritores y editoriales.',
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
						30 años de producción <br className="hidden lg:block" />
						gráfica en Córdoba, <br className="hidden lg:block" />
						<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
							al servicio de tu marca.
						</span>
					</>
				}
				subheadline="Imprenta Offset Industrial — Córdoba, Argentina"
				description="Troquelado, encuadernación y marca blanca para agencias y corporaciones."
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
			/>
		</main>
	);
}
