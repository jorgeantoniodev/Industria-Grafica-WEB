import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — Presupuesto de Imprenta Industrial en Córdoba',
  description:
    'Contactanos para obtener un presupuesto de producción offset, troquelado, encuadernación o marca blanca en Córdoba. Respondemos en menos de 24 horas.',
}

const TIPOS_TRABAJO = [
  'Seleccioná una opción',
  'Impresión offset a gran escala',
  'Troquelado y terminaciones',
  'Encuadernación industrial',
  'Folletería y catálogos',
  'Packaging y embalaje',
  'Marca blanca para agencias',
  'Otro',
]

const ES_CLIENTE = [
  'Seleccioná una opción',
  'Sí, ya trabajamos juntos',
  'No, es mi primer contacto',
]

export default function ContactoPage() {
  return (
    <main
      className="min-h-screen bg-gray-100 px-8 py-16 md:px-20 md:py-20"
      style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2">

        {/* ── Columna izquierda: Formulario ─────────────────── */}
        <section>
          <h1 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
            Hablemos de tu proyecto
          </h1>
          <p className="mb-8 text-base text-gray-600">
            Completá el formulario o escribinos directamente a{' '}
            <a
              href="mailto:contacto@industriagrafica.com.ar"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
            >
              contacto@industriagrafica.com.ar
            </a>
            . Respondemos en menos de 24 horas hábiles.
          </p>

          {/*
           * Formulario — UI sin Server Action por ahora.
           * Para conectarlo: crear app/contacto/actions.ts con 'use server'
           * y agregar action={enviarConsulta} al <form>.
           */}
          <form className="space-y-5">

            {/* Nombre / Apellido */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="mb-1 block text-sm font-bold text-slate-700">
                  Nombre*
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="mb-1 block text-sm font-bold text-slate-700">
                  Apellido*
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-bold text-slate-700">
                E-mail corporativo*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="empresa" className="mb-1 block text-sm font-bold text-slate-700">
                Empresa / Razón Social*
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Tipo de trabajo */}
            <div>
              <label htmlFor="tipo" className="mb-1 block text-sm font-bold text-slate-700">
                ¿Qué tipo de trabajo necesitás?*
              </label>
              <select
                id="tipo"
                name="tipo"
                required
                className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {TIPOS_TRABAJO.map((opt) => (
                  <option key={opt} value={opt === 'Seleccioná una opción' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Cliente existente */}
            <div>
              <label htmlFor="cliente" className="mb-1 block text-sm font-bold text-slate-700">
                ¿Ya trabajaste con nosotros?*
              </label>
              <select
                id="cliente"
                name="cliente"
                required
                className="w-full rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {ES_CLIENTE.map((opt) => (
                  <option key={opt} value={opt === 'Seleccioná una opción' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="mb-1 block text-sm font-bold text-slate-700">
                Descripción del proyecto*
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                placeholder="Describí brevemente: tipo de pieza, cantidad, terminación, plazos de entrega..."
                className="w-full resize-y rounded-sm border border-gray-400 bg-transparent p-2.5 text-sm text-slate-800 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-2.5">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-600">
                Quiero recibir novedades de Industria Gráfica
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99]"
            >
              Enviar consulta
            </button>

          </form>
        </section>

        {/* ── Columna derecha: Presentación + Testimonios ────── */}
        <aside>
          <h2 className="mb-5 text-3xl font-black text-slate-900">
            Trabajemos juntos para hacer realidad tu proyecto gráfico.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-600">
            Más de 30 años acompañando a marcas, agencias y corporaciones con producción
            offset de alta calidad en Córdoba.
            <br /><br />
            Nuestra infraestructura propia nos permite manejar volúmenes industriales con
            los plazos y estándares de calidad que tu negocio necesita.
          </p>

          {/* Bloque de testimonios — gradiente azul → índigo */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-700 to-indigo-800 p-8 text-white space-y-10">

            <blockquote>
              <div className="mb-3 text-5xl font-black text-blue-300 opacity-50 leading-none">❝</div>
              <p className="mb-4 text-xl font-medium leading-snug">
                "Trabajar con Industria Gráfica transformó nuestra capacidad de entrega.
                Calidad constante, sin sorpresas."
              </p>
              <cite className="block font-bold not-italic">— Directora de Marketing</cite>
              <span className="text-sm text-blue-200">Agencia de Comunicación, Córdoba</span>
            </blockquote>

            <blockquote>
              <div className="mb-3 text-5xl font-black text-blue-300 opacity-50 leading-none">❝</div>
              <p className="mb-4 text-xl font-medium leading-snug">
                "El servicio de marca blanca nos permite ofrecer producción industrial
                a nuestros clientes sin necesidad de planta propia."
              </p>
              <cite className="block font-bold not-italic">— Gerente de Operaciones</cite>
              <span className="text-sm text-blue-200">Corporación de Retail, Argentina</span>
            </blockquote>

          </div>

          {/* Link de regreso */}
          <div className="mt-8">
            <Link
              href="/"
              className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </aside>

      </div>
    </main>
  )
}
