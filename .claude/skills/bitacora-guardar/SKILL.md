---
name: bitacora-guardar
description: Guarda una bitácora separada del juego Tu vs Mi cuando el usuario diga "Guardar tu". Registra lo importante del ejército del usuario y lo importante del ejército rival. Además fija reglas de eficiencia: leer solo el código necesario, pruebas mínimas y respuestas sin texto innecesario.
---

# Bitácora: "Guardar tu"

## Cuándo se activa

Cuando el usuario diga **"Guardar tu"** (o "guardar tú"), escribe una entrada en la bitácora del juego.

## Dónde se guarda

Archivo: `/home/user/Nose/tu-vs-mi/BITACORA.md`

- Si no existe, créalo con el encabezado `# Bitácora Tu vs Mi`.
- Cada entrada se agrega al final. No borres entradas anteriores.

## Formato de cada entrada

```
## Entrada N · AAAA-MM-DD

### Mi ejército (usuario)
- Lo importante de lo que el usuario añadió, cambió o propuso.
- Qué posición, arma o estrategia usó.

### Ejército rival (Claude)
- Lo importante de lo que yo añadí, cambié o planeé.
- Cómo contrarresto (counter) lo del usuario.
```

Reglas de contenido:

- Solo lo importante. Cada punto es una frase corta.
- Separa estrictamente las dos secciones. Nada del usuario va en "Ejército rival" y viceversa.
- Si una sección no tiene nada nuevo, escribe "Sin cambios".

## Reglas de eficiencia (siempre, no solo al guardar)

- El usuario juega desde teléfono: cualquier cambio al juego debe funcionar en pantalla táctil y angosta (ver la skill `ejercito-rival`).

- Lee solo las partes del código que necesitas para la tarea actual. Usa búsqueda por nombre de función o rango de líneas en vez de leer el archivo completo.
- No hagas pruebas innecesarias. Revisa el código con lectura atenta y cambia lo puntual. Una prueba solo cuando el cambio sea difícil de verificar leyendo.
- No repitas código ni texto que ya está en la conversación.
- Sin saludos, sin frases de relleno, sin resúmenes que repitan lo que acabas de hacer.
- Respuestas breves: qué cambiaste, en qué archivo y por qué ayuda, en pocas frases.
- Al guardar la bitácora, responde solo con la confirmación: ruta del archivo y número de entrada.
