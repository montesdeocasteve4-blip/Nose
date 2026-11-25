---
name: ahorro-tokens
description: Reglas obligatorias de bajo consumo de tokens para cualquier proyecto o juego nuevo.
---

# AHORRO DE TOKENS (siempre activo, cualquier proyecto)

## Leer
1. Busca `MAPA.md` en la carpeta del proyecto. Si no existe y hay archivos >300 líneas, créalo con `bash .claude/skills/ahorro-tokens/mapa.sh <archivo>` (0 tokens de razonamiento). Salta directo a la sección que toca.
2. Nunca leas un archivo grande entero: Grep y luego Read con `offset` y `limit` (≤80 líneas).
3. No releas lo que acabas de editar ni lo que ya leíste este turno.
4. No leas bitácoras ni historiales salvo petición explícita.

## Actuar
5. Edit mínimo (old_string corto y único). Write solo para archivos nuevos.
6. Llamadas independientes siempre en paralelo.
7. Verifica con UNA prueba mínima (`node --check`, script de una línea). Sin capturas salvo cambio visual.
8. Cálculos, balance y simulaciones: script que imprima un resumen de una línea; lee solo eso.
9. Búsquedas largas: subagente, y usa solo su conclusión.
10. Sin plugins, MCP ni skills extra si un Grep o un script bastan.

## Responder
11. Sin preámbulo, sin recapitular, sin repetir frases ni opciones descartadas.
12. Máximo 3 líneas: qué cambió, dónde (`archivo:línea`), resultado de la prueba.
13. Pregunta solo ante bloqueo real; si no, decide con el valor por defecto razonable.

## Mantenimiento
14. Si una edición mueve secciones >20 líneas, regenera `MAPA.md` con `mapa.sh`.
15. Estados y bitácoras se SOBRESCRIBEN, no se acumulan.
16. Si un archivo supera ~3000 líneas, propón dividirlo por secciones del mapa.
