'use client';

import Header, { NavItem } from './header';

/**
 * Ejemplo: Uso original en Industria Gráfica
 * Este componente recrea exactamente el header original.
 */
export function IndustriaGraficaHeaderExample() {
	const navigation: NavItem[] = [
		{
			label: 'Soluciones Industriales',
			items: [
				{ label: 'Impresión Offset Comercial', href: '/soluciones-industriales#offset' },
				{ label: 'Troquelados & Packaging', href: '/soluciones-industriales#troquelados' },
				{ label: 'Encuadernación & Editorial', href: '/soluciones-industriales#encuadernacion' },
				{ label: 'Agencias & Marca Blanca', href: '/agencias' },
			],
		},
		{
			label: 'La Planta',
			href: '/la-planta',
		},
	];

	return (
		<div className="relative min-h-[400px] w-full bg-slate-50">
			<Header
				logo={{
					src: '/logo.png', // CAMBIAR por tu ruta de logo
					alt: 'Industria Gráfica Logo', // CAMBIAR
					title: 'Industria Gráfica', // CAMBIAR
					subtitle: 'Imprenta Industrial', // CAMBIAR
				}}
				navigation={navigation}
				cta={{
					label: 'Contacto', // CAMBIAR
					href: '/contacto', // CAMBIAR
				}}
				theme={{
					accentColor: '#2563eb', // CAMBIAR - Azul oficial
				}}
			/>
		</div>
	);
}

/**
 * Ejemplo: Portabilidad (SaaS Demo)
 * Demuestra cómo cambiar el branding, links y logo manteniendo la estructura intacta.
 */
export function GenericHeaderExample() {
	const navigation: NavItem[] = [
		{ label: 'Features', href: '/features' },
		{ label: 'Pricing', href: '/pricing' },
		{
			label: 'Resources',
			items: [
				{ label: 'Blog', href: '/blog' },
				{ label: 'Documentation', href: '/docs' },
				{ label: 'Community', href: '/community' },
			],
		},
	];

	return (
		<div className="relative min-h-[400px] w-full bg-slate-50">
			<Header
				logo={{
					src: '/placeholder-logo.svg', // CAMBIAR
					alt: 'SaaS Startup Logo', // CAMBIAR
					title: 'Acme Corp', // CAMBIAR
					subtitle: 'Cloud Platform', // CAMBIAR (opcional)
				}}
				navigation={navigation}
				cta={{
					label: 'Get Started', // CAMBIAR
					href: '/signup', // CAMBIAR
				}}
				theme={{
					accentColor: '#10b981', // emerald-500
				}}
			/>
		</div>
	);
}
