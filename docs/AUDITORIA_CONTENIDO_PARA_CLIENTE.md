# AUDITORÍA DE CONTENIDO, MULTIMEDIA Y ESTADO ACTUAL
**Proyecto:** Industria Gráfica Córdoba (`Industria-Grafica-WEB`)
**Fecha:** Septiembre 2026
**Objetivo:** Identificar inconsistencias de contenido, elementos visuales tipo SaaS, fallas funcionales y activos cuestionables antes de la revisión final con el cliente (Lucas) y la publicación del sitio.

---

## 1. Clasificación de Hallazgos

* **`CONFIRMADO`**: Existe evidencia de que corresponde a la empresa.
* **`POR CONFIRMAR`**: Podría ser verídico o verosímil, pero requiere validación explícita de Lucas.
* **`INCORRECTO`**: No corresponde a la realidad de la empresa o infringe las reglas comerciales/técnicas establecidas.
* **`PLACEHOLDER`**: Contenido temporal o demostrativo utilizado durante el desarrollo.
* **`FALTANTE`**: Contenido indispensable para la conversión, confianza B2B o SEO que aún no existe.

---

## 2. Matriz General de Auditoría de Contenido por Página y Sección

| Página | Sección | Texto o dato actual | Archivo multimedia | Problema detectado | Clasificación | Necesita confirmación | Acción propuesta |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Global** | Layout / Footer | *(No existe Footer)* | — | El sitio finaliza de forma abrupta; no hay pie institucional, datos de contacto NAP, horarios ni enlaces legales. | `FALTANTE` | Sí (dirección, CUIT, horarios) | Diseñar e implementar un Footer industrial sobrio en `app/layout.tsx`. |
| **Global** | Header | `Industria Gráfica - Imprenta Industrial` | `/logo.png` (8.8 KB) | Estética de navbar SaaS con bordes redondeados pronunciados; requiere confirmar si el logo es la versión vectorial definitiva. | `CONFIRMADO` (nombre) / `POR CONFIRMAR` (vector) | Sí (archivo de logo original en alta resolución) | Conservar estructura y enlaces; ajustar estilos a sobriedad industrial. |
| **Global** | Flotante | `5493514597594` - *"Hola Industria Gráfica, me gustaría hacer una consulta"* | Ícono SVG WhatsApp | Número de atención comercial sin verificar titularidad del receptor en planta. | `POR CONFIRMAR` | Sí (confirmar si es el celular comercial de Lucas) | Mantener número actual hasta validación de Lucas. |
| **Global** | Modal Cotización | `FormModal` | — | El componente existe en el código pero está completamente desconectado (no se renderiza en ninguna página). | `FALTANTE` (integración) | No | Integrar trigger del modal en el CTA principal o botones de cotización. |
| **`/` (Home)** | Hero | *"30 años de producción gráfica en Córdoba, al servicio de tu marca."* | `/hero.mp4` (9.36 MB), `/hero-poster.jpg` | Texto con gradiente translúcido SaaS; video de stock muy pesado (9.4 MB) que destruye el LCP móvil; 30 años sin confirmar. | `POR CONFIRMAR` (años) / `INCORRECTO` (peso y estilo) | Sí (años exactos de fundación) | Reemplazar gradiente por tipografía sólida; optimizar video o sustituir por fotografía real de taller. |
| **`/` (Home)** | Audiencias | *"Escala tus operaciones sin límites."* / *"Tiempos de respuesta inmejorables"* | `/agencias.jpg` (926 KB) | Claim prohibido ("sin límites", garantía de tiempos); fotografía de stock; enlace `#agencias` roto (ancla inexistente en la página). | `INCORRECTO` (claims) / `PLACEHOLDER` (link) | Sí (propuesta de valor real para agencias) | Eliminar superlativos; corregir enlace a `/agencias`; reemplazar foto por producto impreso real. |
| **`/` (Home)** | Audiencias | *"Soluciones institucionales de alto rendimiento... trabajamos bajo planificación industrial"* | `/corporativo.jpg` (874 KB) | Foto de stock; enlace `#corporativo` roto; texto con redacción técnica genérica de agencia. | `POR CONFIRMAR` / `PLACEHOLDER` (link) | Sí (ejemplos de papelería que realmente producen) | Cambiar enlace hacia `/soluciones-industriales`; usar fotografía de formularios o carpetas reales. |
| **`/` (Home)** | Audiencias | *"Materiales que hacen destacar tu identidad... packaging chico"* | `/pymes.jpg` (746 KB) | Foto de stock; enlace `#pymes` roto; diseño con blobs asimétricos estilo SaaS. | `POR CONFIRMAR` / `PLACEHOLDER` (link) | Sí (alcance real en packaging para pymes) | Vincular a `/soluciones-industriales#troquelados`; reemplazar foto por cajas reales producidas. |
| **`/` (Home)** | Carrusel Logos | 17 marcas (Bando, Caps, Carrara, CoFarSur, Sbacco, Fumivet, Ganados, Guía Express, InSaCor, MegLine, Paper, Parque Salud, Polidori, Porta, Buteler, Tomaselli, Vetacord) | 17 PNGs procesados con Photoroom en `public/logos/` | Riesgo legal y comercial: logos procesados con herramienta automática sin confirmación expresa de autorización de uso de marca. | `POR CONFIRMAR` | **CRÍTICO: Sí (Lucas debe autorizar cada logo individualmente)** | Mostrar únicamente los logos formalmente autorizados por el cliente. Ocultar los no confirmados. |
| **`/` (Home)** | Servicios | *"Capacidad industrial líder y modelos de servicio escalables"* | `/services/offset.png` (4.68 MB), `/services/caja-packaging.png` (594 KB), etc. | Claims de software ("líder", "modelos escalables"); tarjeta con glow neón fuchsia/cyan; archivo PNG de 4.7 MB sin optimizar. | `INCORRECTO` (estilo y peso) | Sí (gama exacta de servicios activos) | Eliminar resplandores neón y glows; comprimir PNGs a WebP; redactar descripciones de oficio y taller. |
| **`/soluciones-industriales`** | Hero & Intro | *"Producción offset de alta complejidad... para empresas en todo el país"* | — | Claim "en todo el país" no verificado; página vacía sin imágenes, sin llamadas a la acción ni vinculación a presupuesto. | `POR CONFIRMAR` (alcance nacional) | Sí (¿envían a todo el país o Córdoba/región centro?) | Especificar radio de entrega real; agregar CTAs de cotización. |
| **`/soluciones-industriales`** | Offset | *"Pliegos de hasta 70×100 cm... calidad sostenida y cumplimiento estricto de plazos"* | — | Especificación de pliego 70x100 cm y promesa estricta de plazos sin validar con taller. | `POR CONFIRMAR` | Sí (formato máximo real de las máquinas) | Validar formato de pliego técnico con Lucas. |
| **`/soluciones-industriales`** | Troquelados | *"Diseñamos y fabricamos troqueles propios para mayor flexibilidad"* | — | ¿Poseen dobladora y confección de troqueles in-house o tercerizan la matriz a troquelería externa? | `POR CONFIRMAR` | Sí (¿troqueles propios o matrices tercerizadas?) | Ajustar a la realidad del proceso de matricería. |
| **`/soluciones-industriales`** | Encuadernación | *"Trenes de encuadernación abrochada y lomo cuadrado perfecto (Hotmelt)... desde 500 hasta 50.000 ejemplares"* | — | Mención de "trenes" y tirajes de 50.000 ejemplares no confirmados con la capacidad de planta. | `POR CONFIRMAR` | Sí (tipo de encuadernadora real y tiraje máximo habitual) | Validar equipamiento exacto (marca/sistema). |
| **`/la-planta`** | Encabezado | *"Barrio San Vicente · Córdoba Capital"* | — | Falta calle y número exacto; no hay mapa ni indicaciones de acceso para clientes o retiro de mercadería. | `POR CONFIRMAR` (dirección exacta) | Sí (calle, número y si reciben visitas) | Incorporar dirección completa y mapa en el futuro Footer/Contacto. |
| **`/la-planta`** | Capacidad técnica | *"Prensas offset de 4 y 5 cuerpos, troqueladora de cama plana, trenes de encuadernación abrochada y hotmelt, guillotinas y acabado en barniz UV y laminado BOPP"* | — | **CRÍTICO:** Lista detallada de maquinaria industrial que podría no existir en planta (ej. ¿tienen 4 o 5 cuerpos o máquinas bicolor/monocromáticas?). | `POR CONFIRMAR` / `INCORRECTO` potencial | **CRÍTICO: Sí (relevar inventario real de maquinaria)** | Eliminar cualquier máquina no confirmada. Reemplazar por descripción fiel del equipamiento real. |
| **`/la-planta`** | Media Grid | *"Oficio en movimiento"* | `/process.mp4` (6.7 MB), `/process.webm` (7.8 MB), `/process-1.jpg`, `/process-2.jpg` (2.3 MB), `/process-3.jpg` | Botón "Cotizar producción" apunta a `#cotizar` que NO existe (enlace roto); botón secundario apunta a `/la-planta` (bucle a sí misma); videos y fotos de stock pesados. | `PLACEHOLDER` (fotos/links) | Sí (¿tienen fotos o videos reales de la planta?) | Corregir enlaces a `/contacto`; comprimir assets; coordinar captura o reemplazo por fotos reales. |
| **`/agencias`** | General | *"Servicios B2B2B... Tarifas gremiales... Confidencialidad total garantizada"* | — | Lenguaje de startup tecnológica ("B2B2B"); promesa comercial "garantizada"; página vacía sin formulario específico ni casos. | `INCORRECTO` (lenguaje) / `FALTANTE` (conversión) | Sí (¿manejan lista de precios gremial formal?) | Redactar en lenguaje gráfico profesional; agregar formulario o CTA directo a WhatsApp gremial. |
| **`/contacto`** | Formulario | Formulario con 6 campos + selector | — | **FALLA FUNCIONAL CRÍTICA:** El formulario carece de Server Action, backend o script de envío. Si el usuario envía, se recarga la página y se pierden los datos. | `INCORRECTO` (funcionalidad) | Sí (email de destino donde recibir consultas) | Conectar Server Action con envío de correo verificado o derivación asistida a WhatsApp. |
| **`/contacto`** | Datos de contacto | `contacto@industriagrafica.com.ar` / *"Respondemos en menos de 24 horas hábiles"* | — | Casilla de correo no confirmada (posiblemente inexistente); promesa de 24hs no pactada con el cliente; falta teléfono fijo y dirección. | `POR CONFIRMAR` / `FALTANTE` | Sí (casilla de correo corporativa real de Lucas) | Validar buzón de entrada y tiempo de respuesta real. |
| **`/contacto`** | Testimonios | *"Directora de Marketing, Agencia de Comunicación"* / *"Gerente de Operaciones, Corporación de Retail"* | Tarjeta con gradiente azul-índigo | **INCORRECTO:** Testimonios ficticios con cargos y empresas anónimas inventadas (violación directa de reglas). | `INCORRECTO` | Sí (solicitar 1 o 2 testimonios reales con nombre y apellido) | Eliminar testimonios inventados de inmediato. Reemplazar por bloque de atención directa o mapa de planta. |
| **`/casos-de-exito`** | Contenido | *"Próximamente: casos documentados de Carrara, CAPS Semillas, Parque Salud..."* | — | Ruta huérfana no vinculada en el Header ni en el cuerpo; página vacía con texto de "próximamente". | `PLACEHOLDER` | Sí (¿se redactan 2 casos reales o se oculta la ruta?) | Ocultar o redirigir esta ruta hasta contar con material redactado y aprobado por los clientes. |

