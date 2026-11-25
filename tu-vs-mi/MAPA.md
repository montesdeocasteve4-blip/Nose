# MAPA de tu-vs-mi/index.html (2486 líneas). Leer esto ANTES de abrir el código. Líneas aproximadas.
CSS 2-70 | HTML 71-89 | JS 90-2486
- Mundo, constantes, muros, puertas, navegación (navPoint 141, pushOutOfWall 171): 92-190
- Armas WEAPONS 193 | Bosque/suelo/árboles 205-305
- Unidades: SPAWN 307, nav grid 321-348, fosos/asientos/muñecos/guardia 349-370, TORRE 372-380
- Núcleo unidad: makeUnit 391, reset 408, startSwing 428, resolveHit 438, findTarget 468, think 488
- Torre/alerta/guardia/curandero: updateTower 546, towerThink 560, startAlert 597, updateAlert 605, guardThink 640, healerThink 670
- Caballo/herrero: mount 714, useForge 727, updateHorse 742, drawHorseAt 750
- Campamento enemigo (tiendas, catapultas CATA, BOULDERS): consts 936-954, updateCamp 955
- Dibujos de estructuras: drawTower 1003, drawForge 1039, drawTent 1125, drawCata 1142, drawStable 1429, drawPit 1485, drawWall 1780, drawRack 1845, drawHouse 1876, drawFire 1924
- Economía/comida: FIELD/KITCHEN/FOOD 1195-1198, updateEconomy 1210, assignPosts 1224, hungerUpdate 1268, mealUpdate 1282, farmThink 1317
- IA enemiga: enemyThink 1509 | Bucle de unidades: updateUnits 1550
- Combate: fireArrow 1657, doAttack 1669, applyArrowHit 1683, updateArrows 1700, checkEnd 1764
- Curación: healNearFire 1726, healerPulse 1734, houseHeal 1756
- Dibujo de unidades: drawShield 1949, drawWeapon 1960, drawUnit 2010
- Cámara 2114 | Controles teclado 2130 | Órdenes setOrder 2171 | Estante buildRack 2193, equip 2238
- Táctil 2253 | render 2320, updateHud 2379 | Minimapa renderMini 2426 | Bucle frame 2456
Actualizar este mapa SOLO si una edición mueve una sección más de ~20 líneas.
