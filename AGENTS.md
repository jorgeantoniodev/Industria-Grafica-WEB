# **‘Reglas de Desarrollo — Next.js App Router · React · TypeScript · Magic UI**

 

**Stack:** Next.js 16.x (LTS activa) | React 19 | TypeScript | Tailwind CSS | Shadcn/ui | Magic UI | Zustand | Zod | Motion (ex-Framer Motion)

 

**Versión:** 3.0 — Consolidada, Julio 2026  
**Origen:** documento único que fusiona y audita instrucciones-cursor.docx (v2.0) y reglas-desarrollo-nextjs.docx (v2.1). Donde ambas versiones se contradecían, se tomó la v2.1 como fuente de verdad (es la auditoría posterior) y se corrigieron los ejemplos de código de la v2.0 en consecuencia.

 

 

## **0\. Nota de auditoría — leer antes de aplicar estas reglas**

 

Este documento reemplaza a las dos versiones anteriores. Si en el repo existe un archivo .cursorrules en la raíz con contenido de la v2.0, **está siendo ignorado silenciosamente por Cursor Agent mode** — no hace falta borrarlo, pero no cumple ninguna función. La convención vigente es .cursor/rules/\*.mdc. Si este documento se usa con Antigravity u otro agente, verificar cuál es su convención de archivo de reglas actual antes de asumir que aplica automáticamente.

 

Se corrigieron 4 contradicciones factuales entre las versiones previas:

 

1\. **Cache de fetch() en Server Components:** en Next.js 15+, **NO** está cacheado por defecto (cache: 'no-store' implícito). Se usa cache: 'force-cache' solo si se quiere cachear explícitamente. (La v2.0 decía lo contrario — esto es lo más riesgoso de dejar sin corregir, puede causar bugs de datos desactualizados o exceso de requests según qué versión se haya seguido.)

2\. **Formularios con Server Actions (React 19):** usar useActionState. useFormState quedó obsoleto y no debe aparecer en código nuevo.

3\. **Framer Motion → Motion:** el paquete se renombró. Import correcto: motion/react, no framer-motion (el paquete viejo sigue funcionando pero no recibe desarrollo activo).

4\. **middleware.ts → proxy.ts (Next.js 16):** corre en Node.js, no en Edge Runtime. Se usa solo para routing liviano (redirects, rewrites, headers). **Nunca** para validación de sesión o lógica de autorización — esa lógica va en Server Components o Route Handlers.

 

 

## **1\. Filosofía de Desarrollo**

 

* Código limpio, mantenible y escalable.

* Principios SOLID.

* Patrones funcionales y declarativos sobre imperativos.

* TypeScript strict mode como estándar, no como opción.

* Desarrollo orientado a componentes (component-driven development).

* Considerar implicaciones de seguridad, rendimiento y operaciones en cada decisión, no solo al final.

* Ajustar el enfoque según feedback y evolución real del proyecto.

 

 

## **2\. Arquitectura de Componentes (Server vs Client)**

 

**Default:** Server Components (SC) como regla general en TODO el proyecto.

 

Usar 'use client' ÚNICAMENTE cuando se necesite explícitamente:

 

* Event listeners (onClick, onSubmit, onChange, etc.)

* Browser APIs (window, document, localStorage, navigator)

* Hooks de estado y efectos (useState, useEffect, useContext, useReducer)

* Librerías client-only (Motion, Zustand, React Query, charts)

* Componentes de Magic UI (todos usan Motion internamente)

* Formularios interactivos con validación en tiempo real

 

⚠️ **NUNCA** uses 'use client' solo para hacer fetch de datos. Obtené los datos en el Server Component padre y pasalos como props.  
⚠️ **NUNCA** importes ni uses stores de Zustand en Server Components — provoca hydration mismatches o leaks de estado entre requests.

 

### **2.1 Patrón de Composición Recomendado**

 

           
    // ✅ CORRECTO: Server Component como contenedor, Client Components como hijos      
    // app/page.tsx (Server Component por defecto)      
    import { getProducts } from '@/lib/data'      
    import ProductGrid from '@/components/product-grid'     // 'use client'      
    import ProductFilters from '@/components/product-filters' // 'use client'      
           
    export default async function ProductsPage() {      
      const products \= await getProducts()      
           
      return (      
        \<div\>      
          \<h1\>Productos\</h1\>      
          \<ProductFilters /\>                    {/\* Client: interactivo \*/}      
          \<ProductGrid products={products} /\>   {/\* Client: animado con Motion \*/}      
        \</div\>      
      )      
    }      
         

 

           
    // ❌ INCORRECTO: Client Component innecesario para algo que el padre podía resolver      
    'use client'      
    import { useEffect, useState } from 'react'      
           
    export default function ProductsPage() {      
      const \[products, setProducts\] \= useState(\[\])      
           
      useEffect(() \=\> {      
        fetch('/api/products').then(r \=\> r.json()).then(setProducts) // ¡Mal\!      
      }, \[\])      
           
      return \<ProductGrid products={products} /\>      
    }      
         

 

 

## **3\. Next.js App Router — Estándares Modernos**

 

### **3.1 Server Actions**

 

Son el patrón idiomático del App Router para mutaciones. Eliminan la fricción de crear endpoints /api para cada operación, pero no son la respuesta para todo.

 

* Usar Server Actions para mutaciones simples y form submissions.

* Usar API routes (/app/api/) cuando se necesite: webhooks, streaming de respuestas, control granular de headers/cookies, o consumo desde múltiples clients (móvil, terceros).

* SIEMPRE retornar objetos tipados desde Server Actions: { success: boolean, data?, error? }. Nunca lanzar throws crudos al cliente.

* Usar revalidatePath() o revalidateTag() después de mutaciones exitosas para invalidar caché.