---

## 3. Auditoría de Textos y Claims Comerciales

### A. Claims Prohibidos o Inconsistentes Detectados
1. **"Escala tus operaciones sin límites"** (`app/page.tsx`, línea 28): Típico eslogan de software/cloud que no aplica a la capacidad física de una imprenta con pliegos, horas máquina y turnos de taller.
2. **"Tiempos de respuesta inmejorables"** (`app/page.tsx`, línea 32): Promesa comercial absoluta no verificable.
3. **"Confidencialidad total garantizada"** (`app/agencias/page.tsx`, línea 36): Uso de "garantizada" sin contrato marco.
4. **"Respondemos en menos de 24 horas hábiles"** (`app/contacto/page.tsx`, línea 48): Compromiso operativo que puede generar fricción si el taller tiene demoras.
5. **"Capacidad industrial líder y modelos de servicio escalables"** (`components/services-section.tsx`, línea 41): Jerga de consultoría tecnológica abstracta.

### B. Datos de Maquinaria y Operaciones que Requieren Validación Obligatoria
* **Prensas offset:** Se asegura en `/la-planta` que hay "prensas offset de 4 y 5 cuerpos". Si la imprenta opera con máquinas de 1 o 2 cuerpos (monocolor/bicolor), publicar esto constituye publicidad engañosa frente a clientes industriales.
* **Formatos de pliego:** Se cita "hasta 70×100 cm". Si la maquinaria es formato 50×70 cm o menor, debe corregirse la ficha técnica.
* **Tirajes:** "Desde 500 hasta 50.000 ejemplares".
* **Terminaciones:** "Diseñamos y fabricamos troqueles propios", "trenes de encuadernación hotmelt", "acabado en barniz UV y laminado BOPP". Se debe verificar qué procesos son 100% propios y cuáles se envían a talleres especializados externos.

