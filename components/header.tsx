'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';

const NAV_LINKS = [
    { label: 'Soluciones Industriales', href: '/soluciones-industriales' },
    { label: 'Agencias y Marca Blanca', href: '/agencias' },
    { label: 'Casos de Éxito',          href: '/casos-de-exito' },
    { label: 'La Planta',               href: '/la-planta' },
];

export default function Header() {

    return (
        <Fragment>
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all">
            <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
                
                {/* Sección Izquierda (Identidad de Marca) */}
                <Link href="/" className="flex items-center gap-3">
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

                {/* Sección Central (Navegación B2B) */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-base font-semibold text-gray-800 hover:text-black transition-colors flex items-center gap-1.5 py-2"
                        >
                            {label}
                            <CaretDown size={16} weight="bold" className="text-gray-500" />
                        </Link>
                    ))}
                </nav>

                {/* Sección Derecha (Herramientas y CTA) */}
                <div className="flex items-center gap-4 md:gap-6">
                    <MagnifyingGlass size={20} weight="bold" className="text-gray-700 hover:text-black cursor-pointer transition-colors" />
                    
                    {/*
                     * Efecto hover: fill → outline (capturas adjuntas)
                     * border-2 siempre presente (evita layout shift)
                     * Default:  bg-blue-600 text-white  border-transparent
                     * Hover:    bg-transparent text-blue-600 border-blue-600
                     */}
                    <Link
                        href="/contacto"
                        className="rounded-xl border-2 border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-transparent hover:text-blue-600 active:scale-95"
                    >
                        Contacto
                    </Link>
                </div>
                
            </div>
        </header>

        {/* QuoteModal removido — el flujo de contacto va ahora a /contacto */}
        </Fragment>
    );
}
