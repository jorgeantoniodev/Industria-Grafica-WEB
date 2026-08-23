# Hero Component

Sección principal (above the fold) para presentar una propuesta de valor de alto impacto visual. Presenta una tarjeta con gradiente de fondo, texto y llamadas a la acción a la izquierda, y un área multimedia asimétrica a la derecha.

## ¿Qué hace?

Renderiza el clásico encabezado de página estructurado en dos columnas:
- **Columna Izquierda (Texto):** `headline` (H1 de gran tamaño con soporte para saltos de línea y gradientes en texto), `subheadline` (H2), `description` (P) y botón de CTA.
- **Columna Derecha (Media):** Un bloque visual con bordes asimétricos pronunciados (`rounded-l-[15rem]`) que puede reproducir un video de fondo de manera automática o mostrar una imagen estática optimizada.

---

## Props — `HeroProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `headline` | `React.ReactNode` | **Sí** | — | Titular (H1). Soporta texto plano o JSX para intercalar `<br>` y `<span className="bg-gradient...">`. |
| `subheadline` | `string` | No | — | Subtítulo (H2) mostrado debajo del titular. |
| `description` | `string` | No | — | Párrafo breve antes del botón. |
| `ctaText` | `string` | **Sí** | — | Texto del botón de llamado a la acción. |
| `ctaLink` | `string` | **Sí** | — | URL de destino del botón. |
| `media` | `HeroMedia` | **Sí** | — | Objeto que define el medio visual (video o imagen). |
| `theme` | `HeroTheme` | **Sí** | — | Colores y degradados para el fondo de la sección y el botón CTA. |

---

## Interfaz `HeroMedia`

```tsx
export interface HeroMedia {
  type: 'video' | 'image';
  src: string;          // Ruta al archivo
  poster?: string;      // (Opcional) Imagen de portada para type='video'
  alt?: string;         // (Opcional) Texto alternativo para type='image'
}
```

## Interfaz `HeroTheme`

```tsx
export interface HeroTheme {
  backgroundGradient: string; // Ej: 'bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]'
  ctaBg: string;              // Ej: 'bg-blue-600'
  ctaHoverBg: string;         // Ej: 'hover:bg-blue-700'
}
```

> [!IMPORTANT]
> **Tailwind JIT**: Al definir las clases de Tailwind dentro del `HeroTheme` (como `backgroundGradient` o `ctaBg`), asegura siempre que el valor contenga la clase completa en formato string (`'bg-blue-600'`). No intentes construir dinámicamente (`'bg-' + color + '-600'`).

---

## Ejemplo mínimo (Texto plano e Imagen)

```tsx
import Hero from '@/components/hero';

export default function MiPagina() {
  return (
    <Hero
      headline="Tu solución tecnológica."
      ctaText="Comenzar ahora"
      ctaLink="/empezar"
      media={{
        type: 'image',
        src: '/images/hero.jpg',
        alt: 'Personas trabajando en oficina'
      }}
      theme={{
        backgroundGradient: 'bg-gradient-to-r from-gray-100 to-gray-50',
        ctaBg: 'bg-black',
        ctaHoverBg: 'hover:bg-gray-800'
      }}
    />
  );
}
```

Para ejemplos más avanzados con estructura en el `headline` y videos de fondo, consulta `hero.usage-example.tsx`.
