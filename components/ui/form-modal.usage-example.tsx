'use client';

import { useState } from 'react';
import FormModal, { FormField } from './form-modal';
import { UploadCloud } from 'lucide-react'; // Para el demo genérico

/**
 * Demo 1: Recreación exacta del modal original de Industria Gráfica.
 * Utiliza los mismos campos y el color rojo de acento.
 */
const industriaGraficaFields: FormField[] = [
	{ name: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Nombre y Apellido' },
	{ name: 'email', label: 'E-Mail', type: 'email', placeholder: 'Correo electrónico' },
	{ name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' },
	{ name: 'ciudad', label: 'Ciudad', type: 'text', placeholder: 'Ciudad' },
	{ name: 'archivo', label: 'Muestra JPG (que no supere 1MB)', type: 'file', accept: 'image/jpeg,image/jpg' },
	{ name: 'detalle', label: 'Detalle de Pedido', type: 'textarea', placeholder: 'Detalle el trabajo a realizar, cantidad, terminación, tiempos, etc..' }
];

export function IndustriaGraficaExample() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="p-8">
			<button
				onClick={() => setIsOpen(true)}
				className="bg-red-600 text-white px-6 py-2 rounded font-bold"
			>
				Abrir Presupuesto Original
			</button>

			<FormModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				titlePrefix="Solicitar"
				titleHighlight="Presupuesto"
				description={
					<>
						Para obtener presupuesto de forma fácil y rápida, completá el formulario<br className="hidden sm:block" />
						detallando bien el trabajo a realizar y te contestaremos a la brevedad.
					</>
				}
				fields={industriaGraficaFields}
				accentColor="red"
				submitText="Enviar"
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.currentTarget);
					alert(`Datos listos para enviar:\nNombre: ${formData.get('nombre')}`);
					setIsOpen(false);
				}}
			/>
		</div>
	);
}

/**
 * Demo 2: Modal genérico para una consulta de software B2B.
 * Utiliza campos diferentes, ícono de archivo custom y acento "emerald".
 */
const saasFields: FormField[] = [
	{ name: 'empresa', label: 'Nombre de la empresa', type: 'text', placeholder: 'Ej. Acme Corp' },
	{ name: 'rol', label: 'Cargo / Rol', type: 'text', placeholder: 'Ej. CTO, Product Manager' },
	{ name: 'email', label: 'Email laboral', type: 'email', placeholder: 'nombre@empresa.com', fullWidth: true },
	{ name: 'documento', label: 'Adjuntar RFP o especificaciones (Opcional)', type: 'file', accept: '.pdf,.doc,.docx' },
	{ name: 'necesidad', label: '¿Qué problema buscan resolver?', type: 'textarea', placeholder: 'Describí brevemente tu desafío principal...', rows: 4 }
];

export function SaasGenericExample() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="p-8">
			<button
				onClick={() => setIsOpen(true)}
				className="bg-emerald-600 text-white px-6 py-2 rounded font-bold"
			>
				Abrir Consulta SaaS
			</button>

			<FormModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				titlePrefix="Agendar una"
				titleHighlight="Consulta"
				description="Dejanos tus datos y un especialista técnico te contactará en menos de 2 horas para entender tu caso."
				fields={saasFields}
				accentColor="emerald"
				fileIcon={UploadCloud} // Cambio del ícono por defecto (Paperclip)
				submitText="Agendar Llamada"
				onSubmit={(e) => {
					e.preventDefault();
					setIsOpen(false);
				}}
			/>
		</div>
	);
}
