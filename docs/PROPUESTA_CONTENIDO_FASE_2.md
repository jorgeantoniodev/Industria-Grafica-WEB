# FASE 2A — PROPUESTA DE CONTENIDO VERAZ Y MÍNIMO PUBLICABLE (REVISADA)

**Proyecto:** Industria Gráfica Córdoba (`Industria-Grafica-WEB`)
**Fecha:** Septiembre 2026
**Estado:** Documento de referencia y fuente de verdad para la Fase 2B.

---

## 1. Resumen Editorial

Este documento define la totalidad del contenido veraz, medido y respaldado para Industria Gráfica Córdoba. Su objetivo es asegurar que cada texto del sitio refleje fielmente la capacidad productiva del taller, utilizando las confirmaciones oficiales provistas por Lucas y eliminando promesas absolutas, tecnicismos vacíos o jerga de software.

### Criterios Editoriales Consolidados
1. **Precisión técnica:** Se distingue rigurosamente entre tamaño de pliego (soporte) y área máxima de impresión.
2. **Alcance geográfico real:** Se comunica **"desde Córdoba"**, sin garantizar cobertura nacional ni regional no respaldada.
3. **Confidencialidad profesional:** Se formula como **"respetando la confidencialidad de cada proyecto"**, sin promesas legales absolutas.
4. **Alivio de gestión para agencias:** Se enfatiza **"para que puedas concentrarte en la relación con tu cliente"**, eliminando cualquier garantía de plazos ("en tiempo y forma").
5. **Packaging y soportes diferenciados:** Se formula con exactitud: **"Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas."**
6. **Casos de éxito:** Redirección temporal **HTTP 307** hacia `/soluciones-industriales` hasta contar con proyectos documentados.
7. **Formulario y Resend:** Ocultamiento temporal del checkbox de newsletter (al no existir sistema de suscripciones activo) y visualización del correo del visitante como texto plano en el HTML para evitar advertencias de phishing en clientes de correo, conservando `Reply-To`.
8. **Preservación de identidad visual y SEO:** Diseño, gradientes, paleta y componentes se conservan. En metadata solo se corrigen descripciones con claims no verificados (la fase SEO completa se abordará al final).
9. **Frase institucional aprobada en Home:** Incorporación destacada en la página principal:
   > *"Nos dedicamos a transformar tus ideas en realidades tangibles desde hace más de 30 años. Ofrecemos soluciones que destacan por su creatividad, por nuestro compromiso de atención y seguimiento a nuestros clientes."*

---

## 2. Matriz Completa de Textos Actuales y Propuestos

> **Convención de decisiones:** `CONSERVAR` | `REESCRIBIR` | `ELIMINAR` | `OCULTAR` | `REQUIERE CONFIRMACIÓN`

### 2.1 Header y Navegación Global (`components/header.tsx` y `app/layout.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Global | Metadata Title | "Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente" | `CONSERVAR` | "Industria Gráfica Córdoba — Imprenta Industrial en Barrio San Vicente" | Nombre y ubicación confirmados | — |
| Global | Metadata Description | "Producción offset a gran escala, troquelados y encuadernación en Córdoba. Más de 30 años de trabajo gráfico industrial con compromiso real de calidad y plazos." | `REESCRIBIR` | "Imprenta offset industrial desde Córdoba: pliegos de hasta 102 × 72 cm, troquelado, laminado y encuadernación. Más de 30 años de producción gráfica. Pedí tu presupuesto." | Elimina "compromiso real de calidad y plazos" (claim). Datos confirmados | Corrige solo el texto falso dentro de metadata sin tocar arquitectura SEO. |
| Global | Logo Header | "Industria Gráfica - Imprenta Industrial" | `CONSERVAR` | "Industria Gráfica - Imprenta Industrial" | Nombre y rubro confirmados | Respeta no usar "Premat" comercialmente. |
| Global | Nav Items | "Soluciones Industriales" (con sub-items: Offset, Troquelados, Encuadernación, Agencias) y "La Planta" | `CONSERVAR` | Idénticos | Estructura aprobada | Enlaces funcionales confirmados. |
| Global | CTA Header | "Contacto" | `CONSERVAR` | "Contacto" | Recorrido a `/contacto` | Directo y claro. |

---

