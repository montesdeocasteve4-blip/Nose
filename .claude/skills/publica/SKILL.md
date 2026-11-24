---
name: publica
description: Cada vez que el usuario diga "Publica", actualiza el artifact original del juego Tu vs Mi (tu-vs-mi/index.html) en su misma URL. Nunca publica uno nuevo.
---

# PROTOCOLO PUBLICA

Cuando el usuario escriba "Publica" (o "publica"), ejecuta estos pasos sin pedir confirmación:

1. Usa siempre la URL del artifact original del juego: `https://claude.ai/artifact/NvvoZbkaQU5TtDW2dAnhis`.
2. Publica con la herramienta Artifact: `action: publish`, `file_path: /home/user/Nose/tu-vs-mi/index.html`, `url: https://claude.ai/artifact/NvvoZbkaQU5TtDW2dAnhis`.
3. Si la publicación es rechazada por cambios en la versión en vivo, lee el artifact, fusiona los cambios y vuelve a publicar en la misma URL.
4. Nunca publiques sin `url` ni crees un artifact nuevo.
5. Responde en máximo 3 líneas con la URL y la versión publicada.
