'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface FAQItem {
	id: string;
	question: string;
	answer: React.ReactNode;
}

interface FAQAccordionProps {
	items: FAQItem[];
	defaultOpenIndex?: number;
}

export default function FAQAccordion({ items, defaultOpenIndex }: FAQAccordionProps) {
	const [openIndices, setOpenIndices] = useState<number[]>(
		defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
	);

	// Abrir automáticamente la pregunta correspondiente si se navega con hash en la URL
	useEffect(() => {
		const hash = window.location.hash.replace('#', '');
		if (!hash) return;

		const targetIndex = items.findIndex((item) => item.id === hash);
		if (targetIndex !== -1) {
			setOpenIndices((prev) => (prev.includes(targetIndex) ? prev : [...prev, targetIndex]));
		}
	}, [items]);

	const toggleItem = (index: number) => {
		setOpenIndices((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<div className="flex flex-col gap-3 sm:gap-3.5 w-full">
			{items.map((item, index) => {
				const isOpen = openIndices.includes(index);

				return (
					<div
						key={item.id}
						id={item.id}
						className={cn(
							'scroll-mt-32 rounded-xl bg-white shadow-sm border border-slate-200/70 overflow-hidden transition-all duration-200',
							isOpen ? 'shadow-md ring-1 ring-slate-200' : 'hover:shadow-md hover:border-slate-300'
						)}
					>
						<button
							type="button"
							onClick={() => toggleItem(index)}
							className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base md:text-[17px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric-violet focus-visible:ring-inset"
							aria-expanded={isOpen}
							aria-controls={`faq-answer-${item.id}`}
						>
							<span className="leading-snug">
								{index + 1}. {item.question}
							</span>
							<span
								className={cn(
									'shrink-0 text-slate-400 transition-transform duration-200 flex items-center justify-center',
									isOpen && 'rotate-180 text-brand-electric-violet'
								)}
								aria-hidden="true"
							>
								{/* Triángulo caret sólido idéntico a la referencia visual */}
								<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
									<path d="M12 16L6 10H18L12 16Z" />
								</svg>
							</span>
						</button>

						{isOpen && (
							<div
								id={`faq-answer-${item.id}`}
								className="px-5 pb-6 pt-1 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-0.5"
							>
								{item.answer}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
