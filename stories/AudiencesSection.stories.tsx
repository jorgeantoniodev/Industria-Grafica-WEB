import type { Meta, StoryObj } from '@storybook/react';
import {
	Printer, Palette, Stack, ShieldCheck,
	Package, Target, ChartLineUp, Warning,
} from '@phosphor-icons/react';
import {
	Rocket, Building2, Shield, Users,
	BarChart3, Zap, Code2, GitBranch,
} from 'lucide-react';
import AudiencesSection, { AudienceItem } from '../components/audiences-section';

const meta = {
	title: 'Sections/AudiencesSection',
	component: AudiencesSection,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AudiencesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Datos de Industria Gráfica ────────────────────────────────────────────────

const industriaGraficaAudiences: AudienceItem[] = [
	{
		id: 'agencias',
		title: 'Marca blanca para agencias',
		badge: 'MÁS DE 30 AÑOS EN EL RUBRO',
		headline: 'Escala tus operaciones sin límites.',
		description: 'Proveemos infraestructura gráfica completa. Operamos en segundo plano como tu socio de producción, garantizando calidad superior y márgenes rentables para tu agencia.',
		features: [
			{ icon: Printer, title: 'Producción offset a gran escala', description: 'Capacidad para imprimir tiradas masivas con tiempos de respuesta inmejorables.' },
			{ icon: Palette, title: 'Acabados complejos', description: 'Desde barnices sectorizados hasta cortes especiales que añaden valor premium.' },
		],
		ctaText: 'Explorar soluciones para agencias',
		ctaLink: '#agencias',
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
		description: 'Producimos formularios, recetarios, revistas institucionales y catálogos corporativos. Trabajamos bajo planificación industrial',
		features: [
			{ icon: Stack, title: 'Formularios y fichas médicas', description: 'Impresión de alta precisión para documentos corporativos y sector salud.' },
			{ icon: Target, title: 'Calidad sostenida en el tiempo', description: 'Mismo estándar de calidad, plazos y atención en cada tirada, año tras año.' },
		],
		ctaText: 'Solicitar asesoría institucional',
		ctaLink: '#corporativo',
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
		description: 'Trabajos de diseño no repetitivo, packaging chico y materiales de marca para negocios medianos. Llevamos tu identidad visual a otro nivel.',
		features: [
			{ icon: Package, title: 'Packaging personalizado', description: 'Cajas y empaques a medida para productos boutique y de consumo.' },
			{ icon: ChartLineUp, title: 'Impresión variable', description: 'Personalización de cada pieza para campañas de marketing únicas.' },
		],
		ctaText: 'Ver opciones de packaging',
		ctaLink: '#pymes',
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

// ─── Datos genéricos (SaaS) para demostrar portabilidad ────────────────────────

const saasAudiences: AudienceItem[] = [
	{
		id: 'startups',
		title: 'Startups',
		badge: 'LANZÁ RÁPIDO',
		headline: 'De la idea al producto en semanas.',
		description: 'Construimos tu MVP con velocidad sin sacrificar arquitectura. Stack moderno, CI/CD incluido desde el día 1.',
		features: [
			{ icon: Rocket, title: 'Deploy en minutos', description: 'Integración continua y despliegue automatizado desde el primer commit.' },
			{ icon: GitBranch, title: 'Arquitectura escalable', description: 'Base de código que crece con vos sin deuda técnica acumulada.' },
		],
		ctaText: 'Empezar mi MVP',
		ctaLink: '#startups',
		image: '/images/startups.jpg',
		floatingBadgeIcon: Rocket,
		priority: true,
		layout: 'feature-left',
		theme: {
			colorText: 'text-blue-600',
			colorBg: 'bg-blue-600',
			colorLightBg: 'bg-blue-50',
			blobGradient: 'bg-gradient-to-br from-blue-100 to-sky-50',
			floatingBadgeBg: 'bg-blue-600',
		},
	},
	{
		id: 'empresas',
		title: 'Empresas',
		badge: 'ESCALA SEGURA',
		headline: 'Tecnología enterprise sin la burocracia.',
		description: 'Integraciones con tus sistemas actuales, cumplimiento normativo y soporte dedicado.',
		features: [
			{ icon: Building2, title: 'Integración legacy', description: 'Conectamos tus sistemas existentes sin reescribir todo desde cero.' },
			{ icon: Shield, title: 'Seguridad y compliance', description: 'SOC2, ISO 27001, GDPR. Auditorías incluidas en el proceso.' },
		],
		ctaText: 'Hablar con un especialista',
		ctaLink: '#empresas',
		image: '/images/empresas.jpg',
		floatingBadgeIcon: Building2,
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
		id: 'agencias',
		title: 'Agencias',
		badge: 'MARCA BLANCA',
		headline: 'Potencia sin visibilidad.',
		description: 'Trabajamos en segundo plano como tu equipo técnico. Tus clientes ven tu marca, nosotros ejecutamos.',
		features: [
			{ icon: Users, title: 'Staff augmentation', description: 'Desarrolladores senior disponibles en 48 horas.' },
			{ icon: BarChart3, title: 'Reportes white-label', description: 'Dashboards con tu logo. Tus clientes nunca saben que estamos.' },
		],
		ctaText: 'Ver cómo funciona',
		ctaLink: '#agencias-saas',
		image: '/images/agencias.jpg',
		floatingBadgeIcon: Zap,
		layout: 'landscape',
		theme: {
			colorText: 'text-purple-600',
			colorBg: 'bg-purple-600',
			colorLightBg: 'bg-purple-50',
			blobGradient: 'bg-gradient-to-tr from-purple-100 to-violet-50',
			floatingBadgeBg: 'bg-purple-600',
		},
	},
];

// ─── Stories ───────────────────────────────────────────────────────────────────

/** Versión actual de Industria Gráfica con sus tres audiencias. */
export const Default: Story = {
	args: {
		audiences: industriaGraficaAudiences,
		sectionTitle: '¿Qué te representa más?',
		background: 'transparent',
	},
};

/**
 * Demuestra portabilidad con contenido completamente diferente (SaaS).
 * Los íconos son de Lucide en lugar de Phosphor.
 */
export const GenericPortabilityDemo: Story = {
	args: {
		audiences: saasAudiences,
		sectionTitle: '¿Con quién trabajamos?',
		background: 'transparent',
	},
};

/**
 * Muestra el componente con `background="white"` sobre un fondo oscuro,
 * validando el aislamiento visual del prop background.
 */
export const DarkMode: Story = {
	args: {
		audiences: industriaGraficaAudiences,
		sectionTitle: '¿Qué te representa más?',
		background: 'white',
	},
	decorators: [
		(Story) => (
			<div style={{ backgroundColor: '#0f172a', padding: '2rem' }}>
				<Story />
			</div>
		),
	],
};

/**
 * Story para verificar la navegación por teclado.
 * Hacé click en una pestaña y luego usá ← → para navegar entre audiencias.
 * El foco debe moverse correctamente y el panel debe cambiar.
 */
export const KeyboardNavigation: Story = {
	args: {
		audiences: industriaGraficaAudiences,
		sectionTitle: 'Navegá con ← → una vez que actives un tab',
		background: 'transparent',
	},
	parameters: {
		docs: {
			description: {
				story:
					'1. Hacé Tab para llegar al primer botón de audiencia. 2. Presioná → para avanzar y ← para retroceder. 3. El panel activo y el foco deben cambiar de forma sincronizada.',
			},
		},
	},
};
