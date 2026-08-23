'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Paperclip } from 'lucide-react';

// ─── Tipos y Configuración ───────────────────────────────────────────────────

export type FormFieldType = 'text' | 'email' | 'tel' | 'file' | 'textarea';

export interface FormField {
	name: string;
	label: string;
	type: FormFieldType;
	placeholder?: string;
	accept?: string;     // Solo para type='file'
	rows?: number;       // Solo para type='textarea'
	fullWidth?: boolean; // Fuerza 2 columnas
}

export type AccentColor = 'red' | 'blue' | 'emerald' | 'amber' | 'slate' | 'purple';

export interface FormModalProps {
	isOpen: boolean;
	onClose: () => void;
	/** Texto regular del título. Ej: "Solicitar" */
	titlePrefix: string;
	/** Texto destacado que recibe el color de acento. Ej: "Presupuesto" */
	titleHighlight: string;
	/** Descripción que aparece debajo del título */
	description?: React.ReactNode;
	/** Array de configuración de campos del formulario */
	fields: FormField[];
	/** Texto del botón de submit. Default: "Enviar" */
	submitText?: string;
	/** Handler del envío del formulario */
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	/** Color de acento para el texto destacado y el botón. Default: 'red' */
	accentColor?: AccentColor;
	/** Color de texto de los labels. Default: 'text-gray-800' */
	fieldTextColor?: string;
	/** Icono personalizado para el campo tipo file. Default: Paperclip (lucide-react) */
	fileIcon?: React.ElementType;
}

// ─── Mapa de Colores Estáticos (Tailwind JIT Safe) ───────────────────────────
// Botón: CTA relleno. El rojo usa valores exactos (#cc292b, #a32022) como clases arbitrarias.

const ACCENT_VARIANTS: Record<AccentColor, { text: string; button: string }> = {
	red: {
		text: 'text-[#cc292b]',
		button: 'bg-[#cc292b] text-white hover:bg-[#a32022]',
	},
	blue: {
		text: 'text-blue-600',
		button: 'bg-blue-600 text-white hover:bg-blue-700',
	},
	emerald: {
		text: 'text-emerald-600',
		button: 'bg-emerald-600 text-white hover:bg-emerald-700',
	},
	amber: {
		text: 'text-amber-600',
		button: 'bg-amber-600 text-white hover:bg-amber-700',
	},
	slate: {
		text: 'text-slate-800',
		button: 'bg-slate-800 text-white hover:bg-slate-900',
	},
	purple: {
		text: 'text-purple-600',
		button: 'bg-purple-600 text-white hover:bg-purple-700',
	},
};

// ─── Estilos compartidos de inputs ───────────────────────────────────────────

const inputClass =
	'w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors';

// ─── Componente ──────────────────────────────────────────────────────────────

export default function FormModal({
	isOpen,
	onClose,
	titlePrefix,
	titleHighlight,
	description,
	fields,
	submitText = 'Enviar',
	onSubmit,
	accentColor = 'red',
	fieldTextColor = 'text-gray-800',
	fileIcon: FileIcon = Paperclip,
}: FormModalProps) {
	const firstInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const [fileNames, setFileNames] = useState<Record<string, string>>({});

	const accentTheme = ACCENT_VARIANTS[accentColor] ?? ACCENT_VARIANTS.red;

	// Cerrar con Escape
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		if (isOpen) {
			document.addEventListener('keydown', handler);
			setTimeout(() => {
				if (firstInputRef.current) firstInputRef.current.focus();
			}, 50);
		}
		return () => document.removeEventListener('keydown', handler);
	}, [isOpen, onClose]);

	// Bloquear scroll del body
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
		const file = e.target.files?.[0];
		setFileNames(prev => ({
			...prev,
			[fieldName]: file ? file.name : '',
		}));
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6"
			onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
			role="dialog"
			aria-modal="true"
			aria-labelledby="form-modal-title"
		>
			{/* Caja del modal */}
			<div className="relative w-full max-w-[700px] bg-white shadow-2xl rounded-sm overflow-hidden max-h-[95vh] overflow-y-auto">

				{/* Botón cerrar */}
				<button
					onClick={onClose}
					aria-label="Cerrar"
					className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-light leading-none transition-colors z-10"
				>
					✕
				</button>

				{/* Header */}
				<div className="bg-white px-10 pt-10 pb-5">
					<h2
						id="form-modal-title"
						className="text-[2.6rem] font-light text-gray-800 leading-tight tracking-tight"
						style={{ fontFamily: 'inherit' }}
					>
						{titlePrefix}{' '}
						<em className={cn('font-black italic', accentTheme.text)}>
							{titleHighlight}
						</em>
					</h2>
				</div>

				{/* Separador */}
				<hr className="border-gray-300 mx-10" />

				{/* Body */}
				<div className="bg-white px-10 py-7">
					{description && (
						<p className="text-[15px] text-gray-700 leading-relaxed mb-8">
							{description}
						</p>
					)}

					<form onSubmit={onSubmit} noValidate>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 mb-7">
							{fields.map((field, index) => {
								const isFullWidth = field.fullWidth || field.type === 'textarea' || field.type === 'file';
								const isFirst = index === 0;

								return (
									<div
										key={field.name}
										className={isFullWidth ? 'sm:col-span-2' : 'sm:col-span-1'}
									>
										<label
											htmlFor={`fm-${field.name}`}
											className={cn('block text-[11px] font-bold tracking-widest uppercase mb-2', fieldTextColor)}
										>
											{field.label}
										</label>

										{field.type === 'textarea' ? (
											<textarea
												ref={isFirst ? (firstInputRef as React.Ref<HTMLTextAreaElement>) : null}
												id={`fm-${field.name}`}
												name={field.name}
												rows={field.rows ?? 6}
												placeholder={field.placeholder}
												className={cn(inputClass, 'resize-y min-h-[140px]')}
											/>
										) : field.type === 'file' ? (
											<div className="relative flex w-full items-center gap-3 rounded-[3px] border border-transparent bg-[#d8d8d8] px-4 py-3 transition-colors hover:bg-[#d0d0d0] focus-within:border-gray-400 focus-within:bg-[#d0d0d0]">
												<FileIcon className="h-5 w-5 shrink-0 text-gray-500" />
												<span className="flex-1 truncate text-[13px] text-gray-700">
													{fileNames[field.name] || field.placeholder || 'Elegir archivo...'}
												</span>
												<input
													ref={isFirst ? (firstInputRef as React.Ref<HTMLInputElement>) : null}
													id={`fm-${field.name}`}
													name={field.name}
													type="file"
													accept={field.accept}
													onChange={(e) => handleFileChange(e, field.name)}
													className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
												/>
											</div>
										) : (
											<input
												ref={isFirst ? (firstInputRef as React.Ref<HTMLInputElement>) : null}
												id={`fm-${field.name}`}
												name={field.name}
												type={field.type}
												placeholder={field.placeholder}
												autoComplete={
													field.type === 'email' ? 'email'
													: field.type === 'tel' ? 'tel'
													: field.name === 'nombre' || field.name === 'nombre_completo' ? 'name'
													: undefined
												}
												className={inputClass}
											/>
										)}
									</div>
								);
							})}
						</div>

						{/* Botón Submit — CTA relleno */}
						<div className="flex justify-end">
							<button
								type="submit"
								className={cn(
									'rounded-[3px] px-8 py-2.5 text-[14px] font-bold uppercase tracking-[0.12em] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
									accentTheme.button
								)}
							>
								{submitText}
							</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	);
}
