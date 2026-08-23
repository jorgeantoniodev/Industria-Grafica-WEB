'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CaretDown, List, X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

export interface NavLink {
	label: string;
	href: string;
}

export interface NavDropdown {
	label: string;
	items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export interface HeaderTheme {
	accentColor: string;
}

export interface HeaderProps {
	logo: {
		src: string;
		alt: string;
		title: string;
		subtitle?: string;
		href?: string;
	};
	navigation: NavItem[];
	cta: {
		label: string;
		href: string;
	};
	theme?: HeaderTheme;
}

export default function Header({
	logo,
	navigation,
	cta,
	theme,
}: HeaderProps) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openDesktopIndex, setOpenDesktopIndex] = useState<number | null>(null);
	const [openMobileIndices, setOpenMobileIndices] = useState<Record<number, boolean>>({});
	
	const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const closeMobile = () => setMobileOpen(false);

	const onEnterDropdown = (index: number) => {
		if (leaveTimer.current) clearTimeout(leaveTimer.current);
		setOpenDesktopIndex(index);
	};

	const onLeaveDropdown = () => {
		leaveTimer.current = setTimeout(() => setOpenDesktopIndex(null), 150);
	};

	const toggleMobileDropdown = (index: number) => {
		setOpenMobileIndices((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	return (
		<>
			<header
				className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all"
				style={{
					'--header-accent': theme?.accentColor || '#2563eb', // blue-600 default
				} as React.CSSProperties}
			>
				<div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
					{/* ── Logo ─────────────────────────────────────────── */}
					<Link href={logo.href || '/'} className="flex items-center gap-3" onClick={closeMobile}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={logo.src}
							alt={logo.alt}
							width={40}
							height={40}
							className="object-contain"
						/>
						<div className="flex flex-col gap-1">
							<span className="text-lg md:text-xl font-black tracking-tight text-gray-950 leading-none">
								{logo.title}
							</span>
							{logo.subtitle && (
								<span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase block">
									{logo.subtitle}
								</span>
							)}
						</div>
					</Link>

					{/* ── Desktop Nav ───────────────────────────────────── */}
					<nav className="hidden lg:flex items-center gap-8">
						{navigation.map((item, index) => {
							if ('items' in item) {
								const isOpen = openDesktopIndex === index;
								return (
									<div
										key={index}
										className="relative"
										onMouseEnter={() => onEnterDropdown(index)}
										onMouseLeave={onLeaveDropdown}
									>
										<button
											className="text-base font-semibold text-gray-800 hover:text-black transition-colors flex items-center gap-1.5 py-2"
											aria-expanded={isOpen}
										>
											{item.label}
											<CaretDown
												size={16}
												weight="bold"
												className={cn(
													'text-gray-500 transition-transform duration-200',
													isOpen && 'rotate-180'
												)}
											/>
										</button>

										{/* Dropdown panel */}
										{isOpen && (
											<div
												className="absolute top-full left-0 pt-2 z-50"
												onMouseEnter={() => onEnterDropdown(index)}
												onMouseLeave={onLeaveDropdown}
											>
												<div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[270px] overflow-hidden">
													{item.items.map((subItem) => (
														<Link
															key={subItem.href}
															href={subItem.href}
															className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-black transition-colors"
															onClick={() => setOpenDesktopIndex(null)}
														>
															{subItem.label}
														</Link>
													))}
												</div>
											</div>
										)}
									</div>
								);
							} else {
								// NavLink
								return (
									<Link
										key={item.href}
										href={item.href}
										className="text-base font-semibold text-gray-800 hover:text-black transition-colors py-2"
									>
										{item.label}
									</Link>
								);
							}
						})}
					</nav>

					{/* ── Derecha: Contacto + Hamburguesa ──────────────── */}
					<div className="flex items-center gap-3 md:gap-5">
						<Link
							href={cta.href}
							className="rounded-xl border-2 border-[var(--header-accent)] bg-[var(--header-accent)] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-transparent hover:text-[var(--header-accent)] active:scale-95"
						>
							{cta.label}
						</Link>

						{/* Hamburguesa — solo mobile */}
						<button
							className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
							onClick={() => setMobileOpen(!mobileOpen)}
							aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
						</button>
					</div>
				</div>
			</header>

			{/* ── Mobile Menu Panel ─────────────────────────────────────── */}
			{mobileOpen && (
				<div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white overflow-y-auto border-t border-gray-100">
					<nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
						{navigation.map((item, index) => {
							if ('items' in item) {
								const isMobileOpen = openMobileIndices[index] || false;
								return (
									<div key={index}>
										<button
											className="w-full flex items-center justify-between py-4 text-lg font-bold text-gray-900 border-b border-gray-100"
											onClick={() => toggleMobileDropdown(index)}
											aria-expanded={isMobileOpen}
										>
											{item.label}
											<CaretDown
												size={18}
												weight="bold"
												className={cn(
													'text-gray-500 transition-transform duration-200',
													isMobileOpen && 'rotate-180'
												)}
											/>
										</button>

										{isMobileOpen && (
											<div className="py-2 pl-4 flex flex-col">
												{item.items.map((subItem) => (
													<Link
														key={subItem.href}
														href={subItem.href}
														className="py-3 text-base font-semibold text-gray-600 hover:text-black border-b border-gray-50 transition-colors"
														onClick={closeMobile}
													>
														{subItem.label}
													</Link>
												))}
											</div>
										)}
									</div>
								);
							} else {
								return (
									<Link
										key={item.href}
										href={item.href}
										className="py-4 text-lg font-bold text-gray-900 border-b border-gray-100"
										onClick={closeMobile}
									>
										{item.label}
									</Link>
								);
							}
						})}

						{/* CTA Contacto */}
						<div className="pt-6">
							<Link
								href={cta.href}
								style={{
									'--header-accent': theme?.accentColor || '#2563eb', // Asegurar que la variable llegue aquí por si no hereda en fixed
								} as React.CSSProperties}
								className="block w-full text-center rounded-xl border-2 border-[var(--header-accent)] bg-[var(--header-accent)] px-5 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-transparent hover:text-[var(--header-accent)]"
								onClick={closeMobile}
							>
								{cta.label}
							</Link>
						</div>
					</nav>
				</div>
			)}
		</>
	);
}
