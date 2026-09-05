'use server';

export interface ContactFormState {
	success: boolean;
	error?: string;
	message?: string;
}

// Validación básica de formato de correo
function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Función para escapar caracteres especiales HTML
function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

// Función para sanear campos usados en encabezados de correo (elimina CRLF)
function sanitizeHeader(str: string): string {
	return str.replace(/[\r\n]+/g, ' ').trim();
}

export async function submitContactForm(
	_prevState: ContactFormState,
	formData: FormData
): Promise<ContactFormState> {
	try {
		// 1. Protección Anti-Spam: Honeypot
		const honeypot = formData.get('_hp_website') as string;
		if (honeypot && honeypot.trim() !== '') {
			// Bot detectado: retornar éxito silencioso sin procesar
			return {
				success: true,
				message: 'Su solicitud ha sido recibida correctamente.',
			};
		}

		// 2. Control de tiempo mínimo (al menos 1.5s desde carga del formulario)
		const formRenderTime = formData.get('_hp_timestamp') as string;
		if (formRenderTime) {
			const elapsed = Date.now() - parseInt(formRenderTime, 10);
			if (elapsed < 1500) {
				return {
					success: false,
					error: 'Envío demasiado rápido. Por favor complete el formulario con calma.',
				};
			}
		}

		// 3. Extracción y sanitización de campos
		const nombre = (formData.get('nombre') as string)?.trim();
		const apellido = (formData.get('apellido') as string)?.trim();
		const email = (formData.get('email') as string)?.trim();
		const empresa = (formData.get('empresa') as string)?.trim();
		const tipo = (formData.get('tipo') as string)?.trim();
		const cliente = (formData.get('cliente') as string)?.trim();
		const mensaje = (formData.get('mensaje') as string)?.trim();
		const newsletter = formData.get('newsletter') === 'on';

		// 4. Validación estricta en servidor
		if (!nombre || nombre.length < 2) {
			return { success: false, error: 'Por favor ingrese un nombre válido.' };
		}
		if (!apellido || apellido.length < 2) {
			return { success: false, error: 'Por favor ingrese un apellido válido.' };
		}
		if (!email || !isValidEmail(email)) {
			return { success: false, error: 'Por favor ingrese un correo electrónico válido.' };
		}
		if (!empresa || empresa.length < 2) {
			return { success: false, error: 'Por favor ingrese el nombre de su empresa o razón social.' };
		}
		if (!tipo || tipo === 'Seleccioná una opción') {
			return { success: false, error: 'Por favor seleccione un tipo de trabajo.' };
		}
		if (!mensaje || mensaje.length < 5) {
			return { success: false, error: 'Por favor detalle brevemente su pedido o consulta.' };
		}

		// Valores limpios para asunto (protección CRLF)
		const cleanTipo = sanitizeHeader(tipo);
		const cleanEmpresa = sanitizeHeader(empresa);
		const cleanNombre = sanitizeHeader(nombre);
		const cleanApellido = sanitizeHeader(apellido);

		// Registro de seguridad sin datos personales, email ni nombre de empresa
		console.log(`[Contact Action] Solicitud recibida: Tipo=${cleanTipo}`);

		// 5. Configuración de destinatario y proveedor
		const apiKey = process.env.RESEND_API_KEY;
		const toEmail = process.env.CONTACT_TO_EMAIL || 'presupuestos@prematgrafica.com.ar';
		const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Presupuestos Web <onboarding@resend.dev>';

		// Si no hay credenciales configuradas en el entorno
		if (!apiKey) {
			console.warn(
				'[Contact Action] RESEND_API_KEY no está configurada. El correo no puede ser enviado.'
			);
			return {
				success: false,
				error:
					'El servicio de correo no está configurado en el servidor (falta RESEND_API_KEY). Por favor comunicate directamente por WhatsApp al +54 9 351 459-7594.',
			};
		}

		// Escapado para HTML de todos los valores suministrados por el visitante
		const safeNombre = escapeHtml(nombre);
		const safeApellido = escapeHtml(apellido);
		const safeEmpresa = escapeHtml(empresa);
		const safeEmail = escapeHtml(email);
		const safeTipo = escapeHtml(tipo);
		const safeCliente = escapeHtml(cliente || 'No especificado');
		const safeNewsletter = escapeHtml(newsletter ? 'Sí' : 'No');
		const safeMensaje = escapeHtml(mensaje);
		const safeMailto = encodeURIComponent(email);

		// 6. Envío mediante HTTP REST API de Resend (compatible con Cloudflare Workers / OpenNext)
		const resendPayload = {
			from: fromEmail,
			to: [toEmail],
			reply_to: email,
			subject: `[Presupuesto Web] ${cleanTipo} — ${cleanEmpresa} (${cleanNombre} ${cleanApellido})`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
					<h2 style="color: #1e293b; margin-bottom: 16px;">Nueva solicitud de presupuesto web</h2>
					<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 140px;">Nombre:</td><td style="padding: 8px 0; color: #0f172a;">${safeNombre} ${safeApellido}</td></tr>
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Empresa:</td><td style="padding: 8px 0; color: #0f172a;">${safeEmpresa}</td></tr>
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">E-mail:</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${safeMailto}">${safeEmail}</a></td></tr>
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Tipo de trabajo:</td><td style="padding: 8px 0; color: #0f172a;">${safeTipo}</td></tr>
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">¿Cliente previo?:</td><td style="padding: 8px 0; color: #0f172a;">${safeCliente}</td></tr>
						<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Newsletter:</td><td style="padding: 8px 0; color: #0f172a;">${safeNewsletter}</td></tr>
					</table>
					<div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #2563eb;">
						<h4 style="margin: 0 0 8px 0; color: #334155;">Detalle del proyecto:</h4>
						<p style="margin: 0; color: #1e293b; white-space: pre-wrap; line-height: 1.5;">${safeMensaje}</p>
					</div>
					<hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 12px 0;" />
					<p style="font-size: 12px; color: #94a3b8; margin: 0;">Enviado automáticamente desde el formulario web de Industria Gráfica Córdoba.</p>
				</div>
			`,
		};

		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(resendPayload),
		});

		if (!response.ok) {
			const errorData = (await response.json().catch(() => ({}))) as { name?: string; message?: string };
			const errName = typeof errorData?.name === 'string' ? errorData.name : 'UnknownError';
			const errMsg = typeof errorData?.message === 'string' ? errorData.message.slice(0, 100) : 'Sin detalle';
			console.error(
				`[Contact Action] Error del proveedor de correo: HTTP ${response.status} [${errName}: ${errMsg}]`
			);
			return {
				success: false,
				error: 'No se pudo completar el envío en este momento. Por favor contactanos directamente por WhatsApp.',
			};
		}

		return {
			success: true,
			message: '¡Tu consulta ha sido enviada con éxito! Nos comunicaremos a la brevedad.',
		};
	} catch (err) {
		console.error('[Contact Action] Error inesperado en envío de contacto');
		return {
			success: false,
			error: 'Ocurrió un error inesperado al procesar la solicitud. Por favor intenta por WhatsApp.',
		};
	}
}
