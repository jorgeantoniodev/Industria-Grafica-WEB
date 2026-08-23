/**
 * ProcessSection — backwards-compatibility wrapper.
 *
 * This component was refactored into the generic `MediaGridSection`.
 * It now pre-fills all props with the real Industria Gráfica content
 * so that any existing import continues to work unchanged.
 *
 * ⚠️  New code should import `MediaGridSection` directly and pass props.
 */
import MediaGridSection from '@/components/media-grid-section';

export default function ProcessSection() {
  return (
    <MediaGridSection
      title="Oficio en movimiento"
      description="Offset, troquelado y encuadernación, en la planta de Barrio San Vicente."
      primaryCta={{ label: 'Cotizar producción', href: '#cotizar' }}
      secondaryCta={{ label: 'Conocer la planta en detalle', href: '/la-planta' }}
      images={[
        { src: '/process-1.jpg', alt: 'Máquina Offset Industrial' },
        { src: '/process-2.jpg', alt: 'Rodillos Offset en detalle' },
        { src: '/process-3.jpg', alt: 'Apilado de packaging' },
      ]}
      video={{
        mp4Src:  '/process.mp4',
        webmSrc: '/process.webm',
        poster:  '/process-poster.jpg',
      }}
    />
  );
}