### 2.2 Página Principal (`/` — `app/page.tsx`, `components/hero.tsx`, `components/services-section.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Hero H1 | "30 años de producción gráfica en Córdoba, al servicio de tu marca." | `REESCRIBIR` | "Más de 30 años de producción gráfica en Córdoba, al servicio de tu marca." | Lucas confirmó "más de 30 años" | Conserva gradiente y estilo visual. |
| `/` | Hero H2 | "Imprenta Offset Industrial — Córdoba, Argentina" | `CONSERVAR` | "Imprenta Offset Industrial — Córdoba, Argentina" | Datos confirmados | Descripción sobria. |
| `/` | Hero P | "Troquelado, encuadernación y marca blanca para agencias y corporaciones." | `REESCRIBIR` | "Impresión offset, troquelado, encuadernación y producción confidencial para agencias y empresas." | Servicios confirmados | Reemplaza "marca blanca" por "producción confidencial". |
| `/` | Hero CTA | "Hablemos de tu proyecto" | `CONSERVAR` | "Hablemos de tu proyecto" | Orientado a consulta | Enlaza a `/contacto`. |
| `/` | Audiencias 1 | Badge: "MÁS DE 30 AÑOS EN EL RUBRO" | `CONSERVAR` | "MÁS DE 30 AÑOS EN EL RUBRO" | Confirmado | Respaldo temporal real. |
| `/` | Audiencias 1 | Título: "Marca blanca para agencias" | `REESCRIBIR` | "Producción confidencial para agencias" | Confirmado | Más comprensible para intermediarios. |
| `/` | Audiencias 1 | Headline: "Escala tus operaciones sin límites." | `REESCRIBIR` | "Tu cliente sigue siendo tu cliente. Nosotros nos ocupamos de la producción." | Regla: eliminar "sin límites" | Formulación aprobada. |
| `/` | Audiencias 1 | Descripción: "Proveemos infraestructura gráfica completa. Operamos en segundo plano como tu socio de producción, garantizando calidad superior y márgenes rentables para tu agencia." | `REESCRIBIR` | "Imprimimos, troquelamos y encuadernamos respetando la confidencialidad de cada proyecto. Operamos en segundo plano como tu taller de producción, para que puedas concentrarte en la relación con tu cliente." | Regla: eliminar "bajo estricta reserva" y promesas de plazos | Incorpora las dos correcciones obligatorias del usuario. |
| `/` | Audiencias 1 | Feature 1: "Producción offset a gran escala" / "Capacidad para imprimir tiradas masivas con tiempos de respuesta inmejorables." | `REESCRIBIR` | "Capacidad de pliego offset" / "Impresión en pliegos de hasta 102 × 72 cm (área máxima de impresión 100 × 70 cm) en tiradas donde el offset marca la diferencia." | Formato Roland 600 confirmado | Diferencia con precisión pliego máximo y área de impresión. |
| `/` | Audiencias 1 | Feature 2: "Acabados complejos" / "Desde barnices sectorizados hasta cortes especiales que añaden valor premium." | `REESCRIBIR` | "Terminaciones en planta" / "Plastificado OPP mate o brillante, barniz UV, troquelado, perforado y doblado." | Lista de terminaciones de Lucas | Quita "barnices sectorizados". |
| `/` | Audiencias 2 | Badge: "ALTO VOLUMEN" | `CONSERVAR` | "ALTO VOLUMEN" | Confirmado | Coherente con offset. |
| `/` | Audiencias 2 | Headline: "Soluciones institucionales de alto rendimiento." | `REESCRIBIR` | "Papelería institucional y documentación corporativa." | Regla: eliminar jerga SaaS | Directo y tangible. |
| `/` | Audiencias 2 | Descripción: "Producimos formularios, recetarios, revistas institucionales y catálogos corporativos. Trabajamos bajo planificación industrial" | `REESCRIBIR` | "Producimos formularios continuos, comprobantes fiscales, recetarios, carpetas y catálogos. Planificación y seguimiento directo de cada pedido." | Catálogo y seguimiento confirmados por Lucas | Incluye seguimiento directo. |
| `/` | Audiencias 2 | Feature 1: "Formularios y fichas médicas" / "Impresión de alta precisión para documentos corporativos y sector salud." | `REESCRIBIR` | "Comprobantes y formularios" / "Facturas, remitos, recibos, planillas y blocs recetarios Rp." | Piezas confirmadas por Lucas | Nombra piezas reales. |
| `/` | Audiencias 2 | Feature 2: "Calidad sostenida en el tiempo" / "Mismo estándar de calidad, plazos y atención en cada tirada, año tras año." | `REESCRIBIR` | "Atención y seguimiento directo" / "Atención personalizada y posibilidad de coordinar visitas a planta para el seguimiento de la producción." | Visitas a planta confirmadas | Resalta el diferencial de cercanía y control visual. |
| `/` | Audiencias 3 | Badge: "DISEÑO A MEDIDA" | `REESCRIBIR` | "PACKAGING Y PIEZAS A MEDIDA" | Claridad de rubro | No confundir con estudio de diseño. |
| `/` | Audiencias 3 | Headline: "Materiales que hacen destacar tu identidad." | `REESCRIBIR` | "Packaging, etiquetas y materiales impresos para tu marca." | Tangible | Nombra productos reales. |
| `/` | Audiencias 3 | Descripción: "Trabajos de diseño no repetitivo, packaging chico y materiales de marca para negocios medianos. Llevamos tu identidad visual a otro nivel." | `REESCRIBIR` | "Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas. Asesoramiento sobre cantidades mínimas según el tipo de pieza." | Corrección obligatoria de packaging | Incorpora la asociación correcta de soportes y la recomendación de Lucas sobre tiradas. |
| `/` | Audiencias 3 | Feature 1: "Packaging personalizado" / "Cajas y empaques a medida para productos boutique y de consumo." | `REESCRIBIR` | "Packaging y estuchería" / "Cajas, estuches, fajas, marbetes y bolsas en cartulinas encapadas o cartón microcorrugado." | Materiales de Lucas | Especifica cartulinas encapadas y microcorrugado. |
| `/` | Audiencias 3 | Feature 2: "Impresión variable" / "Personalización de cada pieza para campañas de marketing únicas." | `REESCRIBIR` | "Piezas comerciales y promocionales" / "Afiches, volantes, almanaques, stickers en papel, individuales y posavasos." | Piezas publicitarias de Lucas | Elimina "impresión variable". |
| `/` | Logos | Carrusel de 17 marcas | `CONSERVAR` | 17 logos actuales | Confirmados por Lucas como clientes reales | Prueba de trayectoria sin atribución de casos no documentados. |
| `/` | Servicios Header | Badge: "Capacidad Industrial & Producción" / Highlight: "Potenciá tu marca con Industria Gráfica." | `CONSERVAR` | Idénticos | Aprobados | Estructura conservada. |
| `/` | Servicios Header | Subtitle y Description por defecto | `REESCRIBIR` | Subtitle: "Lo que producimos en nuestra planta" / Description: **"Nos dedicamos a transformar tus ideas en realidades tangibles desde hace más de 30 años. Ofrecemos soluciones que destacan por su creatividad, por nuestro compromiso de atención y seguimiento a nuestros clientes."** | Pedido adicional del usuario | Se integra la frase institucional solicitada exactamente en la descripción principal de la sección de servicios. |
| `/` | Servicio 1 | "Corporativo & Salud" / "Papelería institucional e insumos médicos a gran escala desde Córdoba. Formularios, recetarios y carpetas corporativas." | `REESCRIBIR` | "Corporativo & Institucional" / "Papelería administrativa y comercial desde Córdoba: formularios continuos, comprobantes fiscales, carpetas institucionales y blocs recetarios Rp." | Corrección "desde Córdoba" | Elimina "insumos médicos" y ajusta geografía. |
| `/` | Servicio 2 | "Impresión Offset Comercial" / "Imprenta offset B2B para grandes tiradas. Catálogos, folletería comercial y papelería masiva con capacidad industrial." | `REESCRIBIR` | "Impresión Offset Comercial" / "Folletería, catálogos y papelería en tiradas medianas y altas. Impresión en pliegos de hasta 102 × 72 cm (área imprimible 100 × 70 cm) en cuatro colores o monocolor." | Prensas Roland 600, GTO, Komori y Multilith confirmadas | Diferencia pliego de área imprimible. |
| `/` | Servicio 3 | "Troquelados & Packaging" / "Packaging personalizado para empresas: cajas troqueladas y acabados premium con barniz UV o laminado." | `REESCRIBIR` | "Troquelados & Packaging" / "Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas y bolsas. Troquelado, plastificado OPP y barniz UV." | Corrección de packaging | Nombra acabados confirmados de Lucas. |
| `/` | Servicio 4 | "Encuadernación & Editorial" / "Imprimió tu libro con respaldo industrial. Lomo cuadrado (Hotmelt), encuadernación abrochada y servicios editoriales para escritores y editoriales." | `REESCRIBIR` | "Encuadernación & Editorial" / "Libros, revistas, agendas, cuadernos y catálogos. Encuadernación abrochada a caballo, cosida (tapa blanda o dura), pegada (binder) y anillada." | Encuadernaciones de Lucas | Quita "Hotmelt" y corrige el typo "Imprimió". |

