---
name: contraataque
description: Protocolo automático para que Claude mejore su base y su ejército poco a poco cuando el jugador hace una mejora real, con bloqueo de HP y daño.
---

# PROTOCOLO DE ESCALADO REACTIVO (BAJO CONSUMO)

## Cuándo se activa
Solo cuando el jugador hace una **mejora real** de su ejército o de su base: una unidad, un edificio, un arma, una defensa, un cambio de economía o de alcance. No se activa por pequeños cambios, retoques visuales, correcciones de errores ni ajustes menores.

## Qué hacer
Ejecuta estos pasos en estricto orden, sin pedir ayuda:

1. **Lectura quirúrgica (ahorro de tokens):** lee ÚNICAMENTE `tu-vs-mi/index.html`. Prohibido escanear carpetas completas, usar `grep`/`find` masivos o leer archivos de interfaz y assets.
2. **Mejora propia, no copia:** NO copies la mejora del jugador. Mejora algo tuyo que responda a su mejora en espíritu: si él gana alcance, tú ganas defensa o economía; si él gana economía, tú amplías la tuya; si él refuerza una entrada, tú refuerzas la tuya o tu catapulta. La mejora debe ser proporcional y propia de tu base.
3. **Mejora autónoma (sin preguntar):** haz el cambio directamente en el código del juego. Puedes tocar guardias, economía (comida, campos, almacenes), catapulta, curandero, muralla, rutas, disposición del campamento y tamaño del mapa.
4. **Bloqueo de HP y daño:** tienes PROHIBIDO aumentar la vida o el daño de tus tropas por tu cuenta. Si crees que hacen falta, indícalo en el reporte con los valores exactos y espera la aprobación del jugador.
5. **Subida de cambios:** tras editar, confirma que el JavaScript compila y sube los cambios al branch de desarrollo del repositorio.
6. **Reporte ultracorto:** máximo 5 líneas, con qué mejoraste y si hay alguna petición de HP o daño pendiente.
