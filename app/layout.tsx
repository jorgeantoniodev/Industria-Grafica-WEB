import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cookies } from 'next/headers';
import { getEnvVars } from "@/lib/env";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const envVars = await getEnvVars();
  let isMaintenanceActive = envVars.MAINTENANCE_MODE !== 'false';

  if (isMaintenanceActive) {
    const secretToken = envVars.PREVIEW_ACCESS_TOKEN;
    if (secretToken && secretToken.trim() !== '') {
      const cookieStore = await cookies();
      const accessCookie = cookieStore.get('igc_preview_access');
      if (accessCookie) {
        const encoder = new TextEncoder();
        const data = encoder.encode(secretToken);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const expectedValue = Array.prototype.map.call(new Uint8Array(hashBuffer), x => ('00' + x.toString(16)).slice(-2)).join('');
        if (accessCookie.value === expectedValue) {
          isMaintenanceActive = false;
        }
      }
    }
  }

  if (isMaintenanceActive) {
    return {
      title: 'Sitio en construcción | Industria Gráfica Córdoba',
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  }

  return {
    title: {
      default: 'Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente',
      template: '%s | Industria Gráfica Córdoba',
    },
    description: 'Imprenta offset industrial desde Córdoba: pliegos de hasta 102 × 72 cm, troquelado, laminado y encuadernación. Más de 30 años de producción gráfica. Pedí tu presupuesto.',
  };
}

import Header, { NavItem } from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { footerData } from "@/content/footer-data";
import MaintenancePage from "./mantenimiento/page";

const SITE_NAVIGATION: NavItem[] = [
  { label: 'Inicio',               href: '/' },
  { label: 'Servicios',            href: '/servicios' },
  { label: 'Quienes somos?',       href: '/quienes-somos' },
  { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Ubicación',            href: '/quienes-somos#ubicacion' },
  { label: 'Contacto',             href: '/contacto' },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envVars = await getEnvVars();
  let isMaintenanceActive = envVars.MAINTENANCE_MODE !== 'false';

  if (isMaintenanceActive) {
    const secretToken = envVars.PREVIEW_ACCESS_TOKEN;
    if (secretToken && secretToken.trim() !== '') {
      const cookieStore = await cookies();
      const accessCookie = cookieStore.get('igc_preview_access');
      if (accessCookie) {
        const encoder = new TextEncoder();
        const data = encoder.encode(secretToken);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const expectedValue = Array.prototype.map.call(new Uint8Array(hashBuffer), x => ('00' + x.toString(16)).slice(-2)).join('');
        if (accessCookie.value === expectedValue) {
          isMaintenanceActive = false;
        }
      }
    }
  }

  if (isMaintenanceActive) {
    return (
      <html
        lang="es"
        suppressHydrationWarning
        className={`${lato.variable} h-full antialiased`}
        style={{ fontFamily: 'var(--font-lato), sans-serif' }}
      >
        <body className="min-h-full flex flex-col">
          <MaintenancePage />
        </body>
      </html>
    );
  }

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
