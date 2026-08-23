# ServicesSection Component

Sección de presentación de servicios o productos, compuesta por una cabecera con badge y una grilla de 2×2 tarjetas con gradientes de colores, glow, imágenes flotantes y hover animado.

## ¿Qué hace?

Renderiza un bloque visual de alto impacto para presentar hasta N servicios (generalmente 4, en 2 columnas). Cada tarjeta es un enlace navegable con:
- Fondo de gradiente configurable por tarjeta.
- Efecto de glow difuminado en la esquina inferior derecha.
- Imagen flotante opcional (PNG con fondo transparente recomendado).
- Botón de acción (ArrowUpRight) animado al hacer hover.
- Escala y sombra en hover.

---

## Props — `ServicesSectionProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `services` | `ServiceItem[]` | **Sí** | — | Array de tarjetas de servicio. |
| `badgeText` | `string` | No | `'Servicios & Producción'` | Texto del badge superior izquierdo. |
| `titlePrefix` | `string` | No | `'Tus proyectos. Tu empresa.'` | Primera línea del H2. |
| `titleHighlight` | `string` | No | `'Potenciá tu marca.'` | Segunda línea del H2, mostrada con gradiente purple→blue. |
| `subtitle` | `string` | No | `'Soluciones para el Alcance de tus Operaciones'` | H3 debajo del título. |
| `description` | `string` | No | Texto genérico | Párrafo descriptivo debajo del H3. |

---

## Interfaz `ServiceItem`

```tsx
export interface ServiceItem {
  id: string;          // Key único para React
  title: string;       // Nombre del servicio (H4 en la tarjeta)
  description: string; // Descripción breve
  href: string;        // URL de destino del enlace
  theme: {
    gradient: string;  // Clase Tailwind completa, ej: 'bg-gradient-to-br from-blue-600 to-cyan-400'
    glow: string;      // Clase Tailwind completa, ej: 'bg-cyan-300/40'
  };
  imageSrc?: string;   // Ruta a imagen PNG (idealmente con transparencia). Opcional.
  imageAlt?: string;   // Alt text de la imagen. Requerido si imageSrc está definido.
  eagerLoad?: boolean; // Si true, carga la imagen eager. Usar solo en la tarjeta más visible (LCP).
}
```

> [!IMPORTANT]
> **Gradientes y Tailwind JIT**: Los valores de `theme.gradient` y `theme.glow` deben ser **strings de clases Tailwind completas y estáticas**. No construyas las clases dinámicamente (ej: `` `from-${color}` ``), ya que Tailwind JIT no las detectará en el escaneo y no las incluirá en el CSS final.

---

## Dependencias NPM

| Paquete | Uso |
|---------|-----|
| `next/image` | Renderizado de imágenes flotantes optimizadas |
| `next/link` | Las tarjetas son enlaces de navegación |
| `lucide-react` | Íconos `Lightbulb` (badge) y `ArrowUpRight` (botón de tarjeta) |
| `tailwindcss` | Todo el sistema visual |

---

## Archivos que necesitás copiar

Para que el componente funcione en un proyecto Next.js + Tailwind nuevo:

```
components/
  services-section.tsx          ← El componente principal
```

**No tiene dependencias internas** de otros componentes locales. Solo depende de librerías NPM estándar.

---

## Assets requeridos

- Imágenes PNG con fondo transparente para cada tarjeta (opcionales pero recomendadas).
- Servidas desde la carpeta `/public` del proyecto.
- Configurar `remotePatterns` en `next.config.ts` si las imágenes provienen de un CDN externo.

---

## Ejemplo mínimo de uso

```tsx
import ServicesSection, { ServiceItem } from '@/components/services-section';

const services: ServiceItem[] = [
  {
    id: 'mi-servicio',
    title: 'Mi Servicio',
    description: 'Descripción breve del valor que ofrecés.',
    href: '/servicios/mi-servicio',
    theme: {
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400',
      glow: 'bg-cyan-300/40',
    },
  },
];

export default function MiPagina() {
  return (
    <ServicesSection
      services={services}
      titleHighlight="El título destacado de tu sección."
    />
  );
}
```

Ver `services-section.usage-example.tsx` para un ejemplo completo con todos los props y comentarios `// CAMBIAR`.
