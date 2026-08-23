# MediaGridSection

Es una sección de diseño avanzado que muestra una columna de texto introductorio (35%) a la izquierda y una atractiva **grilla asimétrica multimedia** (65%) a la derecha. La grilla se compone de tres imágenes y un reproductor de video que soporta autoplay optimizado y controles custom.

Ideal para presentar instalaciones, procesos industriales, espacios de trabajo o cualquier contenido donde lo visual y el formato video tengan protagonismo.

## Props que recibe

La interfaz de configuración (`MediaGridSectionProps`) expone las siguientes opciones:

* `title` (string): Título principal de la sección (H2 grande).
* `description` (string, opcional): Párrafo descriptivo debajo del título.
* `primaryCta` (objeto, opcional): Botón outline. Recibe `label` y `href`.
* `secondaryCta` (objeto, opcional): Link de texto con ícono de flecha al lado. Recibe `label` y `href`.
* `images` (array fijo de 3 objetos): Requiere exactamente tres objetos `{ src, alt }`. 
  * Las primeras dos se renderizan en la fila superior (siempre visibles).
  * La tercera se renderiza abajo a la izquierda (visible solo en desktop).
* `video` (objeto): Opciones multimedia.
  * `mp4Src` (string): Ruta obligatoria al formato de video universal.
  * `webmSrc` (string, opcional): Ruta al video optimizado.
  * `poster` (string, opcional): Thumbnail o portada antes de que inicie el video.

## Dependencias Necesarias

Si querés usar este componente en un proyecto nuevo, asegurate de tener:

1. **Next.js** (utiliza `<Image />` para optimización).
2. **React** v18+ (utiliza directiva `'use client'`, `useRef`, `useState`, `useEffect`).
3. **Tailwind CSS** configurado en el proyecto.
4. **@phosphor-icons/react** (para los íconos del reproductor de video). Instalalo con `npm install @phosphor-icons/react`.

## Comportamiento del Video (Performance)

El video tiene un sistema de **Lazy Loading** gestionado por un `IntersectionObserver`:
* **No carga** datos de red hasta que la sección sea un 20% visible en pantalla.
* Una vez en pantalla, se inyectan los sources y hace **Autoplay** silenciado (muted).
* Se pausa automáticamente si el usuario sigue scrolleando (sale de foco), ahorrando GPU/CPU.
* Incluye un botón flotante superpuesto para pausar/reproducir manualmente.

## Cómo reutilizarlo en otro proyecto

1. Copiá el archivo `media-grid-section.tsx` a la carpeta `components` de tu nuevo proyecto.
2. Asegurate de instalar las dependencias (Phosphor Icons).
3. Importá y usá el componente pasando tus propios datos (podés basarte en el archivo `media-grid-section.example.tsx` que te sirve de plantilla base).
4. El componente asume que un padre le brindará color de fondo (por defecto es transparente, por lo que hereda el del layout global). Se adapta 100% al ancho del contenedor disponible (tiene un max-width de 1600px).
