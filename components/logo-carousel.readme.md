# Logo Carousel Component

Componente reutilizable que muestra una marquesina infinita con logotipos de clientes, patrocinadores o marcas asociadas.

## 📦 Dependencias necesarias

Para que este componente funcione en otro proyecto, necesitás:

1. **Librería de UI interna:** El componente depende del archivo `components/ui/marquee.tsx` (que pertenece al kit de Magic UI / Shadcn). Asegurate de copiar esa carpeta también.
2. **Next.js Image:** Utiliza `next/image` nativo, por lo que requiere estar en un entorno Next.js.
3. **Tailwind CSS:** Depende de las utilidades nativas de Tailwind para el espaciado, grid y los fades laterales.

## ⚠️ Dependencia Visual Importante (Fade)

El componente es visualmente autónomo (define su propio `bg-white`). Sin embargo, los degradados laterales que ocultan los logos a medida que salen de la pantalla están **hardcodeados a blanco** usando las clases `from-white`:

```tsx
<div className="... bg-gradient-to-r from-white to-transparent" />
```

Si decidís cambiar el color de fondo del componente para que se adapte a un tema oscuro u otro color corporativo, **recordá también actualizar las clases `from-[color]`** de las líneas inferiores del componente para que el difuminado no se vea mal.

## 🛠 Props disponibles

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `logos` | `ClientLogo[]` | **Sí** | Arreglo de objetos con `id`, `src` y `alt` para cada logo. |
| `title` | `string` | No | Texto descriptivo encima del carrusel. |
| `duration` | `string` | No | Duración de una vuelta completa de animación (ej. `"30s"`, `"40s"`). |

## 🚀 Cómo reutilizarlo

1. Copiá el archivo `logo-carousel.tsx` a tu carpeta `components/`.
2. Asegurate de tener `components/ui/marquee.tsx`.
3. Revisá el archivo `logo-carousel.example.tsx` para ver un ejemplo de implementación rápida y configuración de datos.
