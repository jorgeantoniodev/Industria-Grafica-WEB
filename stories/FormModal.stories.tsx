import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UploadCloud } from 'lucide-react';
import FormModal, { FormField } from '../components/ui/form-modal';

const meta = {
	title: 'UI/FormModal',
	component: FormModal,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FormModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Decorador para poder abrir/cerrar el modal en Storybook ───────────────

const ModalDecorator = (Story: any, context: any) => {
	const [isOpen, setIsOpen] = useState(false);

	// Inyectamos isOpen y onClose controlados a los args de la Story original
	const args = {
		...context.args,
		isOpen,
		onClose: () => setIsOpen(false),
		onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			alert('Formulario enviado (comportamiento mockeado para Storybook)');
			setIsOpen(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-[400px] w-full p-8 bg-slate-50">
			<button
				onClick={() => setIsOpen(true)}
				className="px-6 py-3 bg-slate-900 text-white font-bold rounded shadow hover:bg-slate-800 transition-colors"
			>
				Abrir Modal
			</button>
			<Story args={args} />
		</div>
	);
};

// ─── Stories ─────────────────────────────────────────────────────────────────

const industriaGraficaFields: FormField[] = [
	{ name: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Nombre y Apellido' },
	{ name: 'email', label: 'E-Mail', type: 'email', placeholder: 'Correo electrónico' },
	{ name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' },
	{ name: 'ciudad', label: 'Ciudad', type: 'text', placeholder: 'Ciudad' },
	{ name: 'archivo', label: 'Muestra JPG (que no supere 1MB)', type: 'file', accept: 'image/jpeg,image/jpg' },
	{ name: 'detalle', label: 'Detalle de Pedido', type: 'textarea', placeholder: 'Detalle el trabajo a realizar, cantidad, terminación, tiempos, etc..' }
];

/**
 * Representa exactamente el estado y campos originales del proyecto Industria Gráfica
 * (previamente QuoteModal). El acento es 'red'.
 */
export const Default: Story = {
	decorators: [ModalDecorator],
	args: {
		isOpen: true, // Se controla en el decorador, pero se define para cumplir con Type
		onClose: () => {},
		onSubmit: () => {},
		titlePrefix: 'Solicitar',
		titleHighlight: 'Presupuesto',
		description: (
			<>
				Para obtener presupuesto de forma fácil y rápida, completá el formulario<br className="hidden sm:block" />
				detallando bien el trabajo a realizar y te contestaremos a la brevedad.
			</>
		),
		fields: industriaGraficaFields,
		accentColor: 'red',
		submitText: 'Enviar'
	} as any,
};

const saasFields: FormField[] = [
	{ name: 'empresa', label: 'Nombre de la empresa', type: 'text', placeholder: 'Ej. Acme Corp' },
	{ name: 'rol', label: 'Cargo / Rol', type: 'text', placeholder: 'Ej. CTO, Product Manager' },
	{ name: 'email', label: 'Email laboral', type: 'email', placeholder: 'nombre@empresa.com', fullWidth: true },
	{ name: 'documento', label: 'Adjuntar RFP o especificaciones (Opcional)', type: 'file', accept: '.pdf,.doc,.docx' },
	{ name: 'necesidad', label: '¿Qué problema buscan resolver?', type: 'textarea', placeholder: 'Describí brevemente tu desafío principal...', rows: 4 }
];

/**
 * Demuestra que el sistema visual se mantiene intacto mientras se configura
 * para un caso de negocio totalmente diferente. Muestra el cambio de acento de color ('emerald')
 * y el reemplazo del ícono de archivo a UploadCloud de Lucide.
 */
export const GenericPortabilityDemo: Story = {
	decorators: [ModalDecorator],
	args: {
		isOpen: true,
		onClose: () => {},
		onSubmit: () => {},
		titlePrefix: 'Agendar una',
		titleHighlight: 'Consulta',
		description: 'Dejanos tus datos y un especialista técnico te contactará en menos de 2 horas para entender tu caso.',
		fields: saasFields,
		accentColor: 'emerald',
		fileIcon: UploadCloud,
		submitText: 'Agendar Llamada'
	} as any,
};
