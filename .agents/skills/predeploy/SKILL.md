---
name: predeploy
description: Verifica la preparación para publicar el proyecto. Usar exclusivamente cuando el usuario solicite expresamente predeploy o preparación para una publicación; no activar al finalizar cambios cotidianos. No publica.
---

# Predeploy solicitado

## Activación y autorización

Procedimiento manual: ejecutar únicamente ante una solicitud explícita del usuario para esta revisión. Si se carga sin esa solicitud, no ejecutar el checklist.

Nunca hacer commit, push ni deploy sin autorización explícita en la conversación actual. Autorizar este predeploy no autoriza ninguna de esas acciones. La autorización para una operación no se extiende automáticamente a las demás.

## Preparación

1. Identificar la raíz del repositorio y consultar su `AGENTS.md`, `package.json`, lockfile, scripts y configuración de validación. Registrar rama y estado inicial de Git sin modificarlo.
2. Identificar las páginas y flujos incluidos en la publicación. Usar herramientas instaladas y scripts existentes; no instalar infraestructura ni agregar herramientas solo para completar el checklist.

## Comprobaciones

1. **Build:** ejecutar el build del proyecto y comprobar su resultado. Un comando iniciado no cuenta como un build exitoso.
2. **TypeScript:** ejecutar la verificación de tipos existente, con modo estricto y sin desactivar errores. Si el build ya realiza esa comprobación completa, registrar esa evidencia; si no, ejecutar el chequeo separado.
3. **ESLint:** ejecutar el lint configurado y resolver errores propios. Registrar advertencias relevantes; no presumir que el build incluye ESLint.
4. **Tests:** ejecutar los tests existentes pertinentes a la entrega, sin modo watch. Si no hay tests, registrar que no existen; no instalar un framework para este trámite.
5. **Seguridad y formularios:** comprobar validación de entradas en servidor, ausencia de secretos en cliente y manejo de errores. Verificar carga, éxito y error en los flujos afectados. No enviar correos reales ni modificar DNS o producción sin autorización para esas acciones.
6. **Accesibilidad:** revisar teclado, foco visible, nombres accesibles, labels, mensajes de error y contraste. Usar semántica nativa; no añadir ARIA innecesario.
7. **Responsive y estilos:** revisar móvil, tablet y escritorio; desbordamientos, recortes de imágenes, carga de estilos, estados de botones y navegación. Registrar páginas y tamaños comprobados.
8. **Imágenes, SEO y carga:** revisar optimización de imágenes, metadata de páginas publicables y estados de carga o error pertinentes. Respetar las restricciones de mantenimiento e indexación vigentes.
9. **Core Web Vitals:** registrar las mediciones disponibles y sus condiciones. Referencias: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. Distinguir pruebas de laboratorio de datos reales de usuarios; Lighthouse no demuestra por sí solo un INP de campo. Si faltan datos, marcarlo como no verificado, sin inventar resultados ni instalar monitoreo obligatorio.
10. **Diff y Git:** revisar cambios staged, unstaged y archivos nuevos frente al alcance aprobado. Comprobar rama, remoto previsto y que `git status --short` esté vacío antes de declarar el árbol listo para publicar. Un árbol limpio no demuestra que esté pusheado. Informar commits pendientes cuando pueda comprobarse con referencias disponibles.

## Si hay fallos o cambios pendientes

- Informar el impedimento concreto. No corregir código ajeno al alcance de la revisión sin autorización.
- No hacer commit, push, reset, clean, stash ni eliminar archivos para fabricar un estado limpio. Preservar los cambios del usuario.
- Las verificaciones técnicas pueden terminar aunque queden cambios pendientes; en ese caso, informar que la preparación para publicar está incompleta.

## Resultado

Entregar una tabla con comprobación, comando o método, resultado y pendiente. Distinguir `APROBADO`, `FALLÓ`, `NO APLICA` y `NO VERIFICADO`.

Indicar si la entrega está lista o qué la bloquea. No marcar como aprobada una comprobación que no se ejecutó. Finalizar la revisión sin publicar; una publicación autorizada se realiza como la acción correspondiente, no como efecto automático de esta Skill.
