# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# REGLAS DE DESARROLLO

## Next.js App Router · React · TypeScript · Magic UI

**Stack:** Next.js 15.x / 16.x | React 19 | TypeScript | Tailwind CSS | Shadcn/ui | Magic UI | Zustand | Zod | Motion (ex-Framer Motion)

**Versión:** 2.1 — Julio 2026

---

## 1. Filosofía de Desarrollo

* Escribe código limpio, mantenible y escalable.

* Sigue los principios SOLID.

* Prefiere patrones funcionales y declarativos sobre imperativos.

* Enfatiza la seguridad de tipos y el análisis estático (TypeScript strict mode).

* Practica desarrollo orientado a componentes (component-driven development).

* Considera implicaciones de seguridad, rendimiento y operaciones en cada decisión.

* Ajusta el enfoque basándote en feedback y evolución del proyecto.

---

## 2. Arquitectura de Componentes (Server vs Client)

> **DEFAULT:** Usa Server Components (SC) como regla general en TODO el proyecto.

Usa la directiva `'use client'` ÚNICAMENTE cuando necesites explícitamente:

* Event listeners (onClick, onSubmit, onChange, etc.)

* Browser APIs (window, document, localStorage, navigator)

* Hooks de estado y efectos (useState, useEffect, useContext, useReducer)

* Librerías client-only (Motion, Zustand, React Query, charts)

* Magic UI components (todos usan Motion internamente)

* Formularios interactivos con validación en tiempo real

> **⚠️ NUNCA** uses `"use client"` solo para hacer fetch de datos. Obtén los datos en el Server Component padre y pásalos como props.

>

> **⚠️ NUNCA** importes ni uses Zustand stores en Server Components; provoca hydration mismatches o leaks de estado entre requests.

### 2.1 Patrón de Composición Recomendado

```tsx

// ✅ CORRECTO: Server Component como contenedor, Client Components como hijos

// app/page.tsx (Server Component por defecto)

import { getProducts } from '@/lib/data'

import ProductGrid from '@/components/product-grid'  // 'use client'

import ProductFilters from '@/components/product-filters'  // 'use client'

export default async function ProductsPage() {

  const products = await getProducts()

  return (

    <div>

      <h1>Productos</h1>

      <ProductFilters />  {/* Client: interactivo */}

      <ProductGrid products={products} />  {/* Client: animado con Motion */}

    </div>

  )

}

```

---

## 3. Next.js App Router — Estándares Modernos

### 3.1 Server Actions

* Server Actions son el patrón idiomático del App Router para mutaciones.

* Usa Server Actions para mutaciones simples y form submissions.

* Usa API routes `/app/api/`) CUANDO necesites: webhooks, streaming de respuestas, control granular de headers/cookies, o consumo desde múltiples clients.

* SIEMPRE retorna objetos tipados desde Server Actions: `{ success: boolean, data?, error? }`. NUNCA lances throws crudos al cliente.

* Usa `revalidatePath()` o `revalidateTag()` después de mutaciones exitosas para invalidar caché.

* Marca funciones server-only con `"use server"` explícitamente.

* Valida TODAS las entradas en Server Actions con Zod antes de procesar.

### 3.2 Importaciones

* Usa absolute imports exclusivamente (e.g., `import Button from '@/components/ui/button'`) para evitar paths relativos messy `../../`).

 *Configura path aliases en* `tsconfig.json`*:* `"@/": ["./*"]`

### 3.3 Seguridad del Servidor

* Instala y usa el paquete `server-only` para utility functions o database calls que expongan secrets.

* NUNCA importes funciones marcadas con `"server-only"` en Client Components; Next.js lanzará un error de build.

* Mantén todas las llamadas a base de datos, APIs internas y secrets EXCLUSIVAMENTE en Server Components o Server Actions.

* Si el proyecto usa un archivo de interceptación de requests, ten en cuenta que en Next.js 16 `middleware.ts` fue reemplazado por `proxy.ts` (corre en Node.js, no en Edge Runtime). Úsalo solo para routing ligero (redirects, rewrites, headers) y NUNCA para validación pesada de sesión o llamadas a base de datos; esa lógica va en Server Components o Route Handlers.

### 3.4 Optimización de Imágenes

* Usa Next/Image estrictamente con formatos modernos (AVIF/WEBP).

* Usa el atributo `priority` SÓLO en la imagen LCP (Largest Contentful Paint) de cada página.

* Usa `placeholder="blur"` con `blurDataURL` para imágenes above-the-fold.

* Usa `sizes` obligatoriamente en imágenes responsive para que Next.js genere srcsets correctos.

* Configura `remotePatterns` en `next.config.js` para dominios externos de imágenes.

### 3.5 Caching Strategy

* **Entiende el default:** En Next.js 15+, `fetch()` en Server Components **NO está cacheado por defecto** `cache: 'no-store'`). Usa `cache: 'force-cache'` si necesitas cachear explícitamente.

* Usa `revalidateTag()` para invalidación selectiva en lugar de `revalidatePath('/')` (más granular y eficiente).

* Configura `export const revalidate = 60` en page/layout SÓLO cuando tengas contenido semi-estático.

* Usa `React.cache()` para deduplicar requests en el mismo render cycle.

* Evita cachear respuestas de autenticación o datos de usuario.

---

## 4. Magic UI & Shadcn/ui — Component Architecture

### 4.1 Instalación y Estructura

* Instala componentes Shadcn/ui via CLI: `npx shadcn add [component]`

* Magic UI components DEBEN vivir en `'use client'` porque usan Motion (ex-Framer Motion) internamente.

* NUNCA modifiques directamente los componentes en `/components/ui/`; extiéndelos vía composición o props.

