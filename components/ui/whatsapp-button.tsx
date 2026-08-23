'use client';

import { cn } from '@/lib/utils';

export interface WhatsAppButtonProps {
	/** Número de teléfono completo, solo números. Ej: "5493514597594" */
	phoneNumber: string;
	/** Mensaje opcional prellenado en el chat. */
	message?: string;
	/** Etiqueta ARIA para accesibilidad. Default: "Contactar por WhatsApp" */
	ariaLabel?: string;
	/** Posición fija en la pantalla. Default: 'bottom-right' */
	position?: 'bottom-right' | 'bottom-left';
}

export default function WhatsAppButton({
	phoneNumber,
	message,
	ariaLabel = 'Contactar por WhatsApp',
	position = 'bottom-right',
}: WhatsAppButtonProps) {
	// Construir la URL de WhatsApp
	const baseUrl = `https://wa.me/${phoneNumber}`;
	const url = message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;

	const positionClasses = position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6';

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
			className={cn(
				'fixed z-50 flex items-center justify-center',
				'h-14 w-14 rounded-full',
				'bg-[#25D366]',
				'shadow-[0_8px_30px_rgba(37,211,102,0.45)]',
				'transition-transform duration-300 ease-out hover:scale-110',
				'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50',
				positionClasses
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				className="h-7 w-7"
				aria-hidden="true"
				fill="white"
			>
				<path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.363.627 4.587 1.72 6.517L2.667 29.333l6.98-1.693A13.28 13.28 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 2.4c5.807 0 10.929 4.64 10.929 10.933 0 6.293-4.64 10.933-10.929 10.933a10.89 10.89 0 0 1-5.493-1.48l-.387-.227-4.147 1.013.987-4.053-.24-.4A10.887 10.887 0 0 1 5.071 16c0-6.293 4.64-10.933 10.933-10.933zM11.76 10.4c-.24 0-.627.093-.947.44-.32.347-1.227 1.2-1.227 2.92s1.253 3.387 1.427 3.627c.173.24 2.44 3.84 5.973 5.24.827.36 1.48.573 1.987.733.84.267 1.6.227 2.2.14.667-.107 2.053-.84 2.347-1.653.293-.813.293-1.507.2-1.653-.093-.147-.347-.24-.72-.427-.373-.187-2.213-1.093-2.56-1.213-.347-.12-.6-.187-.84.187-.24.373-.933 1.213-1.147 1.453-.213.24-.427.267-.8.093-.373-.187-1.573-.573-2.987-1.84-1.107-.987-1.853-2.2-2.067-2.573-.213-.373-.027-.573.16-.76.173-.173.373-.44.56-.667.187-.227.253-.387.373-.64.12-.253.067-.48-.027-.667-.093-.187-.84-2.027-1.147-2.773-.293-.72-.6-.627-.84-.627z" />
			</svg>
		</a>
	);
}
