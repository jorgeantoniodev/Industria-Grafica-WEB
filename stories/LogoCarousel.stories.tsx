import type { Meta, StoryObj } from '@storybook/react';
import LogoCarousel from '../components/logo-carousel';

const meta = {
  title: 'Sections/LogoCarousel',
  component: LogoCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Lista de logos de prueba apuntando a la carpeta /public actual
const demoLogos = [
  { id: '1', src: '/logos/LOGO Bando-1-Photoroom.png', alt: 'Demo 1' },
  { id: '2', src: '/logos/LOGO Caps-1-Photoroom.png', alt: 'Demo 2' },
  { id: '3', src: '/logos/LOGO Carrara-1-Photoroom.png', alt: 'Demo 3' },
  { id: '4', src: '/logos/LOGO CoFarSur-1-Photoroom.png', alt: 'Demo 4' },
  { id: '5', src: '/logos/LOGO Fumivet-1-Photoroom.png', alt: 'Demo 5' },
];

export const Default: Story = {
  args: {
    title: 'Empresas y marcas que confían en nuestra producción',
    duration: '30s',
    logos: demoLogos,
  },
};

export const CustomConfiguration: Story = {
  args: {
    title: 'Nuestros partners estratégicos (Animación lenta)',
    duration: '80s',
    logos: demoLogos,
  },
};
