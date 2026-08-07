'use client';

import { useEffect, useRef } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handler);
      // Foco automático en el primer campo
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Caja del modal — fondo blanco, sin bordes redondeados exagerados */}
      <div className="relative w-full max-w-[820px] bg-white shadow-2xl rounded-sm overflow-hidden max-h-[95vh] overflow-y-auto">

        {/* Botón cerrar — esquina superior derecha */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-light leading-none transition-colors z-10"
        >
          ✕
        </button>

        {/* Encabezado — fondo blanco, padding generoso */}
        <div className="px-10 pt-10 pb-6 bg-white">
          <h2
            id="quote-modal-title"
            className="text-[2.6rem] font-light text-gray-800 leading-tight tracking-tight"
            style={{ fontFamily: 'inherit' }}
          >
            Solicitar{' '}
            <em className="font-black not-italic text-red-600 italic">
              Presupuesto
            </em>
          </h2>
        </div>

        {/* Cuerpo del formulario — fondo gris claro */}
        <div className="bg-[#e8e8e8] px-10 py-8">
          {/* Subtítulo */}
          <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
            Para obtener presupuesto de forma fácil y rápida, completá el formulario<br className="hidden sm:block" />
            detallando bien el trabajo a realizar y te contestaremos a la brevedad.
          </p>

          <form onSubmit={(e) => e.preventDefault()} noValidate>

            {/* Fila 1: Nombre + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
              <div>
                <label
                  htmlFor="qm-nombre"
                  className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  ref={firstInputRef}
                  id="qm-nombre"
                  type="text"
                  placeholder="Nombre y Apellido"
                  autoComplete="name"
                  className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="qm-email"
                  className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
                >
                  E-Mail
                </label>
                <input
                  id="qm-email"
                  type="email"
                  placeholder="Correo electrónico"
                  autoComplete="email"
                  className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors"
                />
              </div>
            </div>

            {/* Fila 2: Teléfono + Ciudad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
              <div>
                <label
                  htmlFor="qm-telefono"
                  className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
                >
                  Teléfono
                </label>
                <input
                  id="qm-telefono"
                  type="tel"
                  placeholder="Teléfono"
                  autoComplete="tel"
                  className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="qm-ciudad"
                  className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
                >
                  Ciudad
                </label>
                <input
                  id="qm-ciudad"
                  type="text"
                  placeholder="Ciudad"
                  autoComplete="address-level2"
                  className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors"
                />
              </div>
            </div>

            {/* Fila 3: Archivo — input nativo, ancho completo */}
            <div className="mb-5">
              <label
                htmlFor="qm-archivo"
                className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
              >
                Muestra JPG (que no supere 1MB)
              </label>
              {/* Contenedor que imita el campo gris, mostrando el input nativo */}
              <div className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 flex items-center">
                <input
                  id="qm-archivo"
                  type="file"
                  accept="image/jpeg,image/jpg"
                  className="text-[13px] text-gray-700 w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Fila 4: Detalle — ancho completo, textarea resize libre */}
            <div className="mb-7">
              <label
                htmlFor="qm-detalle"
                className="block text-[11px] font-bold tracking-widest text-gray-800 uppercase mb-2"
              >
                Detalle de Pedido
              </label>
              <textarea
                id="qm-detalle"
                rows={6}
                placeholder="Detalle el trabajo a realizar, cantidad, terminación, tiempos, etc.."
                className="w-full bg-[#d8d8d8] border border-transparent rounded-[3px] px-4 py-3 text-[14px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-[#d0d0d0] transition-colors resize-y min-h-[140px]"
              />
            </div>

            {/* Botón Enviar — alineado derecha, borde rojo, texto rojo */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="border-2 border-red-600 text-red-600 bg-transparent px-10 py-2.5 text-[13px] font-bold tracking-[0.18em] uppercase hover:bg-red-600 hover:text-white transition-colors duration-200 rounded-[3px]"
              >
                Enviar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