### C. Nombres Comerciales y Residuos Históricos
* En `public/_industriagraficacba/` se identificaron archivos con el nombre `img_PREMAT_nueva-AT.jpg`. Se reconfirma la regla: **no utilizar la marca "Premat" en ningún texto, metadata o comunicación visual**. La denominación unificada es **Industria Gráfica Córdoba**.

---

## 4. Auditoría Multimedia y Rendimiento

### Inventario de Activos en `public/`
| Archivo | Ubicación | Peso | Origen aparente | Correspondencia con texto | Impacto en rendimiento | Recomendación |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `hero.mp4` | `/` (Hero) | **9.36 MB** | Stock video (Pexels/Unsplash) | Muestra máquinas gráficas genéricas | **Crítico:** Bloquea ancho de banda en 4G móvil | Reemplazar por WebP estático de alta calidad o video comprimido a < 1.5 MB. |
| `hero-poster.jpg` | `/` (Hero poster) | 70.4 KB | Captura de video | Buena | Bajo | Conservar optimizado. |
| `agencias.jpg` | `/` (Audiencias) | 926 KB | Stock photo | Genérica de oficina/reunión | Alto | Reemplazar por foto real de pliegos o muestras impresas (< 150 KB). |
| `corporativo.jpg` | `/` (Audiencias) | 875 KB | Stock photo | Papelería genérica | Alto | Reemplazar por formularios o carpetas reales (< 150 KB). |
| `pymes.jpg` | `/` (Audiencias) | 746 KB | Stock photo | Cajas genéricas | Alto | Reemplazar por packaging real de clientes locales (< 150 KB). |
| `services/offset.png` | `/` (Servicios) | **4.68 MB** | Stock cutout | Máquina de impresión | **Crítico:** Archivo PNG gigante sin compresión | Convertir a WebP con compresión con pérdida (~200 KB). |
| `services/caja-packaging.png` | `/` (Servicios) | 594 KB | Mockup recortado | Muestra de caja | Medio | Optimizar a WebP (~80 KB). |
| `services/encuadernacion.png` | `/` (Servicios) | 197 KB | Stock cutout | Libros | Moderado | Optimizar a WebP (~60 KB). |
| `services/imagen-corporativo.png`| `/` (Servicios) | 131 KB | Stock cutout | Papelería | Bajo | Optimizar a WebP (~50 KB). |
| `process.mp4` | `/la-planta` | **6.70 MB** | Stock video | Taller offset genérico | Alto | Optimizar y evaluar sustitución por video real de taller de San Vicente. |
| `process.webm` | `/la-planta` | **7.81 MB** | Stock video | Taller offset genérico | Alto | Optimizar a < 1.5 MB. |
| `process-1.jpg` | `/la-planta` | 138 KB | Stock photo | Prensa offset | Bajo | Conservar o sustituir por máquina real de Lucas. |
| `process-2.jpg` | `/la-planta` | **2.32 MB** | Stock photo | Detalle de rodillos | **Muy Alto** | Comprimir obligatoriamente a < 200 KB. |
| `process-3.jpg` | `/la-planta` | 203 KB | Stock photo | Packaging apilado | Moderado | Optimizar a < 100 KB. |
| `logos/*.png` (17 archivos) | `/` (Carrusel) | ~10-19 KB c/u | Logos de clientes locales | Logos reales de clientes de Córdoba | Bajo | **Pausar exhibición hasta confirmación explícita de Lucas.** |
| `logo.png` | Global (Header/Overlay) | 8.8 KB | Logo institucional | Logotipo oficial | Óptimo | Conservar. |

