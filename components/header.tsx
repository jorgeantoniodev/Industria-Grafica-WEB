'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CaretDown, List, X } from '@phosphor-icons/react';

const SOLUCIONES_LINKS = [
    { label: 'Impresión Offset Comercial',  href: '/soluciones-industriales#offset' },
    { label: 'Troquelados & Packaging',     href: '/soluciones-industriales#troquelados' },
    { label: 'Encuadernación & Editorial',  href: '/soluciones-industriales#encuadernacion' },
    { label: 'Agencias & Marca Blanca',     href: '/agencias' },
];

export default function Header() {
    const [solucionesOpen, setSolucionesOpen]           = useState(false);
    const [mobileOpen, setMobileOpen]                   = useState(false);
    const [mobileSolucionesOpen, setMobileSolucionesOpen] = useState(false);
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ── Hover handlers con pequeño delay para evitar cierre brusco ── */
    const onEnter = () => {
        if (leaveTimer.current) clearTimeout(leaveTimer.current);
        setSolucionesOpen(true);
    };
    const onLeave = () => {
        leaveTimer.current = setTimeout(() => setSolucionesOpen(false), 150);
    };

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all">
            <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">

                {/* ── Logo ─────────────────────────────────────────── */}
                <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.png"
                        alt="Industria Gráfica Córdoba — Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-lg md:text-xl font-black tracking-tight text-gray-950 leading-none">
                            Industria Gráfica
                        </span>
                        <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase block">
                            Imprenta Industrial
                        </span>
                    </div>
                </Link>

                {/* ── Desktop Nav ───────────────────────────────────── */}
                <nav className="hidden lg:flex items-center gap-8">

                    {/* Soluciones Industriales — con dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                    >
                        <Link
                            href="/soluciones-industriales"
                            className="text-base font-semibold text-gray-800 hover:text-black transition-colors flex items-center gap-1.5 py-2"
                        >
                            Soluciones Industriales
                            <CaretDown
                                size={16}
                                weight="bold"
                                className={`text-gray-500 transition-transform duration-200 ${solucionesOpen ? 'rotate-180' : ''}`}
                            />
                        </Link>

                        {/* Dropdown panel */}
                        {solucionesOpen && (
                            <div className="absolute top-full left-0 pt-2 z-50" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[270px] overflow-hidden">
                                    {SOLUCIONES_LINKS.map(({ label, href }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-black transition-colors"
                                            onClick={() => setSolucionesOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* La Planta — link simple */}
                    <Link
                        href="/la-planta"
                        className="text-base font-semibold text-gray-800 hover:text-black transition-colors py-2"
                    >
                        La Planta
                    </Link>
                </nav>

                {/* ── Derecha: Contacto + Hamburguesa ──────────────── */}
                <div className="flex items-center gap-3 md:gap-5">
                    <Link
                        href="/contacto"
                        className="rounded-xl border-2 border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-transparent hover:text-blue-600 active:scale-95"
                    >
                        Contacto
                    </Link>

                    {/* Hamburguesa — solo mobile */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen
                            ? <X    size={22} weight="bold" />
                            : <List size={22} weight="bold" />
                        }
                    </button>
                </div>

            </div>
        </header>

        {/* ── Mobile Menu Panel ─────────────────────────────────────── */}
        {mobileOpen && (
            <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white overflow-y-auto border-t border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col">

                    {/* Soluciones Industriales — accordion */}
                    <div>
                        <button
                            className="w-full flex items-center justify-between py-4 text-lg font-bold text-gray-900 border-b border-gray-100"
                            onClick={() => setMobileSolucionesOpen(!mobileSolucionesOpen)}
                            aria-expanded={mobileSolucionesOpen}
                        >
                            Soluciones Industriales
                            <CaretDown
                                size={18}
                                weight="bold"
                                className={`text-gray-500 transition-transform duration-200 ${mobileSolucionesOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {mobileSolucionesOpen && (
                            <div className="py-2 pl-4 flex flex-col">
                                {SOLUCIONES_LINKS.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="py-3 text-base font-semibold text-gray-600 hover:text-black border-b border-gray-50 transition-colors"
                                        onClick={closeMobile}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* La Planta */}
                    <Link
                        href="/la-planta"
                        className="py-4 text-lg font-bold text-gray-900 border-b border-gray-100"
                        onClick={closeMobile}
                    >
                        La Planta
                    </Link>

                    {/* CTA Contacto */}
                    <div className="pt-6">
                        <Link
                            href="/contacto"
                            className="block w-full text-center rounded-xl border-2 border-blue-600 bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-transparent hover:text-blue-600"
                            onClick={closeMobile}
                        >
                            Contacto
                        </Link>
                    </div>

                </nav>
            </div>
        )}
        </>
    );
}
