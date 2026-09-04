import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

/**
 * Fuente extraída del DevTools de taylor.com:
 *   font-family: Lato, sans-serif
 *   font-size: 82px (heading)
 *   font-weight: 900 (Black)
 * Cargamos los 3 pesos necesarios: 400 (body), 700 (semibold), 900 (Black headings)
 */
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const isMaintenance = process.env.MAINTENANCE_MODE === 'true';

export const metadata: Metadata = {
  title: {
    default: 'Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente',
    template: '%s | Industria Gráfica Córdoba',
  },
  description:
    'Producción offset a gran escala, troquelados y encuadernación en Córdoba. Más de 30 años de trabajo gráfico industrial con compromiso real de calidad y plazos.',
  robots: isMaintenance
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

import Header, { NavItem } from "@/components/header";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import MaintenanceOverlay from "@/components/maintenance-overlay";

const SITE_NAVIGATION: NavItem[] = [
  {
    label: 'Soluciones Industriales',
    items: [
      { label: 'Impresión Offset Comercial',  href: '/soluciones-industriales#offset' },
      { label: 'Troquelados & Packaging',     href: '/soluciones-industriales#troquelados' },
      { label: 'Encuadernación & Editorial',  href: '/soluciones-industriales#encuadernacion' },
      { label: 'Agencias & Marca Blanca',     href: '/agencias' },
    ],
  },
  {
    label: 'La Planta',
    href: '/la-planta',
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${lato.variable} h-full antialiased`}
      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
    >
      <body className="min-h-full flex flex-col">
        <MaintenanceOverlay
          maintenanceMode={isMaintenance}
          phoneNumber="5493514597594"
          message="Hola Industria Gráfica, me gustaría hacer una consulta"
          logo={{
            src: "/logo.png",
            alt: "Industria Gráfica Córdoba — Logo",
            title: "Industria Gráfica",
            subtitle: "Imprenta Industrial",
          }}
        />
        <Header 
          logo={{
            src: "/logo.png",
            alt: "Industria Gráfica Córdoba — Logo",
            title: "Industria Gráfica",
            subtitle: "Imprenta Industrial"
          }}
          navigation={SITE_NAVIGATION}
          cta={{
            label: "Contacto",
            href: "/contacto"
          }}
          theme={{
            accentColor: "#2563eb" // Azul blue-600 oficial original
          }}
        />
        {children}
        <WhatsAppButton 
          phoneNumber="5493514597594"
          message="Hola Industria Gráfica, me gustaría hacer una consulta"
        />
      </body>
    </html>
  );
}