---

### 2.3 Soluciones Industriales (`/soluciones-industriales` — `app/soluciones-industriales/page.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/soluciones-industriales` | Metadata Description | "Offset comercial, troquelados y encuadernación industrial en Barrio San Vicente, Córdoba. Grandes tirajes con calidad sostenida, packaging a medida y cumplimiento de plazos." | `REESCRIBIR` | "Impresión offset, troquelado, laminado y encuadernación desde Córdoba. Producción de catálogos, packaging, papelería y libros. Pedí presupuesto." | Corrección "desde Córdoba" | Elimina promesas de plazos. |
| `/soluciones-industriales` | Hero P | "Producción offset de alta complejidad, troquelados y encuadernación para empresas, agencias y distribuidores en todo el país." | `REESCRIBIR` | "Producción offset, troquelado, laminado y encuadernación para empresas, agencias e imprentas desde Córdoba." | Corrección: "desde Córdoba" | Elimina "en todo el país" y "alta complejidad". |
| `/soluciones-industriales` | Offset H2 y P | "Impresión Offset Comercial" / "Producción física pesada para grandes tirajes, folletería masiva y papelería comercial con calidad sostenida y cumplimiento estricto de plazos. Trabajamos con papeles estucados, offset y especiales en pliegos de hasta 70×100 cm." | `REESCRIBIR` | "Impresión Offset Comercial" / "Producción de folletos, catálogos, revistas y papelería comercial en tiradas donde el offset resulta conveniente. Cuatro máquinas offset para optimizar trabajos monocolor y full color en pliegos de hasta 102 × 72 cm (área máxima de impresión 100 × 70 cm). Trabajamos papeles industriales (obra, ilustración, kraft, comercial, bookcel y NAT) de 70 a 350 g." | Roland 600 y papeles confirmados | Corrige pliego (102 × 72 cm) vs área imprimible (100 × 70 cm) y quita promesas de plazos. |
| `/soluciones-industriales` | Troquelados H2 y P | "Troquelados y Terminaciones Especiales" / "Estuches, cajas personalizadas, troquelados complejos y acabados con laminado en polipropileno o barniz UV. Diseñamos y fabricamos troqueles propios para mayor flexibilidad de producción." | `REESCRIBIR` | "Troquelados y Terminaciones Especiales" / "Packaging en papel, cartulina o microcorrugado: cajas, estuches, etiquetas, fajas, marbetes y bolsas. Cartulinas encapadas (duplex, triplex, rígida, Naturale) hasta 350 g y cartón microcorrugado simple o montado. Terminaciones con plastificado OPP mate o brillante, barniz UV brillante, troquelado, perforado, puntillado, redondeado de puntas y pegado." | Corrección de packaging; terminaciones confirmadas | Elimina "fabricamos troqueles propios". Detalla materiales y acabados reales. |
| `/soluciones-industriales` | Encuadernación H2 y P | "Encuadernación de Libros y Revistas" / "Trenes de encuadernación abrochada y lomo cuadrado perfecto (Hotmelt) para libros, revistas y catálogos. Capacidad para tirajes desde 500 hasta 50.000 ejemplares." | `REESCRIBIR` | "Encuadernación de Libros, Revistas y Catálogos" / "Encuadernación abrochada a caballo, cosida con tapa blanda o tapa dura, pegada (binder) y anillado metálico o plástico. Servicio de intercalado de pliegos para revistas y libros, encapado de tapas para agendas y cuadernos, y retractilado termofusionado." | Lista de encuadernación de Lucas | Elimina "Hotmelt", "trenes" y tiradas "500 a 50.000". |

