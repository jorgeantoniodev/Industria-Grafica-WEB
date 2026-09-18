import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente',
    template: '%s | Industria Gráfica Córdoba',
  },
  description:
    'Imprenta offset industrial desde Córdoba: pliegos de hasta 102 × 72 cm, troquelado, laminado y encuadernación. Más de 30 años de producción gráfica. Pedí tu presupuesto.',
};

import Header, { NavItem } from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { footerData } from "@/content/footer-data";

const SITE_NAVIGATION: NavItem[] = [
  { label: 'Inicio',               href: '/' },
  { label: 'Servicios',            href: '/servicios' },
  { label: 'Quienes somos?',       href: '/quienes-somos' },
  { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Ubicación',            href: '/quienes-somos#ubicacion' },
  { label: 'Contacto',             href: '/contacto' },
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
        <Header 
          logo={{
            src: "/logo.png",
            alt: "Industria Gráfica Córdoba — Logo",
            title: "Industria Gráfica",
            subtitle: "Imprenta Industrial"
          }}
          navigation={SITE_NAVIGATION}
          theme={{
            accentColor: "#5332ED"
          }}
        />
        {children}
        <Footer
          logo={{
            src: "/logo.png",
            alt: "Industria Gráfica Córdoba — Logo",
            title: "Industria Gráfica",
            subtitle: "Imprenta Industrial"
          }}
          intro={footerData.intro}
          contact={footerData.contact}
          navigation={footerData.navigation}
          social={footerData.social}
          copyright={footerData.copyright}
        />
        <WhatsAppButton 
          phoneNumber="5493514597594"
          message="Hola Industria Gráfica, me gustaría hacer una consulta"
        />
      </body>
    </html>
  );
}
