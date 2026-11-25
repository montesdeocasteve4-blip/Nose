---
name: ahorro-tokens
description: Reglas obligatorias de bajo consumo de tokens para todo trabajo en este proyecto.
---

# AHORRO DE TOKENS (siempre activo)

## Leer
1. Abre `tu-vs-mi/MAPA.md` primero. Salta directo a la sección; no escanees el proyecto.
2. Nunca leas `index.html` entero. Usa Grep y luego Read con `offset` y `limit` (≤80 líneas).
3. No releas un archivo que acabas de editar ni uno que ya leíste este turno.
4. No leas `BITACORA.md` salvo petición explícita ("Guardar tu" la escribe, no la lee).

## Actuar
5. Cambios con Edit mínimo (old_string corto y único). Nunca reescribas archivos con Write.
6. Llamadas independientes siempre en paralelo, en un solo bloque.
7. Verifica con UNA prueba mínima: `node --check` del JS extraído o un script de una línea de salida. Sin capturas salvo cambio visual.
8. Cálculos, balance y simulaciones: script en Node que imprima un resumen de una línea; lee solo eso.
9. Búsquedas largas o multiarchivo: delega a un subagente y usa solo su conclusión.
10. No uses plugins, MCP ni skills extra si un Grep o un script bastan.

## Responder
11. Sin preámbulo, sin recapitular lo hecho, sin repetir frases ni explicar opciones descartadas.
12. Máximo 3 líneas: qué cambió, dónde (`archivo:línea`), resultado de la prueba.
13. No preguntes salvo bloqueo real; decide con el valor por defecto razonable.
14. Pregunta del usuario → respuesta directa, sin listas largas ni tablas.

## Mantenimiento
15. Si una edición mueve secciones >20 líneas, actualiza `MAPA.md` con un Edit.
16. Estados y bitácoras se SOBRESCRIBEN, no se acumulan.
17. Si `index.html` supera ~3000 líneas, propón dividirlo en archivos por sección del mapa.