* Marcar funciones server-only con "use server" explícitamente.

* Validar TODAS las entradas con Zod antes de procesar.

 

           
    // ✅ CORRECTO: Server Action tipada y segura      
    'use server'      
           
    import { revalidatePath } from 'next/cache'      
    import { z } from 'zod'      
    import { createProduct } from '@/lib/db'      
           
    const CreateProductSchema \= z.object({      
      name: z.string().min(1).max(100),      
      price: z.number().positive(),      
      categoryId: z.string().uuid(),      
    })      
           
    export type CreateProductResult \=      
      | { success: true; data: Product }      
      | { success: false; error: string; fieldErrors?: Record\<string, string\[\]\> }      
           
    export async function createProductAction(      
      formData: FormData      
    ): Promise\<CreateProductResult\> {      
      const raw \= Object.fromEntries(formData)      
      const parsed \= CreateProductSchema.safeParse(raw)      
           
      if (\!parsed.success) {      
        return {      
          success: false,      
          error: 'Validación fallida',      
          fieldErrors: parsed.error.flatten().fieldErrors,      
        }      
      }      
           
      try {      
        const product \= await createProduct(parsed.data)      
        revalidatePath('/products')      
        return { success: true, data: product }      
      } catch (err) {      
        return { success: false, error: 'Error al crear producto' }      
      }      
    }      
         

 

### **3.2 Importaciones**

 

* Absolute imports exclusivamente (import Button from '@/components/ui/button') para evitar paths relativos messy (../../).

* Path aliases en tsconfig.json: "@/\*": \["./\*"\].

 

### **3.3 Seguridad del Servidor**

 

* Instalar y usar el paquete server-only para utility functions o database calls que expongan secrets.

* Nunca importar funciones marcadas con server-only en Client Components — Next.js lanza error de build.

* Mantener llamadas a base de datos, APIs internas y secrets EXCLUSIVAMENTE en Server Components o Server Actions.

 

           
    // lib/db.ts      
    import 'server-only'      
    import { db } from '@/lib/database'      
           
    export async function getUserById(id: string) {      
      // Esta función nunca llega al bundle del cliente      
      return db.user.findUnique({ where: { id } })      
    }      
         

 

### **3.4 Optimización de Imágenes**

 

* next/image estrictamente, con formatos modernos (AVIF/WEBP).

* Atributo priority SOLO en la imagen LCP (Largest Contentful Paint) de cada página.

* placeholder="blur" con blurDataURL para imágenes above-the-fold.

* sizes obligatorio en imágenes responsive para que Next.js genere srcsets correctos.

* unoptimized={true} solo para imágenes dinámicas de usuario cuando el dominio no esté en remotePatterns.

* Configurar remotePatterns en next.config.js para dominios externos de imágenes.

 

           
    import Image from 'next/image'      
           
    export default function Hero() {      
      return (      
        \<Image      
          src="/hero.avif"      
          alt="Descripción significativa"      
          width={1200}      
          height={600}      
          priority      
          placeholder="blur"      
          blurDataURL="data:image/avif;base64,..."      
          sizes="(max-width: 768px) 100vw, 1200px"      
        /\>      
      )      
    }      
         

 

### **3.5 Caching Strategy ⚠️ corregido en esta versión**

 

* **Entender el default real:** en Next.js 15+, fetch() en Server Components **NO** está cacheado por defecto (cache: 'no-store' implícito). Usar cache: 'force-cache' si se necesita cachear explícitamente.

* Usar revalidateTag() para invalidación selectiva en lugar de revalidatePath('/') (más granular y eficiente).

* Configurar export const revalidate \= 60 en page/layout SOLO cuando haya contenido semi-estático.

* Usar React.cache() para deduplicar requests en el mismo render cycle.

* Evitar cachear respuestas de autenticación o datos de usuario.

 

           
    // ✅ CORRECTO: Caching granular con tags      
    import { revalidateTag } from 'next/cache'      
           
    // Fetch con tag para invalidación selectiva y cacheo EXPLÍCITO      
    export async function getProducts() {      
      const res \= await fetch('https://api.example.com/products', {      
        next: { tags: \['products'\], revalidate: 3600 },      
      })      
      return res.json()      
    }      
           
    // Invalidación selectiva en Server Action      
    export async function createProductAction(data: ProductInput) {      
      await db.product.create({ data })      
      revalidateTag('products')      
    }      
         

 

 

## **4\. Magic UI & Shadcn/ui — Component Architecture**

 

Magic UI está construido sobre Shadcn/ui, Tailwind CSS y Motion.

 

### **4.1 Instalación y Estructura**

 

* Instalar componentes Shadcn/ui vía CLI: npx shadcn add \[component\].

* Componentes de Magic UI DEBEN vivir en 'use client' porque usan Motion internamente.

* Nunca modificar directamente los componentes en /components/ui/; extenderlos vía composición o props.

* Mantener los tokens de Tailwind en tailwind.config.ts sincronizados con el theme de Magic UI.

* Usar la utilidad cn() (de clsx \+ tailwind-merge) para clases condicionales en TODOS los componentes.

 

           
    // ✅ CORRECTO: Extender componente sin modificar el original      
    // components/ui/button-animated.tsx      
    'use client'      
           
    import { Button } from '@/components/ui/button'      
    import { motion } from 'motion/react'      
    import { cn } from '@/lib/utils'      
           
    interface AnimatedButtonProps extends React.ComponentProps\<typeof Button\> {      
      animate?: boolean      
    }      
           
    export function AnimatedButton({      
      animate \= true,      
      className,      
      ...props      
    }: AnimatedButtonProps) {      
      const Comp \= animate ? motion.create(Button) : Button      
           
      return (      
        \<Comp      
          whileHover={{ scale: 1.02 }}      
          whileTap={{ scale: 0.98 }}      
          className={cn('relative overflow-hidden', className)}      
          {...props}      
        /\>      
      )      
    }      
         

 

