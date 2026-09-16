export const footerData = {
  intro: {
    title: "Estamos para ayudarte con tu proyecto",
    description: "Contanos qué necesitás producir. Podemos orientarte sobre formatos, materiales, terminaciones y alternativas de fabricación."
  },
  contact: {
    whatsapp: {
      label: "Por WhatsApp",
      schedule: "Lunes a viernes de 08:00 a 17:00 hs.",
      number: "+54 9 351 459-7594",
      href: "https://wa.me/5493514597594?text=Hola,%20me%20comunico%20desde%20la%20web%20de%20Industria%20Gr%C3%A1fica%20C%C3%B3rdoba.%20Quiero%20hacer%20una%20consulta."
    },
    web: {
      label: "Desde nuestra web",
      availability: "Formulario disponible las 24 horas.",
      faqBtn: {
        label: "Preguntas frecuentes",
        href: "/preguntas-frecuentes"
      },
      formBtn: {
        label: "Solicitar presupuesto",
        href: "/contacto#formulario"
      }
    }
  },
  navigation: [
    {
      title: "Empresa",
      titleColor: "text-brand-violet-soft",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Quiénes somos", href: "/quienes-somos" },
        { label: "Contacto", href: "/contacto#datos-contacto" }
      ]
    },
    {
      title: "Servicios",
      titleColor: "text-brand-rose-soft",
      links: [
        { label: "Servicios", href: "/servicios" },
        { label: "Offset", href: "/servicios#offset" },
        { label: "Troquelado", href: "/servicios#troquelados" },
        { label: "Encuadernación", href: "/servicios#encuadernacion" }
      ]
    },
    {
      title: "Para profesionales",
      titleColor: "text-brand-lavender",
      links: [
        { label: "Agencias e imprentas", href: "/agencias" },
        { label: "Producción confidencial", href: "/agencias#produccion-confidencial" }
      ]
    },
    {
      title: "Información útil",
      titleColor: "text-brand-lavender-pale",
      links: [
        { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        { label: "Cómo solicitar un presupuesto", href: "/preguntas-frecuentes#como-solicitar-presupuesto" },
        { label: "Ubicación y horarios", href: "/quienes-somos#ubicacion" }
      ]
    }
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/industriagrafica_ok/",
      icon: "instagram" as const
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61561856879737",
      icon: "facebook" as const
    }
  ],
  copyright: "© 2026 Industria Gráfica Córdoba. Impresión offset, troquelado, laminado y encuadernación en Córdoba."
};
