import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../components/hero';

const meta = {
	title: 'Sections/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Historias ─────────────────────────────────────────────────────────────────

/**
 * Hero con configuración original de Industria Gráfica.
 * Demuestra un headline con spans y saltos de línea responsivos, y un video de fondo.
 */
export const Default: Story = {
	args: {
		headline: (
			<>
				30 años de producción <br className="hidden lg:block" />
				gráfica en Córdoba, <br className="hidden lg:block" />
				<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
					al servicio de tu marca.
				</span>
			</>
		),
		subheadline: 'Imprenta Offset Industrial — Córdoba, Argentina',
		description: 'Troquelado, encuadernación y marca blanca para agencias y corporaciones.',
		ctaText: 'Hablemos de tu proyecto',
		ctaLink: '#',
		media: {
			type: 'video',
			src: '/hero.mp4',
			poster: '/hero-poster.jpg'
		},
		theme: {
			backgroundGradient: 'bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]',
			ctaBg: 'bg-blue-600',
			ctaHoverBg: 'hover:bg-blue-700'
		}
	},
};

/**
 * Ejemplo de portabilidad con una imagen estática.
 * Cambia los colores base y demuestra cómo usar el componente en otro contexto (SaaS).
 */
export const WithImage: Story = {
	args: {
		headline: (
			<>
				Software de gestión <br className="hidden lg:block" />
				ágil y <span className="text-emerald-500">seguro</span>.
			</>
		),
		subheadline: 'Para empresas modernas',
		description: 'Optimiza tus flujos de trabajo con herramientas que se adaptan a tus procesos, no al revés.',
		ctaText: 'Iniciar prueba gratuita',
		ctaLink: '#',
		media: {
			type: 'image',
			src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
			alt: 'Desarrollador trabajando'
		},
		theme: {
			backgroundGradient: 'bg-slate-100',
			ctaBg: 'bg-emerald-600',
			ctaHoverBg: 'hover:bg-emerald-700'
		}
	},
};
