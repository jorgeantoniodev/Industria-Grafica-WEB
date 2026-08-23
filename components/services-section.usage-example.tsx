import ServicesSection, { ServiceItem } from './services-section';

/**
 * Ejemplo de uso para ServicesSection.
 * Copiá y pegá este bloque en tu proyecto Next.js para implementar el componente.
 * Reemplazá los valores marcados con // CAMBIAR por los de tu proyecto.
 */

// CAMBIAR: Definí tus propios servicios o categorías de productos.
// Cada tarjeta puede tener su propio color de gradiente y glow.
// Importante: usá strings completos de clases Tailwind (no valores parciales como 'blue-600'),
// ya que Tailwind JIT necesita detectar los nombres de clase completos en el código.
const myServices: ServiceItem[] = [
  {
    id: 'diseno-web',                                   // CAMBIAR: ID único para cada tarjeta
    title: 'Diseño Web & Apps',                         // CAMBIAR: Nombre del servicio
    description: 'Creamos interfaces digitales de alto impacto. Desde landing pages hasta sistemas de diseño completos para productos SaaS.',
    href: '/servicios/diseno',                          // CAMBIAR: Ruta interna de tu proyecto
    theme: {
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400', // CAMBIAR: Clases Tailwind completas
      glow: 'bg-cyan-300/40',                                   // CAMBIAR: Color del glow difuminado
    },
    imageSrc: '/images/diseno-web.png',                 // CAMBIAR: PNG con fondo transparente (opcional)
    imageAlt: 'Mockup de diseño web en múltiples dispositivos',
  },
  {
    id: 'desarrollo-backend',
    title: 'Desarrollo Backend',
    description: 'APIs escalables, bases de datos optimizadas y arquitecturas cloud que crecen con tu negocio.',
    href: '/servicios/backend',
    theme: {
      gradient: 'bg-gradient-to-br from-violet-700 to-fuchsia-400',
      glow: 'bg-fuchsia-300/40',
    },
    imageSrc: '/images/backend.png',
    imageAlt: 'Diagrama de arquitectura de servidor',
  },
  {
    id: 'branding',
    title: 'Branding & Identidad',
    description: 'Construcción de identidad visual sólida: logotipo, paleta, tipografía y manual de marca.',
    href: '/servicios/branding',
    theme: {
      gradient: 'bg-gradient-to-br from-orange-500 to-yellow-400',
      glow: 'bg-yellow-300/40',
    },
    eagerLoad: true, // CAMBIAR: true solo en la tarjeta más visible (above the fold)
    imageSrc: '/images/branding.png',
    imageAlt: 'Ejemplos de identidad visual aplicada',
  },
  {
    id: 'consultoria',
    title: 'Consultoría Técnica',
    description: 'Auditorías de código, revisión de arquitectura y asesoramiento estratégico para equipos de ingeniería.',
    href: '/servicios/consultoria',
    theme: {
      gradient: 'bg-gradient-to-br from-teal-500 to-emerald-400',
      glow: 'bg-emerald-300/40',
    },
    // Sin imageSrc: la tarjeta se muestra solo con texto. Es válido y opcional.
  },
];

export default function ServicesSectionUsageExample() {
  return (
    <ServicesSection
      services={myServices}

      // CAMBIAR: Textos del encabezado. Todos son opcionales y tienen valores por defecto genéricos.
      badgeText="Nuestras Especialidades"         // CAMBIAR: Etiqueta badge arriba del título
      titlePrefix="Soluciones para tu negocio."   // CAMBIAR: Primera parte del H2
      titleHighlight="Impulsá tu crecimiento."    // CAMBIAR: Segunda parte del H2 (resaltada en degradado)
      subtitle="Un equipo listo para escalar contigo"
      description="Trabajamos como extensión de tu equipo, con enfoque en resultados, buenas prácticas y entrega continua."
    />
  );
}
