---
trigger: always_on
description: Invariantes de alcance, fuentes canónicas, props y verificación del proyecto.
---

# Reglas críticas

El índice canónico es `../../AGENTS.md`, relativo a este archivo. Leerlo y consultar las reglas aplicables antes de editar. No afirmar lecturas o verificaciones que no se realizaron.

1. Trabajar solo dentro del alcance explícitamente solicitado en el mensaje actual, interpretado con las decisiones y autorizaciones vigentes de la conversación. Identificar el resultado pedido y los archivos necesarios antes de editar. Un pedido de análisis o plan no autoriza implementación.
2. No modificar componentes, secciones o archivos vecinos ajenos al resultado autorizado. Los archivos técnicamente necesarios para ese resultado forman parte de la tarea; no sus mejoras opcionales. Una captura muestra contexto, no amplía el encargo. Si la solución requiere ampliar el alcance, explicar la dependencia antes de modificarla.
3. Consultar el estado inicial de Git y preservar los cambios existentes del usuario, incluidos cambios staged y archivos nuevos. No revertir, reformatear ni limpiar código no relacionado.
4. Antes de introducir cualquier valor compartido, buscar si existe una fuente canónica equivalente: color, espaciado, tipografía, texto de marca, enlace o configuración. Identificar esa fuente y sus consumidores; no limitarse al primer archivo donde aparece el valor.
5. Todo valor compartido que represente una decisión del proyecto debe tener una única fuente canónica. Antes de introducir un literal, buscar si ya existe un token o configuración equivalente. Los consumidores deben referenciar esa fuente; no repetir el valor. Si falta, definirla en la ubicación indicada por el índice y dentro del alcance autorizado. Comprobar si cambiarla afectaría instancias no solicitadas antes de hacerlo.
6. Reutilizar la API de props existente antes de modificar la interna de un componente. Un cambio de una instancia se configura desde su consumidor. Cambiar la API pública solo cuando sea necesario para el encargo; en ese caso consultar `20-reusable-component.md`.
7. Antes de finalizar, revisar el diff completo, tanto staged como unstaged, y el contenido de los archivos nuevos pertinentes. Compararlo con el estado inicial y el alcance solicitado. Corregir únicamente las modificaciones propias ajenas al encargo y preservar las del usuario.
8. Ejecutar la validación mínima relevante antes de finalizar: lint de código afectado; tipos cuando se modifica TypeScript; build cuando cambian generación de CSS, imports, dependencias, configuración o integración. En cambios visuales, comprobar el elemento afectado en el navegador. No afirmar que un build o ESLint demuestran por sí solos el resultado visual. Informar comandos, resultados y cualquier comprobación bloqueada.

Nunca hacer commit, push ni deploy sin autorización explícita en la conversación actual. Preparar cambios o ejecutar verificaciones no autoriza publicarlos.

Las buenas prácticas del código web se consultan en `15-code-quality.md`, también para cambios pequeños; no dependen del procedimiento de componentes reutilizables. Si falta un documento obligatorio o hay reglas contradictorias, informar el impedimento antes de editar.

Al entregar, indicar qué cambió, dónde se configura el valor editado y qué se verificó. El checklist completo de predeploy y la preparación para exportar componentes no son requisitos de los cambios cotidianos.
