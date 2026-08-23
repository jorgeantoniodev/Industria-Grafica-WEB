import type { Meta, StoryObj } from '@storybook/react';
import MediaGridSection from '../components/media-grid-section';

const meta = {
  title: 'Sections/MediaGridSection',
  component: MediaGridSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MediaGridSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Oficio en movimiento',
    description: 'Offset, troquelado y encuadernación, en la planta de Barrio San Vicente.',
    primaryCta: { label: 'Cotizar producción', href: '#cotizar' },
    secondaryCta: { label: 'Conocer la planta en detalle', href: '/la-planta' },
    images: [
      { src: '/process-1.jpg', alt: 'Máquina Offset Industrial' },
      { src: '/process-2.jpg', alt: 'Rodillos Offset en detalle' },
      { src: '/process-3.jpg', alt: 'Apilado de packaging' },
    ],
    video: {
      mp4Src: '/process.mp4',
      webmSrc: '/process.webm',
      poster: '/process-poster.jpg',
    },
  },
};

export const GenericContentReusability: Story = {
  args: {
    title: 'Espacio Creativo',
    description: 'Descubrí nuestras instalaciones diseñadas para fomentar la innovación y el trabajo en equipo, con equipamiento de última generación.',
    primaryCta: { label: 'Unirse al equipo', href: '#careers' },
    images: [
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Reunión de equipo' },
      { src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800', alt: 'Espacio de trabajo abierto' },
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', alt: 'Zona de descanso' },
    ],
    video: {
      mp4Src: '/process.mp4', // Using existing video for demo purposes since we lack a generic one
      poster: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    },
  },
};