### **4.2 Tailwind Configuration**

 

* Configuración extendida de Shadcn como base en tailwind.config.ts.

* CSS variables para colors en :root y .dark en globals.css.

* Theme consistente con los tokens de Magic UI (radius, colors, spacing).

* Mobile-first, responsive design.

* Dark mode vía CSS variables o las features de dark mode de Tailwind.

* Ratios de contraste de color que cumplan WCAG AA mínimo.

* Valores de spacing consistentes para armonía visual.

 

### **4.3 Composición de Componentes**

 

* Patrones de composición para componentes modulares y reutilizables.

* Patrón Compound Components cuando un componente tiene múltiples partes relacionadas (Modal, Card, Tabs).

* Composición sobre herencia de props masiva.

 

           
    // ✅ CORRECTO: Patrón de composición      
    // components/card.tsx      
    import { cn } from '@/lib/utils'      
           
    function Card({ className, ...props }: React.HTMLAttributes\<HTMLDivElement\>) {      
      return (      
        \<div      
          className={cn(      
            'rounded-lg border bg-card text-card-foreground shadow-sm',      
            className      
          )}      
          {...props}      
        /\>      
      )      
    }      
           
    function CardHeader({ className, ...props }: React.HTMLAttributes\<HTMLDivElement\>) {      
      return \<div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} /\>      
    }      
           
    function CardTitle({ className, ...props }: React.HTMLAttributes\<HTMLHeadingElement\>) {      
      return \<h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} /\>      
    }      
           
    function CardContent({ className, ...props }: React.HTMLAttributes\<HTMLDivElement\>) {      
      return \<div className={cn('p-6 pt-0', className)} {...props} /\>      
    }      
           
    export { Card, CardHeader, CardTitle, CardContent }      
         

 

 

## **5\. Animaciones con Motion (ex-Framer Motion)**

 

La librería se renombró de framer-motion a motion. Importar siempre desde motion/react, no desde framer-motion (el paquete viejo sigue funcionando pero ya no recibe desarrollo activo).

 

* Usar layout prop con precaución — genera repaints costosos.

* Preferir transform y opacity para animaciones (GPU-accelerated).

* Respetar prefers-reduced-motion: envolver animaciones en useReducedMotion().

* Nunca animar width, height, top, left en elementos frecuentes (causan layout thrashing).

* Usar will-change: transform solo en elementos que realmente animan.

* Limitar el número de elementos animados simultáneamente; usar staggerChildren para secuenciar.

* Usar AnimatePresence para animar entrada/salida de elementos del DOM.

* ⚠️ **Nunca uses el índice del array como key** en listas animadas o dinámicas. Siempre un identificador único y estable.

 

           
    // ✅ CORRECTO: Animación performante y accesible      
    'use client'      
           
    import { motion, useReducedMotion } from 'motion/react'      
           
    export function FadeIn({ children, delay \= 0 }: { children: React.ReactNode; delay?: number }) {      
      const shouldReduceMotion \= useReducedMotion()      
           
      return (      
        \<motion.div      
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}      
          animate={{ opacity: 1, y: 0 }}      
          transition={{      
            duration: shouldReduceMotion ? 0 : 0.5,      
            delay,      
            ease: \[0.25, 0.1, 0.25, 1\],      
          }}      
        \>      
          {children}      
        \</motion.div\>      
      )      
    }      
         

 

           
    // ✅ CORRECTO: Lista con stagger y keys únicos      
    'use client'      
           
    import { motion } from 'motion/react'      
           
    const container \= {      
      hidden: { opacity: 0 },      
      show: { opacity: 1, transition: { staggerChildren: 0.1 } },      
    }      
           
    const item \= {      
      hidden: { opacity: 0, x: \-20 },      
      show: { opacity: 1, x: 0 },      
    }      
           
    export function AnimatedList({ items }: { items: Item\[\] }) {      
      return (      
        \<motion.ul variants={container} initial="hidden" animate="show"\>      
          {items.map((item) \=\> (      
            \<motion.li key={item.id} variants={item}\> {/\* NUNCA index como key \*/}      
              {item.name}      
            \</motion.li\>      
          ))}      
        \</motion.ul\>      
      )      
    }      
         

 

 

## **6\. Data Fetching & Caching Strategy**

 

### **6.1 Estrategia de Fetching**

 

* fetch() nativo en Server Components. Recordar: **no cachea por defecto** en Next 15+ (ver sección 3.5).

* React Query (TanStack Query) SOLO para datos que mutan frecuentemente o necesitan optimistic updates en Client Components.

* cache() de React para deduplicar requests en el mismo render cycle.

* Nunca hacer fetch en useEffect si se puede hacer en el Server Component padre.

* Para datos de usuario autenticado, usar cookies() o headers() para obtener el contexto de autenticación.

 

           
    // ✅ CORRECTO: Fetching en Server Component con deduplicación y cacheo explícito      
    import { cache } from 'react'      
           
    const getProducts \= cache(async () \=\> {      
      const res \= await fetch('https://api.example.com/products', {      
        next: { revalidate: 3600 }, // cacheo explícito, no es el default      
      })      
      if (\!res.ok) throw new Error('Failed to fetch products')      
      return res.json()      
    })      
           
    export default async function ProductsPage() {      
      const products \= await getProducts() // deduped si se llama múltiples veces      
      return \<ProductList products={products} /\>      
    }      
         

 

### **6.2 React Query (TanStack Query) — Cuándo y Cómo**

 

