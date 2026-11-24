# Bitácora Tu vs Mi

## Entrada 1 · 2026-11-24

### Mi ejército (usuario)
- Controla un soldado (WASD o joystick flotante en la mitad izquierda; Tab cambia de soldado). Mouse apunta; clic izq. ataca.
- Escuadra de 7 en la fortaleza (orilla izquierda): 1 controlado + 6 guardias. Cada soldado tiene `slot` fijo 0-6.
- Armas: espada+escudo (sword), arco (bow, slot 1 original era espada), lanza, hacha+escudo, espadón. Cambiar de arma solo en el estante físico (cerca de 90 px), tarda 0.8 s.
- Arco: dispara automáticamente al enemigo más cercano en 380 px; si está pegado usa espada corta.
- Modos de escuadra: **Base** (por defecto; 2 guardias por entrada: arriba, abajo, al frente), **Fogata** (rodean la fogata a 120 px), **Ataque** (atacan todos). Botones: Base (B), Esc.: ataque/fogata (E/R), Armas (G o toque en estante), Montar (M).
- **Fuego libre** (tecla F o botón "Fuego"): por defecto APAGADO. Con apagado, tus soldados no atacan por su cuenta; el controlado sí.
- Alarma: si un soldado de guardia detecta enemigo a 240 px, llama a la escuadra; se reúnen (120 px) sin atacar y luego atacan juntos. Dura hasta que no hay enemigos cerca.
- Establo con 1 caballo (dentro de la fortaleza, arriba a la izquierda). Montado: velocidad x1.8, golpes amplios, escudo más alto. Acércate a 70 px.
- Muñecos de paja (3, en fila a x=1250, y=520/600/680): se pueden golpear con melee y flechas; caen y se levantan a los 4 s.
- Fogata (760,1100) rodeada de 6 asientos de tronco y 9 piedras. Cura 10 HP/s a tus soldados dentro de 260 px (círculo punteado).
- Campo de cultivo (580,1280; 200x110): madura en 50 s. Cocina (500,1230) reconstruible en 30 s si la destruyen.
- Granjero (team 'civ', arma azada): cuando el campo madura, cosecha 4 s y lleva 3 comidas a la cocina (FOOD.stock máx. 10). Comienza con 2 comidas.
- Comidas: cada soldado tiene reloj propio (30-80 s la primera vez, 45-90 s después). Va a la cocina, toma 1 comida, se sienta en un asiento 5-9 s y regresa a su puesto. Sin comida: "hambre" y no sale. Nunca sale un guardia si su compañero de entrada no está en su puesto (slot par/impar).
- Trampas de estacas (pits) en (2300,1180), (2335,1280), (2290,1380): ralentizan (x0.35) y tiran al jinete (10 de daño).
- Fortaleza de troncos/barricadas: rectángulo 1040x1560 (2x y 3x el diámetro del claro), x 420..1460, y 320..1880. Entradas de 130 px: arriba (540,348), abajo (540,1852), frente (1432,1100). Colisión para soldados, flechas y establo.
- Mapa: 3600x2200. Cámara sigue al controlado, zoom inicial 0.8.

### Ejército rival (Claude)
- Campamento en la esquina inferior derecha (~3250,1900): 3 tiendas, fogata (3262,2010), catapulta (3180,1960).
- Catapulta: cada 5 s dispara al soldado tuyo más cercano en 700 px (30 de daño, radio 45). Sin soldados a tiro, cada 12 s ataca la cocina (si está) o el campo (reinicia cultivo / destruye cocina).
- Stats enemigos NO modificados (regla: no subir vida ni daño, no añadir enemigos no mencionados). Enemigos: 5 (sword, spear, axe, sword, greatsword).
- Táctica enemiga (versión actual): espera formada en CAMP_HOLD (3250,1860); la ola se activa si tu escuadra se acerca a 700 px del campamento o tras 20 s. Ataca en grupo, elige al soldado tuyo más herido en 400 px, se retira al campamento si HP < 25.
- Trampas de estacas están en lado enemigo (lo pediste; no en tu territorio).
- Ejército rival no usa recursos propios (no hay economía enemiga). Mejoras físicas hechas por contraataque: catapulta que quema el campo/destruye la cocina.

### Decisiones tomadas por mí (interpretaciones)
- "Círculo que ya teníamos" = el claro de tierra alrededor de la fogata: lo convertí en parche irregular (blob) y dejé el círculo punteado solo como radio de curación.
- "Murallas de 2x y 3x el círculo" = 1040 de ancho y 1560 de alto (círculo = 520 px de diámetro).
- "Tu parte del ejército" = el ejército rival (Claude). Como las reglas no permiten subir HP/daño, mejoré táctica y añadí estructuras físicas.
- Muñecos: se pusieron en fila (3) en un solo lado; interpretación de "un solo lado".
- Mapa "un poco más a la izquierda" = +400 px (ahora 3600 de ancho).
- Granjero "un hombre" = unidad nueva team 'civ' (no cuenta como soldado ni en squadGroup).

### Pendiente / conocido
- No verificado en partida: balance de la catapulta; ciclo completo de comida con cocina en pantalla; cocina quedó fuera de pantalla en pruebas de cámara.
- Riesgo: enemigos pueden golpear al granjero si entran a la fortaleza (no excluido de resolveHit para enemigos; sí de sus findTarget general).
- Enemigos pueden pelear a través de muralla si quedan pegados (alcance > grosor).
- Dummies: 3 en la fila x=1250; golpear sí funciona (verificado en copia de prueba).
- Versión publicada: artifact https://claude.ai/artifact/8ggzxf7z8WEPPZRcUzYyWW (versión 15). Archivo: /home/user/Nose/tu-vs-mi/index.html.
- Rama git: claude/arena-romana-rome-vs-ai-cs4s60 (repo /home/user/Nose). Último commit: 6ea60c8.

### Reglas de trabajo vigentes
- Skills en /home/user/Nose/.claude/skills: ejercito-rival (rol rival, counters solo a estructuras físicas, sin cambios grandes sin preguntar, todo debe funcionar en teléfono), bitacora-guardar (entradas en esta bitácora con "Guardar tu"), contraataque (CLAUDE.md: leer solo index.html y mejorar autónomo, sin subir HP/daño).
- Preferencias del usuario: sin saludos ni frases de relleno; no preguntas personales; no repetir frases.
- Pruebas: copia de prueba con window.__g en /tmp/patch/test.html (no se publica).