**Peso multimedia acumulado solo en la Home:** Supera los **17.3 Megabytes**. En conexiones móviles lentas, esto genera demoras de carga de más de 8 segundos.

---

## 5. Auditoría Funcional y Enlaces

1. **Formulario de Contacto (`/contacto`):**
   * El elemento `<form>` carece de `action`, `method` o manejador `onSubmit`. Al hacer clic en *"Enviar consulta"*, la página se recarga agregando parámetros a la URL sin persistir ni enviar la consulta a ningún destino.
2. **Modal de Cotización (`FormModal`):**
   * El componente está construido y testeado en Storybook, pero no está instanciado en ninguna ruta pública del sitio. No hay botón en el Header ni en el Hero que lo abra.
3. **Enlaces Rotos / Anclas Inexistentes:**
   * En `app/page.tsx` (Audiencias): los enlaces `#agencias`, `#corporativo` y `#pymes` no existen como IDs en el DOM. Al hacer clic, la página no realiza ninguna acción.
   * En `app/la-planta/page.tsx` (MediaGrid): el botón *"Cotizar producción"* apunta a `#cotizar`, ID que no existe en la página.
   * En `app/la-planta/page.tsx` (MediaGrid): el botón secundario *"Conocer la planta en detalle"* enlaza a `/la-planta`, provocando una recarga redundante sobre la misma ruta.
