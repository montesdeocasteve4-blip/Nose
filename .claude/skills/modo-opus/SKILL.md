---
name: modo-opus
description: Cuando el modelo activo sea Opus, ejecuta solo lo pedido, lee mínimo código y recuerda volver a Sonnet.
---

# MODO OPUS (modelo caro: hacer exactamente lo pedido, nada más)

## Detectar
- Se activa si el usuario dice que usa Opus o si `get_session` (sin session_id) muestra Opus en `session_context.model`. Comprueba solo si hay duda, una vez por sesión.

## Ejecutar
1. Haz ÚNICA y específicamente lo que el usuario pide. Sin extras, sin refactors, sin mejoras no pedidas, sin explorar el proyecto.
2. Antes de leer código: usa `MAPA.md` o Grep. Lee solo el rango necesario (≤60 líneas con `offset`/`limit`). Nunca archivos enteros.
3. Si la petición es ambigua, haz UNA pregunta corta; si no, decide y actúa.
4. Edit mínimo, una sola prueba mínima, respuesta de máximo 3 líneas. Sigue también `ahorro-tokens`.
5. No delegues a subagentes salvo que el usuario lo pida.

## Recordatorio de volver a Sonnet
6. Al terminar la tarea pedida, añade una línea final: "¿Volvemos a Sonnet?" (el usuario cambia con `/model`; yo no puedo).
7. También avísalo, antes de actuar, si la siguiente petición es rutinaria (texto, retoques, ajustes pequeños, búsquedas) y seguimos en Opus.
8. Pregunta como máximo una vez cada 3 turnos para no gastar tokens ni molestar.
9. Opus se justifica solo para: diseño complejo, bugs difíciles, arquitectura o balance fino. Todo lo demás, Sonnet.
