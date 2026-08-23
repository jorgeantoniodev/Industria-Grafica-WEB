# AudiencesSection Component

Sistema reutilizable de pestañas (tabs) + composición visual en capas, orientado a presentar segmentos de audiencia, tipos de cliente o perfiles de usuario. El comportamiento, estado, animaciones y geometría son responsabilidad del componente; el contenido y los colores son responsabilidad del proyecto que lo consume.

## ¿Qué hace?

Renderiza un selector de tabs horizontal seguido de un panel de contenido con dos columnas:
- **Izquierda**: badge, titular, descripción, lista de features y CTA.
- **Derecha**: composición visual en capas (blob de gradiente + imagen + badge flotante) con tres layouts predefinidos.

Soporta navegación por teclado con flechas (←/→) y cumple con ARIA roles (`tablist`, `tab`, `tabpanel`).

---

## Props — `AudiencesSectionProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `audiences` | `AudienceItem[]` | **Sí** | — | Array de audiencias/tabs a mostrar. |
| `sectionTitle` | `string` | No | `'¿A quién servimos?'` | Texto encima del selector de tabs. Pasar vacío o `undefined` lo oculta. |
| `background` | `'transparent' \| 'white'` | No | `'transparent'` | Si `'white'`, envuelve la sección en un contenedor blanco. Útil sobre fondos oscuros. |

---

## Interfaz `AudienceItem`

```tsx
export interface AudienceItem {
  id: string;
  title: string;               // Etiqueta del tab
  badge: string;               // Eyebrow text sobre el titular
  headline: string;            // H2 del panel
  description: string;
  features: AudienceFeature[];
  ctaText: string;
  ctaLink: string;
  image: string;               // Ruta desde /public
  imageAlt?: string;           // Alt explícito (fallback: title)
  floatingBadgeIcon: React.ElementType; // Ícono del badge flotante
  priority?: boolean;          // true en la pestaña por defecto (LCP)
  layout: AudienceLayout;      // 'feature-left' | 'portrait' | 'landscape'
  theme: AudienceTheme;
}
```

## Interfaz `AudienceFeature`

```tsx
export interface AudienceFeature {
  icon: React.ElementType;  // Componente de ícono (Lucide, Phosphor, Heroicons…)
  title: string;
  description: string;
}
```

> [!IMPORTANT]
> **API de íconos**: Tanto `features[].icon` como `floatingBadgeIcon` aceptan un `React.ElementType` (la referencia al componente, no un JSX renderizado). El componente aplica `className` con tamaño y color internamente. Esto permite usar cualquier librería de íconos sin modificar `AudiencesSection`.

---

## Interfaz `AudienceTheme`

```tsx
export interface AudienceTheme {
  colorText: string;        // 'text-blue-700'
  colorBg: string;          // 'bg-blue-700'
  colorLightBg: string;     // 'bg-blue-50'
  blobGradient: string;     // 'bg-gradient-to-br from-blue-100 to-indigo-50'
  floatingBadgeBg: string;  // 'bg-blue-700'
}
```

> [!IMPORTANT]
> **Tailwind JIT**: Usar siempre strings de clases completas. No construir dinámicamente (ej: `` `from-${color}` ``).

---

## Layouts disponibles — `AudienceLayout`

El componente maneja internamente un mapa `LAYOUT_VARIANTS` con tres composiciones visuales:

| Valor | Descripción |
|-------|-------------|
| `'feature-left'` | Blob centrado arriba, imagen abajo-izquierda, badge arriba-derecha. |
| `'portrait'` | Blob en el lado derecho completo, imagen abajo-izquierda, badge centrado-izquierda. |
| `'landscape'` | Blob abajo-derecha, imagen arriba-izquierda, badge abajo-izquierda. |

Los `border-radius` asimétricos que forman la "mancha" del blob son parte del sistema visual interno del componente y **no se exponen como configuración**.

---

## Dependencias NPM

| Paquete | Uso |
|---------|-----|
| `next/image` | Imagen principal de cada panel |
| `lucide-react` | Ícono interno de la flecha CTA (`ArrowRight`) |
| `tailwindcss` | Todo el sistema visual |
| `clsx` / `tailwind-merge` (`cn`) | Combinación de clases condicionales |

> **Nota sobre íconos de usuario**: Las librerías de íconos que se pasen como `icon` (Phosphor, Lucide, Heroicons, etc.) son dependencias del **proyecto consumidor**, no del componente.

---

## Archivos a copiar para reutilizar en otro proyecto

```
components/
  audiences-section.tsx      ← único archivo necesario
lib/
  utils.ts                   ← función cn() (clsx + tailwind-merge)
```

No tiene dependencias internas de otros componentes personalizados.

---

## Ejemplo mínimo

```tsx
import AudiencesSection, { AudienceItem } from '@/components/audiences-section';
import { Rocket, Shield } from 'lucide-react';

const audiences: AudienceItem[] = [
  {
    id: 'devs',
    title: 'Desarrolladores',
    badge: 'API FIRST',
    headline: 'Construí encima de nosotros.',
    description: 'SDK, webhooks y documentación OpenAPI completa.',
    features: [
      { icon: Rocket, title: 'SDKs oficiales', description: 'Para Node, Python y Go.' },
      { icon: Shield, title: 'OAuth2 nativo', description: 'Autenticación segura sin configuración extra.' },
    ],
    ctaText: 'Ver documentación',
    ctaLink: '/docs',
    image: '/developers.jpg',
    floatingBadgeIcon: Rocket,
    priority: true,
    layout: 'feature-left',
    theme: {
      colorText: 'text-indigo-700',
      colorBg: 'bg-indigo-700',
      colorLightBg: 'bg-indigo-50',
      blobGradient: 'bg-gradient-to-br from-indigo-100 to-blue-50',
      floatingBadgeBg: 'bg-indigo-700',
    },
  },
];

export default function MiPagina() {
  return (
    <AudiencesSection
      audiences={audiences}
      sectionTitle="¿Quién sos?"
      background="white"
    />
  );
}
```

Ver `audiences-section.usage-example.tsx` para un ejemplo completo con tres audiencias y comentarios `// CAMBIAR`.
