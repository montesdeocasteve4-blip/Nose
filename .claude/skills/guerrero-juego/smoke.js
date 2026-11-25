// Uso: node smoke.js [carpeta=/tmp/gj]. Prueba rápida: salida de una línea por bloque. Capturas en <carpeta>/*.png
const {chromium}=require('playwright');const dir=process.argv[2]||'/tmp/gj',url='file://'+dir+'/wrapped.html';
(async()=>{const b=await chromium.launch(),err=[],out={};
const open=async(w,h,touch)=>{const c=await b.newContext({viewport:{width:w,height:h},hasTouch:touch,isMobile:touch,deviceScaleFactor:1}),p=await c.newPage();
 p.on('pageerror',e=>err.push(e.message));p.on('console',m=>m.type()==='error'&&!/fonts|ERR_/.test(m.text())&&err.push(m.text()));await p.goto(url);await p.waitForTimeout(500);return p};
const p=await open(1100,620,false);await p.click('#over .go');await p.waitForTimeout(2200);
out.inicio=await p.evaluate('[wave,en.length,Math.round(P.hp),P.gold]');
// todos los tipos de enemigo, 3 s de IA real, sin NaN
out.tipos=await p.evaluate(`en.length=0;wave=8;wavePending=false;for(let t=0;t<8;t++)en.push(mkE(t,P.x-560+t*150,P.y-60-(t%2)*100,1));P.inv=99;P.hp=P.max;1`);
await p.waitForTimeout(3000);out.ia=await p.evaluate('[en.length,en.every(e=>isFinite(e.x)&&isFinite(e.y)),en.map(e=>e.type+e.st[0]).join()]');await p.screenshot({path:dir+'/tipos.png'});
// poder: gasta aguante, recarga y no se puede spamear
await p.evaluate('en.length=0;wavePending=true;waveT=99;P.inv=99;P.st=100;P.pcd=0;P.charge=0');await p.keyboard.down('KeyK');await p.waitForTimeout(1700);await p.keyboard.up('KeyK');await p.waitForTimeout(100);
out.poder=await p.evaluate('[Math.round(P.st),P.pcd>5]');await p.keyboard.down('KeyK');await p.waitForTimeout(400);out.poder.push(await p.evaluate('P.charge'));await p.keyboard.up('KeyK');
// modificadores y ejecución
await p.evaluate('mod="rain";hazT=0;en.length=0;en.push(mkE(0,P.x+4000,P.y,1))');await p.waitForTimeout(1500);out.lluvia=await p.evaluate('haz.length>0');
await p.evaluate('mod=null;haz.length=0;en.length=0;const x=mkE(0,P.x+90,P.y-20*K,-1);x.cd=99;x.stun=2;x.hp=x.max=500;en.push(x);P.f=1;P.st=50;P.step=-1;P.chainT=0;P.atk=0;P.acd=0;P.charge=0;P.pcd=0');
await p.keyboard.press('KeyJ');await p.waitForTimeout(250);out.ejecucion=await p.evaluate('[SV.st.exec,Math.round(500-en[0].hp)]');
// tope del Elixir: sin Reliquia si no queda nada por mejorar
await p.evaluate('P.stB=45;for(const u of UPG)cnt[u.k]=u.max;en.length=0;openPanel()');out.merc=await p.evaluate('merc.map(m=>m.k).join()');await p.evaluate('closePanel();cnt={};P.stB=0;recalc()');
// combate: cadena, aguante, esquiva perfecta
await p.evaluate('en.length=0;wavePending=true;waveT=99;P.inv=0;P.st=100;P.step=-1;P.chainT=0;P.hp=P.max');const pasos=[];
for(let i=0;i<3;i++){await p.keyboard.press('KeyJ');await p.waitForTimeout(i==2?60:200);pasos.push(await p.evaluate('P.step'))}
await p.waitForTimeout(700);await p.evaluate('P.st=100;P.cd=0');await p.keyboard.press('Space');await p.waitForTimeout(20);
out.combate=[pasos.join(''),await p.evaluate('(hurt(10,1,0),P.perfect>0)')];
// meteoro
await p.evaluate('SV.met=true;P.mcd=0;P.st=100;P.y=200;P.hp=P.max;en.length=0;en.push(mkE(0,P.x+260,P.y-150,1));en[0].cd=99');await p.keyboard.press('KeyH');await p.waitForTimeout(1600);
out.meteoro=await p.evaluate('[mets.length,en.length]');
// bestiario pausa y reanuda
await p.click('#bt');out.bes=[await p.evaluate('paused'),await p.evaluate('$("bes").style.display')];await p.screenshot({path:dir+'/bestiario.png'});await p.click('#bx');out.bes.push(await p.evaluate('paused'));
// fin de oleada: aviso, pausa y panel único solo en oleadas pares; sin panel el juego sigue solo
await p.evaluate('en.length=0;P.gold=200;P.hp=40;P.inv=99;wave=1;wavePending=false;cleared=false');await p.waitForTimeout(900);
out.pausa=await p.evaluate('[choosing,cleared]');await p.waitForTimeout(1500);out.sinPanel=await p.evaluate('[choosing,wavePending]');
await p.waitForTimeout(3000);out.auto=await p.evaluate('[wave,en.length>0]');
await p.evaluate('en.length=0;wave=2;P.inv=99;wavePending=false;cleared=false');await p.waitForTimeout(900);out.antes=await p.evaluate('choosing');await p.waitForTimeout(1300);
out.panel=await p.evaluate('[choosing,cur.length,merc.length]');await p.waitForTimeout(700);await p.screenshot({path:dir+'/panel.png'});
await p.click('#cards [data-i="0"]');await p.click('#cards [data-m="0"]');out.compra=await p.evaluate('[!!picked,P.gold<200,Math.round(P.hp)>40]');
await p.click('#cards .go');await p.waitForTimeout(200);out.cierra=await p.evaluate('[choosing,wavePending]');await p.waitForTimeout(2600);out.sigue=await p.evaluate('[wave,en.length>0]');
// modos y armas
await p.evaluate('SV.st.bosses=1;SV.mode="boss";reset();waveT=0');await p.waitForTimeout(500);out.modoJefes=await p.evaluate('en.some(e=>e.type>=6)');
await p.evaluate('SV.mode="daily";reset();P.inv=99;waveT=0');await p.waitForTimeout(500);out.modoDia=await p.evaluate('mod===DAILY');
await p.evaluate('SV.mode="surv";SV.wu=[true,true,true];setWeapon(1);reset();P.inv=99');out.arma=await p.evaluate('[WP.n,ACOST[0],WP.reach[2]]');await p.evaluate('setWeapon(0)');
// revivir, muerte y menú
await p.evaluate('P.revive=1;P.hp=0');await p.waitForTimeout(250);out.revive=await p.evaluate('[dead,Math.round(P.hp)]');
await p.evaluate('P.hp=0');await p.waitForTimeout(400);out.menuTarda=await p.evaluate('$("over").classList.contains("on")');await p.waitForTimeout(1600);out.muerte=await p.evaluate('[dead,SV.souls>0,SV.st.runs,$("over").classList.contains("on")]');await p.screenshot({path:dir+'/menu.png'});
// logros y bestiario guardados
out.logros=await p.evaluate('Object.keys(SV.ach).length');
const m=await open(390,844,true);await m.tap('#over .go');await m.waitForTimeout(2000);await m.screenshot({path:dir+'/movil.png'});
console.log(JSON.stringify(out),'ERR',err.length?err:'ninguno');await b.close()})()
