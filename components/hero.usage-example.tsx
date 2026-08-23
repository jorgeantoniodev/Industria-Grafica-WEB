import Hero from './hero';

/**
 * Ejemplo de uso del componente Hero para un producto de software (SaaS).
 * Demuestra la flexibilidad del componente inyectando un headline estructurado
 * y usando una imagen estática en lugar de un video.
 */
export default function HeroUsageExample() {
	return (
		<Hero
			// headline soporta ReactNode para permitir <br> responsivos y <span> con gradientes
			headline={
				<>
					Automatizá tus finanzas <br className="hidden lg:block" />
					empresariales{' '}
					<span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
						en minutos.
					</span>
				</>
			}
			subheadline="Software de gestión contable B2B"
			description="Conciliación bancaria, facturación electrónica e informes en tiempo real para empresas en crecimiento."
			ctaText="Comenzar prueba gratis"
			ctaLink="/registro"
			
			// Soporta tanto 'video' como 'image'
			media={{
				type: 'image',
				src: '/images/dashboard-mockup.png', // CAMBIAR: ruta a tu imagen
				alt: 'Captura de pantalla del dashboard de finanzas'
			}}
			
			// El theme controla el fondo general y el color del botón, manteniendo la geometría interna intacta
			theme={{
				backgroundGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-100', // CAMBIAR: clases Tailwind
				ctaBg: 'bg-emerald-600',
				ctaHoverBg: 'hover:bg-emerald-700'
			}}
		/>
	);
}
