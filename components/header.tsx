'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';
import QuoteModal from '@/components/ui/QuoteModal';

const NAV_LINKS = [
    { label: 'Soluciones Industriales', href: '/soluciones-industriales' },
    { label: 'Agencias y Marca Blanca', href: '/agencias' },
    { label: 'Casos de Éxito',          href: '/casos-de-exito' },
    { label: 'La Planta',               href: '/la-planta' },
];

export default function Header() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
                    
                    <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-xl px-5 py-2.5 shadow-sm hover:shadow-md transition-all active:scale-95 text-white font-semibold text-sm tracking-wide"
                    >
                        Cotizar Producción
                    </button>
                </div>
                
            </div>
        </header>

        <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
        />
        </Fragment>
    );
}
