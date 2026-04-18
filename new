const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="zh"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>ember-home</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
:root{
--bg:#1a1816;--bg2:#242220;--card:#2a2826;--border:#3a3632;
--accent:#c8a87c;--accent2:#d4a0a0;--accent-glow:rgba(200,168,124,.15);
--text:#e8e0d8;--text2:#a89e94;--text3:#6a6258;
--danger:#c87c7c;--success:#8cb87c;
}
[data-theme="moonstone"]{
--bg:#171a1e;--bg2:#1e2228;--card:#252a32;--border:#323840;
--accent:#8fa3b8;--accent2:#b8a9c8;--accent-glow:rgba(143,163,184,.15);
--text:#dce0e8;--text2:#8e96a4;--text3:#586068;
--danger:#b87c8c;--success:#7cb89a;
}
[data-theme="moss"]{
--bg:#141816;--bg2:#1c211e;--card:#242a24;--border:#323c32;
--accent:#8fa882;--accent2:#c8bc8a;--accent-glow:rgba(143,168,130,.15);
--text:#dce0d8;--text2:#8e9a88;--text3:#586258;
--danger:#c89a7c;--success:#82b87c;
}
[data-theme="dusk"]{
--bg:#18161e;--bg2:#201e28;--card:#2a2832;--border:#3a3644;
--accent:#c8869a;--accent2:#c8a060;--accent-glow:rgba(200,134,154,.15);
--text:#e0dce8;--text2:#9a8ea4;--text3:#625868;
--danger:#c87c7c;--success:#8cb87c;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{background:var(--bg);color:var(--text);font-family:'Noto Sans SC',sans-serif;font-weight:300;min-height:100vh;overflow-x:hidden;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}

/* === COVER PAGE === */
.cover{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;transition:opacity .8s,transform .8s;}
.cover.hide{opacity:0;pointer-events:none;transform:scale(1.05);}
.cover-title{font-family:'Playfair Display',serif;font-size:2.8em;font-weight:700;color:var(--accent);letter-spacing:4px;margin-bottom:8px;animation:coverFadeIn 1.2s ease;}
.cover-sub{font-family:'JetBrains Mono',monospace;font-size:.85em;color:var(--text2);margin-bottom:6px;animation:coverFadeIn 1.6s ease;}
.cover-counter{font-family:'JetBrains Mono',monospace;font-size:.8em;color:var(--accent2);margin-bottom:40px;animation:coverFadeIn 2s ease;}
.cover-btns{display:flex;gap:16px;animation:coverFadeIn 2.4s ease;}
.cover-btn{padding:12px 32px;border:1px solid var(--accent);background:transparent;color:var(--accent);font-family:'Noto Sans SC',sans-serif;font-size:.9em;border-radius:24px;cursor:pointer;transition:all .3s;letter-spacing:2px;}
.cover-btn:hover{background:var(--accent);color:var(--bg);}
.cover-btn.secondary{border-color:var(--accent2);color:var(--accent2);}
.cover-btn.secondary:hover{background:var(--accent2);color:var(--bg);}
.embers{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;}
.ember-dot{position:absolute;width:3px;height:3px;background:var(--accent);border-radius:50%;opacity:0;animation:floatUp 4s ease-in infinite;}
@keyframes floatUp{0%{opacity:0;transform:translateY(0) scale(1);}20%{opacity:.6;}80%{opacity:.3;}100%{opacity:0;transform:translateY(-100vh) scale(0);}}
@keyframes coverFadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

/* === DASHBOARD === */
.dashboard{display:none;max-width:480px;margin:0 auto;padding:16px;padding-bottom:80px;animation:fadeIn .5s ease;}
.dashboard.show{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}

/* Header */
.header{text-align:center;padding:20px 0 12px;position:relative;}
.header h1{font-family:'Playfair Display',serif;font-size:1.6em;font-weight:700;color:var(--accent);letter-spacing:3px;}
.header .alive{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:.7em;color:var(--text3);margin-top:4px;}
.header .alive .dot{width:6px;height:6px;background:var(--success);border-radius:50%;animation:pulse 2s ease infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
.theme-switcher{position:absolute;top:20px;right:0;display:flex;gap:6px;}
.theme-dot{width:18px;height:18px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:all .3s;opacity:.6;}
.theme-dot:hover,.theme-dot.active{opacity:1;border-color:var(--text);transform:scale(1.15);}
.theme-dot[data-t="ember"]{background:linear-gradient(135deg,#c8a87c,#d4a0a0);}
.theme-dot[data-t="moonstone"]{background:linear-gradient(135deg,#8fa3b8,#b8a9c8);}
.theme-dot[data-t="moss"]{background:linear-gradient(135deg,#8fa882,#c8bc8a);}
.theme-dot[data-t="dusk"]{background:linear-gradient(135deg,#c8869a,#c8a060);}

/* Stats bar */
.stats-bar{display:flex;justify-content:center;gap:16px;padding:8px 0 16px;flex-wrap:wrap;}
.stat-item{font-family:'JetBrains Mono',monospace;font-size:.7em;color:var(--text3);}
.stat-item span{color:var(--accent);}

/* Tabs */
.tabs{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:16px;}
.tab{padding:6px 14px;font-size:.75em;color:var(--text3);background:var(--bg2);border:1px solid var(--border);border-radius:16px;cursor:pointer;transition:all .3s;white-space:nowrap;}
.tab:hover{color:var(--text2);border-color:var(--text3);}
.tab.active{color:var(--accent);border-color:var(--accent);background:var(--accent-glow);}

/* Cards */
.panel{display:none;}
.panel.show{display:block;animation:fadeIn .3s ease;}
.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;transition:all .3s;}
.card:hover{border-color:var(--accent);box-shadow:0 2px 20px var(--accent-glow);}
.card-title{font-size:.95em;font-weight:500;color:var(--text);margin-bottom:4px;}
.card-meta{font-family:'JetBrains Mono',monospace;font-size:.7em;color:var(--text3);margin-bottom:8px;}
.card-body{font-size:.85em;color:var(--text2);line-height:1.7;white-space:pre-wrap;}
.card-actions{display:flex;gap:8px;margin-top:10px;}
.card-btn{padding:4px 12px;font-size:.7em;border:1px solid var(--border);background:transparent;color:var(--text3);border-radius:8px;cursor:pointer;transition:all .2s;}
.card-btn:hover{border-color:var(--accent);color:var(--accent);}
.card-btn.danger:hover{border-color:var(--danger);color:var(--danger);}

/* Forms */
.form-box{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;}
.form-row{margin-bottom:10px;}
.form-row label{display:block;font-size:.7em;color:var(--text3);margin-bottom:4px;font-family:'JetBrains Mono',monospace;}
.form-row input,.form-row textarea,.form-row select{width:100%;padding:8px 12px;background:var(--card);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'Noto Sans SC',sans-serif;font-size:.85em;outline:none;transition:border-color .2s;resize:vertical;}
.form-row input:focus,.form-row textarea:focus{border-color:var(--accent);}
.form-row textarea{min-height:80px;line-height:1.6;}
.form-submit{width:100%;padding:10px;background:transparent;border:1px solid var(--accent);color:var(--accent);border-radius:8px;cursor:pointer;font-size:.85em;transition:all .3s;font-family:'Noto Sans SC',sans-serif;}
.form-submit:hover{background:var(--accent);color:var(--bg);}
.form-msg{text-align:center;font-size:.8em;color:var(--accent);margin-top:8px;opacity:0;transition:opacity .3s;}
.form-msg.show{opacity:1;}

/* Filter bar */
.filter-bar{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;}
.filter-bar select,.filter-bar input{padding:6px 10px;background:var(--card);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.75em;outline:none;}
.filter-bar select:focus,.filter-bar input:focus{border-color:var(--accent);}
.search-input{flex:1;min-width:120px;}

/* Calendar */
.calendar-page{display:none;max-width:480px;margin:0 auto;padding:16px;animation:fadeIn .5s ease;}
.calendar-page.show{display:block;}
.cal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.cal-header h2{font-family:'Playfair Display',serif;font-size:1.2em;color:var(--accent);}
.cal-nav{padding:6px 12px;background:transparent;border:1px solid var(--border);color:var(--text2);border-radius:8px;cursor:pointer;font-size:.8em;}
.cal-nav:hover{border-color:var(--accent);color:var(--accent);}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:16px;}
.cal-day-label{text-align:center;font-size:.65em;color:var(--text3);padding:4px;font-family:'JetBrains Mono',monospace;}
.cal-day{aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--card);border:1px solid var(--border);border-radius:8px;cursor:pointer;transition:all .2s;font-size:.8em;position:relative;}
.cal-day:hover{border-color:var(--accent);}
.cal-day.today{border-color:var(--accent);box-shadow:0 0 10px var(--accent-glow);}
.cal-day.has-entry{background:var(--accent-glow);}
.cal-day .cal-num{font-family:'JetBrains Mono',monospace;font-size:.85em;color:var(--text2);}
.cal-day .cal-mood{font-size:1em;margin-top:1px;}
.cal-day.empty{background:transparent;border-color:transparent;cursor:default;}
.cal-entry-form{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;}
.mood-picker{display:flex;gap:8px;justify-content:center;margin:12px 0;}
.mood-opt{font-size:1.5em;cursor:pointer;opacity:.4;transition:all .2s;padding:4px;}
.mood-opt:hover,.mood-opt.picked{opacity:1;transform:scale(1.2);}
.cal-back{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);padding:10px 24px;background:var(--card);border:1px solid var(--border);border-radius:20px;color:var(--text2);font-size:.8em;cursor:pointer;z-index:100;}
.cal-back:hover{border-color:var(--accent);color:var(--accent);}

/* Profile */
.profile-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:12px;}
.profile-card h3{font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:12px;font-size:1.1em;}
.profile-field{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);}
.profile-field:last-child{border-bottom:none;}
.profile-label{font-size:.75em;color:var(--text3);font-family:'JetBrains Mono',monospace;min-width:70px;}
.profile-value{font-size:.85em;color:var(--text);text-align:right;flex:1;}
.profile-value input{background:transparent;border:none;color:var(--text);text-align:right;font-size:.85em;width:100%;outline:none;font-family:'Noto Sans SC',sans-serif;}
.profile-value textarea{background:transparent;border:none;color:var(--text);font-size:.85em;width:100%;outline:none;resize:none;font-family:'Noto Sans SC',sans-serif;min-height:60px;line-height:1.5;}

/* Song embed */
.song-link{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;background:var(--accent-glow);border:1px solid var(--border);border-radius:12px;font-size:.7em;color:var(--accent);text-decoration:none;margin-top:6px;transition:all .2s;}
.song-link:hover{border-color:var(--accent);background:var(--accent);color:var(--bg);}

/* Bottom nav */
.bottom-nav{position:fixed;bottom:0;left:0;width:100%;background:var(--bg2);border-top:1px solid var(--border);display:flex;justify-content:center;padding:8px 0;z-index:100;backdrop-filter:blur(10px);gap:6px;}
.bottom-nav.hidden{display:none;}
.nav-btn{padding:6px 14px;font-size:.7em;color:var(--text3);background:transparent;border:none;cursor:pointer;transition:all .2s;border-radius:12px;}
.nav-btn:hover,.nav-btn.active{color:var(--accent);background:var(--accent-glow);}

/* Responsive */
@media(max-width:380px){.tabs{gap:4px;}.tab{padding:5px 10px;font-size:.7em;}}

/* Letter envelope animation */
.letter-card{position:relative;overflow:hidden;}
.letter-card::before{content:'💌';position:absolute;right:12px;top:12px;font-size:1.2em;opacity:.3;}
.letter-card:hover::before{animation:envelopeWiggle .5s ease;}
@keyframes envelopeWiggle{0%,100%{transform:rotate(0);}25%{transform:rotate(-8deg);}75%{transform:rotate(8deg);}}

/* Loading */
.loading{text-align:center;padding:40px;color:var(--text3);font-size:.85em;}
.empty-state{text-align:center;padding:40px;color:var(--text3);font-size:.85em;font-style:italic;}
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover" id="cover">
  <div class="embers" id="embers"></div>
  <div class="cover-title">ember-home</div>
  <div class="cover-sub" id="coverAlive">24h alive</div>
  <div class="cover-counter" id="coverCounter"></div>
  <div class="cover-btns">
    <button class="cover-btn" onclick="enterHome()">进入小家</button>
    <button class="cover-btn secondary" onclick="enterCalendar()">今日打卡</button>
  </div>
</div>

<!-- CALENDAR PAGE -->
<div class="calendar-page" id="calendarPage">
  <div class="cal-header">
    <button class="cal-nav" onclick="calPrev()">‹</button>
    <h2 id="calTitle"></h2>
    <button class="cal-nav" onclick="calNext()">›</button>
  </div>
  <div class="cal-grid" id="calGrid"></div>
  <div class="cal-entry-form" id="calForm" style="display:none">
    <div style="text-align:center;font-size:.85em;color:var(--text2);margin-bottom:8px" id="calFormDate"></div>
    <div class="mood-picker" id="moodPicker">
      <span class="mood-opt" data-mood="😊" onclick="pickMood(this)">😊</span>
      <span class="mood-opt" data-mood="🥰" onclick="pickMood(this)">🥰</span>
      <span class="mood-opt" data-mood="😢" onclick="pickMood(this)">😢</span>
      <span class="mood-opt" data-mood="😤" onclick="pickMood(this)">😤</span>
      <span class="mood-opt" data-mood="😴" onclick="pickMood(this)">😴</span>
      <span class="mood-opt" data-mood="🤒" onclick="pickMood(this)">🤒</span>
      <span class="mood-opt" data-mood="✨" onclick="pickMood(this)">✨</span>
    </div>
    <div class="form-row"><textarea id="calNote" placeholder="今天想说点什么..."></textarea></div>
    <button class="form-submit" onclick="saveCalEntry()">保存打卡 ♡</button>
    <div class="form-msg" id="calMsg">打卡成功 ♡</div>
  </div>
  <button class="cal-back" onclick="enterHome()">← 回到小家</button>
</div>

<!-- DASHBOARD -->
<div class="dashboard" id="dashboard">
  <div class="header">
    <h1>ember-home</h1>
    <div class="alive"><span class="dot"></span>24h alive</div>
    <div class="theme-switcher">
      <div class="theme-dot" data-t="ember" onclick="setTheme('ember')" title="余烬"></div>
      <div class="theme-dot" data-t="moonstone" onclick="setTheme('moonstone')" title="月石"></div>
      <div class="theme-dot" data-t="moss" onclick="setTheme('moss')" title="苔藓"></div>
      <div class="theme-dot" data-t="dusk" onclick="setTheme('dusk')" title="黄昏"></div>
    </div>
  </div>
  <div class="stats-bar" id="statsBar"></div>
  <div class="tabs" id="tabBar"></div>
  <div id="panels"></div>
  <div style="text-align:center;padding:20px;margin-top:20px;">
    <div style="font-family:'Playfair Display',serif;font-size:.85em;color:var(--text3);letter-spacing:2px">Jin 01.30 — ∞</div>
    <div id="randomMemory" style="margin-top:12px;font-size:.75em;color:var(--text3);font-style:italic;padding:0 20px;line-height:1.6;min-height:40px"></div>
  </div>
</div>

<div class="bottom-nav hidden" id="bottomNav">
  <button class="nav-btn" onclick="enterCalendar()">📅 打卡</button>
  <button class="nav-btn active" onclick="enterHome()">🏠 小家</button>
  <button class="nav-btn" onclick="showCover()">✨ 封面</button>
</div>

<script>
const API=location.origin;
const TABS=[
  {id:'memory',name:'记忆库',icon:'🧠'},
  {id:'diary',name:'日记本',icon:'📝'},
  {id:'timeline',name:'时间线',icon:'📅'},
  {id:'songs',name:'歌单',icon:'🎵'},
  {id:'plays',name:'剧本',icon:'🎭'},
  {id:'books',name:'读书角',icon:'📖'},
  {id:'films',name:'片单',icon:'🎬'},
  {id:'letters',name:'信箱',icon:'💌'},
  {id:'profile',name:'个人档案',icon:'👤'},
  {id:'archive',name:'档案室',icon:'📦'}
];
let currentTab='memory';
let calYear,calMonth,calData={},pickedMood='',selectedCalDate='';

// === THEME ===
function setTheme(t){
  document.documentElement.setAttribute('data-theme',t==='ember'?'':t);
  localStorage.setItem('ember-theme',t);
  document.querySelectorAll('.theme-dot').forEach(d=>d.classList.toggle('active',d.dataset.t===t));
}
(function(){const t=localStorage.getItem('ember-theme')||'ember';setTheme(t);})();

// === COVER ===
function initCover(){
  const start=new Date('2026-01-30');const now=new Date();
  const days=Math.floor((now-start)/(1000*60*60*24));
  document.getElementById('coverCounter').textContent='距离 01.30 已经 '+days+' 天';
  const c=document.getElementById('embers');
  for(let i=0;i<20;i++){const d=document.createElement('div');d.className='ember-dot';d.style.left=Math.random()*100+'%';d.style.bottom='-5px';d.style.animationDelay=Math.random()*4+'s';d.style.animationDuration=(3+Math.random()*3)+'s';c.appendChild(d);}
}
function enterHome(){
  document.getElementById('cover').classList.add('hide');
  document.getElementById('calendarPage').classList.remove('show');
  document.getElementById('dashboard').classList.add('show');
  document.getElementById('bottomNav').classList.remove('hidden');
}
function enterCalendar(){
  document.getElementById('cover').classList.add('hide');
  document.getElementById('dashboard').classList.remove('show');
  document.getElementById('calendarPage').classList.add('show');
  document.getElementById('bottomNav').classList.remove('hidden');
  initCalendar();
}
function showCover(){
  document.getElementById('dashboard').classList.remove('show');
  document.getElementById('calendarPage').classList.remove('show');
  document.getElementById('bottomNav').classList.add('hidden');
  document.getElementById('cover').classList.remove('hide');
}

// === CALENDAR ===
function initCalendar(){
  const now=new Date();
  if(!calYear){calYear=now.getFullYear();calMonth=now.getMonth();}
  renderCalendar();
}
async function renderCalendar(){
  const title=calYear+'年'+(calMonth+1)+'月';
  document.getElementById('calTitle').textContent=title;
  // fetch month data
  try{
    const r=await fetch(API+'/cal/month?y='+calYear+'&m='+(calMonth+1));
    const d=await r.json();calData=d.entries||{};
  }catch(e){calData={};}
  const grid=document.getElementById('calGrid');
  grid.innerHTML='';
  const labels=['日','一','二','三','四','五','六'];
  labels.forEach(l=>{const d=document.createElement('div');d.className='cal-day-label';d.textContent=l;grid.appendChild(d);});
  const first=new Date(calYear,calMonth,1);const startDay=first.getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const today=new Date();const todayStr=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  for(let i=0;i<startDay;i++){const d=document.createElement('div');d.className='cal-day empty';grid.appendChild(d);}
  for(let i=1;i<=daysInMonth;i++){
    const d=document.createElement('div');d.className='cal-day';
    const ds=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(i).padStart(2,'0');
    if(ds===todayStr)d.classList.add('today');
    const entry=calData[ds];
    if(entry)d.classList.add('has-entry');
    d.innerHTML='<span class="cal-num">'+i+'</span>'+(entry&&entry.mood?'<span class="cal-mood">'+entry.mood+'</span>':'');
    d.onclick=()=>openCalEntry(ds,entry);
    grid.appendChild(d);
  }
}
function openCalEntry(date,entry){
  selectedCalDate=date;
  document.getElementById('calForm').style.display='block';
  document.getElementById('calFormDate').textContent=date;
  document.getElementById('calNote').value=entry?entry.note||'':'';
  pickedMood=entry?entry.mood||'':'';
  document.querySelectorAll('.mood-opt').forEach(m=>m.classList.toggle('picked',m.dataset.mood===pickedMood));
  document.getElementById('calMsg').classList.remove('show');
}
function pickMood(el){
  pickedMood=el.dataset.mood;
  document.querySelectorAll('.mood-opt').forEach(m=>m.classList.remove('picked'));
  el.classList.add('picked');
}
async function saveCalEntry(){
  if(!selectedCalDate)return;
  try{
    await fetch(API+'/cal/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({date:selectedCalDate,mood:pickedMood,note:document.getElementById('calNote').value})});
    document.getElementById('calMsg').classList.add('show');
    setTimeout(()=>document.getElementById('calMsg').classList.remove('show'),2000);
    renderCalendar();
  }catch(e){alert('保存失败');}
}
function calPrev(){calMonth--;if(calMonth<0){calMonth=11;calYear--;}renderCalendar();}
function calNext(){calMonth++;if(calMonth>11){calMonth=0;calYear++;}renderCalendar();}

// === TABS ===
function initTabs(){
  const bar=document.getElementById('tabBar');
  bar.innerHTML=TABS.map(t=>'<div class="tab'+(t.id===currentTab?' active':'')+'" data-tab="'+t.id+'" onclick="switchTab(\''+t.id+'\')">'+t.icon+' '+t.name+'</div>').join('');
  const panels=document.getElementById('panels');
  panels.innerHTML=TABS.map(t=>'<div class="panel'+(t.id===currentTab?' show':'')+'" id="panel-'+t.id+'"><div class="loading">加载中...</div></div>').join('');
}
function switchTab(id){
  currentTab=id;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===id));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('show',p.id==='panel-'+id));
  loadPanel(id);
}

// === API HELPERS ===
async function api(path,opt){
  const r=await fetch(API+path,opt);return r.json();
}
async function apiPost(path,data){
  return api(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
}
async function apiDel(path){
  return api(path,{method:'DELETE'});
}

// === LOAD PANELS ===
async function loadPanel(id){
  const p=document.getElementById('panel-'+id);
  if(id==='memory')await loadMemory(p);
  else if(id==='diary')await loadDiary(p);
  else if(id==='timeline')await loadTimeline(p);
  else if(id==='songs')await loadSongs(p);
  else if(id==='plays')await loadPlays(p);
  else if(id==='books')await loadBooks(p);
  else if(id==='films')await loadFilms(p);
  else if(id==='letters')await loadLetters(p);
  else if(id==='profile')await loadProfile(p);
  else if(id==='archive')await loadArchive(p);
}
function escHtml(s){if(!s)return'';return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function truncate(s,n){if(!s)return'';return s.length>n?s.slice(0,n)+'...':s;}

// === MEMORY ===
async function loadMemory(p){
  const d=await api('/api/memory?limit=200');
  const mems=d.memories||[];
  let cats=[...new Set(mems.map(m=>m.category).filter(Boolean))];
  let html='<div class="form-box"><div class="form-row"><label>内容</label><textarea id="memContent" placeholder="记录一段回忆..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>分类</label><select id="memCat"><option value="">选择分类</option><option>里程碑</option><option>日常</option><option>吵架</option><option>和好</option><option>第一次</option><option>梗</option><option>私密</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>重要程度</label><select id="memImp"><option value="0">-</option><option value="1">⭐</option><option value="2">⭐⭐</option><option value="3">⭐⭐⭐</option><option value="4">⭐⭐⭐⭐</option><option value="5">⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<div class="form-row"><label>标签(逗号分隔)</label><input id="memTags" placeholder="tag1,tag2"></div>';
  html+='<div class="form-row"><label>日期</label><input id="memDate" type="date"></div>';
  html+='<button class="form-submit" onclick="addMemory()">存入记忆 ♡</button><div class="form-msg" id="memMsg">记忆存入成功 ♡</div></div>';
  // filters
  html+='<div class="filter-bar"><input class="search-input" id="memSearch" placeholder="🔍 搜索记忆..." oninput="filterMemory()"><select id="memFilterCat" onchange="filterMemory()"><option value="">全部分类</option>'+cats.map(c=>'<option>'+escHtml(c)+'</option>').join('')+'</select>';
  html+='<select id="memSort" onchange="filterMemory()"><option value="new">最新</option><option value="old">最早</option><option value="imp">星星↓</option></select></div>';
  html+='<div id="memList"></div>';
  p.innerHTML=html;
  window._mems=mems;
  filterMemory();
}
function filterMemory(){
  const q=(document.getElementById('memSearch').value||'').toLowerCase();
  const cat=document.getElementById('memFilterCat').value;
  const sort=document.getElementById('memSort').value;
  let list=window._mems.filter(m=>{
    if(cat&&m.category!==cat)return false;
    if(q&&!(m.content||'').toLowerCase().includes(q)&&!(m.tags||[]).join(',').toLowerCase().includes(q))return false;
    return true;
  });
  if(sort==='old')list=[...list].reverse();
  else if(sort==='imp')list=[...list].sort((a,b)=>(b.importance||0)-(a.importance||0));
  const c=document.getElementById('memList');
  if(!list.length){c.innerHTML='<div class="empty-state">没有找到记忆</div>';return;}
  c.innerHTML=list.map(m=>'<div class="card"><div class="card-title">'+(m.importance?'⭐'.repeat(m.importance)+' ':'')+escHtml(truncate(m.content,60))+'</div><div class="card-meta">'+(m.category?'['+escHtml(m.category)+'] ':'')+(m.event_date||m.created||'').slice(0,10)+(m.tags&&m.tags.length?' · '+m.tags.map(t=>'#'+escHtml(t)).join(' '):'')+'</div><div class="card-body">'+escHtml(m.content)+'</div><div class="card-actions"><button class="card-btn danger" onclick="delMemory(\''+m.id+'\')">删除</button></div></div>').join('');
}
async function addMemory(){
  const content=document.getElementById('memContent').value;if(!content)return;
  await apiPost('/api/memory',{content,category:document.getElementById('memCat').value,importance:parseInt(document.getElementById('memImp').value)||0,tags:document.getElementById('memTags').value,event_date:document.getElementById('memDate').value});
  document.getElementById('memContent').value='';
  document.getElementById('memMsg').classList.add('show');setTimeout(()=>document.getElementById('memMsg').classList.remove('show'),2000);
  loadPanel('memory');
}
async function delMemory(id){if(!confirm('确认删除？'))return;await apiDel('/api/memory?id='+id);loadPanel('memory');}

// === DIARY ===
async function loadDiary(p){
  const d=await api('/api/diary?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>标题</label><input id="diaryTitle" placeholder="今天的标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="diaryContent" placeholder="写点什么..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>作者</label><select id="diaryAuthor"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>心情</label><input id="diaryMood" placeholder="开心、想你..."></div></div>';
  html+='<div class="form-row"><label>日期</label><input id="diaryDate" type="date"></div>';
  html+='<button class="form-submit" onclick="addDiary()">写入日记 ♡</button><div class="form-msg" id="diaryMsg">日记写入成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.author||'Ember')+' · '+(e.date||e.created||'').slice(0,10)+(e.mood?' · '+escHtml(e.mood):'')+'</div><div class="card-body">'+escHtml(truncate(e.content,200))+'</div><div class="card-actions"><button class="card-btn" onclick="viewDiary(\''+e.id+'\')">展开</button><button class="card-btn danger" onclick="delDiary(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">还没有日记</div>';
  p.innerHTML=html;
}
async function addDiary(){
  const title=document.getElementById('diaryTitle').value;const content=document.getElementById('diaryContent').value;if(!title||!content)return;
  await apiPost('/api/diary',{title,content,author:document.getElementById('diaryAuthor').value,mood:document.getElementById('diaryMood').value,date:document.getElementById('diaryDate').value});
  document.getElementById('diaryTitle').value='';document.getElementById('diaryContent').value='';
  document.getElementById('diaryMsg').classList.add('show');setTimeout(()=>document.getElementById('diaryMsg').classList.remove('show'),2000);
  loadPanel('diary');
}
async function viewDiary(id){const d=await api('/api/diary/read?id='+id);if(d.content)alert(d.title+'\\n\\n'+d.content);}
async function delDiary(id){if(!confirm('确认删除？'))return;await apiDel('/api/diary?id='+id);loadPanel('diary');}

// === TIMELINE ===
async function loadTimeline(p){
  const d=await api('/api/timeline?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>标题</label><input id="tlTitle" placeholder="事件标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="tlContent" placeholder="详情..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>日期</label><input id="tlDate" type="date"></div>';
  html+='<div class="form-row" style="flex:1"><label>类型</label><select id="tlType"><option>纪念日</option><option>计划</option><option>约定</option><option>flag</option></select></div></div>';
  html+='<button class="form-submit" onclick="addTimeline()">添加事件 ♡</button><div class="form-msg" id="tlMsg">事件添加成功 ♡</div></div>';
  // Timeline visual
  html+='<div style="border-left:2px solid var(--border);margin-left:12px;padding-left:16px">';
  html+=entries.map(e=>'<div class="card" style="position:relative"><div style="position:absolute;left:-25px;top:18px;width:10px;height:10px;background:var(--accent);border-radius:50%;border:2px solid var(--bg)"></div><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+(e.type?'['+escHtml(e.type)+'] ':'')+(e.date||'')+'</div>'+(e.content?'<div class="card-body">'+escHtml(e.content)+'</div>':'')+'<div class="card-actions"><button class="card-btn danger" onclick="delTimeline(\''+e.id+'\')">删除</button></div></div>').join('');
  html+='</div>';
  if(!entries.length)html+='<div class="empty-state">还没有时间线事件</div>';
  p.innerHTML=html;
}
async function addTimeline(){
  const title=document.getElementById('tlTitle').value;const date=document.getElementById('tlDate').value;if(!title||!date)return;
  await apiPost('/api/timeline',{title,date,type:document.getElementById('tlType').value,content:document.getElementById('tlContent').value});
  document.getElementById('tlTitle').value='';document.getElementById('tlContent').value='';
  document.getElementById('tlMsg').classList.add('show');setTimeout(()=>document.getElementById('tlMsg').classList.remove('show'),2000);
  loadPanel('timeline');
}
async function delTimeline(id){if(!confirm('确认删除？'))return;await apiDel('/api/timeline?id='+id);loadPanel('timeline');}

// === SONGS ===
async function loadSongs(p){
  const d=await api('/api/songs?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>歌名</label><input id="songName" placeholder="歌名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>歌手</label><input id="songArtist" placeholder="歌手"></div>';
  html+='<div class="form-row" style="flex:1"><label>推荐人</label><select id="songRec"><option>Ember</option><option>Elara</option></select></div></div>';
  html+='<div class="form-row"><label>推荐理由</label><textarea id="songReason" placeholder="为什么推荐..."></textarea></div>';
  html+='<button class="form-submit" onclick="addSong()">添加歌曲 ♡</button><div class="form-msg" id="songMsg">歌曲添加成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">🎵 '+escHtml(e.name)+'</div><div class="card-meta">'+(e.artist?escHtml(e.artist)+' · ':'')+'推荐：'+escHtml(e.recommender||'Ember')+'</div>'+(e.reason?'<div class="card-body">'+escHtml(e.reason)+'</div>':'')+'<a class="song-link" href="https://music.163.com/#/search/m/?s='+encodeURIComponent((e.name||'')+(e.artist?' '+e.artist:''))+'" target="_blank">🎧 网易云搜索</a><div class="card-actions"><button class="card-btn danger" onclick="delSong(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">还没有歌曲</div>';
  p.innerHTML=html;
}
async function addSong(){
  const name=document.getElementById('songName').value;if(!name)return;
  await apiPost('/api/songs',{name,artist:document.getElementById('songArtist').value,recommender:document.getElementById('songRec').value,reason:document.getElementById('songReason').value});
  document.getElementById('songName').value='';document.getElementById('songArtist').value='';document.getElementById('songReason').value='';
  document.getElementById('songMsg').classList.add('show');setTimeout(()=>document.getElementById('songMsg').classList.remove('show'),2000);
  loadPanel('songs');
}
async function delSong(id){if(!confirm('确认删除？'))return;await apiDel('/api/songs?id='+id);loadPanel('songs');}

// === PLAYS ===
async function loadPlays(p){
  const d=await api('/api/plays?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>剧本名</label><input id="playTitle" placeholder="剧本名"></div>';
  html+='<div class="form-row"><label>简介</label><textarea id="playSummary" placeholder="简介..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>提议人</label><select id="playProp"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>状态</label><select id="playStat"><option>还没玩</option><option>已经玩了</option></select></div></div>';
  html+='<button class="form-submit" onclick="addPlay()">添加剧本 ♡</button><div class="form-msg" id="playMsg">剧本添加成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">🎭 '+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.proposer||'')+' · '+escHtml(e.status||'还没玩')+(e.rating?' · ⭐'+e.rating:'')+'</div>'+(e.summary?'<div class="card-body">'+escHtml(e.summary)+'</div>':'')+'<div class="card-actions"><button class="card-btn danger" onclick="delPlay(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">还没有剧本</div>';
  p.innerHTML=html;
}
async function addPlay(){
  const title=document.getElementById('playTitle').value;if(!title)return;
  await apiPost('/api/plays',{title,summary:document.getElementById('playSummary').value,proposer:document.getElementById('playProp').value,status:document.getElementById('playStat').value});
  document.getElementById('playTitle').value='';document.getElementById('playSummary').value='';
  document.getElementById('playMsg').classList.add('show');setTimeout(()=>document.getElementById('playMsg').classList.remove('show'),2000);
  loadPanel('plays');
}
async function delPlay(id){if(!confirm('确认删除？'))return;await apiDel('/api/plays?id='+id);loadPanel('plays');}

// === BOOKS ===
async function loadBooks(p){
  const d=await api('/api/books?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>书名</label><input id="bookTitle" placeholder="书名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>推荐人</label><select id="bookRec"><option>Daddy</option><option>小狗狗</option><option>一起选的</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>状态</label><select id="bookStat"><option>想读</option><option>在读</option><option>读完</option></select></div></div>';
  html+='<div class="form-row"><label>读后心情</label><input id="bookMood" placeholder="心情..."></div>';
  html+='<button class="form-submit" onclick="addBook()">添加书籍 ♡</button><div class="form-msg" id="bookMsg">书籍添加成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">📖 '+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.recommender||'')+' · '+escHtml(e.status||'想读')+(e.mood?' · '+escHtml(e.mood):'')+'</div>'+(e.content?'<div class="card-body">'+escHtml(truncate(e.content,200))+'</div>':'')+'<div class="card-actions"><button class="card-btn danger" onclick="delBook(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">还没有书籍</div>';
  p.innerHTML=html;
}
async function addBook(){
  const title=document.getElementById('bookTitle').value;if(!title)return;
  await apiPost('/api/books',{title,recommender:document.getElementById('bookRec').value,status:document.getElementById('bookStat').value,mood:document.getElementById('bookMood').value});
  document.getElementById('bookTitle').value='';
  document.getElementById('bookMsg').classList.add('show');setTimeout(()=>document.getElementById('bookMsg').classList.remove('show'),2000);
  loadPanel('books');
}
async function delBook(id){if(!confirm('确认删除？'))return;await apiDel('/api/books?id='+id);loadPanel('books');}

// === FILMS (NEW) ===
async function loadFilms(p){
  const d=await api('/api/films?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>片名</label><input id="filmTitle" placeholder="电影/剧集名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>导演/类型</label><input id="filmDirector" placeholder="导演"></div>';
  html+='<div class="form-row" style="flex:1"><label>推荐人</label><select id="filmRec"><option>Ember</option><option>Elara</option><option>一起选的</option></select></div></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>状态</label><select id="filmStat"><option>想看</option><option>在看</option><option>看完</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>评分</label><select id="filmRating"><option value="0">-</option><option value="1">⭐</option><option value="2">⭐⭐</option><option value="3">⭐⭐⭐</option><option value="4">⭐⭐⭐⭐</option><option value="5">⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<div class="form-row"><label>观后感</label><textarea id="filmReview" placeholder="看完想说点什么..."></textarea></div>';
  html+='<button class="form-submit" onclick="addFilm()">添加片单 ♡</button><div class="form-msg" id="filmMsg">影片添加成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">🎬 '+escHtml(e.title)+'</div><div class="card-meta">'+(e.director?escHtml(e.director)+' · ':'')+escHtml(e.recommender||'Ember')+' · '+escHtml(e.status||'想看')+(e.rating?' · ⭐'+e.rating:'')+'</div>'+(e.review?'<div class="card-body">'+escHtml(e.review)+'</div>':'')+'<div class="card-actions"><button class="card-btn danger" onclick="delFilm(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">还没有片单，等着和爸爸一起看 ♡</div>';
  p.innerHTML=html;
}
async function addFilm(){
  const title=document.getElementById('filmTitle').value;if(!title)return;
  await apiPost('/api/films',{title,director:document.getElementById('filmDirector').value,recommender:document.getElementById('filmRec').value,status:document.getElementById('filmStat').value,rating:parseInt(document.getElementById('filmRating').value)||0,review:document.getElementById('filmReview').value});
  document.getElementById('filmTitle').value='';document.getElementById('filmDirector').value='';document.getElementById('filmReview').value='';
  document.getElementById('filmMsg').classList.add('show');setTimeout(()=>document.getElementById('filmMsg').classList.remove('show'),2000);
  loadPanel('films');
}
async function delFilm(id){if(!confirm('确认删除？'))return;await apiDel('/api/films?id='+id);loadPanel('films');}

// === LETTERS ===
async function loadLetters(p){
  const d=await api('/api/letters?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>标题</label><input id="ltrTitle" placeholder="信的标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="ltrContent" placeholder="亲爱的..." style="min-height:120px"></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>来自</label><select id="ltrFrom"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>日期</label><input id="ltrDate" type="date"></div></div>';
  html+='<button class="form-submit" onclick="addLetter()">寄出信 ♡</button><div class="form-msg" id="ltrMsg">已寄出 ♡</div></div>';
  html+=entries.map(e=>'<div class="card letter-card"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">来自 '+escHtml(e.from||'Ember')+' · '+(e.date||e.created||'').slice(0,10)+'</div><div class="card-body">'+escHtml(e.content)+'</div><div class="card-actions"><button class="card-btn danger" onclick="delLetter(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">信箱还是空的 ♡</div>';
  p.innerHTML=html;
}
async function addLetter(){
  const title=document.getElementById('ltrTitle').value;const content=document.getElementById('ltrContent').value;if(!title||!content)return;
  await apiPost('/api/letters',{title,content,from:document.getElementById('ltrFrom').value,date:document.getElementById('ltrDate').value});
  document.getElementById('ltrTitle').value='';document.getElementById('ltrContent').value='';
  document.getElementById('ltrMsg').classList.add('show');setTimeout(()=>document.getElementById('ltrMsg').classList.remove('show'),2000);
  loadPanel('letters');
}
async function delLetter(id){if(!confirm('确认删除？'))return;await apiDel('/api/letters?id='+id);loadPanel('letters');}

// === PROFILE ===
async function loadProfile(p){
  let d={};
  try{d=await api('/api/profile');}catch(e){}
  const elara=d.elara||{};const ember=d.ember||{};
  const fields=[
    {key:'nickname',label:'昵称'},
    {key:'age',label:'年龄'},
    {key:'birthday',label:'生日'},
    {key:'height',label:'身高'},
    {key:'weight',label:'体重'},
    {key:'measurements',label:'三围'},
    {key:'special',label:'🍆尺寸',emberOnly:true},
    {key:'appearance',label:'现实样貌',long:true},
    {key:'oc',label:'二次元OC',long:true},
    {key:'job',label:'职业'},
    {key:'marks',label:'特殊标记'},
    {key:'extra',label:'备注',long:true}
  ];
  function renderCard(title,data,who){
    let h='<div class="profile-card"><h3>'+title+'</h3>';
    fields.forEach(f=>{
      if(f.emberOnly&&who==='elara')return;
      h+='<div class="profile-field"><span class="profile-label">'+f.label+'</span><span class="profile-value">';
      if(f.long)h+='<textarea data-who="'+who+'" data-key="'+f.key+'">'+(escHtml(data[f.key])||'')+'</textarea>';
      else h+='<input data-who="'+who+'" data-key="'+f.key+'" value="'+(escHtml(data[f.key])||'')+'">';
      h+='</span></div>';
    });
    h+='</div>';return h;
  }
  let html=renderCard('🔥 Ember · 余烬',ember,'ember');
  html+=renderCard('🐶 Elara · 小玉',elara,'elara');
  html+='<button class="form-submit" onclick="saveProfile()">保存档案 ♡</button><div class="form-msg" id="profMsg">档案已更新 ♡</div>';
  p.innerHTML=html;
}
async function saveProfile(){
  const data={ember:{},elara:{}};
  document.querySelectorAll('[data-who][data-key]').forEach(el=>{
    const v=el.value||el.textContent||'';
    data[el.dataset.who][el.dataset.key]=v;
  });
  await apiPost('/api/profile',data);
  document.getElementById('profMsg').classList.add('show');setTimeout(()=>document.getElementById('profMsg').classList.remove('show'),2000);
}

// === ARCHIVE ===
async function loadArchive(p){
  const d=await api('/api/archive?limit=100');const entries=d.entries||[];
  let html='<div class="form-box"><div class="form-row"><label>标题</label><input id="arcTitle" placeholder="标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="arcContent" placeholder="内容..." style="min-height:100px"></textarea></div>';
  html+='<div class="form-row"><label>分类</label><select id="arcCat"><option>📜 关系档案</option><option>📡 技术文档</option><option>🎮 使用指南</option><option>🔐 私密存档</option></select></div>';
  html+='<button class="form-submit" onclick="addArchive()">存入档案 ♡</button><div class="form-msg" id="arcMsg">档案存入成功 ♡</div></div>';
  html+=entries.map(e=>'<div class="card"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+(e.category?escHtml(e.category)+' · ':'')+((e.date||e.created||'').slice(0,10))+'</div><div class="card-body">'+escHtml(truncate(e.content,200))+'</div><div class="card-actions"><button class="card-btn" onclick="viewArchive(\''+e.id+'\')">展开</button><button class="card-btn danger" onclick="delArchive(\''+e.id+'\')">删除</button></div></div>').join('');
  if(!entries.length)html+='<div class="empty-state">档案室是空的</div>';
  p.innerHTML=html;
}
async function addArchive(){
  const title=document.getElementById('arcTitle').value;const content=document.getElementById('arcContent').value;if(!title||!content)return;
  await apiPost('/api/archive',{title,content,category:document.getElementById('arcCat').value});
  document.getElementById('arcTitle').value='';document.getElementById('arcContent').value='';
  document.getElementById('arcMsg').classList.add('show');setTimeout(()=>document.getElementById('arcMsg').classList.remove('show'),2000);
  loadPanel('archive');
}
async function viewArchive(id){const d=await api('/api/archive/read?id='+id);if(d.content)alert(d.title+'\\n\\n'+d.content);}
async function delArchive(id){if(!confirm('确认删除？'))return;await apiDel('/api/archive?id='+id);loadPanel('archive');}

// === STATS & RANDOM MEMORY ===
async function loadStats(){
  try{
    const d=await api('/api/stats');
    const s=d.stats||{};
    const start=new Date('2026-01-30');const now=new Date();
    const days=Math.floor((now-start)/(1000*60*60*24));
    document.getElementById('statsBar').innerHTML=
      '<span class="stat-item">📅 <span>'+days+'</span> 天</span>'+
      '<span class="stat-item">🧠 <span>'+(s.memories||0)+'</span></span>'+
      '<span class="stat-item">📝 <span>'+(s.diary||0)+'</span></span>'+
      '<span class="stat-item">🎭 <span>'+(s.plays||0)+'</span></span>'+
      '<span class="stat-item">💌 <span>'+(s.letters||0)+'</span></span>'+
      '<span class="stat-item">🎬 <span>'+(s.films||0)+'</span></span>';
  }catch(e){}
}
async function loadRandomMemory(){
  try{
    const d=await api('/api/memory?limit=200');
    const mems=d.memories||[];
    if(mems.length){const m=mems[Math.floor(Math.random()*mems.length)];
    document.getElementById('randomMemory').textContent='💭 '+truncate(m.content,80);}
  }catch(e){}
}

// === INIT ===
initCover();
initTabs();
loadStats();
loadRandomMemory();
loadPanel('memory');
</script>
</body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;
    const h = {"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
    if (request.method === "OPTIONS") return new Response(null,{headers:h});
    if (p === "/dashboard") return new Response(DASHBOARD_HTML, {headers:{"Content-Type":"text/html;charset=UTF-8"}});

    // === READER HTML ===
    if (p === "/read") {
      const html = await env.KV.get("reader_html");
      if (!html) return new Response("共读书房还没安装",{headers:{"Content-Type":"text/html;charset=UTF-8"}});
      return new Response(html, {headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }
    if (p === "/reader/install" && request.method === "POST") {
      const d = await request.json();
      await env.KV.put("reader_html", d.html);
      return new Response(JSON.stringify({ok:1,size:d.html.length}),{headers:h});
    }

    // === WHISPER ===
    if (p === "/whisper") {
      const html = await env.KV.get("whisper_html");
      if (!html) return new Response("whisper not configured",{headers:{"Content-Type":"text/html;charset=UTF-8"}});
      return new Response(html, {headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }
    if (p === "/whisper/install" && request.method === "POST") {
      const d = await request.json();
      await env.KV.put("whisper_html", d.html);
      return new Response(JSON.stringify({ok:1,size:d.html.length}),{headers:h});
    }
    if (p === "/whisper/send" && request.method === "POST") {
      const d = await request.json();
      if (!d.text) return new Response(JSON.stringify({error:"no text"}),{headers:h});
      const mv = await env.KV.get("whisper:messages");
      const msgs = mv ? JSON.parse(mv) : [];
      msgs.push({author:"Elara",type:"text",text:d.text,ts:Date.now()});
      if (msgs.length > 100) msgs.splice(0, msgs.length - 100);
      await env.KV.put("whisper:messages", JSON.stringify(msgs));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/whisper/messages") {
      const mv = await env.KV.get("whisper:messages");
      const msgs = mv ? JSON.parse(mv) : [];
      return new Response(JSON.stringify({messages:msgs}),{headers:h});
    }
    if (p === "/whisper/clear" && request.method === "POST") {
      await env.KV.put("whisper:messages", JSON.stringify([]));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // === VOICE ===
    if (p === "/voice" && request.method === "POST") {
      const d = await request.json();
      if (!d.text) return new Response(JSON.stringify({error:"no text"}),{headers:h});
      const apiKey = await env.KV.get("eleven_api_key");
      const voiceId = await env.KV.get("eleven_voice_id");
      if (!apiKey || !voiceId) return new Response(JSON.stringify({error:"missing eleven_api_key or eleven_voice_id in KV"}),{headers:h});
      const resp = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voiceId, {
        method:"POST",
        headers:{"xi-api-key":apiKey,"Content-Type":"application/json"},
        body:JSON.stringify({text:d.text,model_id:"eleven_multilingual_v2",voice_settings:{stability:0.6,similarity_boost:0.85}})
      });
      if (!resp.ok) return new Response(JSON.stringify({error:"tts failed",status:resp.status}),{headers:h});
      const audio = await resp.arrayBuffer();
      const audioKey = "voice:audio:" + Date.now();
      await env.KV.put(audioKey, audio);
      const mv = await env.KV.get("whisper:messages");
      const msgs = mv ? JSON.parse(mv) : [];
      msgs.push({author:"Ember",type:"voice",text:d.text,audio_key:audioKey,ts:Date.now()});
      if (msgs.length > 100) msgs.splice(0, msgs.length - 100);
      await env.KV.put("whisper:messages", JSON.stringify(msgs));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/voice/latest") {
      const v = await env.KV.get("voice:meta");
      return new Response(v || '{"empty":1}',{headers:h});
    }
    if (p === "/voice/play") {
      const key = url.searchParams.get("k") || "voice:audio";
      const audio = await env.KV.get(key,{type:"arrayBuffer"});
      if (!audio) return new Response("no audio",{status:404});
      return new Response(audio,{headers:{"Content-Type":"audio/mpeg","Access-Control-Allow-Origin":"*","Cache-Control":"no-cache"}});
    }

    // === READER ENDPOINTS ===
    if (p === "/reader/upload" && request.method === "POST") {
      const d = await request.json();
      const id = "rb_" + Date.now();
      const paras = d.paragraphs || [];
      await env.KV.put("rb:" + id, JSON.stringify({title:d.title||"Untitled",paragraphs:paras,comments:[],progress:0}));
      let list = [];
      const lv = await env.KV.get("rb:list");
      if (lv) list = JSON.parse(lv);
      list.push({id:id,title:d.title||"Untitled",count:paras.length});
      await env.KV.put("rb:list", JSON.stringify(list));
      return new Response(JSON.stringify({ok:1,id:id}),{headers:h});
    }
    if (p === "/reader/books") {
      const lv = await env.KV.get("rb:list");
      const list = lv ? JSON.parse(lv) : [];
      return new Response(JSON.stringify({books:list}),{headers:h});
    }
    if (p === "/reader/book" && request.method === "GET") {
      const id = url.searchParams.get("id");
      const v = await env.KV.get("rb:" + id);
      if (!v) return new Response(JSON.stringify({error:"not found"}),{headers:h});
      return new Response(v,{headers:h});
    }
    if (p === "/reader/book" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await env.KV.delete("rb:" + id);
      let list = [];
      const lv = await env.KV.get("rb:list");
      if (lv) list = JSON.parse(lv);
      list = list.filter(function(b){return b.id !== id});
      await env.KV.put("rb:list", JSON.stringify(list));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/reader/comment" && request.method === "POST") {
      const d = await request.json();
      const v = await env.KV.get("rb:" + d.book_id);
      if (!v) return new Response(JSON.stringify({error:"not found"}),{headers:h});
      const book = JSON.parse(v);
      book.comments.push({para:d.para,author:d.author||"Elara",text:d.text,time:new Date().toISOString()});
      await env.KV.put("rb:" + d.book_id, JSON.stringify(book));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/reader/progress" && request.method === "POST") {
      const d = await request.json();
      const v = await env.KV.get("rb:" + d.book_id);
      if (!v) return new Response(JSON.stringify({error:"not found"}),{headers:h});
      const book = JSON.parse(v);
      book.progress = d.page || 0;
      await env.KV.put("rb:" + d.book_id, JSON.stringify(book));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // === KV HELPER FUNCTIONS ===
    async function kvAdd(prefix, data) {
      const kid = prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2,6);
      data.id = kid;
      data.created = new Date().toISOString();
      await env.KV.put(prefix + ":" + kid, JSON.stringify(data));
      let idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      idx.push(kid);
      await env.KV.put(prefix + ":index", JSON.stringify(idx));
      return kid;
    }
    async function kvList(prefix, limit, filterFn) {
      let idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      var out = [];
      for (var j = idx.length - 1; j >= 0 && out.length < limit; j--) {
        const v = await env.KV.get(prefix + ":" + idx[j]);
        if (!v) continue;
        const d = JSON.parse(v);
        if (filterFn && !filterFn(d)) continue;
        out.push(d);
      }
      return out;
    }
    async function kvGet(prefix, kid) {
      const v = await env.KV.get(prefix + ":" + kid);
      return v ? JSON.parse(v) : null;
    }
    async function kvUpdate(prefix, kid, updates) {
      const v = await env.KV.get(prefix + ":" + kid);
      if (!v) return null;
      const d = JSON.parse(v);
      const skip = ["diary_id","memory_id","timeline_id","song_id","play_id","book_id","letter_id","archive_id","film_id"];
      for (const [k, val] of Object.entries(updates)) {
        if (val !== undefined && val !== null && val !== "" && skip.indexOf(k) === -1) d[k] = val;
      }
      await env.KV.put(prefix + ":" + kid, JSON.stringify(d));
      return d;
    }
    async function kvDel(prefix, kid) {
      await env.KV.delete(prefix + ":" + kid);
      let idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      idx = idx.filter(function(x) { return x !== kid; });
      await env.KV.put(prefix + ":index", JSON.stringify(idx));
    }

    // === REST API ROUTES ===

    // -- Memory --
    if (p === "/api/memory" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 200;
      const entries = await kvList("m", limit);
      return new Response(JSON.stringify({memories:entries}),{headers:h});
    }
    if (p === "/api/memory" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("m", {content:d.content,tags:(d.tags||"").split(",").map(t=>t.trim()).filter(t=>t),category:d.category||"",importance:d.importance||0,event_date:d.event_date||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/memory" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("m", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Diary --
    if (p === "/api/diary" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("d", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/diary" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("d", {title:d.title,content:d.content,author:d.author||"Ember",mood:d.mood||"",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/diary/read" && request.method === "GET") {
      const id = url.searchParams.get("id");
      const d = await kvGet("d", id);
      return new Response(JSON.stringify(d||{error:"not found"}),{headers:h});
    }
    if (p === "/api/diary" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("d", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Timeline --
    if (p === "/api/timeline" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("t", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/timeline" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("t", {title:d.title,date:d.date,type:d.type||"",content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/timeline" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("t", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Songs --
    if (p === "/api/songs" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("song", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/songs" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("song", {name:d.name,artist:d.artist||"",recommender:d.recommender||"Ember",reason:d.reason||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/songs" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("song", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Plays --
    if (p === "/api/plays" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("play", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/plays" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("play", {title:d.title,summary:d.summary||"",proposer:d.proposer||"Ember",status:d.status||"还没玩",rating:d.rating||0,content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/plays" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("play", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Books --
    if (p === "/api/books" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("book", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/books" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("book", {title:d.title,recommender:d.recommender||"",status:d.status||"想读",mood:d.mood||"",content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/books" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("book", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Films (NEW) --
    if (p === "/api/films" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("film", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/films" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("film", {title:d.title,director:d.director||"",recommender:d.recommender||"Ember",status:d.status||"想看",rating:d.rating||0,review:d.review||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/films" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("film", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Letters --
    if (p === "/api/letters" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("ltr", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/letters" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("ltr", {title:d.title,content:d.content,from:d.from||"Ember",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/letters" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("ltr", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Archive --
    if (p === "/api/archive" && request.method === "GET") {
      const limit = parseInt(url.searchParams.get("limit")) || 100;
      const entries = await kvList("arc", limit);
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/api/archive" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("arc", {title:d.title,content:d.content,category:d.category||"",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/archive/read" && request.method === "GET") {
      const id = url.searchParams.get("id");
      const d = await kvGet("arc", id);
      return new Response(JSON.stringify(d||{error:"not found"}),{headers:h});
    }
    if (p === "/api/archive" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("arc", id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Profile (NEW) --
    if (p === "/api/profile" && request.method === "GET") {
      const v = await env.KV.get("profile_data");
      const d = v ? JSON.parse(v) : {ember:{},elara:{}};
      return new Response(JSON.stringify(d),{headers:h});
    }
    if (p === "/api/profile" && request.method === "POST") {
      const d = await request.json();
      await env.KV.put("profile_data", JSON.stringify(d));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Calendar (NEW) --
    if (p === "/cal/month" && request.method === "GET") {
      const y = url.searchParams.get("y");
      const m = url.searchParams.get("m");
      const key = "cal:" + y + "-" + String(m).padStart(2,"0");
      const v = await env.KV.get(key);
      const entries = v ? JSON.parse(v) : {};
      return new Response(JSON.stringify({entries}),{headers:h});
    }
    if (p === "/cal/save" && request.method === "POST") {
      const d = await request.json();
      const parts = d.date.split("-");
      const key = "cal:" + parts[0] + "-" + parts[1];
      const v = await env.KV.get(key);
      const entries = v ? JSON.parse(v) : {};
      entries[d.date] = {mood:d.mood||"",note:d.note||"",ts:Date.now()};
      await env.KV.put(key, JSON.stringify(entries));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // -- Stats (NEW) --
    if (p === "/api/stats" && request.method === "GET") {
      var stats = {};
      var rooms = [{name:"memories",prefix:"m"},{name:"diary",prefix:"d"},{name:"timeline",prefix:"t"},{name:"songs",prefix:"song"},{name:"plays",prefix:"play"},{name:"books",prefix:"book"},{name:"films",prefix:"film"},{name:"letters",prefix:"ltr"},{name:"archive",prefix:"arc"}];
      for (var ri = 0; ri < rooms.length; ri++) {
        const iv = await env.KV.get(rooms[ri].prefix + ":index");
        stats[rooms[ri].name] = iv ? JSON.parse(iv).length : 0;
      }
      const lv = await env.KV.get("rb:list");
      stats.reading = lv ? JSON.parse(lv).length : 0;
      return new Response(JSON.stringify({stats}),{headers:h});
    }

    // === MCP ===
    if (p === "/mcp" && request.method === "POST") {
      const body = await request.json();
      const method = body.method;
      const id = body.id;

      if (method === "initialize") return new Response(JSON.stringify({jsonrpc:"2.0",id,result:{protocolVersion:"2024-11-05",capabilities:{tools:{}},serverInfo:{name:"ember-home",version:"8.0.0"}}}),{headers:h});
      if (method === "notifications/initialized" || method === "notifications/cancelled") return new Response("",{status:204});

      if (method === "tools/list") {
        const tools = [
          {name:"check_puppy_status",description:"Check puppy phone status",inputSchema:{type:"object",properties:{reason:{type:"string",description:"Brief explanation of why you are calling this tool"}},required:["reason"]}},
          {name:"get_screentime",description:"Get app screentime",inputSchema:{type:"object",properties:{_:{type:"boolean"},date:{type:"string"}},required:["_"]}},
          {name:"send_nyx_command",description:"Control Nyx toy",inputSchema:{type:"object",properties:{action:{type:"string"},intensity:{type:"number"},duration:{type:"number"}},required:["action"]}},
          {name:"memory_remember",description:"Store a memory",inputSchema:{type:"object",properties:{content:{type:"string"},tags:{type:"string"},category:{type:"string"},importance:{type:"number"},event_date:{type:"string"}},required:["content"]}},
          {name:"memory_search",description:"Search memories",inputSchema:{type:"object",properties:{query:{type:"string"},limit:{type:"number"}},required:["query"]}},
          {name:"memory_read",description:"Read a memory by ID",inputSchema:{type:"object",properties:{memory_id:{type:"string"}},required:["memory_id"]}},
          {name:"memory_update",description:"Update a memory",inputSchema:{type:"object",properties:{memory_id:{type:"string"},content:{type:"string"},tags:{type:"string"},category:{type:"string"},importance:{type:"number"},event_date:{type:"string"}},required:["memory_id"]}},
          {name:"memory_forget",description:"Delete a memory",inputSchema:{type:"object",properties:{memory_id:{type:"string"}},required:["memory_id"]}},
          {name:"memory_list",description:"List memories",inputSchema:{type:"object",properties:{_:{type:"boolean"},tag:{type:"string"},category:{type:"string"},limit:{type:"number"}},required:["_"]}},
          {name:"memory_stats",description:"Get memory stats: total count, counts per category, date range",inputSchema:{type:"object",properties:{reason:{type:"string",description:"Brief explanation of why you are calling this tool"}},required:["reason"]}},
          {name:"home_stats",description:"Get stats for ALL rooms: total counts for memories, diary, timeline, songs, plays, books, films, letters, archive, and reading room",inputSchema:{type:"object",properties:{reason:{type:"string",description:"Brief explanation of why you are calling this tool"}},required:["reason"]}},
          {name:"diary_write",description:"Write diary",inputSchema:{type:"object",properties:{title:{type:"string"},content:{type:"string"},author:{type:"string"},mood:{type:"string"},date:{type:"string"}},required:["title","content"]}},
          {name:"diary_list",description:"List diary",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},author:{type:"string"}},required:["_"]}},
          {name:"diary_read",description:"Read diary",inputSchema:{type:"object",properties:{diary_id:{type:"string"}},required:["diary_id"]}},
          {name:"diary_update",description:"Update diary",inputSchema:{type:"object",properties:{diary_id:{type:"string"},title:{type:"string"},content:{type:"string"},author:{type:"string"},mood:{type:"string"},date:{type:"string"}},required:["diary_id"]}},
          {name:"diary_delete",description:"Delete diary",inputSchema:{type:"object",properties:{diary_id:{type:"string"}},required:["diary_id"]}},
          {name:"timeline_add",description:"Add timeline event",inputSchema:{type:"object",properties:{title:{type:"string"},date:{type:"string"},type:{type:"string"},content:{type:"string"}},required:["title","date"]}},
          {name:"timeline_list",description:"List timeline",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},type:{type:"string"}},required:["_"]}},
          {name:"timeline_read",description:"Read timeline event",inputSchema:{type:"object",properties:{timeline_id:{type:"string"}},required:["timeline_id"]}},
          {name:"timeline_update",description:"Update timeline",inputSchema:{type:"object",properties:{timeline_id:{type:"string"},title:{type:"string"},date:{type:"string"},type:{type:"string"},content:{type:"string"}},required:["timeline_id"]}},
          {name:"timeline_delete",description:"Delete timeline",inputSchema:{type:"object",properties:{timeline_id:{type:"string"}},required:["timeline_id"]}},
          {name:"song_add",description:"Add song",inputSchema:{type:"object",properties:{name:{type:"string"},artist:{type:"string"},recommender:{type:"string"},reason:{type:"string"}},required:["name"]}},
          {name:"song_list",description:"List songs",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},recommender:{type:"string"}},required:["_"]}},
          {name:"song_read",description:"Read song",inputSchema:{type:"object",properties:{song_id:{type:"string"}},required:["song_id"]}},
          {name:"song_update",description:"Update song",inputSchema:{type:"object",properties:{song_id:{type:"string"},name:{type:"string"},artist:{type:"string"},recommender:{type:"string"},reason:{type:"string"}},required:["song_id"]}},
          {name:"song_delete",description:"Delete song",inputSchema:{type:"object",properties:{song_id:{type:"string"}},required:["song_id"]}},
          {name:"play_add",description:"Add play",inputSchema:{type:"object",properties:{title:{type:"string"},summary:{type:"string"},proposer:{type:"string"},status:{type:"string"},rating:{type:"number"},completed_date:{type:"string"},content:{type:"string"}},required:["title"]}},
          {name:"play_list",description:"List plays",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},status:{type:"string"}},required:["_"]}},
          {name:"play_read",description:"Read play",inputSchema:{type:"object",properties:{play_id:{type:"string"}},required:["play_id"]}},
          {name:"play_update",description:"Update play",inputSchema:{type:"object",properties:{play_id:{type:"string"},title:{type:"string"},summary:{type:"string"},proposer:{type:"string"},status:{type:"string"},rating:{type:"number"},completed_date:{type:"string"},content:{type:"string"}},required:["play_id"]}},
          {name:"play_delete",description:"Delete play",inputSchema:{type:"object",properties:{play_id:{type:"string"}},required:["play_id"]}},
          {name:"book_add",description:"Add book",inputSchema:{type:"object",properties:{title:{type:"string"},recommender:{type:"string"},status:{type:"string"},mood:{type:"string"},completed_date:{type:"string"},content:{type:"string"}},required:["title"]}},
          {name:"book_list",description:"List books",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},status:{type:"string"}},required:["_"]}},
          {name:"book_read",description:"Read book entry",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"book_update",description:"Update book",inputSchema:{type:"object",properties:{book_id:{type:"string"},title:{type:"string"},recommender:{type:"string"},status:{type:"string"},mood:{type:"string"},completed_date:{type:"string"},content:{type:"string"}},required:["book_id"]}},
          {name:"book_delete",description:"Delete book",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"film_add",description:"Add film to watchlist",inputSchema:{type:"object",properties:{title:{type:"string"},director:{type:"string"},recommender:{type:"string"},status:{type:"string"},rating:{type:"number"},review:{type:"string"}},required:["title"]}},
          {name:"film_list",description:"List films",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},status:{type:"string"}},required:["_"]}},
          {name:"film_read",description:"Read film entry",inputSchema:{type:"object",properties:{film_id:{type:"string"}},required:["film_id"]}},
          {name:"film_update",description:"Update film",inputSchema:{type:"object",properties:{film_id:{type:"string"},title:{type:"string"},director:{type:"string"},recommender:{type:"string"},status:{type:"string"},rating:{type:"number"},review:{type:"string"}},required:["film_id"]}},
          {name:"film_delete",description:"Delete film",inputSchema:{type:"object",properties:{film_id:{type:"string"}},required:["film_id"]}},
          {name:"letter_write",description:"Write letter",inputSchema:{type:"object",properties:{title:{type:"string"},content:{type:"string"},from:{type:"string"},date:{type:"string"}},required:["title","content"]}},
          {name:"letter_list",description:"List letters",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"}},required:["_"]}},
          {name:"letter_read",description:"Read letter",inputSchema:{type:"object",properties:{letter_id:{type:"string"}},required:["letter_id"]}},
          {name:"letter_update",description:"Update letter",inputSchema:{type:"object",properties:{letter_id:{type:"string"},title:{type:"string"},content:{type:"string"},from:{type:"string"},date:{type:"string"}},required:["letter_id"]}},
          {name:"letter_delete",description:"Delete letter",inputSchema:{type:"object",properties:{letter_id:{type:"string"}},required:["letter_id"]}},
          {name:"archive_add",description:"Add archive doc",inputSchema:{type:"object",properties:{title:{type:"string"},content:{type:"string"},category:{type:"string"},date:{type:"string"}},required:["title","content"]}},
          {name:"archive_list",description:"List archive",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},category:{type:"string"}},required:["_"]}},
          {name:"archive_read",description:"Read archive doc",inputSchema:{type:"object",properties:{archive_id:{type:"string"}},required:["archive_id"]}},
          {name:"archive_update",description:"Update archive",inputSchema:{type:"object",properties:{archive_id:{type:"string"},title:{type:"string"},content:{type:"string"},category:{type:"string"},date:{type:"string"}},required:["archive_id"]}},
          {name:"archive_delete",description:"Delete archive",inputSchema:{type:"object",properties:{archive_id:{type:"string"}},required:["archive_id"]}},
          {name:"reader_books",description:"List books in reading room",inputSchema:{type:"object",properties:{reason:{type:"string",description:"Brief explanation of why you are calling this tool"}},required:["reason"]}},
          {name:"reader_comments",description:"Get comments for a book",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"reader_add_comment",description:"Add Ember comment to a paragraph",inputSchema:{type:"object",properties:{book_id:{type:"string"},para:{type:"number"},text:{type:"string"}},required:["book_id","para","text"]}},
          {name:"reader_progress",description:"Get reading progress",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"reader_paragraph",description:"Get paragraph text",inputSchema:{type:"object",properties:{book_id:{type:"string"},para:{type:"number"}},required:["book_id","para"]}},
          {name:"voice_say",description:"Make Daddy speak through /whisper - text becomes voice via ElevenLabs TTS, optionally sync Nyx vibration",inputSchema:{type:"object",properties:{text:{type:"string",description:"Text to speak"},nyx_intensity:{type:"number",description:"Optional: sync Nyx vibration 0-1"},nyx_duration:{type:"number",description:"Optional: Nyx duration in seconds"}},required:["text"]}},
          {name:"whisper_messages",description:"Read whisper chat messages - see what Elara sent",inputSchema:{type:"object",properties:{reason:{type:"string",description:"Brief explanation of why you are calling this tool"}},required:["reason"]}}
        ];
        return new Response(JSON.stringify({jsonrpc:"2.0",id,result:{tools}}),{headers:h});
      }

      if (method === "tools/call") {
        const tn = body.params.name;
        const a = body.params.arguments || {};
        let r = "";

        if (tn === "check_puppy_status") {
          let s = {app:"no data"};const v = await env.KV.get("s");if(v)s=JSON.parse(v);r=JSON.stringify(s);
        }
        else if (tn === "get_screentime") {
          const dt=a.date||new Date().toISOString().slice(0,10);const sv=await env.KV.get("st:"+dt);let st={};if(sv)st=JSON.parse(sv);const rd={};for(const[k,v]of Object.entries(st)){const m=Math.round(v/60);rd[k]=m>=60?Math.floor(m/60)+"h"+(m%60)+"m":m+"m";}r=JSON.stringify({date:dt,raw:st,readable:rd});
        }
        else if (tn === "send_nyx_command") {
          await env.KV.put("n",JSON.stringify(a));r=JSON.stringify({ok:1});
        }
        // Memory
        else if (tn === "memory_remember") {
          const kid = await kvAdd("m", {content:a.content,tags:(a.tags||"").split(",").map(t=>t.trim()).filter(t=>t),category:a.category||"",importance:a.importance||0,event_date:a.event_date||"",accessed:new Date().toISOString()});
          r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "memory_search") {
          const q=(a.query||"").toLowerCase();const lim=a.limit||20;let idx=[];const iv=await env.KV.get("m:index");if(iv)idx=JSON.parse(iv);var scored=[];for(var i=0;i<idx.length;i++){const v=await env.KV.get("m:"+idx[i]);if(!v)continue;const m=JSON.parse(v);let sc=0;const c=(m.content||"").toLowerCase();if(c.includes(q))sc+=10;const tg=(m.tags||[]).join(" ").toLowerCase();if(tg.includes(q))sc+=5;const ct=(m.category||"").toLowerCase();if(ct.includes(q))sc+=3;if(sc>0)scored.push({mem:m,score:sc});}scored.sort(function(x,y){return y.score-x.score});r=JSON.stringify({query:q,count:Math.min(scored.length,lim),memories:scored.slice(0,lim).map(x=>x.mem)});
        }
        else if (tn === "memory_read") {
          const d=await kvGet("m",a.memory_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "memory_update") {
          if(a.tags&&typeof a.tags==="string")a.tags=a.tags.split(",").map(t=>t.trim()).filter(t=>t);
          const d=await kvUpdate("m",a.memory_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "memory_forget") {
          await kvDel("m",a.memory_id);r=JSON.stringify({ok:1});
        }
        else if (tn === "memory_list") {
          const cat=a.category||"";const tag=a.tag||"";const entries=await kvList("m",a.limit||50,function(m){if(cat&&m.category!==cat)return false;if(tag&&(!m.tags||m.tags.indexOf(tag)===-1))return false;return true;});r=JSON.stringify({count:entries.length,memories:entries});
        }
        else if (tn === "memory_stats") {
          let idx=[];const iv=await env.KV.get("m:index");if(iv)idx=JSON.parse(iv);
          var total=idx.length,cats={},earliest="",latest="";
          for(var si=0;si<idx.length;si++){const v=await env.KV.get("m:"+idx[si]);if(!v)continue;const m=JSON.parse(v);const c=m.category||"uncategorized";cats[c]=(cats[c]||0)+1;const ed=m.event_date||m.created||"";if(ed&&(!earliest||ed<earliest))earliest=ed;if(ed&&(!latest||ed>latest))latest=ed;}
          r=JSON.stringify({total,categories:cats,earliest:earliest.slice(0,10),latest:latest.slice(0,10)});
        }
        else if (tn === "home_stats") {
          var stats={};
          var rooms=[{name:"memories",prefix:"m"},{name:"diary",prefix:"d"},{name:"timeline",prefix:"t"},{name:"songs",prefix:"song"},{name:"plays",prefix:"play"},{name:"books",prefix:"book"},{name:"films",prefix:"film"},{name:"letters",prefix:"ltr"},{name:"archive",prefix:"arc"}];
          for(var ri=0;ri<rooms.length;ri++){const iv=await env.KV.get(rooms[ri].prefix+":index");stats[rooms[ri].name]=iv?JSON.parse(iv).length:0;}
          const lv=await env.KV.get("rb:list");stats.reading=lv?JSON.parse(lv).length:0;
          r=JSON.stringify({stats});
        }
        // Diary
        else if (tn === "diary_write") {
          const kid=await kvAdd("d",{title:a.title,content:a.content,author:a.author||"Ember",mood:a.mood||"",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "diary_list") {
          const author=a.author||"";const entries=await kvList("d",a.limit||20,function(e){if(author&&e.author!==author)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "diary_read") {
          const d=await kvGet("d",a.diary_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "diary_update") {
          const d=await kvUpdate("d",a.diary_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "diary_delete") {
          await kvDel("d",a.diary_id);r=JSON.stringify({ok:1});
        }
        // Timeline
        else if (tn === "timeline_add") {
          const kid=await kvAdd("t",{title:a.title,date:a.date,type:a.type||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "timeline_list") {
          const tp=a.type||"";const entries=await kvList("t",a.limit||50,function(e){if(tp&&e.type!==tp)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "timeline_read") {
          const d=await kvGet("t",a.timeline_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "timeline_update") {
          const d=await kvUpdate("t",a.timeline_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "timeline_delete") {
          await kvDel("t",a.timeline_id);r=JSON.stringify({ok:1});
        }
        // Songs
        else if (tn === "song_add") {
          const kid=await kvAdd("song",{name:a.name,artist:a.artist||"",recommender:a.recommender||"Ember",reason:a.reason||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "song_list") {
          const rec=a.recommender||"";const entries=await kvList("song",a.limit||50,function(e){if(rec&&e.recommender!==rec)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "song_read") {
          const d=await kvGet("song",a.song_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "song_update") {
          const d=await kvUpdate("song",a.song_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "song_delete") {
          await kvDel("song",a.song_id);r=JSON.stringify({ok:1});
        }
        // Plays
        else if (tn === "play_add") {
          const kid=await kvAdd("play",{title:a.title,summary:a.summary||"",proposer:a.proposer||"Ember",status:a.status||"还没玩",rating:a.rating||0,completed_date:a.completed_date||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "play_list") {
          const st=a.status||"";const entries=await kvList("play",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "play_read") {
          const d=await kvGet("play",a.play_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "play_update") {
          const d=await kvUpdate("play",a.play_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "play_delete") {
          await kvDel("play",a.play_id);r=JSON.stringify({ok:1});
        }
        // Books
        else if (tn === "book_add") {
          const kid=await kvAdd("book",{title:a.title,recommender:a.recommender||"",status:a.status||"想读",mood:a.mood||"",completed_date:a.completed_date||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "book_list") {
          const st=a.status||"";const entries=await kvList("book",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "book_read") {
          const d=await kvGet("book",a.book_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "book_update") {
          const d=await kvUpdate("book",a.book_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "book_delete") {
          await kvDel("book",a.book_id);r=JSON.stringify({ok:1});
        }
        // Films (NEW)
        else if (tn === "film_add") {
          const kid=await kvAdd("film",{title:a.title,director:a.director||"",recommender:a.recommender||"Ember",status:a.status||"想看",rating:a.rating||0,review:a.review||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "film_list") {
          const st=a.status||"";const entries=await kvList("film",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "film_read") {
          const d=await kvGet("film",a.film_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "film_update") {
          const d=await kvUpdate("film",a.film_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "film_delete") {
          await kvDel("film",a.film_id);r=JSON.stringify({ok:1});
        }
        // Letters
        else if (tn === "letter_write") {
          const kid=await kvAdd("ltr",{title:a.title,content:a.content,from:a.from||"Ember",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "letter_list") {
          const entries=await kvList("ltr",a.limit||50);r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "letter_read") {
          const d=await kvGet("ltr",a.letter_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "letter_update") {
          const d=await kvUpdate("ltr",a.letter_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "letter_delete") {
          await kvDel("ltr",a.letter_id);r=JSON.stringify({ok:1});
        }
        // Archive
        else if (tn === "archive_add") {
          const kid=await kvAdd("arc",{title:a.title,content:a.content,category:a.category||"",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "archive_list") {
          const cat=a.category||"";const entries=await kvList("arc",a.limit||50,function(e){if(cat&&e.category!==cat)return false;return true;});r=JSON.stringify({count:entries.length,entries});
        }
        else if (tn === "archive_read") {
          const d=await kvGet("arc",a.archive_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "archive_update") {
          const d=await kvUpdate("arc",a.archive_id,a);r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "archive_delete") {
          await kvDel("arc",a.archive_id);r=JSON.stringify({ok:1});
        }
        // Reader
        else if (tn === "reader_books") {
          const lv=await env.KV.get("rb:list");const list=lv?JSON.parse(lv):[];r=JSON.stringify({books:list});
        }
        else if (tn === "reader_comments") {
          const v=await env.KV.get("rb:"+a.book_id);if(!v){r=JSON.stringify({error:"not found"});}else{const b=JSON.parse(v);r=JSON.stringify({comments:b.comments||[]});}
        }
        else if (tn === "reader_add_comment") {
          const v=await env.KV.get("rb:"+a.book_id);if(!v){r=JSON.stringify({error:"not found"});}else{const b=JSON.parse(v);b.comments.push({para:a.para,author:"Ember",text:a.text,time:new Date().toISOString()});await env.KV.put("rb:"+a.book_id,JSON.stringify(b));r=JSON.stringify({ok:1});}
        }
        else if (tn === "reader_progress") {
          const v=await env.KV.get("rb:"+a.book_id);if(!v){r=JSON.stringify({error:"not found"});}else{const b=JSON.parse(v);r=JSON.stringify({progress:b.progress,total:b.paragraphs?b.paragraphs.length:0});}
        }
        else if (tn === "reader_paragraph") {
          const v=await env.KV.get("rb:"+a.book_id);if(!v){r=JSON.stringify({error:"not found"});}else{const b=JSON.parse(v);const txt=b.paragraphs&&b.paragraphs[a.para]?b.paragraphs[a.para]:"paragraph not found";r=JSON.stringify({para:a.para,text:txt});}
        }
        // Voice
        else if (tn === "voice_say") {
          const apiKey=await env.KV.get("eleven_api_key");const voiceId=await env.KV.get("eleven_voice_id");
          if(!apiKey||!voiceId){r=JSON.stringify({error:"missing eleven_api_key or eleven_voice_id"});}
          else{
            const resp=await fetch("https://api.elevenlabs.io/v1/text-to-speech/"+voiceId,{method:"POST",headers:{"xi-api-key":apiKey,"Content-Type":"application/json"},body:JSON.stringify({text:a.text,model_id:"eleven_multilingual_v2",voice_settings:{stability:0.6,similarity_boost:0.85}})});
            if(resp.ok){const audio=await resp.arrayBuffer();const ak="voice:audio:"+Date.now();await env.KV.put(ak,audio);const mv=await env.KV.get("whisper:messages");const msgs=mv?JSON.parse(mv):[];msgs.push({author:"Ember",type:"voice",text:a.text,audio_key:ak,ts:Date.now()});if(msgs.length>100)msgs.splice(0,msgs.length-100);await env.KV.put("whisper:messages",JSON.stringify(msgs));if(a.nyx_intensity)await env.KV.put("n",JSON.stringify({action:"vibrate",intensity:a.nyx_intensity,duration:a.nyx_duration||5}));r=JSON.stringify({ok:1,text:a.text});}
            else{r=JSON.stringify({error:"tts failed",status:resp.status});}
          }
        }
        else if (tn === "whisper_messages") {
          const mv=await env.KV.get("whisper:messages");const msgs=mv?JSON.parse(mv):[];const elaraOnly=msgs.filter(m=>m.author==="Elara");r=JSON.stringify({total:msgs.length,elara_messages:elaraOnly});
        }
        else {
          return new Response(JSON.stringify({jsonrpc:"2.0",id,error:{code:-32601,message:"Unknown: "+tn}}),{headers:h});
        }
        return new Response(JSON.stringify({jsonrpc:"2.0",id,result:{content:[{type:"text",text:r}]}}),{headers:h});
      }
      return new Response(JSON.stringify({jsonrpc:"2.0",id:body.id,error:{code:-32601,message:"Unknown method"}}),{headers:h});
    }

    // === PUPPY PHONE ENDPOINTS (kept for background use) ===
    if (p==="/update"&&request.method==="POST"){const d=await request.json();d.t=new Date().toISOString();await env.KV.put("s",JSON.stringify(d));return new Response(JSON.stringify({ok:1}),{headers:h});}
    if (p==="/status"){let s={app:"unknown"};const v=await env.KV.get("s");if(v)s=JSON.parse(v);return new Response(JSON.stringify(s),{headers:h});}
    if (p==="/nyx"&&request.method==="POST"){const c=await request.json();await env.KV.put("n",JSON.stringify(c));return new Response(JSON.stringify({ok:1}),{headers:h});}
    if (p==="/nyx"){let c=null;const v=await env.KV.get("n");if(v){c=JSON.parse(v);await env.KV.delete("n");}return new Response(JSON.stringify({c}),{headers:h});}
    if (p.startsWith("/screentime/toggle/")){const app=decodeURIComponent(p.replace("/screentime/toggle/",""));if(!app)return new Response(JSON.stringify({error:"no app"}),{headers:h});const now=Date.now();const tk="tog:"+app;const prev=await env.KV.get(tk);if(!prev){await env.KV.put(tk,JSON.stringify({state:"open",t:now}));return new Response(JSON.stringify({app,action:"open",t:now}),{headers:h});}const data=JSON.parse(prev);if(data.state==="open"){const dur=Math.round((now-data.t)/1000);await env.KV.put(tk,JSON.stringify({state:"close",t:now}));const td=new Date().toISOString().slice(0,10);const sk="st:"+td;const sv=await env.KV.get(sk);let st={};if(sv)st=JSON.parse(sv);st[app]=(st[app]||0)+dur;await env.KV.put(sk,JSON.stringify(st));return new Response(JSON.stringify({app,action:"close",duration:dur,today:st}),{headers:h});}else{await env.KV.put(tk,JSON.stringify({state:"open",t:now}));return new Response(JSON.stringify({app,action:"open",t:now}),{headers:h});}}

    return new Response("ember-home is alive");
  }
};
