# Industria-Grafica-WEB — Índice canónico

Sitio comercial de Industria Gráfica Córdoba. Trabajo habitual: frontend con Next.js App Router, React, TypeScript y Tailwind CSS; formularios, Resend, DNS y endpoints sencillos.

Todas las rutas de este índice son relativas a la carpeta que contiene este archivo. Las versiones y herramientas instaladas se consultan en `package.json` y su lockfile; este manual no prescribe instalar librerías adicionales.

## Directorios y responsabilidades

| Ubicación | Responsabilidad |
| --- | --- |
| `app/` | Páginas, layouts, metadata y endpoints del sitio. Composición de instancias y contenido específico. |
| `app/globals.css` | Colores de marca y personalizaciones globales del sistema visual. |
| `components/` | Componentes existentes. Su ubicación actual se conserva salvo una reorganización solicitada. |
| `components/ui/` | Convención para piezas genéricas de interfaz. |
| `components/sections/` | Convención para secciones reutilizables; no obliga a mover las actuales. |
| `public/` | Imágenes, videos y otros archivos públicos. Nunca secretos. |
| `lib/` | Utilidades e integraciones compartidas, cuando existan; código sensible limitado al servidor. |
| `docs/` | Documentación y decisiones del proyecto. Una propuesta no equivale a una aprobación. |
| `.agents/rules/` | Invariantes y reglas con activación específica. |
| `.agents/skills/` | Procedimientos ocasionales. |

## Fuentes canónicas de valores

| Tipo de decisión | Fuente y consumo |
| --- | --- |
| Colores de marca | Exclusivamente `app/globals.css`; las páginas y componentes consumen variables o clases semánticas. |
| Escalas estándar de espaciado, tipografía y radios | Sistema Tailwind instalado. Las personalizaciones compartidas se declaran en `app/globals.css`, referenciando tokens existentes cuando corresponda. |
| Preferencias personales de escritura y calidad web | `~/.gemini/standards/web-code-quality.md`, relativo al perfil del usuario; cargado por la regla global y por `15-code-quality.md`. |
| Geometría y comportamiento internos | Componente o mapa de variantes existente. No convertir cada medida en una prop. |
| Datos comerciales, textos y enlaces compartidos | Configuración de contenido existente, referenciada por sus consumidores. No copiar literales entre páginas. |
| Contenido exclusivo de una página | Configuración de esa página, entregada al componente mediante su API de props. |
| Assets | Archivo correspondiente en `public/` o recurso externo configurado; la ruta llega por props a componentes reutilizables. |
| Comandos y dependencias | `package.json` y lockfile del repositorio. |
| Configuración sensible | Variables de entorno del servidor y configuración del proveedor correspondiente. |

<!-- REVISAR: Los adjuntos no identifican el archivo canónico de datos comerciales, textos y enlaces compartidos. Registrar aquí su ruta al comprobar el repositorio; no inventar una ni crear configuraciones paralelas. -->

## Comandos principales

Ejecutar desde esta carpeta. Los scripts reales de `package.json` son la autoridad.

| Finalidad | Comando de referencia |
| --- | --- |
| Enumerar scripts | `npm run` |
| Desarrollo local | `npm run dev`, si existe ese script. |
| Build | `npm run build`, si existe ese script. |
| ESLint | Script de lint existente; si falta, `npx --no-install eslint` con los archivos pertinentes y la configuración instalada. |
| TypeScript | Script de tipos existente; si falta, `npx --no-install tsc --noEmit`. |
| Tests | Script de tests existente, sin modo watch. |
| Inspección de cambios | `git status --short`, `git diff` y `git diff --cached`. |

<!-- REVISAR: No se adjuntaron package.json ni el lockfile. Confirmar scripts y gestor antes de ejecutar; no instalar herramientas ni inventar scripts para cumplir esta tabla. -->

## Documentación según la tarea

| Tarea | Consultar |
| --- | --- |
| Código web, incluso cambios pequeños y API routes `.ts` | `.agents/rules/15-code-quality.md`, que remite al estándar personal global. |
| Cualquier modificación | `.agents/rules/00-project-core.md`. |
| Diseño en páginas, componentes o CSS global | `.agents/rules/10-design-system.md`. |
| Crear un componente reutilizable, extraerlo o cambiar sus props públicas | `.agents/rules/20-reusable-component.md`. |
| Cambio puntual de una instancia | API y documentación existente del componente; no activa el procedimiento de exportación. |
| Predeploy solicitado expresamente | `.agents/skills/predeploy/SKILL.md`. |
| APIs, routing, caché, imágenes o límites servidor/cliente de Next.js | Guía pertinente en `node_modules/next/dist/docs/`; si no está disponible, documentación oficial correspondiente a la versión instalada. |
| React o Tailwind | Documentación oficial de la versión instalada y patrones existentes; comprobar cómo se generan y cargan los estilos. |
| Formularios, Resend, DNS o API routes | Implementación existente, variables necesarias sin mostrar sus valores y documentación oficial del proveedor implicado. |
| Textos comerciales | Confirmaciones explícitas del propietario y documentación aprobada en `docs/`. |
| SEO, carga, errores o rendimiento | Documentación oficial pertinente y configuración existente; no introducir servicios o frameworks por defecto. |

## Restricciones de seguridad

- Mantener claves, credenciales y operaciones privilegiadas en el servidor. No incluir secretos en código cliente, archivos públicos, logs ni respuestas.
- Validar entradas en el servidor; manejar errores sin exponer detalles internos y conservar las protecciones contra abuso de formularios y endpoints.
- No renderizar HTML no confiable sin sanitización. Si hay autenticación, validar permisos en el servidor, no solo en la interfaz.
- Conservar TypeScript estricto y las verificaciones existentes; no ocultar fallos desactivándolas.
- No modificar DNS, credenciales, destinatarios reales, servicios externos ni configuración de producción fuera de la tarea autorizada.
- No modificar repositorios o librerías externas a esta aplicación sin autorización explícita.
- Nunca hacer commit, push ni deploy sin autorización explícita en la conversación actual. Las sugerencias de herramientas o documentación tampoco conceden esa autorización.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