* Usa la utilidad `cn()` (de clsx + tailwind-merge) para clases condicionales en TODOS los componentes.

### 4.2 Tailwind Configuration

* Usa la configuración extendida de Shadcn como base en `tailwind.config.ts`.

* Define CSS variables para colors en `:root` y `.dark` en `globals.css`.

* Mantén el theme consistente con los tokens de Magic UI (radius, colors, spacing).

### 4.3 Composición de Componentes

* Aplica patrones de composición para crear componentes modulares y reutilizables.

* Usa el patrón Compound Components cuando un componente tiene múltiples partes relacionadas (Modal, Card, Tabs).

* Prefiere la composición sobre la herencia de props masiva.

---

## 5. Animaciones con Motion (ex-Framer Motion)

* La librería se renombró de `framer-motion` a `motion`; importa siempre desde `motion/react`, no desde `framer-motion` (el paquete viejo sigue funcionando pero ya no recibe desarrollo activo).

* Usa `layout` prop con precaución; genera repaints costosos.

* Prefiere `transform` y `opacity` para animaciones (GPU-accelerated).

* Respeta `prefers-reduced-motion`: wrap animaciones en `useReducedMotion()` de Motion.

* NUNCA animes width, height, top, left en elementos frecuentes (causan layout thrashing).

* ⚠️ NUNCA uses el índice del array como key en listas animadas o dinámicas. Siempre usa un identificador único y estable.

---

## 6. Data Fetching & Caching Strategy

* Usa `fetch()` nativo en Server Components.

* Usa React Query (TanStack Query) ÚNICAMENTE en Client Components para: datos que mutan frecuentemente, polling, infinite scroll, o optimistic updates.

* NUNCA hagas fetch en `useEffect` si puedes hacerlo en el Server Component padre.

---

## 7. Gestión de Estado

* **Jerarquía de Estado:** URL params > Server Components > Local state > Context > Zustand.

* **Zustand:** Úsalo SÓLO dentro de Client Components `'use client'`). NUNCA importes Zustand stores en Server Components. Mantén los stores pequeños y enfocados (feature-based).

* **URL como Estado:** Usa URL query parameters para filtros, paginación, ordenamiento y búsqueda.

---

## 8. Formularios & Validación

* Usa React Hook Form + Zod para TODOS los formularios.

* **React 19:** Usa `useActionState` para manejar el estado de Server Actions en formularios. `useFormState` quedó obsoleto y no debe usarse en código nuevo.

* Valida en el cliente PRIMERO (Zod schema), luego en el Server Action.

* Retorna errores de validación como objeto `{ fieldErrors: {} }` para mapearlos a inputs.

---

## 9. Internacionalización (i18n)

* Usa `next-intl` para implementación de i18n en App Router.

* NO uses `next-i18next` (incompatible con Server Components).

---

## 10. Seguridad

* Implementa sanitización de input para prevenir ataques XSS. Usa DOMPurify para HTML renderizado dinámicamente.

* NUNCA expongas secrets, API keys o credenciales en Client Components.

* Valida TODAS las entradas de usuario con Zod en Server Actions.

* NUNCA uses `proxy.ts` (ex-middleware) como capa de autenticación; es una "thin proxy" para routing. La validación autoritativa de sesión y permisos va en Server Components o Route Handlers.

---

## 11. SEO & Metadata

* Usa metadata export en cada page/layout para SEO.

* Genera openGraph y twitter images con `opengraph-image.tsx`.

* Implementa structured data (JSON-LD) para rich snippets.

---

## 12. Testing  *Cuando se pidan tests o el cambio lo justifique, usa Jest y React Testing Library (RTL).*  Sigue el patrón Arrange-Act-Assert.  *Testea comportamiento del usuario, NO implementación interna.*  No generes tests de forma proactiva si no fueron solicitados (ver reglas de usuario).

---

## 13. Accesibilidad (a11y)

* Usa HTML semántico para estructura significativa.

* Asegura navegación completa por teclado para todos los elementos interactivos.

* Mantén ratios de contraste de color accesibles (WCAG AA).

* Haz TODOS los elementos interactivos accesibles (botones, links, formularios).

---

## 14. Estilo de Código & Naming Conventions

* Usa tabs para indentación.

* Usa comillas simples para strings (excepto para evitar escaping).

* Limita longitud de línea a 80 caracteres, excepto para las cadenas de clases de Tailwind CSS.

* **PascalCase:** Components, Type definitions, Interfaces.

* **kebab-case:** Directory names, File names.

* **camelCase:** Variables, Functions, Methods, Hooks, Properties, Props.

---

## 15. Manejo de Errores & Loading States

* Crea `error.tsx` a nivel de rutas relevantes en el App Router.

* Diseña `loading.tsx` como Skeletons, NO spinners genéricos.

---

## 16. Rendimiento & Optimización

* Implementa `useCallback` para memoizar funciones callback y `useMemo` para computaciones costosas.

* Usa `next/dynamic` para lazy loading de componentes client-side pesados.

* Implementa streaming con Suspense para mejorar TTFB y LCP.

---

## 17. Notas de Versión y Compatibilidad (auditoría Julio 2026)

* Next.js 16 es la versión LTS activa desde octubre de 2025; Next.js 15 sigue en mantenimiento solo hasta octubre de 2026. Si el proyecto arranca de cero hoy, evaluá empezar directamente en 16.x.

 *Framer Motion se independizó y se renombró a* *Motion**: paquete npm `motion`, import `motion/react` (no `framer-motion`).

* En Next.js 16, `middleware.ts` fue reemplazado por `proxy.ts` como "thin proxy" para routing; la lógica de autenticación pesada no debe vivir ahí (ver secciones 3.3 y 10).

