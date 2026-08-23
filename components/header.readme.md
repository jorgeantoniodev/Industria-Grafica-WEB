# Header Component

Un componente de navegación principal (`<header>`) reutilizable, sticky y completamente responsive. Extraído originalmente del diseño corporativo de Industria Gráfica.

## ¿Qué hace?

- **Sticky Navigation**: Se mantiene anclado en la parte superior (`sticky top-0 z-50`) mientras el usuario hace scroll, con fondo blanco sólido y borde sutil inferior.
- **Logo Configurable**: Soporta un logo con imagen, un título principal (`font-black`) y un subtítulo opcional.
- **Navegación Desktop**: Renderiza enlaces simples o dropdowns (máximo 1 nivel de profundidad).
  - Los dropdowns incluyen un indicador (caret) que rota al abrirse.
  - La apertura se maneja mediante hover con un pequeño delay de cierre (`setTimeout` de 150ms) para mejorar la usabilidad al mover el mouse.
- **Navegación Mobile**: Al bajar del breakpoint `lg`, los enlaces desaparecen y se muestra un menú tipo hamburguesa.
  - Al abrirse, despliega un panel a pantalla completa (debajo de los 80px del header).
  - Los dropdowns se transforman en acordeones expandibles.
- **Botón CTA**: Un botón de acción alineado a la derecha, tanto en desktop como al final del menú móvil. 
  - El color se define por la configuración semántica del `theme` (accentColor).

---

## Props — `HeaderProps`

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `logo` | `Object` | **Sí** | — | Define el isotipo, nombre de marca y subtítulo opcional, además de la ruta del link (por defecto `/`). |
| `navigation` | `NavItem[]` | **Sí** | — | Array de elementos de navegación. Puede contener `NavLink` (enlaces directos) o `NavDropdown` (menús con sub-enlaces). **No admite dropdowns anidados**. |
| `cta` | `Object` | **Sí** | — | Datos del botón principal (texto y URL). |
| `theme` | `HeaderTheme` | No | `{ accentColor: '#2563eb' }` | Objeto de tema que configura el color del botón CTA. Se inyecta como una variable CSS (`--header-accent`) nativa que se resuelve en clases de Tailwind (`bg-[var(--header-accent)]`). |

---

## Interfaz `NavItem`

El sistema admite únicamente dos tipos de nodos (sin recursividad profunda):

```tsx
export interface NavLink {
    label: string;
    href: string;
}

export interface NavDropdown {
    label: string;
    items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;
```

---

## Qué partes son inmutables en este diseño

Para preservar la intención y proporciones del diseño original, se mantuvieron cerradas las siguientes áreas:

1. **Estructura y métricas**: Altura fija del header (`h-20`), paddings laterales y gaps.
2. **Menú Hamburguesa**: Iconografía e interacciones (usa `@phosphor-icons/react` internamente).
3. **Dropdown en Desktop**: Comportamiento de *hover + timeout*. Los anchos mínimos, sombras (`shadow-xl`) y bordes curvos (`rounded-2xl`) del menú flotante.
4. **Acordeones en Mobile**: Bordes inferiores separadores, padding escalonado para sub-items.
5. **Animaciones**: Transiciones de color `transition-colors`, el rebote activo del CTA (`active:scale-95`) y las transiciones del menú.
6. **Estilos Tipográficos**: Títulos del logo, tamaño de tipografía del CTA (`text-sm font-semibold tracking-wide`), links del nav (`text-base font-semibold`).
