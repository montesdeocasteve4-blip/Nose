---
name: publica
description: Cada vez que el usuario diga "Publica", publica el juego Tu vs Mi (tu-vs-mi/index.html) como artifact en claude.ai.
---

# PROTOCOLO PUBLICA

Cuando el usuario escriba "Publica" (o "publica"), ejecuta estos pasos sin pedir confirmación:

1. Publica con la herramienta Artifact: `action: publish`, `file_path: /home/user/Nose/tu-vs-mi/index.html`, `title: Tu vs Mi`.
2. Si ya existe un artifact del juego en esta conversación, usa la misma `file_path` para actualizarlo en la misma URL. No crees uno nuevo.
3. Responde en máximo 3 líneas con la URL publicada y la versión.
