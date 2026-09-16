---
trigger: glob
globs: "app/**/*.tsx,components/**/*.tsx,app/**/*.ts,components/**/*.ts,app/globals.css"
description: Fuentes de color, consumo de tokens, Tailwind y preservación visual.
---

# Sistema de diseño

Las rutas de esta regla se interpretan desde la raíz de `Industria-Grafica-WEB`, excepto referencias indicadas como relativas al archivo.

## Fuente única

Los colores de marca de Industria Gráfica Córdoba se declaran únicamente en `app/globals.css`. Los archivos `.tsx` y `.ts` deben consumirlos mediante variables o clases semánticas. No introducir hexadecimales de marca directamente en páginas o componentes.

- Reutilizar los tokens existentes antes de crear otros. No duplicar la misma decisión usando RGB, HSL, OKLCH, opacidades o clases arbitrarias para eludir esta regla.
- Los estados de botón y los extremos de gradientes deben referenciar tokens. Un alias semántico referencia el token original, no repite su literal.
- Pasar esas referencias por la API existente: una prop que espera un color CSS puede recibir `var(--token-existente)` si su implementación admite variables CSS y no procesa el valor como un hex literal; una prop que espera clases recibe clases completas que consuman tokens. No intercambiar ambos formatos.
- Usar nombres semánticos que describan la función. No imponer un mismo token a usos independientes solo porque hoy comparten color.
- Antes de cambiar un token compartido, comprobar todos sus consumidores. Para un cambio local, reutilizar una variante adecuada sin alterar otras instancias; no emprender una migración global no solicitada.

## Tailwind

- Prohibido construir nombres de clases mediante interpolación o concatenación parcial, como `bg-${color}-500` o `bg-[${color}]`.
- La razón es técnica: Tailwind escanea los archivos fuente como texto y detecta nombres completos de clases al generar CSS; no ejecuta JavaScript para resolver esas cadenas. Una clase construida así puede no existir en el CSS generado.
- Son válidos los mapas de clases completas y estáticas, las clases completas recibidas por props y las variables CSS con utilidades estáticas. Los archivos que contienen las clases deben estar incluidos en la detección de fuentes de Tailwind.
- Al reutilizar código de una librería, comprobar que sus clases o su CSS están incluidos en la compilación de la aplicación. No suponer que verse bien en Storybook garantiza esa integración.

## Excepciones de identidad externa

- Los colores oficiales de terceros, como el verde de WhatsApp, se declaran también en `app/globals.css`, en un bloque separado encabezado por un comentario CSS que identifique la marca externa y el motivo.
- Sus consumidores usan tokens o clases semánticas. La excepción permite conservar una identidad externa; no permite hexadecimales sueltos en `.tsx` o `.ts`.
- No crear excepciones para evitar reutilizar un token de marca. No cambiar colores existentes de terceros sin que la tarea lo requiera.

## Compatibilidad visual

- Al desacoplar o tocar un componente, preservar el resultado visual pixel a pixel salvo lo expresamente solicitado. Conservar contenido, disposición, recorte, dimensiones, sombras, bordes, estados y comportamiento no incluidos en el encargo.
- Una extracción o refactorización no autoriza rediseño. Mantener la geometría interna en el componente o su mapa de variantes; no convertir cada medida en una prop.
- En un cambio de color base, conservar la mecánica existente de hover, focus y disabled. No elegir un nuevo color de estado ni agregar efectos por iniciativa propia. Si el estado se deriva automáticamente del token modificado, identificar ese efecto como parte del impacto del cambio.
- Verificar la zona afectada en móvil y escritorio bajo condiciones equivalentes. Comprobar estilos calculados y estados si un color o gradiente no aparece. No dar por validado el aspecto solo porque el código compila.
- Conservar HTML semántico, foco visible, interacción por teclado, nombres accesibles, contraste y respeto por movimiento reducido. Si el color solicitado compromete la legibilidad, informarlo sin sustituirlo silenciosamente.
