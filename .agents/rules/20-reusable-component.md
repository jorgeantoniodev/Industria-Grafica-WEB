---
trigger: model_decision
description: Aplicar solo al crear un componente con potencial de reutilización, extraerlo a una librería o modificar su API pública de props. No aplicar a cambios visuales o de contenido de una instancia mediante props existentes.
---

# Componentes reutilizables

## Activación

Aplicar únicamente en los casos de la descripción. Una modificación interna que conserva la API, o cambiar colores, textos o imágenes desde una página, no exige preparar documentación de exportación.

## Contrato y responsabilidades

- Definir una interfaz `ComponentNameProps` clara, autocontenida y bien tipada, con valores obligatorios y opcionales identificados.
- El componente contiene estructura, estilos propios, comportamiento y estado de interfaz. La página o configuración del proyecto aporta contenido, recursos, enlaces y decisiones de marca mediante props.
- Usar props, variantes o composición para configuraciones que tengan una razón real para variar. No exponer cada padding, sombra, radio o detalle interno.
- No incluir textos, rutas de assets, datos comerciales ni colores del cliente dentro de un componente exportable.
- Respetar los tipos aceptados por cada prop. Un color CSS y una cadena de clases son contratos diferentes. Mantener compatibilidad con consumidores existentes; cualquier ruptura debe estar comprendida en el alcance autorizado.

## Portabilidad

- Evitar importaciones de configuración específica del cliente y dependencias ocultas del layout global.
- La instancia del proyecto puede pasar referencias a sus tokens. El componente exportable no debe asumir que otro proyecto dispone de esos tokens: recibirlos por su API o documentar un contrato de tema genérico y sus requisitos.
- Identificar dependencias reales: paquetes y versiones compatibles, Next.js, Tailwind, auxiliares internos, assets, fuentes, providers, variables CSS y configuración necesaria.
- Reutilizar los patrones instalados. Mantener Server Components cuando sean suficientes; añadir código cliente cuando la interacción o las APIs utilizadas lo requieran.
- Usar la convención de carpetas del índice para componentes nuevos; no reorganizar componentes existentes como efecto secundario.

## Validación y entrega

- Preservar el aspecto y comportamiento actuales, salvo cambios solicitados. Verificar props relevantes, móvil, escritorio, teclado y foco.
- Explicar qué archivo y qué dependencias hay que copiar o instalar para reutilizarlo.
- Si se destina a otra aplicación o librería, puede acompañarse de README, Storybook o `usage-example.tsx` según lo necesario y acordado. No son tres entregables obligatorios ni justifican instalar Storybook.
- Si se incluyen ejemplos, usar contenido genérico, imports completos, props importantes y rutas de muestra; marcar los valores sustituibles con `// CAMBIAR` cuando resulte útil.
- Si ya existe documentación o una Story de la API modificada, mantenerla coherente con ese cambio. Storybook no debe ser una dependencia de producción del componente.
- La extracción no autoriza editar o publicar una librería externa sin autorización para ese destino.