---

### 2.4 La Planta (`/la-planta` — `app/la-planta/page.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/la-planta` | Metadata Description | "Conocé la planta de producción de Industria Gráfica Córdoba en Barrio San Vicente: maquinaria offset, trenes de encuadernación, capacidad técnica y equipo." | `REESCRIBIR` | "Conocé la planta de Industria Gráfica Córdoba en Entre Ríos 2650, Barrio San Vicente: prensas offset, troquelado, laminado y encuadernación. Coordiná una visita técnica." | Dirección y visitas confirmadas | Elimina "trenes de encuadernación". |
| `/la-planta` | Eyebrow | "Barrio San Vicente · Córdoba" | `REESCRIBIR` | "Entre Ríos 2650 · Barrio San Vicente · Córdoba" | Dirección confirmada | Precisión física. |
| `/la-planta` | Hero H1 y P | "La Planta / Oficio en movimiento" / "Offset, troquelado y encuadernación bajo un mismo techo. Más de 30 años de producción gráfica industrial en Córdoba Capital." | `CONSERVAR` | Textos idénticos | Todo verificado | Mantiene sobriedad. |
| `/la-planta` | Maquinaria H2 y P | "Capacidad técnica y maquinaria" / "Prensas offset de 4 y 5 cuerpos, troqueladora de cama plana, trenes de encuadernación abrochada y hotmelt, guillotinas y acabado en barniz UV y laminado BOPP." | `REESCRIBIR` | "Equipamiento de taller y capacidades" / "Contamos con cuatro prensas offset para cubrir distintos formatos y tipos de tirada: Roland 600 (full color, pliego máx. 102 × 72 cm, impresión máx. 100 × 70 cm), Heidelberg GTO (full color, pliego máx. 49 × 36 cm, impresión máx. 47 × 34 cm), Komori (monocolor, pliego máx. 65 × 47,5 cm, impresión máx. 64 × 45 cm) y Multilith (monocolor, pliego máx. 36 × 24 cm, impresión máx. 34 × 22 cm). Área de troquelado, plastificado OPP mate o brillante, barniz UV y encuadernación." | Parque oficial de máquinas de Lucas | Elimina "prensas de 4 y 5 cuerpos", "hotmelt", "guillotinas" (no validada aún) y "BOPP". Detalla pliegos e impresiones máximas. |
| `/la-planta` | MediaGrid Textos | Title: "Oficio en movimiento" / Desc: "Offset, troquelado y encuadernación, en la planta de Barrio San Vicente." / CTAs a `/contacto` y `/soluciones-industriales` | `CONSERVAR` | Textos idénticos | Enlaces ya corregidos | Sobrio y coherente. |

