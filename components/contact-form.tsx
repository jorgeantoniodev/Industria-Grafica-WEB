'use client';

import React, { useState, useEffect } from 'react';
import { submitContactForm, ContactFormState } from '@/app/actions/contact';

const TIPOS_TRABAJO = [
	'Seleccioná una opción',
	'Impresión offset a gran escala',
	'Troquelado y terminaciones',
	'Encuadernación industrial',
	'Folletería y catálogos',
	'Packaging y embalaje',
	'Marca blanca para agencias',
	'Otro',
];

const ES_CLIENTE = [
	'Seleccioná una opción',
	'Sí, ya trabajamos juntos',
	'No, es mi primer contacto',
];

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<ContactFormState | null>(null);
	const [timestamp, setTimestamp] = useState<number>(0);

	useEffect(() => {
		setTimestamp(Date.now());
	}, []);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (isSubmitting) return;

		setIsSubmitting(true);
		setStatus(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const result = await submitContactForm({ success: false }, formData);
			setStatus(result);
			if (result.success) {
				form.reset();
			}
		} catch {
			setStatus({
				success: false,
				error: 'Ocurrió un problema de conexión. Podés escribirnos directamente a WhatsApp.',
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} method="POST" className="space-y-5" noValidate>
			{/* ── Campos Anti-Spam (Honeypot + Timestamp) ──────────────── */}
			<div style={{ display: 'none' }} aria-hidden="true">
				<label htmlFor="_hp_website">No completar este campo</label>
				<input
					id="_hp_website"
					name="_hp_website"
					type="text"
					tabIndex={-1}
					autoComplete="off"
				/>
				<input
					type="hidden"
					name="_hp_timestamp"
					value={timestamp}
				/>
			</div>

			{/* ── Mensajes de Estado Accesibles ──────────────────────── */}
			{status?.success && (
				<div
					role="status"
					aria-live="polite"
					className="rounded-xl bg-emerald-50 border border-emerald-300 p-4 text-sm font-semibold text-emerald-900 shadow-sm animate-in fade-in duration-200"
				>
					✓ {status.message}
				</div>
			)}

			{status?.error && (
				<div
					role="alert"
					aria-live="assertive"
					className="rounded-xl bg-amber-50 border border-amber-300 p-4 text-sm font-semibold text-amber-900 shadow-sm animate-in fade-in duration-200"
				>
					⚠️ {status.error}
				</div>
			)}

			{/* ── Nombre / Apellido ──────────────────────────────────── */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label htmlFor="nombre" className="mb-1 block text-sm font-bold text-slate-700">
						Nombre*
					</label>
					<input
						id="nombre"
						name="nombre"
						type="text"
						required
						disabled={isSubmitting}
						className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
					/>
				</div>
				<div>
					<label htmlFor="apellido" className="mb-1 block text-sm font-bold text-slate-700">
						Apellido*
					</label>
					<input
						id="apellido"
						name="apellido"
						type="text"
						required
						disabled={isSubmitting}
						className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
					/>
				</div>
			</div>

			{/* ── Email de Contacto ─────────────────────────────────── */}
			<div>
				<label htmlFor="email" className="mb-1 block text-sm font-bold text-slate-700">
					E-mail de contacto*
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					disabled={isSubmitting}
					className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
				/>
			</div>

			{/* ── Empresa / Razón Social ────────────────────────────── */}
			<div>
				<label htmlFor="empresa" className="mb-1 block text-sm font-bold text-slate-700">
					Empresa / Razón Social*
				</label>
				<input
					id="empresa"
					name="empresa"
					type="text"
					required
					disabled={isSubmitting}
					className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
				/>
			</div>

			{/* ── Tipo de Trabajo ───────────────────────────────────── */}
			<div>
				<label htmlFor="tipo" className="mb-1 block text-sm font-bold text-slate-700">
					¿Qué tipo de trabajo necesitás?*
				</label>
				<select
					id="tipo"
					name="tipo"
					required
					disabled={isSubmitting}
					className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
				>
					{TIPOS_TRABAJO.map((opt) => (
						<option key={opt} value={opt === 'Seleccioná una opción' ? '' : opt}>
							{opt}
						</option>
					))}
				</select>
			</div>

			{/* ── Cliente Existente ─────────────────────────────────── */}
			<div>
				<label htmlFor="cliente" className="mb-1 block text-sm font-bold text-slate-700">
					¿Ya trabajaste con nosotros?*
				</label>
				<select
					id="cliente"
					name="cliente"
					required
					disabled={isSubmitting}
					className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
				>
					{ES_CLIENTE.map((opt) => (
						<option key={opt} value={opt === 'Seleccioná una opción' ? '' : opt}>
							{opt}
						</option>
					))}
				</select>
			</div>

			{/* ── Detalle del Proyecto ───────────────────────────────── */}
			<div>
				<label htmlFor="mensaje" className="mb-1 block text-sm font-bold text-slate-700">
					Descripción del proyecto*
				</label>
				<textarea
					id="mensaje"
					name="mensaje"
					rows={5}
					required
					disabled={isSubmitting}
					placeholder="Describí brevemente: tipo de pieza, cantidad estimada, formato/papel, terminaciones requeridas, plazos..."
					className="w-full resize-y rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
				/>
			</div>

			{/* ── Newsletter ────────────────────────────────────────── */}
			<div className="flex items-center gap-2.5">
				<input
					id="newsletter"
					name="newsletter"
					type="checkbox"
					disabled={isSubmitting}
					className="h-4 w-4 accent-blue-600"
				/>
				<label htmlFor="newsletter" className="text-sm text-gray-600">
					Quiero recibir novedades y asesoramiento técnico de Industria Gráfica
				</label>
			</div>

			{/* ── Botón Submit con Prevención de Doble Envío ─────────── */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
			>
				{isSubmitting ? (
					<>
						<svg
							className="animate-spin h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
						<span>Enviando solicitud...</span>
					</>
				) : (
					<span>Enviar solicitud de presupuesto</span>
				)}
			</button>
		</form>
	);
}