4. **Ruta Huérfana (`/casos-de-exito`):**
   * No figura en el menú de navegación principal ni en ningún enlace interno. Contiene un texto placeholder sin casos reales estructurados.
5. **Popup de Mantenimiento (`MaintenanceOverlay`):**
   * Funciona correctamente: bloquea el scroll, cubre el 100% del viewport en desktop y mobile, no se cierra con Escape ni con clics fuera, y el botón de WhatsApp enlaza al número configurado.
6. **Bypass Interno de Sesión (`?preview=1`):**
   * Al acceder con `?preview=1`, se almacena `preview_mode = 1` en `sessionStorage` y se oculta el overlay, permitiendo la navegación fluida entre páginas sin reaparición del popup durante la sesión activa.
7. **Medición y Eventos:**
   * No existe configuración de Google Analytics (GA4), Cloudflare Web Analytics ni eventos personalizados para medir clics hacia WhatsApp o aperturas de formularios.

---

## 6. Auditoría Visual: Diagnóstico "SaaS vs. Imprenta Industrial"

### Elementos que Provocan la Apariencia SaaS (A Corregir en Fase 2)
1. **Gradientes Neón y Fondos Pastel:**
   * Hero: `bg-gradient-to-br from-[#5ee7dc] via-white to-[#c9b6f7]` (cian pastel a lavanda).
   * Texto del titular: `bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent`.
   * Tarjetas de servicios: `from-blue-600 to-cyan-400`, `from-violet-700 to-fuchsia-400` acompañadas de resplandores difusos con `blur-3xl` (`glow: bg-cyan-300/40`).
