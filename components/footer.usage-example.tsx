import Footer from './footer';
import { footerData } from '@/content/footer-data';

/**
 * Plantilla de uso para el componente Footer.
 * 
 * Para integrarlo en el sitio, simplemente importá el componente Footer
 * e inyectá la data de `content/footer-data.ts`.
 * 
 * Ejemplo de uso en `app/layout.tsx` o cualquier página:
 */
export default function FooterUsageExample() {
  // Logo específico para inyectar en el footer, reutilizando el path original
  const logoProps = {
    src: "/logo.png",
    alt: "Industria Gráfica Córdoba Logo",
    title: "Industria Gráfica",
    subtitle: "IMPRENTA INDUSTRIAL",
    href: "/",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Contenido principal de tu página/layout */}
        <div className="p-8">
          <h1>Contenido Principal</h1>
        </div>
      </main>
      
      {/* Footer inyectado al final del layout */}
      <Footer 
        logo={logoProps}
        intro={footerData.intro}
        contact={footerData.contact}
        navigation={footerData.navigation}
        social={footerData.social}
        copyright={footerData.copyright}
      />
    </div>
  );
}
