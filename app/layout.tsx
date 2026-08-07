import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente',
    template: '%s | Industria Gráfica Córdoba',
  },
  description:
    'Producción offset a gran escala, troquelados y encuadernación en Córdoba. Más de 30 años de trabajo gráfico industrial con compromiso real de calidad y plazos.',
};

import Header from "@/components/header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
