'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedGradientButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	className?: string;
	gradientColors?: string[];
	containerClassName?: string;
	variant?: 'dark' | 'white';
}

/**
 * AnimatedGradientButton — Magic UI pattern
 * Creates an animated continuous border gradient using the brand's violet/magenta palette.
 */
export function AnimatedGradientButton({
	children,
	className,
	containerClassName,
	gradientColors = ['#5332ed', '#b80982', '#a073e2', '#6d28d2', '#5332ed'],
	variant = 'white',
	...props
}: AnimatedGradientButtonProps) {
	const gradientString = gradientColors.join(', ');

	const surfaceClasses =
		variant === 'white'
			? 'bg-white text-slate-900 group-hover:bg-slate-50 group-hover:text-brand-electric-violet'
			: 'bg-slate-950 text-white group-hover:bg-slate-900';

	return (
		<a
			className={cn(
				'group relative inline-flex items-center justify-center p-[2.5px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl hover:shadow-brand-electric-violet/20',
				containerClassName
			)}
			{...props}
		>
			{/* Rotating border gradient (Magic UI pattern) */}
			<span
				className="absolute inset-[-1000%] motion-safe:animate-[spin_5s_linear_infinite]"
				style={{
					background: `conic-gradient(from 90deg at 50% 50%, ${gradientString})`,
				}}
			/>

			{/* Inner button surface */}
			<span
				className={cn(
					'relative inline-flex items-center justify-center w-full h-full rounded-full px-8 sm:px-10 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200',
					surfaceClasses,
					className
				)}
			>
				{children}
			</span>
		</a>
	);
}
