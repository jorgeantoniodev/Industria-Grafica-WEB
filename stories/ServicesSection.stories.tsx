import type { Meta, StoryObj } from '@storybook/react';
import ServicesSection, { ServiceItem } from '../components/services-section';

const meta = {
  title: 'Sections/ServicesSection',
  component: ServicesSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServicesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Datos de la versión actual de Industria Gráfica
const industriaGraficaServices: ServiceItem[] = [
  {
    id: 'corporativo-salud',
    title: 'Corporativo & Salud',
    description: 'Papelería institucional e insumos médicos a gran escala. Formularios, recetarios y carpetas corporativas.',
    href: '#corporativo',
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
    description: 'Imprenta offset B2B para grandes tiradas. Catálogos, folletería comercial y papelería masiva.',
    href: '#offset',
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
    description: 'Packaging personalizado: cajas troqueladas y acabados premium con barniz UV o laminado.',
    href: '#troquelados',
    theme: {
      gradient: 'bg-gradient-to-br from-orange-500 to-yellow-400',
      glow: 'bg-yellow-300/40',
    },
    imageSrc: '/services/caja-packaging.png',
    imageAlt: 'Caja de packaging personalizada',
    eagerLoad: true,
  },
  {
    id: 'encuadernacion-editorial',
    title: 'Encuadernación & Editorial',
    description: 'Lomo cuadrado (Hotmelt), encuadernación abrochada y servicios editoriales para escritores.',
    href: '#encuadernacion',
    theme: {
      gradient: 'bg-gradient-to-br from-teal-500 to-emerald-400',
      glow: 'bg-emerald-300/40',
    },
    imageSrc: '/services/encuadernacion.png',
    imageAlt: 'Servicios de encuadernación editorial',
  },
];

// Datos genéricos para demostrar portabilidad
const genericServices: ServiceItem[] = [
  {
    id: 'diseno-web',
    title: 'Diseño Web & Apps',
    description: 'Interfaces digitales de alto impacto. Desde landing pages hasta sistemas de diseño completos.',
    href: '#diseno',
    theme: {
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400',
      glow: 'bg-cyan-300/40',
    },
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo Backend',
    description: 'APIs escalables y arquitecturas cloud que crecen con tu negocio.',
    href: '#backend',
    theme: {
      gradient: 'bg-gradient-to-br from-violet-700 to-fuchsia-400',
      glow: 'bg-fuchsia-300/40',
    },
  },
  {
    id: 'branding',
    title: 'Branding & Identidad',
    description: 'Construcción de identidad visual sólida: logotipo, paleta, tipografía y manual de marca.',
    href: '#branding',
    theme: {
      gradient: 'bg-gradient-to-br from-orange-500 to-yellow-400',
      glow: 'bg-yellow-300/40',
    },
  },
  {
    id: 'consultoria',
    title: 'Consultoría Técnica',
    description: 'Auditorías de código y asesoramiento estratégico para equipos de ingeniería.',
    href: '#consultoria',
    theme: {
      gradient: 'bg-gradient-to-br from-teal-500 to-emerald-400',
      glow: 'bg-emerald-300/40',
    },
  },
];

export const Default: Story = {
  args: {
    services: industriaGraficaServices,
    badgeText: 'Capacidad Industrial & Producción',
    titleHighlight: 'Potenciá tu marca con Industria Gráfica.',
  },
};

export const GenericPortabilityDemo: Story = {
  args: {
    services: genericServices,
    badgeText: 'Nuestras Especialidades',
    titlePrefix: 'Soluciones para tu negocio.',
    titleHighlight: 'Impulsá tu crecimiento.',
    subtitle: 'Un equipo listo para escalar contigo',
    description: 'Trabajamos como extensión de tu equipo, con enfoque en resultados y entrega continua.',
  },
};
