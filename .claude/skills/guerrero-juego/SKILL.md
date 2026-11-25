---
name: guerrero-juego
description: Flujo barato para editar, probar y publicar el juego guerrero-alado (parche, smoke test, artifact).
---

# Flujo del juego guerrero-alado

El juego es `guerrero-alado/index.html` (un solo archivo). Artifact publicado: https://claude.ai/artifact/NiHcbZv5VBSYbZd6hUWT5F

1. **Localizar**: `guerrero-alado/MAPA.md`; si falta o cambió mucho, `bash .claude/skills/ahorro-tokens/mapa.sh guerrero-alado/index.html`. Lee solo el rango necesario.
2. **Editar**: parches pequeños (Edit, o `python3` con `s.replace(a,b)` y `assert a in s`). Nunca reescribas el archivo entero salvo petición explícita.
3. **Probar** (0 tokens de razonamiento): `python3 .claude/skills/guerrero-juego/gen.py && node .claude/skills/guerrero-juego/smoke.js`. Una línea de resultado por bloque y `ERR ninguno`. Las capturas quedan en `/tmp/gj/*.png`; mira solo la que toca el cambio.
4. **Publicar**: Artifact con `file_path=/tmp/gj/guerrero.html` y `url` del artifact (misma URL; no crees uno nuevo).
5. **Guardar**: commit y push a la rama de trabajo.

Reglas: si añades un enemigo, un panel o una habilidad, amplía `smoke.js` con una comprobación de una línea. Progreso del jugador en `localStorage` clave `gcsave`: no cambies nombres de campos sin migrar.
