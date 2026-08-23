// Ejemplo de uso de AudiencesSection con contenido completamente genérico.
// Demuestra que el componente es agnóstico del dominio: aquí funciona para un
// producto SaaS con iconos de Lucide en lugar de @phosphor-icons/react.

import AudiencesSection, { AudienceItem } from './audiences-section';
import {
	Rocket,
	Building2,
	Code2,
	GitBranch,
	BarChart3,
	Shield,
	Users,
	Zap,
} from 'lucide-react';

// CAMBIAR: Define tus propias audiencias o segmentos de usuario.
const myAudiences: AudienceItem[] = [
	{
		id: 'startups',
		title: 'Startups',                                      // CAMBIAR: Etiqueta del tab
		badge: 'LANZÁ RÁPIDO',                                  // CAMBIAR: Eyebrow text
		headline: 'De la idea al producto en semanas.',         // CAMBIAR: Título principal
		description: 'Construimos tu MVP con velocidad sin sacrificar arquitectura. Stack moderno, CI/CD incluido desde el día 1.',
		features: [
			{ icon: Rocket, title: 'Deploy en minutos', description: 'Integración continua y despliegue automatizado desde el primer commit.' },
			{ icon: GitBranch, title: 'Arquitectura escalable', description: 'Base de código que crece con vos sin deuda técnica acumulada.' },
		],
		ctaText: 'Empezar mi MVP',                              // CAMBIAR: Texto del enlace CTA
		ctaLink: '#startups',                                   // CAMBIAR: URL de destino
		image: '/images/startups.jpg',                          // CAMBIAR: Ruta desde /public
		floatingBadgeIcon: Rocket,                              // CAMBIAR: Ícono del badge flotante
		priority: true,                                         // true solo en la primera pestaña
		layout: 'feature-left',                                 // CAMBIAR: 'feature-left' | 'portrait' | 'landscape'
		theme: {
			colorText: 'text-blue-600',                          // CAMBIAR: Color del texto del tema
			colorBg: 'bg-blue-600',                              // CAMBIAR: Color del fondo del tab activo
			colorLightBg: 'bg-blue-50',                          // CAMBIAR: Fondo claro para íconos de features
			blobGradient: 'bg-gradient-to-br from-blue-100 to-sky-50', // CAMBIAR: Gradiente del blob
			floatingBadgeBg: 'bg-blue-600',                      // CAMBIAR: Fondo del badge flotante
		},
	},
	{
		id: 'empresas',
		title: 'Empresas',
		badge: 'ESCALA SEGURA',
		headline: 'Tecnología enterprise sin la burocracia.',
		description: 'Integraciones con tus sistemas actuales, cumplimiento normativo y soporte dedicado. Transformación digital sin parar operaciones.',
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
		description: 'Trabajamos en segundo plano como tu equipo técnico. Tus clientes ven tu marca, nosotros ejecutamos el producto.',
		features: [
			{ icon: Users, title: 'Staff augmentation', description: 'Desarrolladores senior disponibles en 48 horas. Sin fricción de onboarding.' },
			{ icon: BarChart3, title: 'Reportes white-label', description: 'Dashboards y reportes con tu logo. Tus clientes nunca saben que estamos.' },
		],
		ctaText: 'Ver cómo funciona',
		ctaLink: '#agencias',
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

export default function AudiencesSectionUsageExample() {
	return (
		<AudiencesSection
			audiences={myAudiences}
			sectionTitle="¿Con quién trabajamos?"  // CAMBIAR: Título del selector de tabs (opcional)
			background="transparent"              // CAMBIAR: 'transparent' | 'white'
		/>
	);
}
