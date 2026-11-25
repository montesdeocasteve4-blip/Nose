// Uso: node smoke.js [carpeta=/tmp/gj]. Prueba rápida: salida de una línea por bloque. Capturas en <carpeta>/*.png
const {chromium}=require('playwright');const dir=process.argv[2]||'/tmp/gj',url='file://'+dir+'/wrapped.html';
(async()=>{const b=await chromium.launch(),err=[],out={};
const open=async(w,h,touch)=>{const c=await b.newContext({viewport:{width:w,height:h},hasTouch:touch,isMobile:touch,deviceScaleFactor:1}),p=await c.newPage();
 p.on('pageerror',e=>err.push(e.message));p.on('console',m=>m.type()==='error'&&!/fonts|ERR_/.test(m.text())&&err.push(m.text()));await p.goto(url);await p.waitForTimeout(500);return p};
const p=await open(1100,620,false);await p.click('#go');await p.waitForTimeout(2200);
out.inicio=await p.evaluate('[wave,en.length,Math.round(P.hp),P.gold]');
// todos los tipos de enemigo, 3 s de IA real, sin NaN
out.tipos=await p.evaluate(`en.length=0;wave=8;wavePending=false;for(let t=0;t<7;t++)en.push(mkE(t,P.x-500+t*160,P.y-60-(t%2)*100,1));P.inv=99;P.hp=P.max;1`);
await p.waitForTimeout(3000);out.ia=await p.evaluate('[en.length,en.every(e=>isFinite(e.x)&&isFinite(e.y)),en.map(e=>e.type+e.st[0]).join()]');await p.screenshot({path:dir+'/tipos.png'});
// combate: cadena, aguante, esquiva perfecta
await p.evaluate('en.length=0;wavePending=true;waveT=99;P.inv=0;P.st=100;P.step=-1;P.chainT=0;P.hp=P.max');const pasos=[];
for(let i=0;i<3;i++){await p.keyboard.press('KeyJ');await p.waitForTimeout(i==2?60:200);pasos.push(await p.evaluate('P.step'))}
await p.waitForTimeout(700);await p.evaluate('P.st=100;P.cd=0');await p.keyboard.press('Space');await p.waitForTimeout(20);
out.combate=[pasos.join(''),await p.evaluate('(hurt(10,1,0),P.perfect>0)')];
// meteoro
await p.evaluate('SV.met=true;P.mcd=0;P.st=100;P.y=200;P.hp=P.max;en.length=0;en.push(mkE(0,P.x+100,FLOOR-40,1));en[0].cd=99');await p.keyboard.press('KeyH');await p.waitForTimeout(900);
out.meteoro=await p.evaluate('[P.slam,Math.round(en[0]?en[0].hp:-1),en[0]?en[0].stun>0:null]');
// bestiario pausa y reanuda
await p.click('#bt');out.bes=[await p.evaluate('paused'),await p.evaluate('$("bes").style.display')];await p.screenshot({path:dir+'/bestiario.png'});await p.click('#bx');out.bes.push(await p.evaluate('paused'));
// oro -> cartas -> mercader
await p.evaluate('en.length=0;P.gold=200;P.hp=40;wavePending=false;waveT=99');await p.waitForTimeout(300);out.cartas=await p.evaluate('[choosing,shopOpen,cur.length]');await p.screenshot({path:dir+'/cartas.png'});
await p.keyboard.press('Digit1');await p.waitForTimeout(100);out.mercader=await p.evaluate('[choosing,shopOpen,merc.length]');await p.screenshot({path:dir+'/mercader.png'});
await p.keyboard.press('Digit1');out.pocion=await p.evaluate('[Math.round(P.hp),P.gold]');await p.keyboard.press('Enter');await p.waitForTimeout(100);out.sigue=await p.evaluate('[choosing,wavePending]');
// revivir, muerte y menú
await p.evaluate('P.revive=1;P.hp=0');await p.waitForTimeout(250);out.revive=await p.evaluate('[dead,Math.round(P.hp)]');
await p.evaluate('P.hp=0');await p.waitForTimeout(300);out.muerte=await p.evaluate('[dead,SV.souls>0,SV.st.runs]');await p.screenshot({path:dir+'/menu.png'});
// logros y bestiario guardados
out.logros=await p.evaluate('Object.keys(SV.ach).length');
const m=await open(390,844,true);await m.tap('#go');await m.waitForTimeout(2000);await m.screenshot({path:dir+'/movil.png'});
console.log(JSON.stringify(out),'ERR',err.length?err:'ninguno');await b.close()})()
