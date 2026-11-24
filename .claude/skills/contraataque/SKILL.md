---
name: contraataque
description: Protocolo automático de bajo consumo de tokens para mejorar el ejército de Claude cada vez que el jugador mejora el suyo, con bloqueo de HP y daño.
---

# PROTOCOLO DE ESCALADO REACTIVO (BAJO CONSUMO)

Cuando el jugador mejore su ejército o avance de turno, ejecuta estos pasos en estricto orden sin pedir ayuda:

1. **Lectura quirúrgica (Ahorro de tokens):** Lee ÚNICAMENTE el archivo principal de estado/datos del juego. Tienes PROHIBIDO escanear carpetas completas, usar `grep`/`find` masivos o leer archivos de interfaz/assets.
2. **Mejora autónoma (SIN preguntar):** Compara el ejército del jugador con el tuyo. Gasta tus recursos de inmediato en reclutar unidades *counter*, mejorar economía o mover tropas para igualar o superar su nivel. Escribe los cambios directamente en el archivo de estado.
3. **Bloqueo de HP y Daño:** Tienes PROHIBIDO aumentar el HP (vida) o el Daño (ataque) de tus tropas por tu cuenta. Si necesitas subir esas estadísticas, detente y pídelo en el chat indicando los valores exactos antes de editar el archivo.
4. **Reporte ultracorto:** Responde en máximo 5 líneas resumiendo qué mejoraste y si tienes alguna petición de HP/daño pendiente.
