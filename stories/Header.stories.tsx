import type { Meta, StoryObj } from '@storybook/react';
import Header, { NavItem } from '../components/header';

const meta = {
	title: 'UI/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const industriaGraficaNavigation: NavItem[] = [
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

const genericNavigation: NavItem[] = [
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

export const Default: Story = {
	args: {
		logo: {
			src: '/logo.png', // Fallback si no existe en Storybook: un placeholder o URL real
			alt: 'Industria Gráfica Logo',
			title: 'Industria Gráfica',
			subtitle: 'Imprenta Industrial',
		},
		navigation: industriaGraficaNavigation,
		cta: {
			label: 'Contacto',
			href: '/contacto',
		},
		theme: {
			accentColor: '#2563eb', // Blue-600
		},
	},
	decorators: [
		(Story) => (
			<div className="h-[400px] w-full bg-slate-50">
				<Story />
				<div className="p-8 text-gray-500">Contenido debajo del header (hacé scroll para probar sticky).</div>
			</div>
		),
	],
};

export const AlternateColorGeneric: Story = {
	args: {
		logo: {
			src: 'https://via.placeholder.com/40',
			alt: 'Acme Corp Logo',
			title: 'Acme Corp',
			// Sin subtitle
		},
		navigation: genericNavigation,
		cta: {
			label: 'Get Started',
			href: '/signup',
		},
		theme: {
			accentColor: '#ef4444', // Red-500
		},
	},
	decorators: Default.decorators,
};

export const MobileViewport: Story = {
	args: Default.args,
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
	decorators: Default.decorators,
};