* ÚNICAMENTE en Client Components para: datos que mutan frecuentemente, polling, infinite scroll, u optimistic updates.

* QueryProvider en el layout raíz del cliente, no en el root layout del servidor.

* Query keys tipadas y consistentes para cada recurso.

 

           
    // ✅ CORRECTO: React Query en Client Component      
    'use client'      
           
    import { useQuery } from '@tanstack/react-query'      
           
    const PRODUCT\_QUERY\_KEY \= \['products'\] as const      
           
    export function useProducts() {      
      return useQuery({      
        queryKey: PRODUCT\_QUERY\_KEY,      
        queryFn: async () \=\> {      
          const res \= await fetch('/api/products')      
          if (\!res.ok) throw new Error('Network response was not ok')      
          return res.json()      
        },      
        staleTime: 1000 \* 60 \* 5, // 5 minutos      
      })      
    }      
         

 

 

## **7\. Gestión de Estado**

 

### **7.1 Jerarquía de Estado**

 

No todo estado necesita ser global. Jerarquía: **URL params \> Server Components \> Local state \> Context \> Zustand.**

 

* **URL Query Parameters:** estado compartido entre Server y Client (filtros, paginación, búsqueda).

* **Server Components:** datos que vienen del servidor. Pasar como props.

* **useState:** estado a nivel de componente (form inputs, toggles, modales locales).

* **useReducer:** estado local complejo con múltiples transiciones.

* **useContext:** estado compartido entre componentes cercanos (temas, autenticación ligera).

* **Zustand:** estado global client-side cuando Context no alcanza (carritos, modales globales, preferencias de usuario).

 

### **7.2 Zustand — Reglas de Uso**

 

* Solo dentro de Client Components ('use client').

* Nunca importar ni usar stores de Zustand en Server Components — provoca hydration mismatches o leaks de estado entre requests.

* Para estado compartido entre Server y Client, usar URL query params o props drilling, nunca Zustand.

* Stores pequeños y enfocados (feature-based), no un store monolítico.

* Sintaxis moderna create\<T\>() para tipado completo.

* Persistir en localStorage solo para preferencias de usuario, nunca para datos sensibles.

 

           
    // ✅ CORRECTO: Store tipado y enfocado      
    // stores/use-cart-store.ts      
    'use client'      
           
    import { create } from 'zustand'      
    import { persist } from 'zustand/middleware'      
           
    interface CartItem {      
      id: string      
      name: string      
      price: number      
      quantity: number      
    }      
           
    interface CartStore {      
      items: CartItem\[\]      
      addItem: (item: CartItem) \=\> void      
      removeItem: (id: string) \=\> void      
      clearCart: () \=\> void      
      total: () \=\> number      
    }      
           
    export const useCartStore \= create\<CartStore\>()(      
      persist(      
        (set, get) \=\> ({      
          items: \[\],      
          addItem: (item) \=\> set((state) \=\> ({ items: \[...state.items, item\] })),      
          removeItem: (id) \=\> set((state) \=\> ({ items: state.items.filter((i) \=\> i.id \!== id) })),      
          clearCart: () \=\> set({ items: \[\] }),      
          total: () \=\> get().items.reduce((sum, i) \=\> sum \+ i.price \* i.quantity, 0),      
        }),      
        { name: 'cart-storage' }      
      )      
    )      
         

 

### **7.3 URL como Estado (Server State Management)**

 

* URL query parameters para filtros, paginación, ordenamiento y búsqueda.

