import MediaGridSection from './media-grid-section';

/**
 * Ejemplo de uso para MediaGridSection.
 * Copiá y pegá este archivo o este bloque de código en tu proyecto Next.js
 * para tener una referencia rápida de todas las props disponibles.
 */
export default function MediaGridSectionExample() {
  return (
    <MediaGridSection
      // CAMBIAR: Título principal de la sección
      title="Espacio de Innovación y Tecnología"
      
      // CAMBIAR: (Opcional) Descripción o bajada del título
      description="Descubrí nuestras instalaciones diseñadas para el trabajo colaborativo, con equipamiento de última generación y áreas de descanso."
      
      // CAMBIAR: (Opcional) Botón principal sólido (outline border)
      primaryCta={{
        label: "Sumate al equipo",
        href: "/careers" // CAMBIAR: URL de destino
      }}
      
      // CAMBIAR: (Opcional) Enlace secundario con flecha interactiva
      secondaryCta={{
        label: "Ver tour virtual",
        href: "/tour" // CAMBIAR: URL de destino
      }}
      
      // CAMBIAR: Configuración de la grilla asimétrica (requiere exactamente 3 imágenes)
      // La imagen 3 (bottom-left) se oculta automáticamente en dispositivos móviles.
      images={[
        {
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", // CAMBIAR: Ruta imagen top-left
          alt: "Reunión de equipo en sala de conferencias"
        },
        {
          src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800", // CAMBIAR: Ruta imagen top-right
          alt: "Espacio de trabajo abierto y luminoso"
        },
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", // CAMBIAR: Ruta imagen bottom-left (solo desktop)
          alt: "Zona de descanso y recreación"
        }
      ]}
      
      // CAMBIAR: Configuración del video. 
      // Soporta lazy-loading automático y pausa fuera del viewport.
      video={{
        mp4Src: "/assets/demo-video.mp4", // CAMBIAR: Ruta al archivo MP4 local o CDN
        webmSrc: "/assets/demo-video.webm", // CAMBIAR: (Opcional) Ruta al formato WebM para optimización
        poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" // CAMBIAR: (Opcional) Imagen de carga inicial
      }}
    />
  );
}