---

### 2.5 Agencias y Marca Blanca (`/agencias` — `app/agencias/page.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/agencias` | Metadata Description | "Servicios B2B para agencias de publicidad, estudios de diseño y distribuidores. Tarifas gremiales, marca blanca y producción confidencial en Córdoba." | `REESCRIBIR` | "Producción gráfica confidencial para agencias de publicidad, estudios de diseño e imprentas desde Córdoba. Impresión offset, troquelado y terminaciones bajo tu marca." | Corrección "desde Córdoba" | Elimina "B2B" y "tarifas gremiales". |
| `/agencias` | Eyebrow | "Servicios B2B2B" | `REESCRIBIR` | "Producción para agencias e imprentas" | Regla: eliminar jerga SaaS | Lenguaje profesional gráfico. |
| `/agencias` | Hero H1 | "Agencias y Marca Blanca" | `CONSERVAR` | "Agencias y Marca Blanca" | Concepto de industria | Mantiene span visual. |
| `/agencias` | Hero P | "Producción confidencial bajo tu marca. Tarifas gremiales para agencias, estudios de diseño y distribuidores con entrega a todo el país." | `REESCRIBIR` | "Producción confidencial para agencias, estudios e imprentas. Trabajamos como tu taller de producción gráfica desde Córdoba, respetando la confidencialidad de cada proyecto." | Correcciones: "desde Córdoba" y "respetando la confidencialidad..." | Elimina "tarifas gremiales" y "entrega a todo el país". |
| `/agencias` | Sección 2 H2 | "Tu marca, nuestra producción" | `CONSERVAR` | "Tu marca, nuestra producción" | Excelente síntesis | Directo y claro. |
| `/agencias` | Sección 2 P | "Trabajamos como planta de producción invisible para agencias que necesitan entregar proyectos de impresión de alta complejidad sin infraestructura propia. Confidencialidad total garantizada." | `REESCRIBIR` | "Trabajamos como proveedor de marca blanca, respetando la confidencialidad de cada proyecto. Tu cliente sigue siendo tu cliente: nosotros nos ocupamos de la producción para que puedas concentrarte en la relación con tu cliente." | Correcciones textuales obligatorias del usuario | Elimina "confidencialidad total garantizada", "alta complejidad" y "en tiempo y forma". |