* Permite compartir URLs con estado, navegación con back/forward, y SSR con estado inicial.

 

           
    // ✅ CORRECTO: Sincronizar estado con URL      
    // hooks/use-search-params.ts      
    'use client'      
           
    import { useSearchParams, useRouter } from 'next/navigation'      
    import { useCallback } from 'react'      
           
    export function useUrlState() {      
      const router \= useRouter()      
      const searchParams \= useSearchParams()      
           
      const setParam \= useCallback((key: string, value: string) \=\> {      
        const params \= new URLSearchParams(searchParams)      
        if (value) {      
          params.set(key, value)      
        } else {      
          params.delete(key)      
        }      
        router.push(\`?${params.toString()}\`, { scroll: false })      
      }, \[router, searchParams\])      
           
      return { searchParams, setParam }      
    }      
         

 

 

## **8\. Formularios & Validación**

 

### **8.1 Stack de Formularios ⚠️ corregido en esta versión**

 

* React Hook Form \+ Zod para TODOS los formularios.

* **React 19: usar useActionState** para manejar el estado de Server Actions en forms. useFormState quedó obsoleto y no debe usarse en código nuevo.

* Validar en el cliente PRIMERO (Zod schema), luego en el Server Action.

* Retornar errores de validación como { fieldErrors: {} } para mapearlos a inputs.

* Deshabilitar el botón de submit durante la mutación (isPending).

* Feedback visual inmediato: estados de carga, errores de campo, mensajes de éxito.

 

           
    // ✅ CORRECTO: Formulario con React Hook Form \+ Zod \+ Server Action (React 19\)      
    'use client'      
           
    import { useForm } from 'react-hook-form'      
    import { zodResolver } from '@hookform/resolvers/zod'      
    import { z } from 'zod'      
    import { useActionState } from 'react'      
    import { createProductAction } from '@/app/actions'      
           
    const schema \= z.object({      
      name: z.string().min(1, 'El nombre es requerido').max(100),      
      price: z.coerce.number().positive('El precio debe ser positivo'),      
      category: z.string().min(1, 'Selecciona una categoría'),      
    })      
           
    type FormData \= z.infer\<typeof schema\>      
           
    export function ProductForm() {      
      const \[state, formAction, isPending\] \= useActionState(createProductAction, null)      
           
      const {      
        register,      
        formState: { errors },      
      } \= useForm\<FormData\>({ resolver: zodResolver(schema) })      
           
      return (      
        \<form action={formAction}\>      
          \<div\>      
            \<label htmlFor="name"\>Nombre\</label\>      
            \<input id="name" {...register('name')} /\>      
            {errors.name && \<span\>{errors.name.message}\</span\>}      
            {state?.fieldErrors?.name && \<span\>{state.fieldErrors.name\[0\]}\</span\>}      
          \</div\>      
           
          \<div\>      
            \<label htmlFor="price"\>Precio\</label\>      
            \<input id="price" type="number" {...register('price')} /\>      
            {errors.price && \<span\>{errors.price.message}\</span\>}      
          \</div\>      
           
          \<button type="submit" disabled={isPending}\>      
            {isPending ? 'Creando...' : 'Crear Producto'}      
          \</button\>      
           
          {state?.success && \<p\>Producto creado exitosamente\</p\>}      
          {state?.error && \!state.fieldErrors && \<p\>{state.error}\</p\>}      
        \</form\>      
      )      
    }      
         

 

### **8.2 Validación con Zod**

 

* Schemas en archivos separados (lib/schemas/ o schemas/) para reutilización.

* z.coerce para transformar tipos de FormData (strings) a números/booleans.

* Mensajes de error claros y en español para el usuario final.

* .refine() para validaciones cross-field complejas.

 

 

## **9\. Internacionalización (i18n)**

 

* next-i18next es INCOMPATIBLE con App Router Server Components. Usar next-intl como estándar de facto.

* Detección de locale apropiada (accept-language header, cookie, o URL prefix).

* Formato apropiado para números, fechas y monedas según el locale.

* Soporte RTL si el proyecto lo requiere.

* Diccionarios de traducción organizados por feature o página.

 

⚠️ **A verificar antes de implementar:** la integración estándar de next-intl usaba históricamente middleware.ts para el routing con locale prefix. Con el reemplazo de middleware.ts por proxy.ts en Next.js 16, confirmar en la documentación vigente de next-intl si ya soporta proxy.ts o si todavía requiere la convención anterior — no asumir sin chequear, es un punto de fricción típico entre versiones de framework y librerías de terceros.

 

 

## **10\. Seguridad**

 

### **10.1 Principios Generales**

 

* Sanitización de input para prevenir ataques XSS.

* DOMPurify para sanitizar contenido HTML renderizado dinámicamente.

* Métodos de autenticación apropiados (NextAuth.js, Clerk, Auth0).

* Nunca exponer secrets, API keys o credenciales en Client Components.

* Paquete server-only para funciones que acceden a secrets.

* Validar TODAS las entradas de usuario con Zod en Server Actions.

* Rate limiting en Server Actions y API routes.

* CSRF tokens para formularios críticos si no se usan Server Actions (que lo manejan automáticamente).

* Content Security Policy (CSP) headers en next.config.js.

* HTTPS en producción, HSTS configurado.

 

### **10.2 Autenticación y Autorización ⚠️ corregido en esta versión**

 

* **proxy.ts (ex-middleware.ts) solo para routing liviano** — redirects, rewrites, headers. **Nunca** para validación de sesión o permisos: corre en un contexto separado y no es el lugar autoritativo para decidir acceso.

* La validación de sesión/permisos va en **Server Components y Server Actions / Route Handlers**.

* Nunca confiar en el estado de autenticación del cliente para decisiones de seguridad.

 

           
    // ✅ CORRECTO: Protección autoritativa en Server Component      
    import { auth } from '@/lib/auth'      
    import { redirect } from 'next/navigation'      
           
    export default async function AdminPage() {      
      const session \= await auth()      
           
      if (\!session?.user || session.user.role \!== 'admin') {      
        redirect('/login')      
      }      
           
      return \<AdminDashboard user={session.user} /\>      
    }      
         

 

 

## **11\. SEO & Metadata**

 

* metadata export en cada page/layout.

* openGraph y twitter images con opengraph-image.tsx.

* robots.ts y sitemap.ts para configuración dinámica.

* Structured data (JSON-LD) para rich snippets.

* Canonical URLs para evitar contenido duplicado.

* Core Web Vitals (LCP, INP, CLS) como parte de la estrategia SEO, no solo de performance.

 

           
    // ✅ CORRECTO: Metadata completa      
    // app/products/\[id\]/page.tsx      
    import { Metadata } from 'next'      
           
    export async function generateMetadata({ params }: Props): Promise\<Metadata\> {      
      const product \= await getProduct(params.id)      
           
      return {      
        title: product.name,      
        description: product.description,      
        openGraph: {      
          title: product.name,      
          description: product.description,      
          images: \[{ url: product.image }\],      
        },      
        twitter: { card: 'summary\_large\_image' },      
        alternates: { canonical: \`/products/${product.id}\` },      
      }      
    }      
           
    // app/opengraph-image.tsx      
    import { ImageResponse } from 'next/og'      
           
    export default async function Image() {      
      return new ImageResponse(      
        \<div style={{ /\* OG image styling \*/ }}\>      
          \<h1\>Mi App\</h1\>      
        \</div\>,      
        { width: 1200, height: 630 }      
      )      
    }      
         

 

 

## **12\. Testing**

 

### **12.1 Unit Testing**

 

* Tests unitarios exhaustivos para funciones individuales y componentes.

* Jest \+ React Testing Library (RTL).

* Patrón Arrange-Act-Assert.

* Mockear dependencias externas y llamadas a API para aislar tests unitarios.

* screen de RTL para queries limpios y legibles.

* Testear comportamiento del usuario, NO implementación interna.

 

           
    // ✅ CORRECTO: Test con RTL      
    import { render, screen, fireEvent } from '@testing-library/react'      
    import { Counter } from './counter'      
           
    describe('Counter', () \=\> {      
      it('increments count when button is clicked', () \=\> {      
        // Arrange      
        render(\<Counter initial={0} /\>)      
        // Act      
        fireEvent.click(screen.getByRole('button', { name: /incrementar/i }))      
        // Assert      
        expect(screen.getByText('1')).toBeInTheDocument()      
      })      
    })      
         

 

### **12.2 Integration Testing**

 

* Foco en workflows de usuario para funcionalidad end-to-end.

* Configurar y limpiar entornos de test apropiadamente para mantener independencia.

* Snapshot testing selectivamente para detectar cambios de UI no intencionales.

* Playwright o Cypress para tests E2E de flujos críticos.

 

 

## **13\. Accesibilidad (a11y)**

 

* HTML semántico (header, nav, main, article, footer).

* Atributos ARIA precisos donde sea necesario — no abusar de ARIA.

* Navegación completa por teclado para todos los elementos interactivos.

* Gestión efectiva del orden de foco y visibilidad.

* Ratios de contraste WCAG AA (4.5:1 texto normal, 3:1 texto grande).

* Jerarquía de headings lógica (h1 → h2 → h3, sin saltos).

* Todos los elementos interactivos accesibles (botones, links, formularios).

* Feedback de error claro y accesible.

* Labels asociados correctamente a inputs (htmlFor \+ id).

* Iconos decorativos con aria-hidden="true".

* Respetar prefers-reduced-motion.

 

           
    // ✅ CORRECTO: Componente accesible      
    export function AccessibleButton({ children, onClick, isLoading, ...props }: ButtonProps) {      
      return (      
        \<button      
          onClick={onClick}      
          disabled={isLoading}      
          aria-busy={isLoading}      
          aria-label={isLoading ? 'Cargando...' : undefined}      
          {...props}      
        \>      
          {isLoading && (      
            \<span aria-hidden="true"\>      
              \<Spinner /\>      
            \</span\>      
          )}      
          {children}      
        \</button\>      
      )      
    }      
         

 

 

## **14\. Estilo de Código & Naming Conventions**

 

### **14.1 Indentación y Formato**

 

* Tabs para indentación.

* Comillas simples para strings (excepto para evitar escaping).

* Omitir punto y coma (salvo que sea requerido para desambiguación).

* Eliminar variables no utilizadas.

* Espacio después de keywords (if, for, while, return).

* Espacio antes de paréntesis en declaraciones de función.

* SIEMPRE strict equality (\===), nunca loose equality (\==).

* Espaciar operadores infijos y después de comas.

* else en la misma línea que las llaves de cierre.

* Llaves obligatorias para if statements multi-línea.

* Manejar SIEMPRE parámetros de error en callbacks.

* Longitud de línea: 80 caracteres, excepto para clases de Tailwind CSS.

* Trailing commas en literales multilínea de objetos/arrays.

 

### **14.2 Naming Conventions**

 

* **PascalCase:** Components, Type definitions, Interfaces (UserProfile, ProductCard).

* **kebab-case:** Directory names (components/auth-wizard), File names (user-profile.tsx).

* **camelCase:** Variables, Functions, Methods, Hooks, Properties, Props (handleClick, isLoading).

* **UPPERCASE:** Environment variables, Constants, Global configurations (API\_BASE\_URL).

* Prefijar event handlers con handle: handleClick, handleSubmit.

* Prefijar booleanos con verbos: isLoading, hasError, canSubmit.

* Prefijar custom hooks con use: useAuth, useForm.

* Palabras completas sobre abreviaciones, excepto: err, req, res, props, ref.

 

### **14.3 TypeScript Implementation**

 

* strict mode habilitado en tsconfig.json.

* Interfaces claras para props de componentes, estado, y estructura de estado.

* Type guards para manejar valores potencialmente undefined o null de forma segura.

* Generics en funciones, actions, y slices donde se necesite flexibilidad de tipos.

* Utility types de TypeScript (Partial, Pick, Omit) para código limpio y reutilizable.

* Preferir interface sobre type para estructuras de objetos, especialmente al extender.

* Mapped types para variaciones de tipos existentes dinámicamente.

* Definir SIEMPRE el return type de Server Actions explícitamente.

* Usar satisfies en lugar de as para type narrowing seguro.

* Evitar any. Usar unknown \+ type guards.

 

 

## **15\. Manejo de Errores & Loading States**

 

### **15.1 Error Boundaries**

 

* Error boundaries para capturar errores en árboles de componentes React gracefulmente.

* error.tsx a nivel de rutas relevantes en el App Router.

* error.tsx captura errores en Server Components; Error Boundary de React para Client Components.

* Loggear errores capturados a un servicio externo (ej. Sentry) para tracking.

* UIs de fallback user-friendly que mantengan al usuario informado sin romper la app.

* Acciones de recuperación cuando sea posible (retry button, navegación alternativa).

 

           
    // ✅ CORRECTO: Error boundary de ruta      
    // app/products/error.tsx      
    'use client'      
           
    import { useEffect } from 'react'      
           
    export default function ProductsError({ error, reset }: { error: Error & { digest?: string }; reset: () \=\> void }) {      
      useEffect(() \=\> {      
        console.error('Products page error:', error)      
      }, \[error\])      
           
      return (      
        \<div role="alert"\>      
          \<h2\>Algo salió mal\</h2\>      
          \<p\>No pudimos cargar los productos. Por favor intenta de nuevo.\</p\>      
          \<button onClick={reset}\>Intentar de nuevo\</button\>      
        \</div\>      
      )      
    }      
         

 

### **15.2 Loading States**

 

* loading.tsx a nivel de rutas relevantes.

* Diseñar loading.tsx como Skeletons, NO spinners genéricos.

* Suspense boundaries para estados de carga granulares.

* Mantener el layout estable durante la carga para evitar layout shift (CLS).

 

           
    // ✅ CORRECTO: Skeleton loading      
    // app/products/loading.tsx      
    export default function ProductsLoading() {      
      return (      
        \<div className="space-y-4"\>      
          \<div className="h-8 w-48 bg-gray-200 animate-pulse rounded" /\>      
          \<div className="grid grid-cols-3 gap-4"\>      
            {Array.from({ length: 6 }).map((\_, i) \=\> (      
              \<div key={i} className="space-y-2"\>      
                \<div className="h-40 bg-gray-200 animate-pulse rounded" /\>      
                \<div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" /\>      
                \<div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded" /\>      
              \</div\>      
            ))}      
          \</div\>      
        \</div\>      
      )      
    }      
         

 

 

## **16\. Rendimiento & Optimización**

 

* React.memo() estratégicamente para componentes con props estables pero renders frecuentes.

* useCallback para memoizar funciones callback pasadas a componentes hijos.

* useMemo para computaciones costosas.

* Evitar definiciones inline de funciones en JSX (crean nuevas referencias en cada render).

* Code splitting con dynamic imports para rutas y componentes pesados.

* Proper key props en listas (nunca index como key).

* next/dynamic para lazy loading de componentes client-side pesados.

* Optimizar imágenes con next/image (ver sección 3.4).

* Minimizar JS bundle: analizar con @next/bundle-analyzer.

* Server Components por defecto para reducir el bundle del cliente.

* Streaming con Suspense para mejorar TTFB y LCP.

* Monitorear Core Web Vitals regularmente (Vercel Analytics o Lighthouse CI).

 

           
    // ✅ CORRECTO: Dynamic import para code splitting      
    import dynamic from 'next/dynamic'      
           
    const HeavyChart \= dynamic(      
      () \=\> import('@/components/heavy-chart').then((mod) \=\> mod.HeavyChart),      
      { ssr: false, loading: () \=\> \<ChartSkeleton /\> }      
    )      
           
    export function Dashboard() {      
      return (      
        \<div\>      
          \<h1\>Dashboard\</h1\>      
          \<Suspense fallback={\<ChartSkeleton /\>}\>      
            \<HeavyChart data={data} /\>      
          \</Suspense\>      
        \</div\>      
      )      
    }      
         

 

 

## **17\. Operaciones & Mantenimiento**

 

Todo el código debe ser operacionalmente sólido — considerar hosting, gestión, monitoreo y mantenimiento en cada paso, no como afterthought.

 

* Logging estructurado (pino, winston) para Server Components y Server Actions.

* Health checks y readiness probes si se usa Kubernetes u orquestadores.

* Monitoreo de errores en tiempo real (Sentry, LogRocket o similar).

* Alertas para métricas críticas (error	 rate, latency, throughput).

* Documentar APIs internas y convenciones del proyecto con JSDoc.

* Documentar TODAS las funciones públicas, clases, métodos e interfaces.

* Oraciones completas con puntuación apropiada en documentación.

* Markdown apropiado para READMEs y documentación del proyecto.

* CI/CD pipelines para linting, testing y type checking antes de deploy.

* Feature flags para despliegues graduales y rollback rápido.

* Dependencias actualizadas; revisar vulnerabilidades con npm audit o Snyk.

 

 

## **18\. Checklist Pre-Deploy**

 

* TypeScript compila sin errores (strict mode).

* Todos los tests pasan (unit \+ integration).

* Linter (ESLint) pasa sin warnings críticos.

* No hay console.log en producción (usar logger estructurado).

* Imágenes optimizadas con next/image y formatos modernos.

* No hay secrets expuestos en el bundle del cliente.

* Server Actions validan todas las entradas.

* Errores manejados con error.tsx y loading.tsx.

* Metadata SEO configurada en páginas públicas.

* Accesibilidad verificada (navegación por teclado, contraste, ARIA).

* Responsive design verificado en móvil, tablet y desktop.

* Core Web Vitals dentro de umbrales aceptables (LCP \< 2.5s, INP \< 200ms, CLS \< 0.1).

* git status limpio y pusheado a la rama correcta antes de dar por terminado el trabajo (ver incidente de deploy de Premat, Julio 2026 — commits locales sin pushear causaron horas de debugging de un problema que no existía).

\# REGLAS PERMANENTES PARA COMPONENTES REUTILIZABLES

A partir de este momento, todo componente nuevo que tenga potencial razonable de reutilización en otros proyectos debe diseñarse y desarrollarse desde el inicio como un componente autónomo y portable.

\#\# 1\. Principio de aislamiento

Un componente reutilizable debe poder copiarse a otro proyecto Next.js \+ React \+ Tailwind y funcionar sin necesidad de modificar su lógica interna para adaptarlo a otro cliente.

El componente debe contener únicamente:

\- estructura visual

\- comportamiento

\- lógica propia del componente

\- estilos propios

\- definición de props

\- tipos/interfaces necesarios

No debe contener contenido específico del cliente cuando ese contenido pueda razonablemente recibirse mediante props.

\#\# 2\. Separación entre componente y contenido

Diferenciar siempre:

COMPONENTE:

"cómo funciona y cómo se ve"

PROPS:

"qué contenido recibe"

PROYECTO:

"dónde se utiliza y qué contenido concreto se le pasa"

Todo texto, imagen, video, enlace, etiqueta, CTA, listado o configuración que pueda variar entre proyectos debe evaluarse para convertirse en prop.

No crear props innecesariamente para valores puramente internos de implementación.

\#\# 3\. API de props

Cada componente reutilizable debe tener una interfaz TypeScript clara y autocontenida:

\`ComponentNameProps\`

La interfaz debe:

\- describir todos los valores configurables relevantes;

\- indicar cuáles son obligatorios y cuáles opcionales;

\- evitar tipos excesivamente genéricos cuando una estructura más clara sea posible;

\- permitir que el componente sea utilizado sin modificar su código interno.

\#\# 4\. Dependencias

Antes de dar un componente por terminado, identificar explícitamente:

\- dependencias NPM;

\- dependencias de Next.js;

\- dependencias de Tailwind;

\- componentes internos requeridos;

\- assets externos;

\- fuentes;

\- providers o contextos;

\- variables CSS globales;

\- configuración especial necesaria.

Evitar dependencias innecesarias.

Si un componente depende de otro componente interno, documentarlo claramente.

\#\# 5\. Assets

No guardar dentro del componente rutas específicas del cliente cuando puedan recibirse por props.

Ejemplo incorrecto:

\`/process-1.jpg\`

Ejemplo correcto:

\`image.src\`

El componente debe poder utilizar imágenes, videos o iconos diferentes sin modificar su código.

\#\# 6\. Estilos

Los estilos deben ser reutilizables y no depender de clases o variables CSS específicas de un cliente.

No utilizar Tailwind dinámico construido mediante interpolaciones cuando pueda evitarse.

Preferir:

\- variantes explícitas;

\- props de configuración;

\- clases estáticas;

\- objetos de configuración;

\- CSS variables cuando sea apropiado para valores realmente configurables.

No convertir cada detalle visual en un prop innecesariamente.

\#\# 7\. Portabilidad

Al terminar un componente, verificar que conceptualmente pueda copiarse a otro proyecto.

Documentar:

\- archivo principal que debe copiarse;

\- dependencias necesarias;

\- archivos auxiliares necesarios;

\- otros componentes requeridos;

\- configuración necesaria.

\#\# 8\. Archivo de ejemplo obligatorio

Todo componente reutilizable terminado debe incluir un archivo:

\`usage-example.tsx\`

Este archivo debe mostrar cómo utilizar el componente desde una página externa.

Debe incluir:

\- import;

\- uso completo del componente;

\- todos los props importantes;

\- contenido genérico;

\- comentarios \`// CAMBIAR\` donde corresponda;

\- rutas de ejemplo para imágenes/videos.

El ejemplo debe poder utilizarse como plantilla de copy/paste.

\#\# 9\. Documentación

Todo componente reutilizable terminado debe incluir un README breve o documentación equivalente que indique:

\- qué hace;

\- qué props recibe;

\- dependencias;

\- archivos necesarios;

\- ejemplo de uso;

\- limitaciones o requisitos especiales.

\#\# 10\. Storybook

Cuando el proyecto utilice Storybook, cada componente reutilizable debe tener una Story.

La Story sirve para:

\- visualizar el componente de forma aislada;

\- probar variantes;

\- documentar su API;

\- verificar responsive;

\- utilizar contenido genérico.

Storybook no debe convertirse en una dependencia obligatoria del componente para funcionar en producción.

\#\# 11\. Validación antes de finalizar

Antes de marcar un componente como terminado:

1\. Verificar visualmente desktop.

2\. Verificar visualmente mobile.

3\. Verificar que todos los props funcionan.

4\. Verificar que no quedan textos, imágenes, links o datos específicos del cliente hardcodeados sin justificación.

5\. Verificar dependencias.

6\. Verificar el \`usage-example.tsx\`.

7\. Verificar Storybook si existe.

8\. Explicar exactamente qué archivos deben copiarse para reutilizarlo.

\#\# 12\. No sobre-abstraer

No convertir automáticamente absolutamente todo en props.

Un valor debe convertirse en prop cuando tenga una razón real para variar entre proyectos, páginas, marcas o usos.

El objetivo es obtener componentes reutilizables, no componentes excesivamente complejos cuya API sea difícil de entender.

\#\# 13\. Regla de compatibilidad visual

Convertir un componente en reutilizable NO debe modificar su apariencia ni comportamiento en el proyecto actual.

Primero se preserva exactamente el resultado actual.

Después se desacopla el contenido mediante props.

\#\# 14\. Accesibilidad básica

Todo componente interactivo debe ser operable mediante teclado y utilizar los atributos semánticos y ARIA correspondientes a su función.

Cuando corresponda, implementar correctamente:

\- navegación mediante teclado;

\- foco visible;

\- labels accesibles;

\- estados ARIA;

\- roles semánticos apropiados para tabs, carruseles, modales, menús, etc.

No agregar ARIA innecesariamente cuando la semántica HTML nativa ya resuelva el caso.

\#\# 15\. Convención de carpetas

Mantener una separación clara entre componentes genéricos de interfaz y secciones reutilizables.

\- \`/components/ui\` → componentes pequeños y genéricos reutilizables en múltiples contextos (Button, Modal, Tabs, Carousel, etc.).

\- \`/components/sections\` → secciones o bloques visuales reutilizables de una página (Hero, MediaGridSection, LogoCarousel, ServicesSection, etc.).

No colocar componentes específicos de una única página dentro de estas carpetas. Los componentes exclusivamente específicos de una página deben permanecer junto a esa página o en una ubicación claramente identificada como específica del proyecto.

\#\# 16\. Minimizar acoplamiento

Un componente reutilizable debe minimizar sus dependencias internas.

Siempre que sea razonable, debe poder copiarse junto con una cantidad pequeña y claramente identificada de archivos auxiliares.

Si necesita otro componente interno, documentar explícitamente esa dependencia.

Evitar dependencias innecesarias de componentes específicos del cliente, layouts globales, providers, contextos o configuraciones particulares del proyecto.

