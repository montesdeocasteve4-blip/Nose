#!/bin/bash
# Uso: bash mapa.sh archivo [salida=MAPA.md]. Genera índice de secciones y funciones con su línea.
f="$1"; out="${2:-$(dirname "$f")/MAPA.md}"
[ -f "$f" ] || { echo "no existe $f"; exit 1; }
{
  echo "# MAPA de $(basename "$f") ($(wc -l < "$f") líneas). Leer antes de abrir el código."
  grep -nE '^\s*(<style|</style|<script|</script|<body|//\s*-{3,}.*|#\s*-{3,}.*|(async )?function [A-Za-z_0-9]+|class [A-Za-z_0-9]+|def [A-Za-z_0-9]+|const [A-Z_]{3,} *=)' "$f" \
    | sed -E 's/^([0-9]+):\s*/\1 /; s/\s*[{(=].*$//' | cut -c1-70
} > "$out"
echo "$out: $(wc -l < "$out") entradas"