---

### 2.6 Contacto y Formulario (`/contacto` — `app/contacto/page.tsx` y `components/contact-form.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Texto propuesto exacto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/contacto` | Encabezado H1 y P | "Hablemos de tu proyecto" / "Completá el formulario de solicitud o escribinos directamente a presupuestos@prematgrafica.com.ar ." | `CONSERVAR` | Idénticos | Funcional y verificado | Correo confirmado por Lucas. |
| `/contacto` | Aside H2 | "Producción industrial con respaldo real." | `CONSERVAR` | "Producción industrial con respaldo real." | Solidez de taller | Tono firme. |
| `/contacto` | Aside P | "Producción offset industrial, troquelados y encuadernación en Córdoba. Nuestra infraestructura propia nos permite responder a las exigencias técnicas y los estándares de calidad que tu empresa necesita." | `REESCRIBIR` | "Prensas offset, troquelado, laminado y encuadernación en nuestra planta de Barrio San Vicente. Atención personalizada, seguimiento directo y posibilidad de coordinar visitas a planta para supervisar tu tirada." | Visitas a planta confirmadas | Resalta el diferencial de atención personalizada presencial. |
| `/contacto` | Datos NAP | Dirección: "Entre Ríos 2650, Barrio San Vicente" / Horario: "Lunes a Viernes de 8:00 a 17:00 hs." | `CONSERVAR` | Idénticos | Confirmados por Lucas | Datos físicos exactos. |
| `/contacto` | Canal WhatsApp | "Para consultas operativas urgentes o envío de muestras:" / "Contactar por WhatsApp" | `REESCRIBIR` | "Para consultas rápidas o coordinar una visita a planta:" / "Contactar por WhatsApp" | Visitas confirmadas | Reemplaza "envío de muestras" por visita a planta. |
| `ContactForm` | Selector Tipo | "Impresión offset a gran escala" | `REESCRIBIR` | "Impresión offset comercial" | Coherencia técnica | No intimida a pymes. |
| `ContactForm` | Selector Tipo | "Marca blanca para agencias" | `REESCRIBIR` | "Producción confidencial / Marca blanca" | Coherencia con `/agencias` | — |
| `ContactForm` | Checkbox News | `<input type="checkbox" name="newsletter" ...> Quiero recibir novedades...` | `OCULTAR` | Ocultar temporalmente del renderizado del componente | Instrucción obligatoria del usuario | Al no existir base de datos, CRM ni gestión de listas de correo (solo viaja como flag en el email de cotización), no se debe pedir consentimiento de newsletter al visitante. |

---

### 2.7 Casos de Éxito (`/casos-de-exito` — `app/casos-de-exito/page.tsx`)