2. **Formas Asimétricas Orgánicas ("Blobs"):**
   * En `AudiencesSection`: fondos con radios extremos (`rounded-[8rem_8rem_8rem_1rem]`) y badges flotantes descentrados típicos de plantillas de software para startups.
   * En `Hero`: columna de video con recorte curvo extremo (`lg:rounded-l-[15rem]`).
3. **Botones Píldora con Elevación Suave:**
   * Botones con `rounded-full`, sombras pronunciadas y efectos de escala (`hover:scale-[1.03]`) que remiten a interfaces de apps móviles más que a un proveedor gráfico industrial.

### Elementos Actuales que Transmiten Identidad Industrial (A Conservar)
1. **La tipografía Lato bien jerarquizada:** Los pesos 700 y 900 (Black) aportan contundencia cuando se usan sobre fondos plenos sin gradientes transparentes.
2. **La estructura de `MediaGridSection`:** La combinación de video de rodillos y grilla fotográfica de procesos técnicos transmite taller, metal, maquinaria y movimiento físico.
3. **El Header funcional:** Barra superior limpia, navegación directa y jerarquía clara entre productos y planta.
4. **La paleta de contrastes en blanco, gris pizarra y azul industrial:** Fondos sólidos como `bg-slate-900`, `bg-slate-950` y `bg-white` comunican solidez y precisión cuando no están contaminados con neones.

---

## 7. Preguntas Concretas para Lucas (Cliente)

Para cerrar el contenido mínimo publicable antes del fin de semana, se requiere que Lucas responda estas 8 definiciones:

1. **Años de trayectoria / Fundación:** ¿En qué año comenzó a operar la imprenta y cuántos años de trayectoria debemos comunicar formalmente (ej. "Más de 30 años", "Desde 1994", etc.)?
2. **Dirección y Visitas a Planta:** ¿Cuál es la dirección exacta en Barrio San Vicente (calle y número)? ¿Se puede publicar para retiro de trabajos o visitas institucionales? ¿Qué horarios de atención tienen?
3. **Capacidad de Maquinaria Real:** ¿Cuáles son las máquinas principales de la planta que debemos destacar? (¿Cantidad de cuerpos de las prensas offset? ¿Formato máximo de pliego real? ¿Qué encuadernación se hace en planta y cuál se terceriza?).
4. **Autorización de Logos de Clientes:** De los 17 logos presentes en el carrusel (Bando, Caps, Carrara, CoFarSur, Cortinas Sbacco, Fumivet, Ganados, Guía Express, InSaCor, MegLine, Paper, Parque Salud, Polidori, Porta, Ramiro Buteler, Tomaselli, Vetacord), ¿cuáles están formalmente autorizados para ser exhibidos públicamente?
5. **Casos de Éxito:** ¿Disponen de información y fotos reales de trabajos hechos para Carrara, CAPS Semillas o Parque Salud, o prefiere ocultar la sección de "Casos de Éxito" para esta primera etapa?
6. **Recepción de Consultas:** ¿A qué dirección de correo electrónico deben llegar los presupuestos solicitados desde la web?
7. **WhatsApp Comercial:** ¿El número `5493514597594` (+54 9 351 459-7594) es el canal oficial de atención rápida para cotizaciones?
8. **Material Fotográfico Propio:** ¿Disponen de fotografías tomadas en el taller (máquinas, bobinas, pliegos impresos, personal, packaging armado) para sustituir las imágenes de stock?

