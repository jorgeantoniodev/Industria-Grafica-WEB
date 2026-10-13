'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
	theme?: HeaderTheme;
}

export default function Header({
	logo,
	navigation,
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

	const pathname = usePathname();
	const [currentHash, setCurrentHash] = useState('');

	useEffect(() => {
		setCurrentHash(window.location.hash);
		const handleHashChange = () => setCurrentHash(window.location.hash);
		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, [pathname]);

	const isActive = (href: string) => {
		const [linkPath, linkHash] = href.split('#');
		if (pathname !== linkPath) return false;
		if (linkPath === '/quienes-somos') {
			if (linkHash === 'ubicacion') {
				return currentHash === '#ubicacion';
			}
			return currentHash !== '#ubicacion';
		}
		return true;
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
				className="sticky top-0 z-50 w-full bg-[#5332ED] border-b border-white/10 transition-all"
				style={{
					'--header-accent': theme?.accentColor || '#5332ED',
				} as React.CSSProperties}
			>
				<div className="relative w-full max-w-none px-6 md:px-8 h-20 flex items-center justify-between">
					{/* ── Logo ─────────────────────────────────────────── */}
					<Link href={logo.href || '/'} className="flex items-center gap-3 z-10" onClick={closeMobile}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={logo.src}
							alt={logo.alt}
							width={54}
							height={32}
							className="h-8 md:h-9 w-auto object-contain"
						/>
						<div className="flex flex-col gap-1">
							<span className="text-lg md:text-xl font-black tracking-tight text-white leading-none">
								{logo.title}
							</span>
							{logo.subtitle && (
								<span className="text-[9px] font-bold tracking-widest text-white/80 uppercase block">
									{logo.subtitle}
								</span>
							)}
						</div>
					</Link>

					{/* ── Desktop Nav ───────────────────────────────────── */}
					<nav className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-14 absolute left-1/2 -translate-x-1/2">
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
											className="text-sm xl:text-base font-semibold text-white/85 hover:text-white transition-colors flex items-center gap-1.5 py-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
											aria-expanded={isOpen}
										>
											{item.label}
											<CaretDown
												size={16}
												weight="bold"
												className={cn(
													'text-white/70 transition-transform duration-200',
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
								const active = isActive(item.href);
								return (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											'text-sm xl:text-base font-semibold py-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm',
											active
												? 'text-white font-bold'
												: 'text-white/85 hover:text-white'
										)}
									>
										{item.label}
									</Link>
								);
							}
						})}
					</nav>

					{/* ── Acciones a la derecha (Socials + Hamburguesa) ─── */}
					<div className="flex items-center gap-1 sm:gap-2">
						{/* Social Icons */}
						<div className="flex items-center gap-0.5 sm:gap-1">
							<a
								href="https://www.instagram.com/industriagrafica_ok/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/80 hover:text-white transition-colors w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
								aria-label="Instagram"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.042.059-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.987.058 4.042.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.042.058 2.67 0 2.987-.01 4.04-.058.975-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.042-.045-.975-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
							</a>
						</div>
						{/* Hamburguesa — solo mobile */}
						<button
							className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
								const active = isActive(item.href);
								return (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											'py-4 text-lg font-bold border-b border-gray-100 transition-colors',
											active
												? 'text-brand-electric-violet'
												: 'text-gray-900 hover:text-brand-electric-violet'
										)}
										onClick={closeMobile}
									>
										{item.label}
									</Link>
								);
							}
						})}

					</nav>
				</div>
			)}
		</>
	);
}