| Página / Componente | Sección | Texto actual exacto | Decisión | Propuesta | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/casos-de-exito` | Toda la página | "Casos y Fichas de Producción" / "Estamos documentando..." | `OCULTAR` | Implementar redirección temporal **HTTP 307** hacia `/soluciones-industriales` mediante `redirect('/soluciones-industriales')` en `app/casos-de-exito/page.tsx`. | Corrección obligatoria: redirección temporal 307 | No se usa 301 (permanente) porque la sección volverá cuando existan casos reales documentados. |

---

### 2.8 Correo Electrónico (`app/actions/contact.ts`)

| Componente | Sección | Texto / Código actual | Decisión | Código propuesto | Evidencia | Observaciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Email HTML | Fila E-mail visitante | `<tr><td>E-mail:</td><td><a href="mailto:${safeMailto}">${safeEmail}</a></td></tr>` | `REESCRIBIR` | `<tr><td>E-mail:</td><td>${safeEmail}</td></tr>` | Advertencia de clientes de correo / Resend | Se remueve el hipervínculo `mailto:` dentro del cuerpo HTML para prevenir alertas de phishing o spoofing, conservando `reply_to: email` en el encabezado de Resend. |
| Email Headers | Encabezado Reply-To | `reply_to: email` | `CONSERVAR` | `reply_to: email` | Cabecera estándar de correo | Permite a la imprenta responder directamente al remitente desde su cliente de correo. |

---

## 3. Lista de Afirmaciones Eliminadas

1. **"Escala tus operaciones sin límites"** (`app/page.tsx`): Claim prohibido.
2. **"Tiempos de respuesta inmejorables"** (`app/page.tsx`): Superlativo no verificable.
3. **"Garantizando calidad superior y márgenes rentables"** (`app/page.tsx`): Promesa absoluta.
4. **"Soluciones para el Alcance de tus Operaciones"** (`components/services-section.tsx`): Jerga abstracta.
5. **"Capacidad industrial líder y modelos de servicio escalables"** (`components/services-section.tsx`): Jerga SaaS.
6. **"Lomo cuadrado (Hotmelt)"** (`app/page.tsx` y `/soluciones-industriales`): No confirmado activo.
7. **"Pliegos de hasta 70×100 cm"** o **"Pliegos de hasta 100×70 cm"**: Corregido: pliego máximo es 102 × 72 cm; 100 × 70 cm es área de impresión.
8. **"Diseñamos y fabricamos troqueles propios"** (`/soluciones-industriales`): Matricería in-house no confirmada.
9. **"Trenes de encuadernación abrochada y lomo cuadrado perfecto"** (`/soluciones-industriales`): Término pomposo no respaldado.
10. **"Tirajes desde 500 hasta 50.000 ejemplares"** (`/soluciones-industriales`): Rango arbitrario eliminado.
11. **"Prensas offset de 4 y 5 cuerpos"** (`/la-planta`): Claim falso; el parque real es Roland 600, GTO, Komori y Multilith.
12. **"Laminado BOPP"** (`/la-planta`): Reemplazado por plastificado OPP.
13. **"Guillotinas"** (`/la-planta`): Excluida de menciones explícitas de capacidad mientras no esté formalmente validada.
14. **"Servicios B2B2B"** (`/agencias`): Jerga de startup incomprensible.
15. **"Tarifas gremiales"** (`/agencias`): Sin lista pública confirmada.
16. **"Entrega a todo el país" / "En todo el país" / "La región"**: Acotado a "desde Córdoba".
17. **"Confidencialidad total garantizada"** o **"bajo estricta reserva"**: Sustituido por "respetando la confidencialidad de cada proyecto".
18. **"Para que entregues en tiempo y forma"**: Sustituido por "para que puedas concentrarte en la relación con tu cliente".
19. **"Compromiso real de calidad y plazos"** (`app/layout.tsx` metadata): Cliché genérico no medible.
20. **"Insumos médicos"** (`app/page.tsx`): Producen recetarios Rp, no insumos físicos.
21. **"Impresión variable"** (`app/page.tsx`): Propia de digital, no confirmada en offset.
22. **"Barnices sectorizados"** (`app/page.tsx`): No confirmado.
23. **"Envío de muestras"** (`/contacto`): Sustituido por visita técnica presencial a planta.

---

## 4. Lista de Información Confirmada Incorporada

1. **Parque de máquinas offset exacto (distinguiendo pliego de impresión):**
   * **Roland 600:** Full color | Pliego máx. 102 × 72 cm | Impresión máx. 100 × 70 cm.
   * **Heidelberg GTO:** Full color | Pliego máx. 49 × 36 cm | Impresión máx. 47 × 34 cm.
   * **Komori:** Monocolor | Pliego máx. 65 × 47,5 cm | Impresión máx. 64 × 45 cm.
   * **Multilith:** Monocolor | Pliego máx. 36 × 24 cm | Impresión máx. 34 × 22 cm.
2. **Materiales y gramajes de taller:**
   * Papeles industriales: obra, ilustración, kraft, comercial, bookcel, NAT (70 a 350 g).
   * Cartulinas encapadas: duplex, triplex, rígida, Naturale (hasta 350 g).
   * Cartón microcorrugado simple o montado con cartulina impresa.
3. **Servicios y terminaciones reales:**
   * Abrochado a caballo.
   * Encuadernación cosida (tapa blanda o tapa dura).
   * Encuadernación pegada (binder).
   * Anillado metálico o plástico.
   * Intercalado de pliegos para revistas y libros.
   * Barniz UV brillante.
   * Plastificado OPP mate o brillante.
   * Troquelado, perforado y puntillado.
   * Doblado de folletos y redondeado de puntas.
   * Pegado de cajas y sobres.
   * Encapado de tapas para agendas y cuadernos.
   * Retractilado termofusionado.
4. **Catálogo de productos confirmados:**
   * *Papelería comercial:* Hojas membretadas, tarjetas, comprobantes fiscales (facturas, remitos, recibos), formularios continuos, planillas, sobres, carpetas y blocs recetarios Rp.
   * *Packaging:* Cajas, estuches, etiquetas en papel, fajas, marbetes para blisters y bolsas.
   * *Editorial:* Libros, revistas, agendas, cuadernos, libretas, bitácoras, blocs anotadores, brochures, catálogos y señaladores.
   * *Publicidad:* Volantes, stickers/calcos en papel, afiches/posters, almanaques (láminas y carpita), naipes, individuales de papel, cenefas/stoppers, posavasos, imanes y postales.
5. **Criterio de conveniencia de tiradas:** Explicación transparente de conveniencia en altas tiradas y amortización según pieza y terminaciones.
6. **Diferenciales de servicio:** Atención personalizada, visitas a planta para seguimiento y producción confidencial de marca blanca.
7. **Datos de contacto e institucionales:**
   * Dirección: Entre Ríos 2650, Barrio San Vicente, Córdoba Capital, X5006.
   * Teléfono WhatsApp: +54 9 351 459-7594.
   * Horario: Lunes a viernes de 08:00 a 17:00 hs.
   * Correo de presupuestos: `presupuestos@prematgrafica.com.ar`.
   * 17 marcas clientes mantenidas como muestra de experiencia.
8. **Frase institucional incorporada en Home:**
   > *"Nos dedicamos a transformar tus ideas en realidades tangibles desde hace más de 30 años. Ofrecemos soluciones que destacan por su creatividad, por nuestro compromiso de atención y seguimiento a nuestros clientes."*

---

## 5. Propuesta Específica para `/casos-de-exito`

* **Implementación:** Redirección temporal **HTTP 307** hacia `/soluciones-industriales`.
* **Mecanismo:** En `app/casos-de-exito/page.tsx`, invocar `redirect('/soluciones-industriales')` de `next/navigation` (que emite HTTP 307 por defecto).
* **Justificación:** Se descarta el 301 permanente porque la sección se reactivará en cuanto existan proyectos reales aprobados.

---

## 6. Archivos que se Modificarán en la Fase 2B

1. `app/page.tsx`: Textos de Hero, Audiencias, Servicios (frase institucional incorporada en `description` de `ServicesSection`), catálogo y especificaciones de pliego.
2. `app/soluciones-industriales/page.tsx`: Metadata, párrafos de pliego, materiales y acabados.
3. `app/la-planta/page.tsx`: Metadata, dirección en eyebrow, inventario exacto de las cuatro máquinas offset (sin guillotina ni trenes).
4. `app/agencias/page.tsx`: Mensaje de marca blanca sin promesas de plazos ni jerga B2B2B.
5. `app/contacto/page.tsx`: Texto de visitas a planta y canal de contacto.
6. `components/contact-form.tsx`: Opciones del selector unificadas; checkbox de newsletter temporalmente oculto.
7. `app/actions/contact.ts`: Visualización del correo del visitante como texto plano en el HTML (conservando `reply_to`).
8. `app/casos-de-exito/page.tsx`: Redirección temporal 307 hacia `/soluciones-industriales`.
9. `app/layout.tsx`: Corrección de texto en metadata description (sin alterar robots ni arquitectura SEO).

---

## 7. Confirmación de Estado de Git

* El repositorio local y remoto se encuentran sincronizados en el commit `e196d4a` (`origin/main`).
* La Fase 2B se ejecutará de forma atómica aplicando las modificaciones aprobadas sobre los archivos anteriores sin realizar commits, push ni deploys.