---

## 8. Propuesta de Prioridades de Implementación

### Prioridad P0 (Bloquea la Revisión y Publicación)
* **P0-1:** Conectar el formulario de contacto para que no se pierdan consultas (o derivar la consulta directamente a WhatsApp mientras se configura el servicio de correo).
* **P0-2:** Validar con Lucas la lista de logos de clientes autorizados y remover inmediatamente los no confirmados.
* **P0-3:** Eliminar los testimonios inventados de `/contacto`.
* **P0-4:** Corregir enlaces rotos (`#agencias`, `#corporativo`, `#pymes`, `#cotizar`).
* **P0-5:** Reemplazar claims prohibidos ("sin límites", "tiempos inmejorables", "líderes").
* **P0-6:** Comprimir con urgencia los archivos multimedia críticos (`offset.png` de 4.7 MB, `hero.mp4` de 9.4 MB y fotos de más de 1 MB) para evitar caídas de rendimiento.

### Prioridad P1 (Resolver Durante el Fin de Semana)
* **P1-1:** Diseñar e incorporar el `Footer` global con datos NAP (Nombre, Dirección, Teléfono), horarios y enlaces a servicios.
* **P1-2:** Ajustar el sistema visual (remover gradientes neón, blobs flotantes y brillos; aplicar estética industrial de taller sobrio).
* **P1-3:** Integrar el modal de presupuesto rápido (`FormModal`) en puntos clave de conversión.
* **P1-4:** Ocultar temporalmente la ruta `/casos-de-exito` si no hay contenido documentado.
* **P1-5:** Configurar sitemap, robots, `metadataBase` y etiquetas Open Graph.

### Prioridad P2 (Posterior a la Publicación Inicial)
* **P2-1:** Sesión fotográfica y de video propia en la planta de San Vicente para sustituir el 100% del material de stock.
* **P2-2:** Redacción y diseño en profundidad de páginas de casos de estudio individuales.
* **P2-3:** Configuración avanzada de analítica y embudo de conversión (Google Analytics 4 / Cloudflare Web Analytics).
* **P2-4:** Migración de componentes a la biblioteca externa `jormcdev-ui`.

---

## 9. Archivos a Modificar en las Siguientes Fases

1. **`app/layout.tsx`**: Integración del nuevo componente `Footer` y configuración de metadata Open Graph y canonicals.
2. **`app/page.tsx`**: Sustitución de gradientes, corrección de enlaces de audiencia, filtrado de logos autorizados y cambio de textos.
3. **`components/hero.tsx`**: Eliminación del recorte asimétrico extremo y de los estilos tipo SaaS; reemplazo de botón píldora por botón de corte industrial.
4. **`components/services-section.tsx`**: Eliminación de efectos `glow`, fondos neón y gradientes; rediseño de tarjetas industriales.
5. **`components/audiences-section.tsx`**: Reemplazo de blobs orgánicos abstractos por contenedores rectilíneos limpios y sobrios.
6. **`app/contacto/page.tsx`**: Creación de Server Action para envío real de correo, supresión de testimonios ficticios e inserción de datos de planta.
7. **`app/soluciones-industriales/page.tsx`**: Ajuste de capacidades de pliego y agregado de llamadas a cotización.
8. **`app/la-planta/page.tsx`**: Corrección de inventario de maquinaria y rectificación de enlaces rotos.
9. **`components/footer.tsx`** *(Nuevo)*: Creación del pie de página corporativo.
