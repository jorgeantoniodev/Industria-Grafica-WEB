import WhatsAppButton from './whatsapp-button';

/**
 * Ejemplo: Uso original en Industria Gráfica
 * Muestra el botón flotando en la esquina inferior derecha con el mensaje prellenado.
 */
export function IndustriaGraficaWhatsAppExample() {
	return (
		<div className="relative min-h-[300px] w-full bg-slate-50 border p-8">
			<h2 className="text-xl font-bold">Botón WhatsApp (Industria Gráfica)</h2>
			<p className="text-gray-600 mt-2">
				Fijate en la esquina inferior derecha. Al estar `fixed`, flota sobre toda la pantalla.
			</p>
			
			{/* CAMBIAR el número y mensaje para cada cliente */}
			<WhatsAppButton
				phoneNumber="5493514597594"
				message="Hola Industria Gráfica, me gustaría hacer una consulta"
			/>
		</div>
	);
}

/**
 * Ejemplo: Botón genérico posicionado a la izquierda
 */
export function GenericLeftWhatsAppExample() {
	return (
		<div className="relative min-h-[300px] w-full bg-slate-50 border p-8 mt-10">
			<h2 className="text-xl font-bold">Botón WhatsApp (Izquierda)</h2>
			
			<WhatsAppButton
				phoneNumber="1234567890"
				message="Hola, necesito ayuda técnica con el SaaS."
				position="bottom-left"
				ariaLabel="Soporte técnico"
			/>
		</div>
	);
}
