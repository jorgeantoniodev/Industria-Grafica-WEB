import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitio en construcción | Industria Gráfica Córdoba',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MaintenancePage() {
  const waUrl = `https://wa.me/5493514597594?text=${encodeURIComponent("Hola Industria Gráfica, me gustaría hacer una consulta")}`;
  
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md px-4 py-8 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 sm:p-12 shadow-2xl border border-slate-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center gap-3 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Industria Gráfica Córdoba — Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 leading-none">
              Industria Gráfica
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-1">
              Imprenta Industrial
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
          Sitio en construcción
        </h1>

        <p className="text-base text-slate-600 mb-2 leading-relaxed">
          Estamos trabajando para mejorar nuestra web.
        </p>

        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          Mientras tanto, podés comunicarte con nosotros por WhatsApp.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-6 w-6 fill-white shrink-0"
            aria-hidden="true"
          >
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.363.627 4.587 1.72 6.517L2.667 29.333l6.98-1.693A13.28 13.28 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 2.4c5.807 0 10.929 4.64 10.929 10.933 0 6.293-4.64 10.933-10.929 10.933a10.89 10.89 0 0 1-5.493-1.48l-.387-.227-4.147 1.013.987-4.053-.24-.4A10.887 10.887 0 0 1 5.071 16c0-6.293 4.64-10.933 10.933-10.933zM11.76 10.4c-.24 0-.627.093-.947.44-.32.347-1.227 1.2-1.227 2.92s1.253 3.387 1.427 3.627c.173.24 2.44 3.84 5.973 5.24.827.36 1.48.573 1.987.733.84.267 1.6.227 2.2.14.667-.107 2.053-.84 2.347-1.653.293-.813.293-1.507.2-1.653-.093-.147-.347-.24-.72-.427-.373-.187-2.213-1.093-2.56-1.213-.347-.12-.6-.187-.84.187-.24.373-.933 1.213-1.147 1.453-.213.24-.427.267-.8.093-.373-.187-1.573-.573-2.987-1.84-1.107-.987-1.853-2.2-2.067-2.573-.213-.373-.027-.573.16-.76.173-.173.373-.44.56-.667.187-.227.253-.387.373-.64.12-.253.067-.48-.027-.667-.093-.187-.84-2.027-1.147-2.773-.293-.72-.6-.627-.84-.627z" />
          </svg>
          <span>Contactar por WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
