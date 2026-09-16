import Link from 'next/link';
import { InstagramLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  titleColor: string;
  links: FooterLink[];
}

export interface FooterSocial {
  name: string;
  href: string;
  icon: "instagram" | "facebook";
}

export interface FooterProps {
  logo: {
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
    href?: string;
  };
  intro: {
    title: string;
    description: string;
  };
  contact: {
    whatsapp: {
      label: string;
      schedule: string;
      number: string;
      href: string;
    };
    web: {
      label: string;
      availability: string;
      faqBtn: FooterLink;
      formBtn: FooterLink;
    };
  };
  navigation: FooterColumn[];
  social: FooterSocial[];
  copyright: string;
}

export default function Footer({
  logo,
  intro,
  contact,
  navigation,
  social,
  copyright,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-[#404040]">
      <div className="max-w-[1750px] mx-auto px-8 sm:px-10 lg:px-16 pt-[50px] lg:pt-[60px]">
        {/* Zona Logo Superior */}
        <div className="mb-10">
          <Link href={logo.href || '/'} className="inline-flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={50}
              className="object-contain brightness-0 invert"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl font-black tracking-tight text-white leading-none">
                {logo.title}
              </span>
              {logo.subtitle && (
                <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase block">
                  {logo.subtitle}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Zona 1: Bloque Principal (Grilla 5 columnas en xl) */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20">
          
          {/* Columna Izquierda: Contacto */}
          <div className="w-full xl:w-[425px] shrink-0">
            <h2 className="text-[20px] lg:text-[21px] font-bold text-white mb-2.5 leading-snug">
              {intro.title}
            </h2>
            <p className="text-[16px] lg:text-[17px] text-neutral-400 leading-relaxed max-w-[400px] mb-8">
              {intro.description}
            </p>

            <div className="flex flex-col sm:flex-row xl:flex-col gap-4">
              {/* Tarjeta WhatsApp */}
              <div className="flex-1 bg-[#262626] rounded-[20px] p-5 sm:p-6">
                <h3 className="text-lg lg:text-[21px] font-bold text-white tracking-wide">
                  1. {contact.whatsapp.label}
                </h3>
                <p className="text-[16px] text-neutral-400 mt-1.5">
                  {contact.whatsapp.schedule}
                </p>
                <a
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-3 text-[21px] lg:text-[22px] font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 256 256" className="text-emerald-500 fill-current">
                    <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23-7.7,11.55a8,8,0,0,0-.6,8.22C106.67,131.62,124.38,149.33,132.78,153.53a8,8,0,0,0,8.22-.6l11.55-7.7,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L44,214l10.47-31.42a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"></path>
                  </svg>
                  {contact.whatsapp.number}
                </a>
              </div>

              {/* Tarjeta Web */}
              <div className="flex-1 bg-[#262626] rounded-[20px] p-5 sm:p-6">
                <h3 className="text-lg lg:text-[21px] font-bold text-white tracking-wide">
                  2. {contact.web.label}
                </h3>
                <p className="text-[16px] text-neutral-400 mt-1.5 mb-4">
                  {contact.web.availability}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={contact.web.faqBtn.href}
                    className="rounded-full px-6 py-3 text-base font-medium bg-[#363636] text-neutral-200 hover:bg-[#404040] hover:text-white border border-white/5 transition-all"
                  >
                    {contact.web.faqBtn.label}
                  </Link>
                  <Link
                    href={contact.web.formBtn.href}
                    className="rounded-full px-6 py-3 text-base font-medium bg-[#363636] text-neutral-200 hover:bg-[#404040] hover:text-white border border-white/5 transition-all"
                  >
                    {contact.web.formBtn.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Columnas de Navegación (4 columnas) */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
            {navigation.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className={`font-bold text-[17px] tracking-wide mb-5 ${col.titleColor}`}>
                  {col.title}
                </h3>
                <ul className="flex flex-col space-y-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-[17px] text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Zona 2: Separador */}
        <div className="w-full border-t border-[#404040] my-12 lg:my-16"></div>

        {/* Zona 3: Franja Inferior */}
        <div className="pb-32 lg:pb-20 flex flex-col items-center">
          <span className="text-[14px] uppercase tracking-widest text-neutral-400 mb-5 block text-center">
            Seguinos en las redes sociales
          </span>
          <div className="flex items-center gap-4">
            {social.map((s, i) => {
              const Icon = s.icon === 'instagram' ? InstagramLogo : FacebookLogo;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguinos en ${s.name}`}
                  className="w-12 h-12 rounded-full border-2 border-neutral-700 bg-transparent flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-400 hover:bg-neutral-800/50 transition-all"
                >
                  <Icon size={26} weight="fill" />
                </a>
              );
            })}
          </div>
          <p className="text-[15px] text-neutral-400 mt-8 max-w-2xl text-center leading-relaxed">
            {copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
