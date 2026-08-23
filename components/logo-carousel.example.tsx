import LogoCarousel from './logo-carousel';

/**
 * Ejemplo de uso para LogoCarousel.
 * Copiá y pegá este archivo o bloque de código en tu proyecto Next.js
 * para tener una referencia rápida.
 */
export default function LogoCarouselExample() {
  return (
    <LogoCarousel
      // CAMBIAR: (Opcional) Título superior. Si no se pasa, usa el de por defecto.
      title="Empresas asociadas a nuestro proyecto"
      
      // CAMBIAR: (Opcional) Ajusta la velocidad de la animación.
      duration="40s"
      
      // CAMBIAR: Lista de logos. Asegurate de que los paths sean correctos en tu carpeta /public.
      logos={[
        { id: '1', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150', alt: 'Marca 1' },
        { id: '2', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=150', alt: 'Marca 2' },
        { id: '3', src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=150', alt: 'Marca 3' },
        { id: '4', src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=150', alt: 'Marca 4' },
        { id: '5', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150', alt: 'Marca 5' },
        { id: '6', src: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=150', alt: 'Marca 6' },
      ]}
    />
  );
}
