# Contrato Visual de Implementación — Footer

**Proyecto:** Industria Gráfica Córdoba (`Industria-Grafica-WEB`)  
**Base de especificación:** [`Footer Plan.md`](file:///C:/Users/admin/Proyectos/IndustriaGraficaCordoba/Footer%20Plan.md), [`AGENTS.md`](file:///C:/Users/admin/Proyectos/IndustriaGraficaCordoba/Industria-Grafica-WEB/AGENTS.md) (*«Make systems, not games»*), capturas de referencia limpia y anotada.  
**Estado:** Propuesta técnica y de diseño para aprobación. **No se modificó ningún archivo del sitio.**

---

## 1. Filosofía Arquitectónica («Make systems, not games»)

Siguiendo las directivas de [`AGENTS.md`](file:///C:/Users/admin/Proyectos/IndustriaGraficaCordoba/Industria-Grafica-WEB/AGENTS.md):
- **Componente (`components/footer.tsx`):** Será un **Server Component** puro (`async/sync` sin `'use client'`), semántico (`<footer>`, `<nav>`, `<address>`), accesible (contrastes WCAG AA, foco por teclado visible) y completamente portable.
- **Desacoplamiento de Contenido vs. Sistema:** La información del footer se extraerá a `content/footer-data.ts` para no ensuciar `app/layout.tsx`. Ningún dato comercial (teléfono, links, textos de tarjetas, categorías, redes, copyright) estará hardcodeado dentro del componente base. Se expondrá una interfaz estricta TypeScript `FooterProps` que recibirá la configuración desde los datos.
- **Logo:** Se reutilizará exactamente el componente o asset del logo que emplea el Header actual. NO se reconstruirá artificialmente con isotipo + texto, y NO se utilizará `mix-blend-mode` para disimular fondos blancos.

---

## 2. Anatomía Completa del Footer

El footer se organiza con el Logo en la zona superior izquierda, y la grilla principal comenzando debajo de él.

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│ FOOTER CONTAINER (Fondo ~#1a1a1a, padding superior ~40-48px)                     │
│                                                                                  │
│ [Logo] (Fila independiente, alineado a la izquierda)                             │
│                                                                                  │
│ ┌── ZONA 1: BLOQUE PRINCIPAL (Grid 5 columnas en lg/xl, max-w-[1400px]) ───────┐ │
│ │                                                                              │ │
│ │ ┌─ Columna 1 (Contacto) ┐ ┌─ Col 2 ─┐ ┌─ Col 3 ─┐ ┌─ Col 4 ─┐ ┌─ Col 5 ─┐ │ │
│ │ │                       │ │ Empresa │ │Servicios│ │Profesion│ │Info útil│ │ │
│ │ │ Título introductorio  │ │         │ │         │ │         │ │         │ │ │
│ │ │ Párrafo descriptivo   │ │ Inicio  │ │ Soluc.  │ │Agencias │ │  FAQ    │ │ │
│ │ │                       │ │ La plant│ │ Offset  │ │Confiden.│ │Cómo cot.│ │ │
│ │ │ ┌─ Tarjeta 1 (WA) ───┐│ │ Contacto│ │ Troquel.│ │Presup.  │ │Ubicación│ │ │
│ │ │ └────────────────────┘│ │         │ │ Encuad. │ │         │ │         │ │ │
│ │ │ ┌─ Tarjeta 2 (Web) ──┐│ │         │ │         │ │         │ │         │ │ │
│ │ │ └────────────────────┘│ │         │ │         │ │         │ │         │ │ │
│ │ └───────────────────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │ │
│ └──────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                  │
│ ── ZONA 2: SEPARADOR HORIZONTAL (borde 1px sutil, ~#404040) ──────────────────── │
│                                                                                  │
│ ┌── ZONA 3: FRANJA INFERIOR (Centrada) ────────────────────────────────────────┐ │
│ │                    "Seguinos en las redes sociales"                          │ │
│ │                        [Icono IG]   [Icono FB]                               │ │
│ │                                                                              │ │
│ │  © 2026 Industria Gráfica Córdoba. Impresión offset, troquelado...           │ │
│ └──────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Especificaciones Visuales y Proporciones

### 3.1 Identidad y Colores Base
Las variables CSS de identidad se definirán en `:root` (si no existen) para uso general:
```css
--brand-electric-violet: #5332ed;
--brand-deep-violet: #6d28d2;
--brand-lavender-pale: #ecd9f3;
--brand-magenta: #b80982;
--brand-violet-soft: #a073e2;
--brand-plum: #a0139c;
--brand-rose-soft: #cc73c0;
--brand-purple: #891cb4;
--brand-lavender: #c49fe6;
```
- **Fondo principal del Footer:** Aproximadamente `#1a1a1a` (usar token semántico/apropiado en Tailwind si aplica, ej. `bg-[#1a1a1a]`).
- **Fondo de Tarjetas:** Aproximadamente `#262626` (ej. `bg-[#262626]`).
- **Color de Separador:** Aproximadamente `#404040` (ej. `border-[#404040]`).

### 3.2 Contenedor y Cuadrícula
- **Padding superior:** ~40–48px en escritorio.
- **Alineación de Grilla:** El bloque de contacto y los 4 encabezados de navegación comienzan aproximadamente a la misma altura, situados *debajo* del logo (no se alinean con el logo).

### 3.3 Tipografía y Legibilidad (Tamaños Aumentados)
- **Descripciones y Párrafos:** ~13–14px.
- **Encabezados de columnas de navegación:** ~14px.
  - Colores de Identidad para cada columna (NO colores saturados que afecten legibilidad):
    - **Empresa:** `#a073e2` (Violet Soft)
    - **Servicios:** `#cc73c0` (Rose Soft)
    - **Para profesionales:** `#c49fe6` (Lavender)
    - **Información útil:** `#ecd9f3` (Lavender Pale)
- **Enlaces de navegación:** 14–16px (legibles, sin saturar con color estridente).
- **Copyright:** Mínimo 12px.
- **Tamaños menores:** Reservados únicamente para detalles ultra secundarios.

### 3.4 Logo Superior Izquierdo
- **Componente:** Reutilizar componente o asset original del Header sin alteraciones estructurales artificiales, alineado completamente a la izquierda.

### 3.5 Las Cuatro Columnas de Navegación y Enlaces
- Los enlaces de **Servicios** (Soluciones Industriales) deben utilizar los anchors exactos actuales de la página de catálogo (ej. `/soluciones-industriales#offset`, `/soluciones-industriales#troqueles-y-sacabocados`, etc., previa confirmación del slug).
- La página de **FAQ** (`/preguntas-frecuentes`) se separará para su creación en una validación editorial posterior.

### 3.6 Franja Inferior y Redes Sociales
- **Redes oficiales a enlazar:**
  - Instagram: `https://www.instagram.com/industriagrafica_ok/`
  - Facebook: `https://www.facebook.com/profile.php?id=61561856879737`

---

## 4. Transformación Responsive (Desktop vs. Tablet vs. Móvil)

| Elemento | Desktop (`xl` ≥ 1280px) | Tablet (`md` 768px – 1279px) | Móvil (`sm` ≤ 767px) |
| :--- | :--- | :--- | :--- |
| **Estructura principal** | 5 columnas horizontales. | Contacto arriba, navegación abajo en grid 2x2. | Todo apilado verticalmente. |
| **Columnas de navegación** | 4 columnas en 1 fila. | 2 filas de 2 columnas. | 2 columnas en grid continuo (Sin acordeón/JS). |
| **Logo** | Fila superior izquierda. | Fila superior izquierda. | Fila superior izquierda. |

---

## 5. Diferencias Intencionales respecto de la Referencia

1. **Eliminación del banner publicitario inferior.**
2. **Eliminación de la pasarela de pagos.**
3. **Sustitución del botón de Chat:** La web cuenta con el botón flotante de WhatsApp, por lo que el botón flotante azul de la referencia se omite por completo.
4. **Depuración de Redes Sociales:** Estrictamente FB e IG.

---

## 6. Validación Visual y Definition of Done (DoD)

- [ ] Las variables de colores de marca existen en `:root`.
- [ ] El footer lee toda su información comercial de `content/footer-data.ts`.
- [ ] El componente de React no contiene datos *hardcodeados*.
- [ ] El logo reutiliza la implementación existente del `Header` (y no usa `mix-blend-mode`).
- [ ] Padding superior en Desktop es de 40 a 48px.
- [ ] Colores respetan los requerimientos: fondo `#1a1a1a`, tarjetas `#262626`, borde `#404040`.
- [ ] Tamaños de texto cumplen el aumento de legibilidad (enlaces 14-16px, descripciones 13-14px).
- [ ] Encabezados usan los colores asignados (`#a073e2`, `#cc73c0`, `#c49fe6`, `#ecd9f3`).
- [ ] El layout es responsive en las tres franjas (Móvil en dos columnas de navegación sin JS, Tablet 2x2).
- [ ] Enlaces apuntan a los anchors correctos y redes sociales redirigen a los links especificados (`_blank` + `noopener noreferrer`).

---

**Detención requerida:** No se realizará ninguna edición ni creación de código fuente hasta recibir la aprobación explícita de este contrato visual actualizado.
