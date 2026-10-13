'use client';

import { useEffect } from 'react';

/** Espera tras montar antes de iniciar el recorrido, para que la página pinte su primer frame. */
const TRAVEL_START_DELAY_MS = 80;
/** Respaldo para navegadores sin evento `scrollend` o cuando no hubo desplazamiento. */
const SETTLE_FALLBACK_MS = 1200;
/** Re-mediciones máximas para absorber cambios de layout (imágenes, animaciones de entrada). */
const MAX_CORRECTIONS = 3;
const TOLERANCE_PX = 2;
const USER_INPUT_EVENTS = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const;

/**
 * Posición de scroll que deja el elemento en su destino, usando el
 * `scroll-margin-top` ya definido en CSS como única fuente del offset del header.
 */
function getTargetTop(element: HTMLElement): number {
	const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
	return Math.max(0, element.getBoundingClientRect().top + window.scrollY - margin);
}

export default function Template({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const targetId = decodeURIComponent(window.location.hash.slice(1));
		if (!targetId) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

		let finished = false;
		let corrections = 0;
		let startTimer: ReturnType<typeof setTimeout> | undefined;
		let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

		const finish = () => {
			finished = true;
			clearTimeout(startTimer);
			clearTimeout(fallbackTimer);
			window.removeEventListener('scrollend', verify);
			USER_INPUT_EVENTS.forEach((type) =>
				window.removeEventListener(type, finish),
			);
		};

		// Re-mide el destino al terminar cada desplazamiento y corrige si derivó.
		function verify() {
			if (finished) return;
			clearTimeout(fallbackTimer);
			const element = document.getElementById(targetId);
			if (!element) return finish();

			const delta = getTargetTop(element) - window.scrollY;
			if (Math.abs(delta) <= TOLERANCE_PX || corrections >= MAX_CORRECTIONS) {
				return finish();
			}
			corrections += 1;
			window.scrollTo({ top: getTargetTop(element), behavior });
			fallbackTimer = setTimeout(verify, SETTLE_FALLBACK_MS);
		}

		const travel = () => {
			const element = document.getElementById(targetId);
			if (!element) return finish();
			window.scrollTo({ top: getTargetTop(element), behavior });
			fallbackTimer = setTimeout(verify, SETTLE_FALLBACK_MS);
		};

		// Si el usuario toma el control, se abandona el recorrido automático.
		USER_INPUT_EVENTS.forEach((type) =>
			window.addEventListener(type, finish, { passive: true }),
		);
		window.addEventListener('scrollend', verify);

		if (prefersReducedMotion) {
			travel();
		} else {
			// Next.js ya saltó al ancla de forma instantánea: se parte desde arriba
			// para que el recorrido hasta la sección sea visible.
			window.scrollTo({ top: 0, behavior: 'instant' });
			startTimer = setTimeout(travel, TRAVEL_START_DELAY_MS);
		}

		return finish;
	}, []);

	return <div className="page-transition flex-1 flex flex-col">{children}</div>;
}
