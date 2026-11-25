#!/usr/bin/env python3
"""Uso: python3 gen.py [salida=/tmp/gj]. Convierte guerrero-alado/index.html en guerrero.html (para publicar como artifact) y wrapped.html (para probar)."""
import os,re,sys
root=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..','..'))
out=sys.argv[1] if len(sys.argv)>1 else '/tmp/gj';os.makedirs(out,exist_ok=True)
s=open(os.path.join(root,'guerrero-alado','index.html')).read()
s=re.sub(r'<!doctype html><html lang="es"><head>\s*','',s)
s=re.sub(r'<meta name="viewport"[^>]*>\s*<meta name="mobile-web-app-capable"[^>]*><meta name="apple-mobile-web-app-capable"[^>]*>\s*','',s)
s=s.replace('</style></head><body>','</style>').replace('</script></body></html>','</script>')
s=s.replace('canvas{display:block;width:100vw;height:100vh;height:100dvh}','canvas{position:fixed;inset:0;display:block;width:100%;height:100%}')
open(os.path.join(out,'guerrero.html'),'w').write(s)
open(os.path.join(out,'wrapped.html'),'w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'+s+'</body></html>')
print(os.path.join(out,'guerrero.html'))
