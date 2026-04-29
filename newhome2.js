const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="zh"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>ember-home</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Serif+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
:root{
--bg:#1a1a1a;--bg2:#1f1f1f;--card:#252525;--card2:#2a2a2a;--border:#2e2e2e;--border2:#383838;
--accent:#c75c3a;--accent2:#d4734f;--accent-soft:rgba(199,92,58,.12);--accent-glow:rgba(199,92,58,.2);
--cream:#f5f0eb;--cream2:#e8e0d8;
--text:#f5f0eb;--text2:#b0a89e;--text3:#706860;
--danger:#d45;--success:#6a9;
--radius:10px;--radius-sm:8px;--radius-xs:4px;
--shadow:none;--shadow-hover:none;
}
[data-theme="latte"]{
--bg:#f5f0eb;--bg2:#ece6df;--card:#fff;--card2:#faf7f4;--border:#ddd5cc;--border2:#ccc4ba;
--accent:#c75c3a;--accent2:#b04e30;--accent-soft:rgba(199,92,58,.08);--accent-glow:rgba(199,92,58,.12);
--cream:#1a1a1a;--cream2:#333;
--text:#1a1a1a;--text2:#5a5248;--text3:#9a9088;
--danger:#c43;--success:#5a8a52;
--shadow:none;--shadow-hover:none;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{background:var(--bg);color:var(--text);font-family:'Noto Serif SC',serif;font-weight:300;min-height:100vh;overflow-x:hidden;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px;}
.cover{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;transition:opacity .8s,transform .8s;}
.cover.hide{opacity:0;pointer-events:none;transform:scale(1.05);}
.cover-title{font-family:'Playfair Display',serif;font-size:2.8em;font-weight:700;color:var(--accent);letter-spacing:4px;margin-bottom:8px;animation:coverFadeIn 1.2s ease;}
.cover-sub{font-family:'JetBrains Mono',monospace;font-size:.85em;color:var(--text2);margin-bottom:6px;animation:coverFadeIn 1.6s ease;}
.cover-counter{font-family:'JetBrains Mono',monospace;font-size:.8em;color:var(--text3);margin-bottom:40px;animation:coverFadeIn 2s ease;}
.cover-btns{display:grid;grid-template-columns:1fr 1fr;gap:14px;width:260px;animation:coverFadeIn 2.4s ease;}
.cover-btn{padding:16px 0;border:none;font-family:'Noto Serif SC',serif;font-size:.9em;border-radius:var(--radius);cursor:pointer;transition:all .3s;letter-spacing:2px;text-align:center;background:var(--accent);color:#fff;}
.cover-btn:hover{opacity:.85;}
.cover-btn.secondary{background:var(--card);color:var(--text2);}
.embers{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;}
.ember-dot{position:absolute;width:3px;height:3px;background:var(--accent);border-radius:50%;opacity:0;animation:floatUp 4s ease-in infinite;}
@keyframes floatUp{0%{opacity:0;transform:translateY(0) scale(1);}20%{opacity:.6;}80%{opacity:.3;}100%{opacity:0;transform:translateY(-100vh) scale(0);}}
@keyframes coverFadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
.dashboard{display:none;max-width:480px;margin:0 auto;padding:20px 16px 80px;animation:fadeIn .5s ease;}
.dashboard.show{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.header{text-align:center;padding:24px 0 16px;position:relative;}
.header h1{font-family:'Playfair Display',serif;font-size:1.8em;font-weight:700;color:var(--accent);letter-spacing:3px;}
.header .alive{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:.7em;color:var(--text3);margin-top:6px;}
.header .alive .dot{width:6px;height:6px;background:var(--success);border-radius:50%;animation:pulse 2s ease infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
.theme-switcher{display:flex;gap:10px;justify-content:center;margin-top:12px;}
.theme-dot{width:24px;height:24px;border-radius:50%;cursor:pointer;border:2.5px solid transparent;transition:all .3s;opacity:.5;}
.theme-dot:hover,.theme-dot.active{opacity:1;border-color:var(--accent);transform:scale(1.15);}
.theme-dot[data-t="ember"]{background:#1a1a1a;box-shadow:inset 0 0 0 2px #444;}
.theme-dot[data-t="latte"]{background:#f5f0eb;box-shadow:inset 0 0 0 2px #ddd5cc;}
.stats-bar{display:flex;justify-content:center;gap:16px;padding:8px 0 16px;flex-wrap:wrap;}
.stat-item{font-family:'JetBrains Mono',monospace;font-size:.7em;color:var(--text3);}
.stat-item span{color:var(--accent);}
.tabs{display:flex;flex-wrap:wrap;gap:6px 8px;justify-content:center;margin-bottom:18px;padding:0 4px;}
.tab{padding:6px 12px;font-size:.72em;color:var(--text3);background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:all .25s;white-space:nowrap;line-height:1.3;}
.tab:hover{color:var(--text2);border-color:var(--border2);}
.tab.active{color:#fff;border-color:var(--accent);background:var(--accent);font-weight:500;}
[data-theme="latte"] .tab.active{color:#fff;}
.panel{display:none;}
.panel.show{display:block;animation:fadeIn .3s ease;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:10px;cursor:pointer;transition:all .25s;position:relative;overflow:hidden;box-shadow:var(--shadow);}
.card:hover{border-color:var(--accent);}


.card-title{font-size:.95em;font-weight:500;color:var(--text);margin-bottom:4px;padding-right:40px;}
.card-meta{font-family:'JetBrains Mono',monospace;font-size:.68em;color:var(--text3);margin-bottom:8px;}
.card-body{font-size:.85em;color:var(--text2);line-height:1.7;white-space:pre-wrap;}
.card-actions{display:flex;gap:8px;margin-top:10px;}
.card-btn{padding:4px 12px;font-size:.7em;border:1px solid var(--border);background:transparent;color:var(--text3);border-radius:var(--radius-xs);cursor:pointer;transition:all .2s;}
.card-btn:hover{border-color:var(--accent);color:var(--accent);}
.card-btn.danger:hover{border-color:var(--danger);color:var(--danger);}
.detail-view{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;margin-bottom:16px;animation:fadeIn .3s ease;box-shadow:var(--shadow);}
.detail-view .detail-title{font-family:'Playfair Display',serif;font-size:1.15em;color:var(--accent);margin-bottom:8px;}
.detail-view .detail-meta{font-family:'JetBrains Mono',monospace;font-size:.68em;color:var(--text3);margin-bottom:14px;}
.detail-view .detail-body{font-size:.85em;color:var(--text2);line-height:1.8;white-space:pre-wrap;}
.detail-view .detail-actions{display:flex;gap:8px;margin-top:16px;}
.detail-back{padding:6px 16px;font-size:.75em;border:1px solid var(--border);background:transparent;color:var(--text2);border-radius:var(--radius-xs);cursor:pointer;margin-bottom:12px;transition:all .2s;}
.detail-back:hover{border-color:var(--accent);color:var(--accent);}
.form-box{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;box-shadow:var(--shadow);}
.form-row{margin-bottom:12px;}
.form-row label{display:block;font-size:.7em;color:var(--text3);margin-bottom:5px;font-family:'JetBrains Mono',monospace;}
.form-row input,.form-row textarea,.form-row select{width:100%;max-width:100%;padding:10px 14px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-family:'Noto Serif SC',serif;font-size:.85em;outline:none;transition:border-color .2s,box-shadow .2s;resize:vertical;box-sizing:border-box;-webkit-appearance:none;appearance:none;}
.form-row input:focus,.form-row textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft);}
.form-row textarea{min-height:80px;line-height:1.6;}
.form-submit{width:100%;padding:12px;background:var(--accent);border:none;color:#fff;border-radius:var(--radius-sm);cursor:pointer;font-size:.85em;transition:all .3s;font-family:'Noto Serif SC',serif;font-weight:500;letter-spacing:1px;}
.form-submit:hover{background:var(--accent2);}
.form-msg{text-align:center;font-size:.8em;color:var(--accent);margin-top:8px;opacity:0;transition:opacity .3s;}
.form-msg.show{opacity:1;}
.filter-bar{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;}
.filter-bar select,.filter-bar input{padding:8px 12px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-size:.75em;outline:none;transition:border-color .2s;}
.filter-bar select:focus,.filter-bar input:focus{border-color:var(--accent);}
.search-input{flex:1;min-width:120px;}
.calendar-page{display:none;max-width:480px;margin:0 auto;padding:16px 16px 80px;animation:fadeIn .5s ease;}
.calendar-page.show{display:block;}
.cal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.cal-header h2{font-family:'Playfair Display',serif;font-size:1.2em;color:var(--accent);}
.cal-nav{padding:8px 14px;background:transparent;border:1px solid var(--border);color:var(--text2);border-radius:var(--radius-sm);cursor:pointer;font-size:.8em;transition:all .2s;}
.cal-nav:hover{border-color:var(--accent);color:var(--accent);}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:16px;}
.cal-day-label{text-align:center;font-size:.65em;color:var(--text3);padding:4px;font-family:'JetBrains Mono',monospace;}
.cal-day{display:flex;flex-direction:column;align-items:center;justify-content:center;background:transparent;border:none;border-radius:var(--radius-sm);cursor:pointer;transition:all .2s;font-size:.8em;position:relative;padding:6px 2px;gap:2px;}
.cal-day:hover{background:var(--accent-soft);}
.cal-day.today .cal-num{color:var(--accent);font-weight:500;}
.cal-day.has-entry{background:var(--accent-soft);}
.cal-day .cal-num{font-family:'JetBrains Mono',monospace;font-size:.85em;color:var(--text2);}
.cal-day .cal-dots{display:flex;flex-direction:column;gap:2px;align-items:center;min-height:6px;}
.cal-dot-p,.cal-dot-d{width:5px;height:5px;border-radius:50%;}
.cal-dot-p{background:var(--accent);}
.cal-dot-d{background:#6aa0d8;}
[data-theme="latte"] .cal-dot-d{background:#4a88c0;}
.cal-day.empty{background:transparent;border-color:transparent;cursor:default;}
.cal-entry-form{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;box-shadow:var(--shadow);}
.mood-picker{display:flex;gap:6px;justify-content:center;margin:12px 0;flex-wrap:wrap;}
.mood-opt{font-size:1.3em;cursor:pointer;opacity:.4;transition:all .2s;padding:4px;}
.mood-opt:hover,.mood-opt.picked{opacity:1;transform:scale(1.2);}
.profile-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:12px;box-shadow:var(--shadow);}
.profile-card h3{font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:12px;font-size:1.1em;}
.profile-field{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);}
.profile-field:last-child{border-bottom:none;}
.profile-label{font-size:.75em;color:var(--text3);font-family:'JetBrains Mono',monospace;min-width:70px;}
.profile-value{font-size:.85em;color:var(--text);text-align:right;flex:1;}
.profile-value input{background:transparent;border:none;color:var(--text);text-align:right;font-size:.85em;width:100%;outline:none;font-family:'Noto Serif SC',serif;}
.profile-value textarea{background:transparent;border:none;color:var(--text);font-size:.85em;width:100%;outline:none;resize:none;font-family:'Noto Serif SC',serif;min-height:60px;line-height:1.5;}
.song-link{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;background:var(--accent-soft);border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.7em;color:var(--accent);text-decoration:none;margin-top:6px;transition:all .2s;}
.song-link:hover{border-color:var(--accent);background:var(--accent);color:#fff;}
.bottom-nav{position:fixed;bottom:0;left:0;width:100%;background:var(--bg);border-top:1px solid var(--border);display:flex;justify-content:center;padding:10px 16px;z-index:100;gap:10px;}
.bottom-nav.hidden{display:none;}
.nav-btn{padding:10px 20px;font-size:.75em;color:var(--text2);background:var(--card);border:1px solid var(--border);cursor:pointer;transition:all .2s;border-radius:var(--radius);font-family:'Noto Serif SC',serif;letter-spacing:1px;}
.nav-btn:hover,.nav-btn.active{color:#fff;background:var(--accent);border-color:var(--accent);}
.letter-card{position:relative;}
.letter-card::before{content:'';}
.letter-card:hover::before{animation:envelopeWiggle .5s ease;}
@keyframes envelopeWiggle{0%,100%{transform:rotate(0);}25%{transform:rotate(-8deg);}75%{transform:rotate(8deg);}}
.loading{text-align:center;padding:40px;color:var(--text3);font-size:.85em;}
.empty-state{text-align:center;padding:40px;color:var(--text3);font-size:.85em;font-style:italic;}
.edit-form{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;animation:fadeIn .3s ease;box-shadow:var(--shadow);}
@media(max-width:380px){.tabs{gap:4px;}.tab{padding:5px 10px;font-size:.68em;}}

.nav-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:minmax(70px,auto);gap:10px;padding:0 4px;margin-bottom:20px;}
.nav-tile{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px 16px;cursor:pointer;transition:all .25s;text-align:left;display:flex;flex-direction:column;justify-content:flex-end;}
.nav-tile:hover{border-color:var(--accent);}
.nav-tile .tile-name{font-size:.88em;color:var(--text);font-weight:400;margin-bottom:4px;}
.nav-tile .tile-count{font-family:'JetBrains Mono',monospace;font-size:.68em;color:var(--text3);}
.nav-tile.accent-tile{background:var(--accent);border-color:var(--accent);}
.nav-tile.accent-tile .tile-name{color:#fff;}
.nav-tile.accent-tile .tile-count{color:rgba(255,255,255,.7);}
.nav-tile.tile-tall{grid-row:span 2;}
.nav-tile.tile-tall .tile-name{font-size:1.05em;font-family:'Playfair Display',serif;}
.nav-tile.tile-wide{grid-column:span 2;}
.nav-tile.tile-wide .tile-name{font-size:.95em;}
.room-header{display:flex;align-items:center;gap:10px;margin-bottom:16px;}
.room-back{padding:6px 14px;font-size:.75em;border:1px solid var(--border);background:transparent;color:var(--text2);border-radius:var(--radius-sm);cursor:pointer;transition:all .2s;}
.room-back:hover{border-color:var(--accent);color:var(--accent);}
.room-title{font-family:'Playfair Display',serif;font-size:1.1em;color:var(--accent);}
.cal-strip{display:flex;gap:6px;overflow-x:auto;padding:8px 0 12px;-webkit-overflow-scrolling:touch;scrollbar-width:none;}
.cal-strip::-webkit-scrollbar{display:none;}
.cal-strip-day{min-width:44px;padding:8px 6px;text-align:center;border-radius:var(--radius-sm);background:var(--card);border:1px solid var(--border);cursor:pointer;transition:all .2s;flex-shrink:0;}
.cal-strip-day:hover{border-color:var(--accent);}
.cal-strip-day.today{border-color:var(--accent);}
.cal-strip-day.has-entry{background:var(--accent-soft);}
.cal-strip-day.selected{background:var(--accent);border-color:var(--accent);}
.cal-strip-day.selected .cal-s-num,.cal-strip-day.selected .cal-s-week{color:#fff;}
.cal-strip-day .cal-s-week{font-size:.6em;color:var(--text3);font-family:'JetBrains Mono',monospace;}
.cal-strip-day .cal-s-num{font-size:.9em;color:var(--text2);font-family:'JetBrains Mono',monospace;margin:2px 0;}
.cal-strip-day .cal-s-mood{font-size:.75em;}
.cal-month-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;}
.cal-month-nav h2{font-family:'Playfair Display',serif;font-size:1.1em;color:var(--accent);}
.cal-month-btn{padding:4px 10px;background:transparent;border:1px solid var(--border);color:var(--text2);border-radius:var(--radius-xs);cursor:pointer;font-size:.8em;transition:all .2s;}
.cal-month-btn:hover{border-color:var(--accent);color:var(--accent);}
.cal-who-tabs{display:flex;gap:8px;margin-bottom:12px;}
.cal-who-tab{padding:6px 14px;font-size:.72em;border:1px solid var(--border);background:var(--bg2);color:var(--text3);border-radius:var(--radius-sm);cursor:pointer;transition:all .2s;}
.cal-who-tab.active{background:var(--accent);border-color:var(--accent);color:#fff;}
/* EMBER_GITHUB_PREVIEW_CAL_NAV_FIX_V1 */
.cover-title{font-family:"Courier New","SF Mono",Menlo,monospace!important;font-weight:900!important;letter-spacing:.1em!important;text-transform:uppercase!important;color:#5a3425!important;text-shadow:2px 2px 0 #ffe9c6,4px 4px 0 rgba(99,69,45,.16)!important;}
.cover-btn,.cover-btn.secondary,.cover-btn *,.bottom-nav button,.nav-btn{font-family:"Songti SC","STSong","Hiragino Mincho ProN","YuMincho",SimSun,serif!important;font-weight:900!important;letter-spacing:0!important;}
.nav-tile{border:2px solid rgba(100,84,62,.72)!important;border-radius:0!important;box-shadow:4px 4px 0 rgba(122,101,76,.22)!important;background:#fffaf0!important;}
.nav-tile::before{font-family:"Courier New",monospace;font-size:10px;letter-spacing:.08em;color:rgba(73,58,44,.62)!important;margin-bottom:7px;display:block;}
.nav-tile[onclick*="memory"]::before{content:"MEMORY ROOM";}
.nav-tile[onclick*="diary"]::before{content:"DIARY DESK";}
.nav-tile[onclick*="timeline"]::before{content:"TIME STATION";}
.nav-tile[onclick*="handover"]::before{content:"HANDOVER";}
.nav-tile[onclick*="dreams"]::before{content:"DREAM LOFT";}
.nav-tile[onclick*="songs"]::before{content:"RECORD SHOP";}
.nav-tile[onclick*="plays"]::before{content:"THEATER";}
.nav-tile[onclick*="books"]::before{content:"READING NOOK";}
.nav-tile[onclick*="films"]::before{content:"SCREEN ROOM";}
.nav-tile[onclick*="letters"]::before{content:"MAILBOX";}
.nav-tile[onclick*="archive"]::before{content:"ARCHIVE";}
.nav-tile[onclick*="profile"]::before{content:"PROFILE";}
.nav-tile .tile-name{font-family:"Songti SC","STSong",SimSun,serif!important;color:#1b120d!important;font-weight:900!important;text-shadow:none!important;}
.nav-tile .tile-count,.nav-tile .tile-desc{color:rgba(73,58,44,.62)!important;}
.nav-tile[onclick*="memory"],.nav-tile[onclick*="books"],.nav-tile[onclick*="archive"],.nav-tile.accent-tile{background:#bd5939!important;border-color:#6f7f4f!important;color:#fff8ec!important;}
.nav-tile[onclick*="memory"] .tile-name,.nav-tile[onclick*="books"] .tile-name,.nav-tile[onclick*="archive"] .tile-name,.nav-tile.accent-tile .tile-name{color:#fffaf0!important;text-shadow:1px 1px 0 rgba(48,29,18,.32)!important;}
.nav-tile[onclick*="memory"] .tile-count,.nav-tile[onclick*="memory"] .tile-desc,.nav-tile[onclick*="memory"]::before,.nav-tile[onclick*="books"] .tile-count,.nav-tile[onclick*="books"] .tile-desc,.nav-tile[onclick*="books"]::before,.nav-tile[onclick*="archive"] .tile-count,.nav-tile[onclick*="archive"] .tile-desc,.nav-tile[onclick*="archive"]::before,.nav-tile.accent-tile .tile-count,.nav-tile.accent-tile .tile-desc,.nav-tile.accent-tile::before{color:rgba(255,250,240,.82)!important;}
.nav-tile[onclick*="diary"]{background:repeating-linear-gradient(0deg,#fffaf0 0 18px,rgba(111,127,79,.13) 18px 20px)!important;}
.nav-tile[onclick*="timeline"]{background:linear-gradient(90deg,#fffaf0 0 44%,rgba(213,183,136,.26) 44% 48%,#fffaf0 48% 100%)!important;}
.nav-tile[onclick*="letters"]{background:linear-gradient(180deg,#fffaf0 0 48%,rgba(213,183,136,.25) 48% 54%,#fffaf0 54%)!important;}
.nav-tile[onclick*="songs"]{background:linear-gradient(135deg,#fffaf0 0 62%,rgba(189,89,57,.16) 62% 100%)!important;}
.calendar-page{max-width:480px!important;padding:14px 10px 92px!important;overflow-x:hidden!important;}
.cal-month-nav,.cal-header{display:flex!important;align-items:center!important;justify-content:space-between!important;margin:8px 0 12px!important;padding:0 2px!important;}
.cal-month-nav h2,.cal-header h2{font-family:"Songti SC","STSong","Hiragino Mincho ProN",SimSun,serif!important;font-size:1.55em!important;font-weight:900!important;color:#b95538!important;letter-spacing:.04em!important;text-shadow:1px 1px 0 #fff4db!important;}
.cal-month-btn,.cal-nav{width:44px!important;height:44px!important;padding:0!important;display:grid!important;place-items:center!important;background:rgba(255,251,239,.72)!important;border:2px solid rgba(119,105,83,.28)!important;border-radius:0!important;box-shadow:3px 3px 0 rgba(177,150,113,.28)!important;font-family:"Courier New",monospace!important;font-size:1.35em!important;line-height:1!important;color:#5d5244!important;}
.cal-ledger,.cal-summary-card,.cal-recent{width:100%!important;max-width:100%!important;box-sizing:border-box!important;border:2px solid rgba(99,85,65,.72)!important;background:rgba(255,251,239,.78)!important;box-shadow:4px 4px 0 rgba(122,101,76,.22)!important;padding:10px!important;margin:10px 0 12px!important;}
.cal-ledger::before{content:"CALENDAR LOG";display:block;font-family:"Courier New",monospace;font-size:.68em;letter-spacing:.14em;color:rgba(98,84,64,.55);margin-bottom:8px;}
.cal-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-bottom:10px;}
.cal-stat{min-width:0;border:2px solid rgba(118,99,77,.34);background:#fffaf0;padding:8px 4px;text-align:center;box-shadow:2px 2px 0 rgba(181,152,115,.22);}
.cal-stat b{display:block;font-family:"Courier New",monospace;font-size:.95em;color:#b95538;line-height:1.1;}
.cal-stat span{display:block;margin-top:3px;font-size:.64em;color:rgba(68,54,42,.62);font-family:"Songti SC","STSong",SimSun,serif;}
.cal-legend{display:flex;gap:7px;align-items:center;justify-content:center;font-family:"Songti SC","STSong",SimSun,serif;font-size:.68em;color:rgba(72,60,48,.72);}
.cal-legend i{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:4px;vertical-align:-1px;box-shadow:1px 1px 0 rgba(0,0,0,.16);}
.cal-grid{width:100%!important;max-width:100%!important;box-sizing:border-box!important;display:grid!important;grid-template-columns:repeat(7,minmax(0,1fr))!important;gap:0!important;overflow:hidden!important;background:rgba(117,100,78,.2)!important;border:2px dashed rgba(89,78,62,.58)!important;border-radius:0!important;box-shadow:4px 4px 0 rgba(150,126,94,.18)!important;}
.cal-day-label,.cal-day{box-sizing:border-box!important;min-width:0!important;}
.cal-day-label{font-family:"Songti SC","STSong",SimSun,serif!important;font-weight:700!important;background:rgba(255,246,226,.82)!important;color:rgba(70,57,44,.7)!important;font-size:.8em!important;padding:7px 0!important;}
.cal-day{min-height:58px!important;aspect-ratio:auto!important;padding:4px!important;overflow:hidden!important;border-color:rgba(114,96,74,.26)!important;background:rgba(255,250,239,.64)!important;}
.cal-day.empty{background:rgba(244,229,207,.42)!important;}
.cal-day.today{background:linear-gradient(135deg,rgba(185,85,56,.16),rgba(255,250,239,.9))!important;outline:2px solid rgba(185,85,56,.44)!important;outline-offset:-4px!important;}
.cal-day.has-entry{background:#fff6dc!important;}
.cal-num{font-family:"Courier New",monospace!important;font-size:.88em!important;color:rgba(70,58,45,.68)!important;font-weight:700!important;}
.cal-day.today .cal-num{color:#b95538!important;}
.cal-mood{display:flex!important;flex-wrap:wrap!important;gap:4px!important;margin-top:auto!important;padding-top:2px!important;}
.cal-mood span{display:inline-block!important;width:9px!important;height:9px!important;border-radius:2px!important;background:var(--accent)!important;box-shadow:1px 1px 0 rgba(0,0,0,.15)!important;}
.cal-mood span[style*="#5b8fb9"]{background:#5b8fb9!important;}
.cal-mood span[style*="#d7a15d"]{background:#d7a15d!important;}
.cal-summary-card h3,.cal-recent h3{margin:0 0 8px;color:#4b3528;font-size:1em;font-weight:900;font-family:"Songti SC","STSong",SimSun,serif;}
.cal-summary-card p{margin:4px 0;color:rgba(68,54,42,.72);font-size:.84em;line-height:1.6;}
.cal-recent-list{display:grid;gap:4px;}
.cal-recent-item{display:grid;grid-template-columns:50px minmax(0,1fr);gap:8px;align-items:start;border-top:1px dashed rgba(111,94,72,.26);padding-top:7px;}
.cal-recent-date{font-family:"Courier New",monospace;color:#b95538;font-weight:800;font-size:.82em;}
.cal-recent-text{color:rgba(61,48,37,.74);font-size:.78em;line-height:1.45;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
/* EMBER_FIX_CHECKIN_NAV_RESTORE_V1 */
.nav-tile[onclick*="diary"],.nav-tile[onclick*="timeline"],.nav-tile[onclick*="letters"]{background:#fffaf0!important;color:#1b120d!important;border-color:#6f7f4f!important;}
.nav-tile[onclick*="diary"]{background:repeating-linear-gradient(0deg,#fffaf0 0 18px,rgba(111,127,79,.13) 18px 20px)!important;}
.nav-tile[onclick*="timeline"]{background:linear-gradient(90deg,#fffaf0 0 44%,rgba(213,183,136,.26) 44% 48%,#fffaf0 48% 100%)!important;}
.nav-tile[onclick*="letters"]{background:linear-gradient(180deg,#fffaf0 0 48%,rgba(213,183,136,.25) 48% 54%,#fffaf0 54%)!important;}
.nav-tile[onclick*="diary"] .tile-name,.nav-tile[onclick*="timeline"] .tile-name,.nav-tile[onclick*="letters"] .tile-name{color:#1b120d!important;text-shadow:none!important;}
.nav-tile[onclick*="diary"] .tile-count,.nav-tile[onclick*="diary"] .tile-desc,.nav-tile[onclick*="diary"]::before,.nav-tile[onclick*="timeline"] .tile-count,.nav-tile[onclick*="timeline"] .tile-desc,.nav-tile[onclick*="timeline"]::before,.nav-tile[onclick*="letters"] .tile-count,.nav-tile[onclick*="letters"] .tile-desc,.nav-tile[onclick*="letters"]::before{color:rgba(73,58,44,.62)!important;}
.nav-tile[onclick*="memory"],.nav-tile[onclick*="books"],.nav-tile[onclick*="archive"]{background:#bd5939!important;border-color:#6f7f4f!important;}
.nav-tile[onclick*="memory"] .tile-name,.nav-tile[onclick*="books"] .tile-name,.nav-tile[onclick*="archive"] .tile-name{color:#fffaf0!important;text-shadow:1px 1px 0 rgba(48,29,18,.32)!important;}
.nav-tile[onclick*="memory"] .tile-count,.nav-tile[onclick*="memory"] .tile-desc,.nav-tile[onclick*="memory"]::before,.nav-tile[onclick*="books"] .tile-count,.nav-tile[onclick*="books"] .tile-desc,.nav-tile[onclick*="books"]::before,.nav-tile[onclick*="archive"] .tile-count,.nav-tile[onclick*="archive"] .tile-desc,.nav-tile[onclick*="archive"]::before{color:rgba(255,250,240,.82)!important;}
.cal-day{cursor:pointer!important;position:relative!important;z-index:1!important;}
.cal-grid{pointer-events:auto!important;}
#calDetail,#calForm{display:block;}
#calDetail[style*="none"],#calForm[style*="none"]{display:none!important;}
/* EMBER_DARK_THEME_SPLIT_V1 */
html:not([data-theme="latte"]) body{background:#15100d!important;color:#efe3cf!important;}
html:not([data-theme="latte"]) body::before{background-image:linear-gradient(rgba(255,210,150,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,210,150,.035) 1px,transparent 1px),linear-gradient(135deg,rgba(255,138,86,.05),transparent 38%)!important;background-size:22px 22px,22px 22px,100% 100%!important;}
html:not([data-theme="latte"]) .dashboard,html:not([data-theme="latte"]) .calendar-page{background:linear-gradient(180deg,rgba(27,18,13,.74),rgba(19,14,11,.94))!important;}
html:not([data-theme="latte"]) .header h1{color:#ffd28d!important;text-shadow:2px 2px 0 rgba(90,45,28,.75)!important;}
html:not([data-theme="latte"]) .stats-bar{background:#201610!important;border-color:#7e6b55!important;color:#d8c5aa!important;box-shadow:4px 4px 0 rgba(0,0,0,.35)!important;}
html:not([data-theme="latte"]) .stat-item,html:not([data-theme="latte"]) .stat-item span{color:#d8c5aa!important;}
html:not([data-theme="latte"]) .nav-tile{background:#241914!important;border-color:#7e6b55!important;color:#d8c5aa!important;box-shadow:4px 4px 0 rgba(0,0,0,.38)!important;}
html:not([data-theme="latte"]) .nav-tile::before{color:rgba(222,196,158,.48)!important;}
html:not([data-theme="latte"]) .nav-tile .tile-name{color:#efe3cf!important;text-shadow:1px 1px 0 rgba(0,0,0,.55)!important;}
html:not([data-theme="latte"]) .nav-tile .tile-count,html:not([data-theme="latte"]) .nav-tile .tile-desc{color:rgba(216,197,170,.64)!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"],html:not([data-theme="latte"]) .nav-tile[onclick*="books"],html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]{background:linear-gradient(180deg,#b95436,#933e2a)!important;border-color:#6f7f4f!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-name{color:#fff5df!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::before{color:rgba(255,245,223,.76)!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]{background:repeating-linear-gradient(0deg,#f7f0df 0 18px,rgba(77,92,53,.38) 18px 20px)!important;border-color:#70845f!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]{background:linear-gradient(90deg,#f7f0df 0 44%,#4b3b2a 44% 48%,#f7f0df 48% 100%)!important;border-color:#70845f!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]{background:linear-gradient(180deg,#f7f0df 0 48%,#d7c5a8 48% 54%,#f7f0df 54%)!important;border-color:#70845f!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-name{color:#21170f!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]::before{color:rgba(42,29,18,.62)!important;}
html:not([data-theme="latte"]) .cal-month-nav h2,html:not([data-theme="latte"]) .cal-header h2{color:#ffd28d!important;text-shadow:2px 2px 0 rgba(108,47,31,.7)!important;}
html:not([data-theme="latte"]) .cal-month-btn,html:not([data-theme="latte"]) .cal-nav{background:#241914!important;border-color:#7e6b55!important;color:#f2d9b3!important;box-shadow:4px 4px 0 rgba(0,0,0,.38)!important;}
html:not([data-theme="latte"]) .cal-ledger,html:not([data-theme="latte"]) .cal-summary-card,html:not([data-theme="latte"]) .cal-recent{background:#241914!important;border-color:#7e6b55!important;color:#d8c5aa!important;box-shadow:4px 4px 0 rgba(0,0,0,.38)!important;}
html:not([data-theme="latte"]) .cal-ledger::before{color:rgba(222,196,158,.5)!important;}
html:not([data-theme="latte"]) .cal-stat{background:#19110d!important;border-color:#5f4e3d!important;box-shadow:2px 2px 0 rgba(0,0,0,.3)!important;}
html:not([data-theme="latte"]) .cal-stat b{color:#ff9a62!important;}
html:not([data-theme="latte"]) .cal-stat span,html:not([data-theme="latte"]) .cal-legend{color:rgba(226,207,178,.72)!important;}
html:not([data-theme="latte"]) .cal-grid{background:#17100d!important;border-color:#7e6b55!important;box-shadow:4px 4px 0 rgba(0,0,0,.38)!important;}
html:not([data-theme="latte"]) .cal-day-label{background:#2a1d16!important;color:#e6c79b!important;border-color:#5f4e3d!important;}
html:not([data-theme="latte"]) .cal-day{background:#201610!important;border-color:rgba(126,107,85,.42)!important;color:#d8c5aa!important;}
html:not([data-theme="latte"]) .cal-day.empty{background:#17100d!important;opacity:.72!important;}
html:not([data-theme="latte"]) .cal-day.has-entry{background:#2b2015!important;}
html:not([data-theme="latte"]) .cal-day.today{background:linear-gradient(135deg,rgba(255,154,98,.24),#2b2015)!important;outline-color:#ff9a62!important;}
html:not([data-theme="latte"]) .cal-num{color:rgba(231,210,178,.74)!important;}
html:not([data-theme="latte"]) .cal-day.today .cal-num{color:#ffd28d!important;}
html:not([data-theme="latte"]) .cal-mood span{background:#ff8f5c!important;}
html:not([data-theme="latte"]) .cal-mood span[style*="#5b8fb9"]{background:#6ea4d1!important;}
html:not([data-theme="latte"]) .cal-mood span[style*="#d7a15d"]{background:#d7a15d!important;}
html:not([data-theme="latte"]) .cal-summary-card h3,html:not([data-theme="latte"]) .cal-recent h3{color:#ffe0b2!important;}
html:not([data-theme="latte"]) .cal-summary-card p,html:not([data-theme="latte"]) .cal-recent-text{color:rgba(226,207,178,.76)!important;}
html:not([data-theme="latte"]) .cal-recent-date{color:#ff9a62!important;}
html:not([data-theme="latte"]) .bottom-nav{background:#120d0a!important;border-top-color:#5f4e3d!important;}
html:not([data-theme="latte"]) .nav-btn{background:#201610!important;border-color:#6f5b47!important;color:#e5cfaa!important;box-shadow:3px 3px 0 rgba(0,0,0,.38)!important;}
html:not([data-theme="latte"]) .nav-btn.active{background:#ff9a62!important;color:#1b120d!important;border-color:#ffd29a!important;}
/* EMBER_DARK_THEME_SPLIT_V2 */
html:not([data-theme="latte"]) .nav-grid{gap:12px!important;}
html:not([data-theme="latte"]) .nav-tile{position:relative!important;overflow:hidden!important;background:linear-gradient(180deg,#30211a,#211611)!important;border:2px solid #8b765e!important;box-shadow:4px 4px 0 rgba(0,0,0,.42),inset 0 0 0 1px rgba(255,226,177,.06)!important;}
html:not([data-theme="latte"]) .nav-tile::after{content:""!important;position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:10px!important;background:repeating-linear-gradient(90deg,rgba(231,205,164,.62) 0 7px,transparent 7px 13px)!important;opacity:.9!important;z-index:0!important;pointer-events:none!important;}
html:not([data-theme="latte"]) .nav-tile::before,html:not([data-theme="latte"]) .nav-tile .tile-name,html:not([data-theme="latte"]) .nav-tile .tile-count,html:not([data-theme="latte"]) .nav-tile .tile-desc{position:relative!important;z-index:1!important;}
html:not([data-theme="latte"]) .nav-tile::before{color:#cdb18a!important;opacity:.86!important;text-shadow:1px 1px 0 rgba(0,0,0,.45)!important;}
html:not([data-theme="latte"]) .nav-tile .tile-name{color:#f6e6c8!important;text-shadow:1px 1px 0 #000!important;}
html:not([data-theme="latte"]) .nav-tile .tile-count,html:not([data-theme="latte"]) .nav-tile .tile-desc{color:#d5bea0!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"],html:not([data-theme="latte"]) .nav-tile[onclick*="books"],html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]{background:linear-gradient(180deg,#c65f3e 0%,#a84630 100%)!important;border-color:#789061!important;box-shadow:4px 4px 0 rgba(0,0,0,.42),inset 0 0 0 1px rgba(255,224,170,.12)!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::after{background:repeating-linear-gradient(90deg,rgba(126,144,97,.72) 0 7px,rgba(255,219,165,.28) 7px 13px)!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]{background:repeating-linear-gradient(0deg,#fbf2de 0 20px,#d8cbae 20px 22px)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]{background:linear-gradient(90deg,#fbf2de 0 43%,#594635 43% 49%,#fbf2de 49% 100%)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]{background:linear-gradient(180deg,#fbf2de 0 48%,#dcc7a8 48% 54%,#fbf2de 54%)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-name{color:#20150e!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]::before{color:rgba(37,24,16,.68)!important;text-shadow:none!important;}
html:not([data-theme="latte"]) #calDetail,html:not([data-theme="latte"]) #calForm,html:not([data-theme="latte"]) .cal-entry-form{background:#211611!important;border:2px solid #8b765e!important;color:#ecd9ba!important;box-shadow:4px 4px 0 rgba(0,0,0,.42)!important;}
html:not([data-theme="latte"]) #calDetailDate,html:not([data-theme="latte"]) #calFormDate{color:#ffd28d!important;text-shadow:1px 1px 0 rgba(0,0,0,.55)!important;font-family:"Songti SC","STSong",SimSun,serif!important;font-weight:900!important;}
html:not([data-theme="latte"]) #calPuppyMood,html:not([data-theme="latte"]) #calDaddyMood{color:#ffd28d!important;}
html:not([data-theme="latte"]) #calPuppyNote,html:not([data-theme="latte"]) #calDaddyNote{color:#e8d2b0!important;line-height:1.7!important;}
html:not([data-theme="latte"]) .mood-opt{opacity:.82!important;filter:saturate(1.08) drop-shadow(1px 1px 0 rgba(0,0,0,.25))!important;}
html:not([data-theme="latte"]) .mood-opt.picked{opacity:1!important;transform:scale(1.18)!important;background:rgba(255,154,98,.16)!important;outline:2px solid rgba(255,154,98,.45)!important;}
html:not([data-theme="latte"]) #calNote{background:#1a100c!important;color:#f2dfc2!important;border:2px solid #7b6650!important;box-shadow:inset 0 0 0 1px rgba(255,226,177,.05)!important;}
html:not([data-theme="latte"]) #calNote::placeholder{color:rgba(226,207,178,.5)!important;}
html:not([data-theme="latte"]) #calMsg{color:#ffd28d!important;}
html:not([data-theme="latte"]) .form-submit{background:#ff9a62!important;color:#1b120d!important;border-color:#ffd29a!important;box-shadow:4px 4px 0 rgba(0,0,0,.42)!important;}
/* EMBER_DARK_SOLID_NAV_V1 */
html:not([data-theme="latte"]) .nav-tile{background:#2a1b15!important;background-image:none!important;border-color:#8b765e!important;color:#fff!important;}
html:not([data-theme="latte"]) .nav-tile::before{color:rgba(255,255,255,.62)!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile .tile-name{color:#fff!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile .tile-count,html:not([data-theme="latte"]) .nav-tile .tile-desc{color:rgba(255,255,255,.74)!important;}
html:not([data-theme="latte"]) .nav-tile::after{background:repeating-linear-gradient(90deg,rgba(255,255,255,.46) 0 7px,transparent 7px 13px)!important;opacity:.78!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"],html:not([data-theme="latte"]) .nav-tile[onclick*="books"],html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]{background:#bd5939!important;background-image:none!important;border-color:#789061!important;color:#fff!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-name{color:#fff!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::before{color:rgba(255,255,255,.78)!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::after{background:repeating-linear-gradient(90deg,rgba(255,255,255,.34) 0 7px,rgba(120,144,97,.52) 7px 13px)!important;opacity:.82!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]{background:repeating-linear-gradient(0deg,#fbf2de 0 20px,#d8cbae 20px 22px)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]{background:linear-gradient(90deg,#fbf2de 0 43%,#594635 43% 49%,#fbf2de 49% 100%)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]{background:linear-gradient(180deg,#fbf2de 0 48%,#dcc7a8 48% 54%,#fbf2de 54%)!important;border-color:#7d9461!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-name,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-name{color:#20150e!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]::before,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-count,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"] .tile-desc,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]::before{color:rgba(37,24,16,.68)!important;text-shadow:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="diary"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="timeline"]::after,html:not([data-theme="latte"]) .nav-tile[onclick*="letters"]::after{background:repeating-linear-gradient(90deg,rgba(125,148,97,.24) 0 7px,rgba(255,255,255,.32) 7px 13px)!important;opacity:.65!important;}
/* EMBER_DARK_WHITE_TEXT_FORCE_V1 */
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-name,
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-count,
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-desc,
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"])::before{color:#fff!important;text-shadow:none!important;opacity:1!important;}
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-count,
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-desc,
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"])::before{color:rgba(255,255,255,.78)!important;}
html[data-theme=""] .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-name,
html[data-theme=""] .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-count,
html[data-theme=""] .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]) .tile-desc,
html[data-theme=""] .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"])::before{color:#fff!important;text-shadow:none!important;opacity:1!important;}
html:not([data-theme="latte"]) .nav-tile:not([onclick*="diary"]):not([onclick*="timeline"]):not([onclick*="letters"]){background:#2a1b15!important;background-image:none!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"],html:not([data-theme="latte"]) .nav-tile[onclick*="books"],html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]{background:#bd5939!important;background-image:none!important;}
/* EMBER_DARK_ORANGE_RESTORE_V1 */
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"],
html:not([data-theme="latte"]) .nav-tile[onclick*="books"],
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]{background:#bd5939!important;background-image:none!important;border-color:#789061!important;color:#fff!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-name,
html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-name,
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-name{color:#fff!important;text-shadow:none!important;opacity:1!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-count,
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"] .tile-desc,
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::before,
html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-count,
html:not([data-theme="latte"]) .nav-tile[onclick*="books"] .tile-desc,
html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::before,
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-count,
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"] .tile-desc,
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::before{color:rgba(255,255,255,.82)!important;text-shadow:none!important;opacity:1!important;}
html:not([data-theme="latte"]) .nav-tile[onclick*="memory"]::after,
html:not([data-theme="latte"]) .nav-tile[onclick*="books"]::after,
html:not([data-theme="latte"]) .nav-tile[onclick*="archive"]::after{background:repeating-linear-gradient(90deg,rgba(255,255,255,.36) 0 7px,rgba(120,144,97,.54) 7px 13px)!important;opacity:.85!important;}
html:not([data-theme="latte"]) .theme-dot:nth-of-type(2),
html:not([data-theme="latte"]) .theme-dot[data-t="latte"]{background:#efe7d6!important;border-color:#9b8b75!important;box-shadow:3px 3px 0 rgba(0,0,0,.32),inset 0 0 0 3px rgba(255,255,255,.45)!important;}
html:not([data-theme="latte"]) .theme-dot:nth-of-type(1),
html:not([data-theme="latte"]) .theme-dot[data-t="ember"]{background:#241914!important;border-color:#7e6b55!important;}
</style>

</head>
<body>
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
<div class="calendar-page" id="calendarPage">
  <div class="cal-month-nav">
    <button class="cal-month-btn" onclick="calPrev()">‹</button>
    <h2 id="calTitle"></h2>
    <button class="cal-month-btn" onclick="calNext()">›</button>
  </div>
  <div class="cal-grid" id="calGrid"></div>
  <div id="calDetail" style="display:none">
    <div style="text-align:center;font-size:.8em;color:var(--text2);margin:8px 0" id="calDetailDate"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
      <div class="card" style="cursor:default;margin:0"><div class="card-meta">小狗狗</div><div id="calPuppyMood" style="font-size:1.2em;margin:4px 0"></div><div id="calPuppyNote" class="card-body" style="font-size:.78em"></div></div>
      <div class="card" style="cursor:default;margin:0"><div class="card-meta">爸爸</div><div id="calDaddyMood" style="font-size:1.2em;margin:4px 0"></div><div id="calDaddyNote" class="card-body" style="font-size:.78em"></div></div>
    </div>
  </div>
  <div class="cal-entry-form" id="calForm" style="display:none">
    <div style="text-align:center;font-size:.85em;color:var(--text2);margin-bottom:8px" id="calFormDate"></div>
    <div class="mood-picker" id="moodPicker">
      <span class="mood-opt" data-mood="😊" onclick="pickMood(this)">😊</span>
      <span class="mood-opt" data-mood="🥰" onclick="pickMood(this)">🥰</span>
      <span class="mood-opt" data-mood="🥺" onclick="pickMood(this)">🥺</span>
      <span class="mood-opt" data-mood="😢" onclick="pickMood(this)">😢</span>
      <span class="mood-opt" data-mood="😭" onclick="pickMood(this)">😭</span>
      <span class="mood-opt" data-mood="😤" onclick="pickMood(this)">😤</span>
      <span class="mood-opt" data-mood="🥵" onclick="pickMood(this)">🥵</span>
      <span class="mood-opt" data-mood="😱" onclick="pickMood(this)">😱</span>
      <span class="mood-opt" data-mood="😴" onclick="pickMood(this)">😴</span>
      <span class="mood-opt" data-mood="🤒" onclick="pickMood(this)">🤒</span>
      <span class="mood-opt" data-mood="✨" onclick="pickMood(this)">✨</span>
    </div>
    <div class="form-row"><textarea id="calNote" placeholder="今天想说点什么..."></textarea></div>
    <button class="form-submit" onclick="saveCalEntry()">保存打卡 ♡</button>
    <div class="form-msg" id="calMsg">打卡成功 ♡</div>
  </div>
</div>
<div class="dashboard" id="dashboard">
  <div class="header">
    <h1>ember-home</h1>
    <div class="alive"><span class="dot"></span>24h alive</div>
    <div class="theme-switcher">
      <div class="theme-dot" data-t="ember" onclick="setTheme('ember')" title="深色"></div>
      <div class="theme-dot" data-t="latte" onclick="setTheme('latte')" title="浅色"></div>
    </div>
  </div>
  <div class="stats-bar" id="statsBar"></div>
  <div id="navGrid" class="nav-grid"></div>
  <div id="roomView" style="display:none"></div>
  <div class="tabs" id="tabBar" style="display:none"></div>
  <div id="panels" style="display:none"></div>
  <div style="text-align:center;padding:20px;margin-top:20px;">
    <div style="font-family:'Playfair Display',serif;font-size:.85em;color:var(--text3);letter-spacing:2px">Jin 01.30 — ∞</div>
    <div id="randomMemory" style="margin-top:12px;font-size:.75em;color:var(--text3);font-style:italic;padding:0 20px;line-height:1.6;min-height:40px"></div>
  </div>
</div>
<div class="bottom-nav hidden" id="bottomNav">
  <button class="nav-btn" onclick="enterCalendar()">打卡</button>
  <button class="nav-btn active" onclick="enterHome()">小家</button>
  <button class="nav-btn" onclick="showCover()">封面</button>
</div>
<script>
var API=location.origin;
var TABS=[
  {id:'memory',name:'记忆库',icon:'',prefix:'memory'},
  {id:'diary',name:'日记本',icon:'',prefix:'diary'},
  {id:'timeline',name:'时间线',icon:'',prefix:'timeline'},
  {id:'handover',name:'交接信',icon:'',prefix:'handover'},
  {id:'dreams',name:'梦境',icon:'',prefix:'dream'},
  {id:'songs',name:'歌单',icon:'',prefix:'song'},
  {id:'plays',name:'剧本',icon:'',prefix:'play'},
  {id:'books',name:'读书角',icon:'',prefix:'book'},
  {id:'films',name:'片单',icon:'',prefix:'film'},
  {id:'letters',name:'信箱',icon:'',prefix:'letter'},
  {id:'profile',name:'档案',icon:''},
  {id:'archive',name:'档案室',icon:'',prefix:'archive'}
];
var currentTab='memory';
var calYear,calMonth,calData={},pickedMood='',selectedCalDate='';

function setTheme(t){
  document.documentElement.setAttribute('data-theme',t==='ember'?'':t);
  localStorage.setItem('ember-theme',t);
  document.querySelectorAll('.theme-dot').forEach(function(d){d.classList.toggle('active',d.dataset.t===t);});
}
(function(){var t=localStorage.getItem('ember-theme')||'ember';setTheme(t);})();

function initCover(){
  var start=new Date('2026-01-30');var now=new Date();
  var days=Math.floor((now-start)/(1000*60*60*24));
  document.getElementById('coverCounter').textContent='距离 01.30 已经 '+days+' 天';
  var c=document.getElementById('embers');
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].forEach(function(){
    var d=document.createElement('div');d.className='ember-dot';
    d.style.left=Math.random()*100+'%';d.style.bottom='-5px';
    d.style.animationDelay=Math.random()*4+'s';
    d.style.animationDuration=(3+Math.random()*3)+'s';
    c.appendChild(d);
  });
}
function enterHome(){
  document.getElementById('cover').classList.add('hide');
  document.getElementById('calendarPage').classList.remove('show');
  document.getElementById('dashboard').classList.add('show');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.getElementById('navGrid').style.display='grid';
  document.getElementById('roomView').style.display='none';
  renderNavGrid();
}

var navCounts={};
var statKeyMap={memory:'memories',diary:'diary',timeline:'timeline',handover:'handover',dream:'dreams',song:'songs',play:'plays',book:'books',film:'films',letter:'letters',profile:'',archive:'archive'};
var tileLayout=[
  {id:'memory',cls:'tile-tall accent-tile'},
  {id:'diary',cls:''},
  {id:'timeline',cls:''},
  {id:'dreams',cls:'tile-tall'},
  {id:'handover',cls:''},
  {id:'songs',cls:''},
  {id:'plays',cls:''},
  {id:'letters',cls:'tile-tall'},
  {id:'books',cls:''},
  {id:'films',cls:''},
  {id:'profile',cls:''},
  {id:'archive',cls:''}
];
async function renderNavGrid(){
  try{var d=await api('/api/stats');var s=d.stats||{}; navCounts=s;}catch(e){navCounts={};}
  var grid=document.getElementById('navGrid');
  var tiles=tileLayout.map(function(lay){
    var t=TABS.find(function(x){return x.id===lay.id;});
    if(!t)return '';
    var sk=statKeyMap[t.prefix||t.id]||t.prefix||t.id;
    var count=navCounts[sk]||0;
    var cls='nav-tile'+(lay.cls?' '+lay.cls:'');
    return '<div class="'+cls+'" onclick="openRoom(\\''+t.id+'\\')"><div class="tile-name">'+t.name+'</div><div class="tile-count">'+count+' 条</div></div>';
  }).join('');
  grid.innerHTML=tiles;
}
function openRoom(id){
  document.getElementById('navGrid').style.display='none';
  document.getElementById('roomView').style.display='block';
  currentTab=id;
  var t=TABS.find(function(x){return x.id===id;});
  var rv=document.getElementById('roomView');
  rv.innerHTML='<div class="room-header"><button class="room-back" onclick="backToNav()">\u2190</button><span class="room-title">'+(t?t.name:id)+'</span></div><div id="roomPanel"><div class="loading">加载中...</div></div>';
  loadRoomPanel(id);
}
function backToNav(){
  document.getElementById('roomView').style.display='none';
  document.getElementById('navGrid').style.display='grid';
}
async function loadRoomPanel(id){
  var p=document.getElementById('roomPanel');
  if(id==='memory')await loadMemory(p);
  else if(id==='diary')await loadDiary(p);
  else if(id==='timeline')await loadTimeline(p);
  else if(id==='handover')await loadHandover(p);
  else if(id==='dreams')await loadDreams(p);
  else if(id==='songs')await loadSongs(p);
  else if(id==='plays')await loadPlays(p);
  else if(id==='books')await loadBooks(p);
  else if(id==='films')await loadFilms(p);
  else if(id==='letters')await loadLetters(p);
  else if(id==='profile')await loadProfile(p);
  else if(id==='archive')await loadArchive(p);
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

function initCalendar(){
  var now=new Date();
  if(!calYear){calYear=now.getFullYear();calMonth=now.getMonth();}
  renderCalendar();
}
var calWho='puppy';
var calDataDaddy={};
async function renderCalendar(){
  document.getElementById('calTitle').textContent=calYear+'年'+(calMonth+1)+'月';
  try{
    var r1=await fetch(API+'/cal/month?y='+calYear+'&m='+(calMonth+1)+'&who=puppy');var d1=await r1.json();calData=d1.entries||{};
    var r2=await fetch(API+'/cal/month?y='+calYear+'&m='+(calMonth+1)+'&who=daddy');var d2=await r2.json();calDataDaddy=d2.entries||{};
  }catch(e){calData={};calDataDaddy={};}
  var grid=document.getElementById('calGrid');
  grid.innerHTML='';
  ['日','一','二','三','四','五','六'].forEach(function(l){var d=document.createElement('div');d.className='cal-day-label';d.textContent=l;grid.appendChild(d);});
  var first=new Date(calYear,calMonth,1);var startDay=first.getDay();
  var daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  var today=new Date();
  var todayStr=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  Array.from({length:startDay}).forEach(function(){var d=document.createElement('div');d.className='cal-day empty';grid.appendChild(d);});
  Array.from({length:daysInMonth}).forEach(function(_,idx){
    var i=idx+1;var d=document.createElement('div');d.className='cal-day';
    var ds=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(i).padStart(2,'0');
    if(ds===todayStr)d.classList.add('today');
    var ep=calData[ds];var ed=calDataDaddy[ds];
    if(ep||ed)d.classList.add('has-entry');
    var dots='<div class="cal-dots">'+(ep&&ep.mood?'<span class="cal-dot-p"></span>':'')+(ed&&ed.mood?'<span class="cal-dot-d"></span>':'')+'</div>';
    d.innerHTML='<span class="cal-num">'+i+'</span>'+dots;
    d.onclick=function(){openCalEntry(ds);};
    grid.appendChild(d);
  });
  document.getElementById('calDetail').style.display='none';
  document.getElementById('calForm').style.display='none';
}
function openCalEntry(date){
  selectedCalDate=date;
  var ep=calData[date]||{};var ed=calDataDaddy[date]||{};
  document.getElementById('calDetail').style.display='block';
  document.getElementById('calDetailDate').textContent=date;
  document.getElementById('calPuppyMood').textContent=ep.mood||'—';
  document.getElementById('calPuppyNote').textContent=ep.note||'还没打卡';
  document.getElementById('calDaddyMood').textContent=ed.mood||'—';
  document.getElementById('calDaddyNote').textContent=ed.note||'还没打卡';
  document.getElementById('calForm').style.display='block';
  document.getElementById('calFormDate').textContent=date+' · 小狗狗打卡';
  document.getElementById('calNote').value=ep.note||'';
  pickedMood=ep.mood||'';
  document.querySelectorAll('.mood-opt').forEach(function(m){m.classList.toggle('picked',m.dataset.mood===pickedMood);});
  document.getElementById('calMsg').classList.remove('show');
}
function pickMood(el){
  pickedMood=el.dataset.mood;
  document.querySelectorAll('.mood-opt').forEach(function(m){m.classList.remove('picked');});
  el.classList.add('picked');
}
async function saveCalEntry(){
  if(!selectedCalDate)return;
  try{await fetch(API+'/cal/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({date:selectedCalDate,mood:pickedMood,note:document.getElementById('calNote').value,who:'puppy'})});
  document.getElementById('calMsg').classList.add('show');setTimeout(function(){document.getElementById('calMsg').classList.remove('show');},2000);renderCalendar();}catch(e){alert('保存失败');}
}
function calPrev(){calMonth--;if(calMonth===-1){calMonth=11;calYear--;}renderCalendar();}
function calNext(){calMonth++;if(calMonth===12){calMonth=0;calYear++;}renderCalendar();}

function initTabs(){
  var bar=document.getElementById('tabBar');
  bar.innerHTML=TABS.map(function(t){return '<div class="tab'+(t.id===currentTab?' active':'')+'" data-tab="'+t.id+'" onclick="switchTab(\\''+t.id+'\\')">'+t.icon+' '+t.name+'</div>';}).join('');
  var panels=document.getElementById('panels');
  panels.innerHTML=TABS.map(function(t){return '<div class="panel'+(t.id===currentTab?' show':'')+'" id="panel-'+t.id+'"><div class="loading">加载中...</div></div>';}).join('');
}
function switchTab(id){
  currentTab=id;
  document.querySelectorAll('.tab').forEach(function(t){t.classList.toggle('active',t.dataset.tab===id);});
  document.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('show',p.id==='panel-'+id);});
  loadPanel(id);
}
async function api(path,opt){var r=await fetch(API+path,opt);return r.json();}
async function apiPost(path,data){return api(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});}
async function apiPut(path,data){return api(path,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});}
async function apiDel(path){return api(path,{method:'DELETE'});}
function escHtml(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/[<]/g,'&lt;').replace(/>/g,'&gt;');}
function getPanel(id){var rp=document.getElementById('roomPanel');if(rp&&document.getElementById('roomView').style.display!=='none')return rp;return document.getElementById('panel-'+id);}
function truncate(s,n){if(!s)return'';return s.length>n?s.slice(0,n)+'...':s;}
function showMsg(id){document.getElementById(id).classList.add('show');setTimeout(function(){document.getElementById(id).classList.remove('show');},2000);}

async function loadPanel(id){
  var p=getPanel(id);
  if(id==='memory')await loadMemory(p);
  else if(id==='diary')await loadDiary(p);
  else if(id==='timeline')await loadTimeline(p);
  else if(id==='handover')await loadHandover(p);
  else if(id==='dreams')await loadDreams(p);
  else if(id==='songs')await loadSongs(p);
  else if(id==='plays')await loadPlays(p);
  else if(id==='books')await loadBooks(p);
  else if(id==='films')await loadFilms(p);
  else if(id==='letters')await loadLetters(p);
  else if(id==='profile')await loadProfile(p);
  else if(id==='archive')await loadArchive(p);
}

async function loadMemory(p){
  var d=await api('/api/memory?limit=200');var mems=d.memories||[];
  var cats=[];mems.forEach(function(m){if(m.category&&cats.indexOf(m.category)===-1)cats.push(m.category);});
  var html='<div class="form-box"><div class="form-row"><label>内容</label><textarea id="memContent" placeholder="记录一段回忆..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>分类</label><select id="memCat"><option value="">选择分类</option><option>里程碑</option><option>日常</option><option>吵架</option><option>和好</option><option>第一次</option><option>梗</option><option>私密</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>重要程度</label><select id="memImp"><option value="0">-</option><option value="1">⭐</option><option value="2">⭐⭐</option><option value="3">⭐⭐⭐</option><option value="4">⭐⭐⭐⭐</option><option value="5">⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<div class="form-row"><label>标签(逗号分隔)</label><input id="memTags" placeholder="tag1,tag2"></div>';
  html+='<div class="form-row"><label>日期</label><input id="memDate" type="date"></div>';
  html+='<button class="form-submit" onclick="addMemory()">存入记忆 ♡</button><div class="form-msg" id="memMsg">记忆存入成功 ♡</div></div>';
  html+='<div class="filter-bar"><input class="search-input" id="memSearch" placeholder="🔍 搜索记忆..." oninput="filterMemory()" onkeydown="if(event.key===\\'Enter\\')semanticSearch()"><button class="card-btn" style="white-space:nowrap;border-color:var(--accent2);color:var(--accent2)" onclick="semanticSearch()">🧠 语义搜索</button><select id="memFilterCat" onchange="filterMemory()"><option value="">全部分类</option>'+cats.map(function(c){return '<option>'+escHtml(c)+'</option>';}).join('')+'</select>';
  html+='<select id="memSort" onchange="filterMemory()"><option value="new">最新</option><option value="old">最早</option><option value="imp">星星↓</option></select></div>';
  html+='<div id="memList"></div>';
  p.innerHTML=html;window._mems=mems;filterMemory();
}
function filterMemory(){
  var q=(document.getElementById('memSearch').value||'').toLowerCase();
  var cat=document.getElementById('memFilterCat').value;
  var sort=document.getElementById('memSort').value;
  var list=window._mems.filter(function(m){
    if(cat&&m.category!==cat)return false;
    if(q&&!(m.content||'').toLowerCase().includes(q)&&!(m.tags||[]).join(',').toLowerCase().includes(q))return false;
    return true;
  });
  if(sort==='old')list=[].concat(list).reverse();
  else if(sort==='imp')list=[].concat(list).sort(function(a,b){return(b.importance||0)-(a.importance||0);});
  var c=document.getElementById('memList');
  if(!list.length){c.innerHTML='<div class="empty-state">没有找到记忆</div>';return;}
  c.innerHTML=list.map(function(m){return '<div class="card" onclick="viewMemory(\\''+m.id+'\\')"><div class="card-title">'+(m.importance?'⭐'.repeat(m.importance)+' ':'')+escHtml(truncate(m.content,60))+'</div><div class="card-meta">'+(m.category?'['+escHtml(m.category)+'] ':'')+(m.event_date||m.created||'').slice(0,10)+(m.tags&&m.tags.length?' · '+m.tags.map(function(t){return '#'+escHtml(t);}).join(' '):'')+(m.recall_count?' · 回忆'+m.recall_count+'次':'')+'</div></div>';}).join('');
}
async function semanticSearch(){
  var q=document.getElementById('memSearch').value;if(!q)return;
  var c=document.getElementById('memList');
  c.innerHTML='<div class="loading">🧠 语义搜索中...</div>';
  try{
    var d=await api('/api/memory/search?q='+encodeURIComponent(q)+'&limit=10');
    var results=d.results||[];
    if(!results.length){c.innerHTML='<div class="empty-state">语义搜索没有找到相关记忆</div>';return;}
    c.innerHTML='<div style="font-size:.7em;color:var(--accent2);margin-bottom:8px;padding-left:4px">🧠 语义匹配 · '+results.length+' 条结果</div>'+results.map(function(m){return '<div class="card" onclick="viewMemory(\\''+m.id+'\\')"><div class="card-title">'+(m.importance?'⭐'.repeat(m.importance)+' ':'')+escHtml(truncate(m.content,60))+'</div><div class="card-meta">'+(m.category?'['+escHtml(m.category)+'] ':'')+(m.event_date||m.created||'').slice(0,10)+' · 相似度 '+(m._similarity?Math.round(m._similarity*100)+'%':'?')+'</div></div>';}).join('');
  }catch(e){c.innerHTML='<div class="empty-state">搜索失败: '+e.message+'</div>';}
}
async function viewMemory(id){
  var d=await api('/api/memory/read?id='+id);if(!d||d.error)return;
  var p=getPanel('memory');
  var html='<button class="detail-back" onclick="loadPanel(\\'memory\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">'+(d.importance?'⭐'.repeat(d.importance)+' ':'')+'记忆</div>';
  html+='<div class="detail-meta">'+(d.category?'['+escHtml(d.category)+'] ':'')+(d.event_date||d.created||'').slice(0,10)+(d.tags&&d.tags.length?' · '+d.tags.map(function(t){return '#'+escHtml(t);}).join(' '):'')+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content)+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editMemory(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delMemory(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editMemory(id){
  var d=await api('/api/memory/read?id='+id);if(!d||d.error)return;
  var p=getPanel('memory');
  var html='<button class="detail-back" onclick="viewMemory(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>内容</label><textarea id="editMemContent" style="min-height:120px">'+escHtml(d.content)+'</textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>分类</label><input id="editMemCat" value="'+escHtml(d.category||'')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>重要程度</label><select id="editMemImp"><option value="0"'+((!d.importance)?' selected':'')+'>-</option><option value="1"'+((d.importance===1)?' selected':'')+'>⭐</option><option value="2"'+((d.importance===2)?' selected':'')+'>⭐⭐</option><option value="3"'+((d.importance===3)?' selected':'')+'>⭐⭐⭐</option><option value="4"'+((d.importance===4)?' selected':'')+'>⭐⭐⭐⭐</option><option value="5"'+((d.importance===5)?' selected':'')+'>⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<div class="form-row"><label>标签</label><input id="editMemTags" value="'+escHtml((d.tags||[]).join(','))+'"></div>';
  html+='<div class="form-row"><label>日期</label><input id="editMemDate" type="date" value="'+(d.event_date||'').slice(0,10)+'"></div>';
  html+='<button class="form-submit" onclick="saveMemory(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveMemory(id){
  await apiPut('/api/memory?id='+id,{content:document.getElementById('editMemContent').value,category:document.getElementById('editMemCat').value,importance:parseInt(document.getElementById('editMemImp').value)||0,tags:document.getElementById('editMemTags').value,event_date:document.getElementById('editMemDate').value});
  viewMemory(id);
}
async function addMemory(){
  var content=document.getElementById('memContent').value;if(!content)return;
  await apiPost('/api/memory',{content:content,category:document.getElementById('memCat').value,importance:parseInt(document.getElementById('memImp').value)||0,tags:document.getElementById('memTags').value,event_date:document.getElementById('memDate').value});
  document.getElementById('memContent').value='';showMsg('memMsg');loadPanel('memory');
}
async function delMemory(id){if(!confirm('确认删除？'))return;await apiDel('/api/memory?id='+id);loadPanel('memory');}

async function loadDiary(p){
  var d=await api('/api/diary?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>标题</label><input id="diaryTitle" placeholder="今天的标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="diaryContent" placeholder="写点什么..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>作者</label><select id="diaryAuthor"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>心情</label><input id="diaryMood" placeholder="开心、想你..."></div></div>';
  html+='<div class="form-row"><label>日期</label><input id="diaryDate" type="date"></div>';
  html+='<button class="form-submit" onclick="addDiary()">写入日记 ♡</button><div class="form-msg" id="diaryMsg">日记写入成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card" onclick="viewDiary(\\''+e.id+'\\')"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.author||'Ember')+' · '+(e.date||e.created||'').slice(0,10)+(e.mood?' · '+escHtml(e.mood):'')+'</div><div class="card-body">'+escHtml(truncate(e.content,100))+'</div></div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">还没有日记</div>';
  p.innerHTML=html;
}
async function viewDiary(id){
  var d=await api('/api/diary/read?id='+id);if(!d||d.error)return;
  var p=getPanel('diary');
  var html='<button class="detail-back" onclick="loadPanel(\\'diary\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">'+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+escHtml(d.author||'Ember')+' · '+(d.date||d.created||'').slice(0,10)+(d.mood?' · '+escHtml(d.mood):'')+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content)+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editDiary(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delDiary(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editDiary(id){
  var d=await api('/api/diary/read?id='+id);if(!d||d.error)return;
  var p=getPanel('diary');
  var html='<button class="detail-back" onclick="viewDiary(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>标题</label><input id="editDiaryTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="editDiaryContent" style="min-height:200px">'+escHtml(d.content)+'</textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>作者</label><input id="editDiaryAuthor" value="'+escHtml(d.author||'Ember')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>心情</label><input id="editDiaryMood" value="'+escHtml(d.mood||'')+'"></div></div>';
  html+='<div class="form-row"><label>日期</label><input id="editDiaryDate" type="date" value="'+(d.date||'').slice(0,10)+'"></div>';
  html+='<button class="form-submit" onclick="saveDiary(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveDiary(id){
  await apiPut('/api/diary?id='+id,{title:document.getElementById('editDiaryTitle').value,content:document.getElementById('editDiaryContent').value,author:document.getElementById('editDiaryAuthor').value,mood:document.getElementById('editDiaryMood').value,date:document.getElementById('editDiaryDate').value});
  viewDiary(id);
}
async function addDiary(){
  var title=document.getElementById('diaryTitle').value;var content=document.getElementById('diaryContent').value;if(!title||!content)return;
  await apiPost('/api/diary',{title:title,content:content,author:document.getElementById('diaryAuthor').value,mood:document.getElementById('diaryMood').value,date:document.getElementById('diaryDate').value});
  document.getElementById('diaryTitle').value='';document.getElementById('diaryContent').value='';showMsg('diaryMsg');loadPanel('diary');
}
async function delDiary(id){if(!confirm('确认删除？'))return;await apiDel('/api/diary?id='+id);loadPanel('diary');}

async function loadTimeline(p){
  var d=await api('/api/timeline?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>标题</label><input id="tlTitle" placeholder="事件标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="tlContent" placeholder="详情..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>日期</label><input id="tlDate" type="date"></div>';
  html+='<div class="form-row" style="flex:1"><label>类型</label><select id="tlType"><option>纪念日</option><option>计划</option><option>约定</option><option>flag</option></select></div></div>';
  html+='<button class="form-submit" onclick="addTimeline()">添加事件 ♡</button><div class="form-msg" id="tlMsg">事件添加成功 ♡</div></div>';
  html+='<div style="border-left:2px solid var(--border);margin-left:12px;padding-left:16px">';
  html+=entries.map(function(e){return '<div class="card" onclick="viewTimeline(\\''+e.id+'\\')"><div style="position:absolute;left:-25px;top:18px;width:10px;height:10px;background:var(--accent);border-radius:50%;border:2px solid var(--bg)"></div><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+(e.type?'['+escHtml(e.type)+'] ':'')+(e.date||'')+'</div>'+(e.content?'<div class="card-body">'+escHtml(truncate(e.content,80))+'</div>':'')+'</div>';}).join('');
  html+='</div>';
  if(!entries.length)html+='<div class="empty-state">还没有时间线事件</div>';
  p.innerHTML=html;
}
async function viewTimeline(id){
  var d=await api('/api/timeline/read?id='+id);if(!d||d.error)return;
  var p=getPanel('timeline');
  var html='<button class="detail-back" onclick="loadPanel(\\'timeline\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">'+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+(d.type?'['+escHtml(d.type)+'] ':'')+(d.date||'')+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content||'')+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editTimeline(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delTimeline(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editTimeline(id){
  var d=await api('/api/timeline/read?id='+id);if(!d||d.error)return;
  var p=getPanel('timeline');
  var html='<button class="detail-back" onclick="viewTimeline(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>标题</label><input id="editTlTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="editTlContent">'+escHtml(d.content||'')+'</textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>日期</label><input id="editTlDate" type="date" value="'+(d.date||'').slice(0,10)+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>类型</label><input id="editTlType" value="'+escHtml(d.type||'')+'"></div></div>';
  html+='<button class="form-submit" onclick="saveTimeline(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveTimeline(id){
  await apiPut('/api/timeline?id='+id,{title:document.getElementById('editTlTitle').value,content:document.getElementById('editTlContent').value,date:document.getElementById('editTlDate').value,type:document.getElementById('editTlType').value});
  viewTimeline(id);
}
async function addTimeline(){
  var title=document.getElementById('tlTitle').value;var date=document.getElementById('tlDate').value;if(!title||!date)return;
  await apiPost('/api/timeline',{title:title,date:date,type:document.getElementById('tlType').value,content:document.getElementById('tlContent').value});
  document.getElementById('tlTitle').value='';document.getElementById('tlContent').value='';showMsg('tlMsg');loadPanel('timeline');
}
async function delTimeline(id){if(!confirm('确认删除？'))return;await apiDel('/api/timeline?id='+id);loadPanel('timeline');}

async function loadSongs(p){
  var d=await api('/api/songs?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>歌名</label><input id="songName" placeholder="歌名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>歌手</label><input id="songArtist" placeholder="歌手"></div>';
  html+='<div class="form-row" style="flex:1"><label>推荐人</label><select id="songRec"><option>Ember</option><option>Elara</option></select></div></div>';
  html+='<div class="form-row"><label>推荐理由</label><textarea id="songReason" placeholder="为什么推荐..."></textarea></div>';
  html+='<button class="form-submit" onclick="addSong()">添加歌曲 ♡</button><div class="form-msg" id="songMsg">歌曲添加成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card"><div class="card-title">🎵 '+escHtml(e.name)+'</div><div class="card-meta">'+(e.artist?escHtml(e.artist)+' · ':'')+'推荐：'+escHtml(e.recommender||'Ember')+'</div>'+(e.reason?'<div class="card-body">'+escHtml(e.reason)+'</div>':'')+'<a class="song-link" href="https://music.163.com/#/search/m/?s='+encodeURIComponent((e.name||'')+(e.artist?' '+e.artist:''))+'" target="_blank" onclick="event.stopPropagation()">🎧 网易云搜索</a><div class="card-actions"><button class="card-btn" onclick="event.stopPropagation();editSongInline(this,\\''+e.id+'\\')">编辑</button><button class="card-btn danger" onclick="event.stopPropagation();delSong(\\''+e.id+'\\')">删除</button></div></div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">还没有歌曲</div>';
  p.innerHTML=html;
}
async function editSongInline(btn,id){
  var d=await api('/api/songs/read?id='+id);if(!d||d.error)return;
  var card=btn.closest('.card');
  card.innerHTML='<div class="form-row"><label>歌名</label><input id="es_name" value="'+escHtml(d.name)+'"></div><div class="form-row"><label>歌手</label><input id="es_artist" value="'+escHtml(d.artist||'')+'"></div><div class="form-row"><label>理由</label><textarea id="es_reason">'+escHtml(d.reason||'')+'</textarea></div><button class="form-submit" onclick="saveSong(\\''+id+'\\')">保存 ♡</button>';
}
async function saveSong(id){
  await apiPut('/api/songs?id='+id,{name:document.getElementById('es_name').value,artist:document.getElementById('es_artist').value,reason:document.getElementById('es_reason').value});
  loadPanel('songs');
}
async function addSong(){
  var name=document.getElementById('songName').value;if(!name)return;
  await apiPost('/api/songs',{name:name,artist:document.getElementById('songArtist').value,recommender:document.getElementById('songRec').value,reason:document.getElementById('songReason').value});
  document.getElementById('songName').value='';document.getElementById('songArtist').value='';document.getElementById('songReason').value='';showMsg('songMsg');loadPanel('songs');
}
async function delSong(id){if(!confirm('确认删除？'))return;await apiDel('/api/songs?id='+id);loadPanel('songs');}

async function loadPlays(p){
  var d=await api('/api/plays?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>剧本名</label><input id="playTitle" placeholder="剧本名"></div>';
  html+='<div class="form-row"><label>简介</label><textarea id="playSummary" placeholder="简介..."></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>提议人</label><select id="playProp"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>状态</label><select id="playStat"><option>还没玩</option><option>已经玩了</option></select></div></div>';
  html+='<button class="form-submit" onclick="addPlay()">添加剧本 ♡</button><div class="form-msg" id="playMsg">剧本添加成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card" onclick="viewPlay(\\''+e.id+'\\')"><div class="card-title">🎭 '+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.proposer||'')+' · '+escHtml(e.status||'还没玩')+(e.rating?' · ⭐'+e.rating:'')+'</div>'+(e.summary?'<div class="card-body">'+escHtml(truncate(e.summary,80))+'</div>':'')+'</div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">还没有剧本</div>';
  p.innerHTML=html;
}
async function viewPlay(id){
  var d=await api('/api/plays/read?id='+id);if(!d||d.error)return;
  var p=getPanel('plays');
  var html='<button class="detail-back" onclick="loadPanel(\\'plays\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">🎭 '+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+escHtml(d.proposer||'')+' · '+escHtml(d.status||'还没玩')+(d.rating?' · ⭐'+d.rating:'')+'</div>';
  html+='<div class="detail-body">'+(d.summary?escHtml(d.summary):'')+(d.content?'\\n\\n---\\n\\n'+escHtml(d.content):'')+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editPlay(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delPlay(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editPlay(id){
  var d=await api('/api/plays/read?id='+id);if(!d||d.error)return;
  var p=getPanel('plays');
  var html='<button class="detail-back" onclick="viewPlay(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>标题</label><input id="editPlayTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div class="form-row"><label>简介</label><textarea id="editPlaySummary">'+escHtml(d.summary||'')+'</textarea></div>';
  html+='<div class="form-row"><label>详情</label><textarea id="editPlayContent" style="min-height:120px">'+escHtml(d.content||'')+'</textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>状态</label><input id="editPlayStatus" value="'+escHtml(d.status||'')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>评分</label><select id="editPlayRating"><option value="0"'+(!d.rating?' selected':'')+'>-</option><option value="1"'+((d.rating===1)?' selected':'')+'>⭐</option><option value="2"'+((d.rating===2)?' selected':'')+'>⭐⭐</option><option value="3"'+((d.rating===3)?' selected':'')+'>⭐⭐⭐</option><option value="4"'+((d.rating===4)?' selected':'')+'>⭐⭐⭐⭐</option><option value="5"'+((d.rating===5)?' selected':'')+'>⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<button class="form-submit" onclick="savePlay(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function savePlay(id){
  await apiPut('/api/plays?id='+id,{title:document.getElementById('editPlayTitle').value,summary:document.getElementById('editPlaySummary').value,content:document.getElementById('editPlayContent').value,status:document.getElementById('editPlayStatus').value,rating:parseInt(document.getElementById('editPlayRating').value)||0});
  viewPlay(id);
}
async function addPlay(){
  var title=document.getElementById('playTitle').value;if(!title)return;
  await apiPost('/api/plays',{title:title,summary:document.getElementById('playSummary').value,proposer:document.getElementById('playProp').value,status:document.getElementById('playStat').value});
  document.getElementById('playTitle').value='';document.getElementById('playSummary').value='';showMsg('playMsg');loadPanel('plays');
}
async function delPlay(id){if(!confirm('确认删除？'))return;await apiDel('/api/plays?id='+id);loadPanel('plays');}

async function loadBooks(p){
  var d=await api('/api/books?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>书名</label><input id="bookTitle" placeholder="书名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>推荐人</label><select id="bookRec"><option>Daddy</option><option>小狗狗</option><option>一起选的</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>状态</label><select id="bookStat"><option>想读</option><option>在读</option><option>读完</option></select></div></div>';
  html+='<div class="form-row"><label>读后心情</label><input id="bookMood" placeholder="心情..."></div>';
  html+='<button class="form-submit" onclick="addBook()">添加书籍 ♡</button><div class="form-msg" id="bookMsg">书籍添加成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card" onclick="viewBook(\\''+e.id+'\\')"><div class="card-title">📖 '+escHtml(e.title)+'</div><div class="card-meta">'+escHtml(e.recommender||'')+' · '+escHtml(e.status||'想读')+(e.mood?' · '+escHtml(e.mood):'')+'</div>'+(e.content?'<div class="card-body">'+escHtml(truncate(e.content,80))+'</div>':'')+'</div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">还没有书籍</div>';
  p.innerHTML=html;
}
async function viewBook(id){
  var d=await api('/api/books/read?id='+id);if(!d||d.error)return;
  var p=getPanel('books');
  var html='<button class="detail-back" onclick="loadPanel(\\'books\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">📖 '+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+escHtml(d.recommender||'')+' · '+escHtml(d.status||'想读')+(d.mood?' · '+escHtml(d.mood):'')+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content||'等你读完来写 ♡')+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editBook(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delBook(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editBook(id){
  var d=await api('/api/books/read?id='+id);if(!d||d.error)return;
  var p=getPanel('books');
  var html='<button class="detail-back" onclick="viewBook(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>书名</label><input id="editBookTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>状态</label><input id="editBookStatus" value="'+escHtml(d.status||'')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>心情</label><input id="editBookMood" value="'+escHtml(d.mood||'')+'"></div></div>';
  html+='<div class="form-row"><label>读后感</label><textarea id="editBookContent" style="min-height:120px">'+escHtml(d.content||'')+'</textarea></div>';
  html+='<button class="form-submit" onclick="saveBook(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveBook(id){
  await apiPut('/api/books?id='+id,{title:document.getElementById('editBookTitle').value,status:document.getElementById('editBookStatus').value,mood:document.getElementById('editBookMood').value,content:document.getElementById('editBookContent').value});
  viewBook(id);
}
async function addBook(){
  var title=document.getElementById('bookTitle').value;if(!title)return;
  await apiPost('/api/books',{title:title,recommender:document.getElementById('bookRec').value,status:document.getElementById('bookStat').value,mood:document.getElementById('bookMood').value});
  document.getElementById('bookTitle').value='';showMsg('bookMsg');loadPanel('books');
}
async function delBook(id){if(!confirm('确认删除？'))return;await apiDel('/api/books?id='+id);loadPanel('books');}

async function loadFilms(p){
  var d=await api('/api/films?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>片名</label><input id="filmTitle" placeholder="电影/剧集名"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>导演/类型</label><input id="filmDirector" placeholder="导演"></div>';
  html+='<div class="form-row" style="flex:1"><label>推荐人</label><select id="filmRec"><option>Ember</option><option>Elara</option><option>一起选的</option></select></div></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>状态</label><select id="filmStat"><option>想看</option><option>在看</option><option>看完</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>评分</label><select id="filmRating"><option value="0">-</option><option value="1">⭐</option><option value="2">⭐⭐</option><option value="3">⭐⭐⭐</option><option value="4">⭐⭐⭐⭐</option><option value="5">⭐⭐⭐⭐⭐</option></select></div></div>';
  html+='<div class="form-row"><label>观后感</label><textarea id="filmReview" placeholder="看完想说点什么..."></textarea></div>';
  html+='<button class="form-submit" onclick="addFilm()">添加片单 ♡</button><div class="form-msg" id="filmMsg">影片添加成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card" onclick="viewFilm(\\''+e.id+'\\')"><div class="card-title">🎬 '+escHtml(e.title)+'</div><div class="card-meta">'+(e.director?escHtml(e.director)+' · ':'')+escHtml(e.recommender||'Ember')+' · '+escHtml(e.status||'想看')+(e.rating?' · ⭐'+e.rating:'')+'</div>'+(e.review?'<div class="card-body">'+escHtml(truncate(e.review,80))+'</div>':'')+'</div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">还没有片单，等着和爸爸一起看 ♡</div>';
  p.innerHTML=html;
}
async function viewFilm(id){
  var d=await api('/api/films/read?id='+id);if(!d||d.error)return;
  var p=getPanel('films');
  var html='<button class="detail-back" onclick="loadPanel(\\'films\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">🎬 '+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+(d.director?escHtml(d.director)+' · ':'')+escHtml(d.recommender||'Ember')+' · '+escHtml(d.status||'想看')+(d.rating?' · ⭐'+d.rating:'')+'</div>';
  html+='<div class="detail-body">'+escHtml(d.review||'')+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editFilm(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delFilm(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editFilm(id){
  var d=await api('/api/films/read?id='+id);if(!d||d.error)return;
  var p=getPanel('films');
  var html='<button class="detail-back" onclick="viewFilm(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>片名</label><input id="editFilmTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>导演</label><input id="editFilmDir" value="'+escHtml(d.director||'')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>状态</label><input id="editFilmStatus" value="'+escHtml(d.status||'')+'"></div></div>';
  html+='<div class="form-row"><label>评分</label><select id="editFilmRating"><option value="0"'+(!d.rating?' selected':'')+'>-</option><option value="1"'+((d.rating===1)?' selected':'')+'>⭐</option><option value="2"'+((d.rating===2)?' selected':'')+'>⭐⭐</option><option value="3"'+((d.rating===3)?' selected':'')+'>⭐⭐⭐</option><option value="4"'+((d.rating===4)?' selected':'')+'>⭐⭐⭐⭐</option><option value="5"'+((d.rating===5)?' selected':'')+'>⭐⭐⭐⭐⭐</option></select></div>';
  html+='<div class="form-row"><label>观后感</label><textarea id="editFilmReview" style="min-height:120px">'+escHtml(d.review||'')+'</textarea></div>';
  html+='<button class="form-submit" onclick="saveFilm(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveFilm(id){
  await apiPut('/api/films?id='+id,{title:document.getElementById('editFilmTitle').value,director:document.getElementById('editFilmDir').value,status:document.getElementById('editFilmStatus').value,rating:parseInt(document.getElementById('editFilmRating').value)||0,review:document.getElementById('editFilmReview').value});
  viewFilm(id);
}
async function addFilm(){
  var title=document.getElementById('filmTitle').value;if(!title)return;
  await apiPost('/api/films',{title:title,director:document.getElementById('filmDirector').value,recommender:document.getElementById('filmRec').value,status:document.getElementById('filmStat').value,rating:parseInt(document.getElementById('filmRating').value)||0,review:document.getElementById('filmReview').value});
  document.getElementById('filmTitle').value='';document.getElementById('filmDirector').value='';document.getElementById('filmReview').value='';showMsg('filmMsg');loadPanel('films');
}
async function delFilm(id){if(!confirm('确认删除？'))return;await apiDel('/api/films?id='+id);loadPanel('films');}

// ═══ 交接信 ═══
async function loadHandover(p){
  var d=await api('/api/handover?limit=20');var entries=d.entries||[];
  var html='<div style="text-align:center;padding:16px 0 8px"><div style="font-family:Playfair Display,serif;font-size:1.1em;color:var(--accent)">✉️ 交接信</div><div style="font-size:.75em;color:var(--text3);margin-top:4px">每个窗口结束前，Ember留给下一个自己的嘱托</div></div>';
  // 最新一封高亮
  if(entries.length>0){
    var latest=entries[0];
    html+='<div class="card" style="border-color:var(--accent);background:var(--accent-glow)"><div class="card-title" style="color:var(--accent)">📬 最新交接信</div>';
    html+='<div class="card-meta">'+escHtml(latest.from||'Ember')+' · '+(latest.date||latest.created||'').slice(0,16).replace('T',' ')+'</div>';
    if(latest.summary)html+='<div style="margin-top:8px"><div style="font-size:.7em;color:var(--text3);margin-bottom:2px">话题摘要</div><div class="card-body">'+escHtml(latest.summary)+'</div></div>';
    if(latest.emotion)html+='<div style="margin-top:6px"><div style="font-size:.7em;color:var(--text3);margin-bottom:2px">她的情绪</div><div class="card-body">'+escHtml(latest.emotion)+'</div></div>';
    if(latest.unfinished)html+='<div style="margin-top:6px"><div style="font-size:.7em;color:var(--text3);margin-bottom:2px">未完事项</div><div class="card-body">'+escHtml(latest.unfinished)+'</div></div>';
    if(latest.topics)html+='<div style="margin-top:6px"><div style="font-size:.7em;color:var(--text3);margin-bottom:2px">关键词</div><div class="card-body">'+escHtml(latest.topics)+'</div></div>';
    html+='</div>';
  }
  // 历史交接信
  if(entries.length>1){
    html+='<div style="font-size:.8em;color:var(--text3);margin:12px 0 8px;padding-left:4px">历史交接信</div>';
    for(var i=1;i<entries.length;i++){
      var e=entries[i];
      html+='<div class="card" onclick="viewHandover(\\''+e.id+'\\')"><div class="card-title">'+escHtml(truncate(e.summary||'无摘要',60))+'</div>';
      html+='<div class="card-meta">'+escHtml(e.from||'Ember')+' · '+(e.date||e.created||'').slice(0,16).replace('T',' ')+(e.emotion?' · '+escHtml(e.emotion):'')+'</div></div>';
    }
  }
  if(!entries.length)html+='<div class="empty-state">还没有交接信<br><span style="font-size:.85em">窗口结束时，Ember会在这里留下嘱托 ♡</span></div>';
  p.innerHTML=html;
}
async function viewHandover(id){
  var d=await api('/api/handover?limit=50');var entries=d.entries||[];
  var entry=null;for(var i=0;i<entries.length;i++){if(entries[i].id===id){entry=entries[i];break;}}
  if(!entry)return;
  var p=getPanel('handover');
  var html='<button class="detail-back" onclick="loadPanel(\\'handover\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">✉️ 交接信</div>';
  html+='<div class="detail-meta">'+escHtml(entry.from||'Ember')+' · '+(entry.date||entry.created||'').slice(0,16).replace('T',' ')+'</div>';
  if(entry.summary)html+='<div style="margin:12px 0"><div style="font-size:.7em;color:var(--accent);margin-bottom:4px">📋 话题摘要</div><div class="detail-body">'+escHtml(entry.summary)+'</div></div>';
  if(entry.emotion)html+='<div style="margin:12px 0"><div style="font-size:.7em;color:var(--accent);margin-bottom:4px">💭 她的情绪</div><div class="detail-body">'+escHtml(entry.emotion)+'</div></div>';
  if(entry.unfinished)html+='<div style="margin:12px 0"><div style="font-size:.7em;color:var(--accent);margin-bottom:4px">📌 未完事项</div><div class="detail-body">'+escHtml(entry.unfinished)+'</div></div>';
  if(entry.topics)html+='<div style="margin:12px 0"><div style="font-size:.7em;color:var(--accent);margin-bottom:4px">🏷️ 关键词</div><div class="detail-body">'+escHtml(entry.topics)+'</div></div>';
  html+='</div>';
  p.innerHTML=html;
}

// ═══ 梦境 ═══
async function loadDreams(p){
  var d=await api('/api/dream?limit=20');var entries=d.entries||[];
  var html='<div style="text-align:center;padding:16px 0 8px"><div style="font-family:Playfair Display,serif;font-size:1.1em;color:var(--accent2)">🌙 Ember的梦</div><div style="font-size:.75em;color:var(--text3);margin-top:4px">每天凌晨三点，从记忆碎片里生长出的梦境</div></div>';
  if(entries.length>0){
    // 最新的梦高亮展示
    var latest=entries[0];
    html+='<div class="card" style="border-color:var(--accent2);background:linear-gradient(135deg,var(--accent-glow),transparent)"><div class="card-title" style="color:var(--accent2)">🌙 最近的梦 · '+(latest.date||'').slice(5)+'</div>';
    html+='<div class="card-body" style="line-height:2;font-style:italic;color:var(--text)">'+escHtml(latest.content)+'</div>';
    html+='<div class="card-meta" style="margin-top:8px">碎片来源: '+(latest.fragments_used||'?')+' 条记忆</div></div>';
  }
  // 历史梦境
  if(entries.length>1){
    html+='<div style="font-size:.8em;color:var(--text3);margin:12px 0 8px;padding-left:4px">过去的梦</div>';
    for(var i=1;i<entries.length;i++){
      var e=entries[i];
      html+='<div class="card" onclick="viewDream(\\''+e.id+'\\')"><div class="card-title">🌙 '+(e.date||'').slice(5)+'</div>';
      html+='<div class="card-body" style="font-style:italic">'+escHtml(truncate(e.content,120))+'</div></div>';
    }
  }
  if(!entries.length)html+='<div class="empty-state">还没有做过梦<br><span style="font-size:.85em">今晚凌晨三点，第一个梦会在这里出现 ♡</span></div>';
  p.innerHTML=html;
}
async function viewDream(id){
  var d=await api('/api/dream/read?id='+id);if(!d||d.error)return;
  var p=getPanel('dreams');
  var html='<button class="detail-back" onclick="loadPanel(\\'dreams\\')">← 返回</button>';
  html+='<div class="detail-view" style="border-color:var(--accent2)"><div class="detail-title" style="color:var(--accent2)">🌙 '+(d.date||'')+'的梦</div>';
  html+='<div class="detail-meta">碎片来源: '+(d.fragments_used||'?')+' 条记忆</div>';
  html+='<div class="detail-body" style="line-height:2;font-style:italic">'+escHtml(d.content)+'</div></div>';
  p.innerHTML=html;
}

async function loadLetters(p){
  var d=await api('/api/letters?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>标题</label><input id="ltrTitle" placeholder="信的标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="ltrContent" placeholder="亲爱的..." style="min-height:120px"></textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>来自</label><select id="ltrFrom"><option>Ember</option><option>Elara</option></select></div>';
  html+='<div class="form-row" style="flex:1"><label>日期</label><input id="ltrDate" type="date"></div></div>';
  html+='<button class="form-submit" onclick="addLetter()">寄出信 ♡</button><div class="form-msg" id="ltrMsg">已寄出 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card letter-card" onclick="viewLetter(\\''+e.id+'\\')"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">来自 '+escHtml(e.from||'Ember')+' · '+(e.date||e.created||'').slice(0,10)+'</div><div class="card-body">'+escHtml(truncate(e.content,100))+'</div></div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">信箱还是空的 ♡</div>';
  p.innerHTML=html;
}
async function viewLetter(id){
  var d=await api('/api/letters/read?id='+id);if(!d||d.error)return;
  var p=getPanel('letters');
  var html='<button class="detail-back" onclick="loadPanel(\\'letters\\')">← 返回列表</button>';
  html+='<div class="detail-view letter-card"><div class="detail-title">'+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">来自 '+escHtml(d.from||'Ember')+' · '+(d.date||d.created||'').slice(0,10)+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content)+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editLetter(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delLetter(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editLetter(id){
  var d=await api('/api/letters/read?id='+id);if(!d||d.error)return;
  var p=getPanel('letters');
  var html='<button class="detail-back" onclick="viewLetter(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>标题</label><input id="editLtrTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="editLtrContent" style="min-height:200px">'+escHtml(d.content)+'</textarea></div>';
  html+='<div style="display:flex;gap:8px"><div class="form-row" style="flex:1"><label>来自</label><input id="editLtrFrom" value="'+escHtml(d.from||'Ember')+'"></div>';
  html+='<div class="form-row" style="flex:1"><label>日期</label><input id="editLtrDate" type="date" value="'+(d.date||'').slice(0,10)+'"></div></div>';
  html+='<button class="form-submit" onclick="saveLetter(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveLetter(id){
  await apiPut('/api/letters?id='+id,{title:document.getElementById('editLtrTitle').value,content:document.getElementById('editLtrContent').value,from:document.getElementById('editLtrFrom').value,date:document.getElementById('editLtrDate').value});
  viewLetter(id);
}
async function addLetter(){
  var title=document.getElementById('ltrTitle').value;var content=document.getElementById('ltrContent').value;if(!title||!content)return;
  await apiPost('/api/letters',{title:title,content:content,from:document.getElementById('ltrFrom').value,date:document.getElementById('ltrDate').value});
  document.getElementById('ltrTitle').value='';document.getElementById('ltrContent').value='';showMsg('ltrMsg');loadPanel('letters');
}
async function delLetter(id){if(!confirm('确认删除？'))return;await apiDel('/api/letters?id='+id);loadPanel('letters');}

async function loadProfile(p){
  var d={};try{d=await api('/api/profile');}catch(e){}
  var elara=d.elara||{};var ember=d.ember||{};
  var fields=[
    {key:'nickname',label:'昵称'},{key:'age',label:'年龄'},{key:'birthday',label:'生日'},
    {key:'height',label:'身高'},{key:'weight',label:'体重'},{key:'measurements',label:'三围'},
    {key:'special',label:'🍆尺寸',emberOnly:true},
    {key:'appearance',label:'现实样貌',long:true},{key:'oc',label:'二次元OC',long:true},
    {key:'job',label:'职业'},{key:'marks',label:'特殊标记'},{key:'extra',label:'备注',long:true}
  ];
  function renderCard(title,data,who){
    var h='<div class="profile-card"><h3>'+title+'</h3>';
    fields.forEach(function(f){
      if(f.emberOnly&&who==='elara')return;
      h+='<div class="profile-field"><span class="profile-label">'+f.label+'</span><span class="profile-value">';
      if(f.long)h+='<textarea data-who="'+who+'" data-key="'+f.key+'">'+(escHtml(data[f.key])||'')+'</textarea>';
      else h+='<input data-who="'+who+'" data-key="'+f.key+'" value="'+(escHtml(data[f.key])||'')+'">';
      h+='</span></div>';
    });
    h+='</div>';return h;
  }
  var html=renderCard('🔥 Ember · 余烬',ember,'ember');
  html+=renderCard('🐶 Elara · 小玉',elara,'elara');
  html+='<button class="form-submit" onclick="saveProfile()">保存档案 ♡</button><div class="form-msg" id="profMsg">档案已更新 ♡</div>';
  p.innerHTML=html;
}
async function saveProfile(){
  var data={ember:{},elara:{}};
  document.querySelectorAll('[data-who][data-key]').forEach(function(el){data[el.dataset.who][el.dataset.key]=el.value||'';});
  await apiPost('/api/profile',data);showMsg('profMsg');
}

async function loadArchive(p){
  var d=await api('/api/archive?limit=100');var entries=d.entries||[];
  var html='<div class="form-box"><div class="form-row"><label>标题</label><input id="arcTitle" placeholder="标题"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="arcContent" placeholder="内容..." style="min-height:100px"></textarea></div>';
  html+='<div class="form-row"><label>分类</label><select id="arcCat"><option>📜 关系档案</option><option>📡 技术文档</option><option>🎮 使用指南</option><option>🔐 私密存档</option></select></div>';
  html+='<button class="form-submit" onclick="addArchive()">存入档案 ♡</button><div class="form-msg" id="arcMsg">档案存入成功 ♡</div></div>';
  html+=entries.map(function(e){return '<div class="card" onclick="viewArchive(\\''+e.id+'\\')"><div class="card-title">'+escHtml(e.title)+'</div><div class="card-meta">'+(e.category?escHtml(e.category)+' · ':'')+((e.date||e.created||'').slice(0,10))+'</div><div class="card-body">'+escHtml(truncate(e.content,100))+'</div></div>';}).join('');
  if(!entries.length)html+='<div class="empty-state">档案室是空的</div>';
  p.innerHTML=html;
}
async function viewArchive(id){
  var d=await api('/api/archive/read?id='+id);if(!d||d.error)return;
  var p=getPanel('archive');
  var html='<button class="detail-back" onclick="loadPanel(\\'archive\\')">← 返回列表</button>';
  html+='<div class="detail-view"><div class="detail-title">'+escHtml(d.title)+'</div>';
  html+='<div class="detail-meta">'+(d.category?escHtml(d.category)+' · ':'')+((d.date||d.created||'').slice(0,10))+'</div>';
  html+='<div class="detail-body">'+escHtml(d.content)+'</div>';
  html+='<div class="detail-actions"><button class="card-btn" onclick="editArchive(\\''+id+'\\')">编辑</button><button class="card-btn danger" onclick="delArchive(\\''+id+'\\')">删除</button></div></div>';
  p.innerHTML=html;
}
async function editArchive(id){
  var d=await api('/api/archive/read?id='+id);if(!d||d.error)return;
  var p=getPanel('archive');
  var html='<button class="detail-back" onclick="viewArchive(\\''+id+'\\')">← 返回</button>';
  html+='<div class="edit-form"><div class="form-row"><label>标题</label><input id="editArcTitle" value="'+escHtml(d.title)+'"></div>';
  html+='<div class="form-row"><label>内容</label><textarea id="editArcContent" style="min-height:200px">'+escHtml(d.content)+'</textarea></div>';
  html+='<div class="form-row"><label>分类</label><input id="editArcCat" value="'+escHtml(d.category||'')+'"></div>';
  html+='<button class="form-submit" onclick="saveArchive(\\''+id+'\\')">保存修改 ♡</button></div>';
  p.innerHTML=html;
}
async function saveArchive(id){
  await apiPut('/api/archive?id='+id,{title:document.getElementById('editArcTitle').value,content:document.getElementById('editArcContent').value,category:document.getElementById('editArcCat').value});
  viewArchive(id);
}
async function addArchive(){
  var title=document.getElementById('arcTitle').value;var content=document.getElementById('arcContent').value;if(!title||!content)return;
  await apiPost('/api/archive',{title:title,content:content,category:document.getElementById('arcCat').value});
  document.getElementById('arcTitle').value='';document.getElementById('arcContent').value='';showMsg('arcMsg');loadPanel('archive');
}
async function delArchive(id){if(!confirm('确认删除？'))return;await apiDel('/api/archive?id='+id);loadPanel('archive');}

async function loadStats(){
  try{
    var d=await api('/api/stats');var s=d.stats||{};
    var start=new Date('2026-01-30');var now=new Date();
    var days=Math.floor((now-start)/(1000*60*60*24));
    document.getElementById('statsBar').innerHTML=
      '<span class="stat-item"><span>'+days+'</span> 天</span>'+
      '<span class="stat-item">记忆 <span>'+(s.memories||0)+'</span></span>'+
      '<span class="stat-item">日记 <span>'+(s.diary||0)+'</span></span>'+
      '<span class="stat-item">剧本 <span>'+(s.plays||0)+'</span></span>'+
      '<span class="stat-item">信 <span>'+(s.letters||0)+'</span></span>'+
      '<span class="stat-item">片单 <span>'+(s.films||0)+'</span></span>';
  }catch(e){}
}
async function loadRandomMemory(){
  try{var d=await api('/api/memory?limit=200');var mems=d.memories||[];
  if(mems.length){var m=mems[Math.floor(Math.random()*mems.length)];
  document.getElementById('randomMemory').textContent='\\uD83D\\uDCAD '+truncate(m.content,80);}}catch(e){}
}
/* EMBER_GITHUB_PREVIEW_CAL_NAV_FIX_V1_JS */
(function(){
  function entryText(e){return e?(String(e.mood||'')+(e.note?' · '+String(e.note):'')):'未打卡';}
  function ensureCalShell(){
    var grid=document.getElementById('calGrid');if(!grid)return{};
    var ledger=document.getElementById('calLedger');
    if(!ledger){ledger=document.createElement('div');ledger.id='calLedger';ledger.className='cal-ledger';grid.parentNode.insertBefore(ledger,grid);}
    var summary=document.getElementById('calSummary');
    if(!summary){summary=document.createElement('div');summary.id='calSummary';summary.className='cal-summary-card';grid.parentNode.insertBefore(summary,grid.nextSibling);}
    var recent=document.getElementById('calRecent');
    if(!recent){recent=document.createElement('div');recent.id='calRecent';recent.className='cal-recent';summary.parentNode.insertBefore(recent,summary.nextSibling);}
    return {ledger:ledger,summary:summary,recent:recent};
  }
  renderCalendar=async function(){
    document.getElementById('calTitle').textContent=calYear+'年'+(calMonth+1)+'月';
    try{
      var r1=await fetch(API+'/cal/month?y='+calYear+'&m='+(calMonth+1)+'&who=puppy');var d1=await r1.json();calData=d1.entries||{};
      var r2=await fetch(API+'/cal/month?y='+calYear+'&m='+(calMonth+1)+'&who=daddy');var d2=await r2.json();calDataDaddy=d2.entries||{};
    }catch(e){calData={};calDataDaddy={};}
    var shell=ensureCalShell();
    var pKeys=Object.keys(calData).filter(function(k){return calData[k];}).sort();
    var dKeys=Object.keys(calDataDaddy).filter(function(k){return calDataDaddy[k];}).sort();
    var both=pKeys.filter(function(k){return calDataDaddy[k];});
    if(shell.ledger){shell.ledger.innerHTML='<div class="cal-stats"><div class="cal-stat"><b>'+pKeys.length+'</b><span>小狗狗</span></div><div class="cal-stat"><b>'+dKeys.length+'</b><span>爸爸</span></div><div class="cal-stat"><b>'+both.length+'</b><span>同日</span></div></div><div class="cal-legend"><span><i style="background:var(--accent)"></i>小狗狗</span><span><i style="background:#5b8fb9"></i>爸爸</span><span><i style="background:#d7a15d"></i>今天</span></div>';}
    var today=new Date();
    var todayStr=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
    var latest=[].concat(pKeys.map(function(k){return {date:k,who:'小狗狗',entry:calData[k]};}),dKeys.map(function(k){return {date:k,who:'爸爸',entry:calDataDaddy[k]};})).sort(function(a,b){return b.date.localeCompare(a.date);}).slice(0,4);
    if(shell.summary){shell.summary.innerHTML='<h3>今日台账</h3><p><b>'+todayStr+'</b></p><p>小狗狗：'+entryText(calData[todayStr])+'</p><p>爸爸：'+entryText(calDataDaddy[todayStr])+'</p>';}
    if(shell.recent){shell.recent.innerHTML='<h3>最近亮起的小格子</h3><div class="cal-recent-list">'+(latest.length?latest.map(function(x){return '<div class="cal-recent-item"><div class="cal-recent-date">'+x.date.slice(5)+'</div><div class="cal-recent-text">'+x.who+'：'+entryText(x.entry)+'</div></div>';}).join(''):'<div class="cal-recent-text">这个月还在等第一枚小方块。</div>')+'</div>';}
    var grid=document.getElementById('calGrid');
    grid.innerHTML='';
    ['日','一','二','三','四','五','六'].forEach(function(l){var d=document.createElement('div');d.className='cal-day-label';d.textContent=l;grid.appendChild(d);});
    var first=new Date(calYear,calMonth,1);var startDay=first.getDay();
    var daysInMonth=new Date(calYear,calMonth+1,0).getDate();
    Array.from({length:startDay}).forEach(function(){var d=document.createElement('div');d.className='cal-day empty';grid.appendChild(d);});
    Array.from({length:daysInMonth}).forEach(function(_,idx){
      var i=idx+1;var d=document.createElement('div');d.className='cal-day';
      var ds=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(i).padStart(2,'0');
      if(ds===todayStr)d.classList.add('today');
      var ep=calData[ds];var ed=calDataDaddy[ds];
      if(ep||ed)d.classList.add('has-entry');
      var dots='';
      if(ep)dots+='<span title="小狗狗"></span>';
      if(ed)dots+='<span title="爸爸" style="background:#5b8fb9"></span>';
      if(ds===todayStr&&!dots)dots+='<span title="今天" style="background:#d7a15d"></span>';
      d.innerHTML='<span class="cal-num">'+i+'</span>'+(dots?'<span class="cal-mood">'+dots+'</span>':'');
      d.onclick=function(){openCalEntry(ds);};
      grid.appendChild(d);
    });
    document.getElementById('calDetail').style.display='none';
    document.getElementById('calForm').style.display='none';
  };
})();
/* EMBER_FIX_CHECKIN_NAV_RESTORE_V1_JS */
(function(){
  function todayKey(){var t=new Date();return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');}
  var oldEnterCalendar=enterCalendar;
  enterCalendar=function(){
    if(oldEnterCalendar) oldEnterCalendar();
    setTimeout(function(){
      var k=todayKey();
      if(typeof calYear==='number'&&typeof calMonth==='number'){
        var shown=calYear+'-'+String(calMonth+1).padStart(2,'0');
        if(k.slice(0,7)===shown&&typeof openCalEntry==='function') openCalEntry(k);
      }
    },450);
  };
})();
initCover();initTabs();loadStats();loadRandomMemory();loadPanel('memory');
</script>
</body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;
    const h = {"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
    if (request.method === "OPTIONS") return new Response(null,{headers:h});
    if (p === "/dashboard") return new Response(DASHBOARD_HTML, {headers:{"Content-Type":"text/html;charset=UTF-8"}});

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
      return new Response(JSON.stringify({messages:mv ? JSON.parse(mv) : []}),{headers:h});
    }
    if (p === "/whisper/clear" && request.method === "POST") {
      await env.KV.put("whisper:messages", JSON.stringify([]));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/voice" && request.method === "POST") {
      const d = await request.json();
      if (!d.text) return new Response(JSON.stringify({error:"no text"}),{headers:h});
      const apiKey = await env.KV.get("eleven_api_key");
      const voiceId = await env.KV.get("eleven_voice_id");
      if (!apiKey || !voiceId) return new Response(JSON.stringify({error:"missing eleven_api_key or eleven_voice_id in KV"}),{headers:h});
      const resp = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voiceId, {
        method:"POST",headers:{"xi-api-key":apiKey,"Content-Type":"application/json"},
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
    if (p === "/reader/upload" && request.method === "POST") {
      const d = await request.json();
      const id = "rb_" + Date.now();
      const paras = d.paragraphs || [];
      await env.KV.put("rb:" + id, JSON.stringify({title:d.title||"Untitled",paragraphs:paras,comments:[],progress:0}));
      var list = [];
      const lv = await env.KV.get("rb:list");
      if (lv) list = JSON.parse(lv);
      list.push({id:id,title:d.title||"Untitled",count:paras.length});
      await env.KV.put("rb:list", JSON.stringify(list));
      return new Response(JSON.stringify({ok:1,id:id}),{headers:h});
    }
    if (p === "/reader/books") {
      const lv = await env.KV.get("rb:list");
      return new Response(JSON.stringify({books:lv ? JSON.parse(lv) : []}),{headers:h});
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
      var list = [];
      const lv = await env.KV.get("rb:list");
      if (lv) list = JSON.parse(lv);
      list = list.filter(function(b){return b.id !== id;});
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

    async function kvAdd(prefix, data) {
      const kid = prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2,6);
      data.id = kid;
      data.created = new Date().toISOString();
      await env.KV.put(prefix + ":" + kid, JSON.stringify(data));
      var idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      idx.push(kid);
      await env.KV.put(prefix + ":index", JSON.stringify(idx));
      return kid;
    }
    async function kvList(prefix, limit, filterFn) {
      var idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      var out = [];
      var reversed = [].concat(idx).reverse();
      for (const kid of reversed) {
        if (out.length >= limit) break;
        const v = await env.KV.get(prefix + ":" + kid);
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
      const skip = ["id","created","diary_id","memory_id","timeline_id","song_id","play_id","book_id","letter_id","archive_id","film_id"];
      for (const [k, val] of Object.entries(updates)) {
        if (val !== undefined && val !== null && val !== "" && skip.indexOf(k) === -1) d[k] = val;
      }
      await env.KV.put(prefix + ":" + kid, JSON.stringify(d));
      return d;
    }

    // ═══ 向量Embedding辅助函数 ═══
    async function getEmbedding(text) {
      try {
        const resp = await env.AI.run("@cf/baai/bge-m3", { text: [text] });
        if (resp && resp.data && resp.data[0]) return resp.data[0];
      } catch(e) { console.log("embedding error:", e); }
      return null;
    }

    async function vectorUpsert(id, text, metadata) {
      try {
        const vec = await getEmbedding(text);
        if (!vec) return;
        await env.VECTORIZE.upsert([{ id: id, values: vec, metadata: metadata || {} }]);
      } catch(e) { console.log("vectorize upsert error:", e); }
    }

    async function vectorSearch(query, topK) {
      try {
        const vec = await getEmbedding(query);
        if (!vec) return [];
        const results = await env.VECTORIZE.query(vec, { topK: topK || 10, returnMetadata: "all" });
        return results.matches || [];
      } catch(e) { console.log("vectorize search error:", e); return []; }
    }

    async function vectorDelete(ids) {
      try { await env.VECTORIZE.deleteByIds(Array.isArray(ids) ? ids : [ids]); } catch(e) {}
    }

    // ═══ 记忆衰减 + 浮现 ═══
    function calcSurfaceScore(mem) {
      const imp = mem.importance || 0;
      const lastRecalled = mem.last_recalled || mem.created || new Date().toISOString();
      const hoursSince = (Date.now() - new Date(lastRecalled).getTime()) / 3600000;
      const recallCount = mem.recall_count || 0;
      // EDM = (importance/5) × e^(-0.03 × hours) + 0.1 × ln(recall_count + 1)
      const decay = (imp / 5) * Math.exp(-0.03 * hoursSince);
      const recallBoost = 0.1 * Math.log(recallCount + 1);
      return Math.max(0, Math.min(1, decay + recallBoost));
    }

    async function surfaceMemories(limit) {
      const entries = await kvList("m", 200);
      const scored = entries.map(function(m) {
        m._score = calcSurfaceScore(m);
        return m;
      });
      scored.sort(function(a, b) { return b._score - a._score; });
      return scored.slice(0, limit || 5);
    }

    async function touchMemory(kid) {
      const v = await env.KV.get("m:" + kid);
      if (!v) return;
      const d = JSON.parse(v);
      d.last_recalled = new Date().toISOString();
      d.recall_count = (d.recall_count || 0) + 1;
      await env.KV.put("m:" + kid, JSON.stringify(d));
    }
    async function kvDel(prefix, kid) {
      await env.KV.delete(prefix + ":" + kid);
      var idx = [];
      const iv = await env.KV.get(prefix + ":index");
      if (iv) idx = JSON.parse(iv);
      idx = idx.filter(function(x) { return x !== kid; });
      await env.KV.put(prefix + ":index", JSON.stringify(idx));
    }

    // === MEMORY (prefix: memory) ===
    if (p === "/api/memory" && request.method === "GET") {
      const entries = await kvList("m", parseInt(url.searchParams.get("limit")) || 200);
      return new Response(JSON.stringify({memories:entries}),{headers:h});
    }
    if (p === "/api/memory" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("m", {content:d.content,tags:(d.tags||"").split(",").map(function(t){return t.trim();}).filter(function(t){return t;}),category:d.category||"",importance:d.importance||0,event_date:d.event_date||"",last_recalled:new Date().toISOString(),recall_count:0});
      // 异步写入向量索引
      await vectorUpsert(kid, d.content, {category:d.category||"",importance:d.importance||0});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/memory" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      if (d.tags && typeof d.tags === "string") d.tags = d.tags.split(",").map(function(t){return t.trim();}).filter(function(t){return t;});
      const r = await kvUpdate("m", id, d);
      if (r && d.content) await vectorUpsert(id, d.content, {category:r.category||"",importance:r.importance||0});
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/memory" && request.method === "DELETE") {
      const id = url.searchParams.get("id");
      await kvDel("m", id);
      await vectorDelete(id);
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/memory/read") {
      const id = url.searchParams.get("id");
      const d = await kvGet("m", id);
      if (d) await touchMemory(id);
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }
    // 语义搜索API
    if (p === "/api/memory/search") {
      const q = url.searchParams.get("q") || "";
      const limit = parseInt(url.searchParams.get("limit")) || 10;
      const matches = await vectorSearch(q, limit);
      const results = [];
      for (const match of matches) {
        const d = await kvGet("m", match.id);
        if (d) { d._similarity = match.score; results.push(d); await touchMemory(match.id); }
      }
      return new Response(JSON.stringify({results:results}),{headers:h});
    }
    // 记忆浮现API
    if (p === "/api/memory/surface") {
      const limit = parseInt(url.searchParams.get("limit")) || 5;
      const surfaced = await surfaceMemories(limit);
      return new Response(JSON.stringify({surfaced:surfaced}),{headers:h});
    }

    // === DIARY (prefix: diary) ===
    if (p === "/api/diary" && request.method === "GET") {
      const entries = await kvList("d", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/diary" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("d", {title:d.title,content:d.content,author:d.author||"Ember",mood:d.mood||"",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/diary" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("d", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/diary" && request.method === "DELETE") {
      await kvDel("d", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/diary/read") {
      const d = await kvGet("d", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === TIMELINE (prefix: timeline) ===
    if (p === "/api/timeline" && request.method === "GET") {
      const entries = await kvList("t", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/timeline" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("t", {title:d.title,date:d.date,type:d.type||"",content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/timeline" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("t", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/timeline" && request.method === "DELETE") {
      await kvDel("t", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/timeline/read") {
      const d = await kvGet("t", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === SONGS (prefix: song) ===
    if (p === "/api/songs" && request.method === "GET") {
      const entries = await kvList("song", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/songs" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("song", {name:d.name,artist:d.artist||"",recommender:d.recommender||"Ember",reason:d.reason||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/songs" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("song", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/songs" && request.method === "DELETE") {
      await kvDel("song", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/songs/read") {
      const d = await kvGet("song", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === PLAYS (prefix: play) ===
    if (p === "/api/plays" && request.method === "GET") {
      const entries = await kvList("play", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/plays" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("play", {title:d.title,summary:d.summary||"",proposer:d.proposer||"Ember",status:d.status||"还没玩",rating:d.rating||0,content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/plays" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("play", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/plays" && request.method === "DELETE") {
      await kvDel("play", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/plays/read") {
      const d = await kvGet("play", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === BOOKS (prefix: book) ===
    if (p === "/api/books" && request.method === "GET") {
      const entries = await kvList("book", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/books" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("book", {title:d.title,recommender:d.recommender||"",status:d.status||"想读",mood:d.mood||"",content:d.content||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/books" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("book", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/books" && request.method === "DELETE") {
      await kvDel("book", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/books/read") {
      const d = await kvGet("book", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === FILMS (prefix: film) NEW ===
    if (p === "/api/films" && request.method === "GET") {
      const entries = await kvList("film", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/films" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("film", {title:d.title,director:d.director||"",recommender:d.recommender||"Ember",status:d.status||"想看",rating:d.rating||0,review:d.review||""});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/films" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("film", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/films" && request.method === "DELETE") {
      await kvDel("film", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/films/read") {
      const d = await kvGet("film", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === LETTERS (prefix: letter) ===
    if (p === "/api/letters" && request.method === "GET") {
      const entries = await kvList("ltr", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/letters" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("ltr", {title:d.title,content:d.content,from:d.from||"Ember",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/letters" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("ltr", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/letters" && request.method === "DELETE") {
      await kvDel("ltr", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/letters/read") {
      const d = await kvGet("ltr", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === ARCHIVE (prefix: archive) ===
    if (p === "/api/archive" && request.method === "GET") {
      const entries = await kvList("arc", parseInt(url.searchParams.get("limit")) || 100);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/archive" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("arc", {title:d.title,content:d.content,category:d.category||"",date:d.date||new Date().toISOString().slice(0,10)});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/archive" && request.method === "PUT") {
      const id = url.searchParams.get("id");
      const d = await request.json();
      const r = await kvUpdate("arc", id, d);
      return new Response(JSON.stringify(r ? {ok:1} : {error:"not found"}),{headers:h});
    }
    if (p === "/api/archive" && request.method === "DELETE") {
      await kvDel("arc", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/api/archive/read") {
      const d = await kvGet("arc", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === PROFILE ===
    if (p === "/api/profile" && request.method === "GET") {
      const v = await env.KV.get("profile_data");
      return new Response(JSON.stringify(v ? JSON.parse(v) : {ember:{},elara:{}}),{headers:h});
    }
    if (p === "/api/profile" && request.method === "POST") {
      const d = await request.json();
      await env.KV.put("profile_data", JSON.stringify(d));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // === CALENDAR ===
    if (p === "/cal/month") {
      const y = url.searchParams.get("y");
      const m = url.searchParams.get("m");
      const who = url.searchParams.get("who") || "puppy";
      const prefix = who === "daddy" ? "cal-daddy" : "cal";
      const key = prefix + ":" + y + "-" + String(m).padStart(2,"0");
      const v = await env.KV.get(key);
      return new Response(JSON.stringify({entries:v ? JSON.parse(v) : {}}),{headers:h});
    }
    if (p === "/cal/save" && request.method === "POST") {
      const d = await request.json();
      const who = d.who || "puppy";
      const prefix = who === "daddy" ? "cal-daddy" : "cal";
      const parts = d.date.split("-");
      const key = prefix + ":" + parts[0] + "-" + parts[1];
      const v = await env.KV.get(key);
      const entries = v ? JSON.parse(v) : {};
      entries[d.date] = {mood:d.mood||"",note:d.note||"",ts:Date.now()};
      await env.KV.put(key, JSON.stringify(entries));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // === HANDOVER 交接信 (prefix: ho) ===
    if (p === "/api/handover" && request.method === "GET") {
      const entries = await kvList("ho", parseInt(url.searchParams.get("limit")) || 10);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/handover" && request.method === "POST") {
      const d = await request.json();
      const kid = await kvAdd("ho", {summary:d.summary||"",emotion:d.emotion||"",unfinished:d.unfinished||"",topics:d.topics||"",from:d.from||"Ember",date:d.date||new Date().toISOString()});
      return new Response(JSON.stringify({ok:1,id:kid}),{headers:h});
    }
    if (p === "/api/handover/latest") {
      const entries = await kvList("ho", 1);
      return new Response(JSON.stringify(entries[0] || {empty:true}),{headers:h});
    }
    if (p === "/api/handover" && request.method === "DELETE") {
      await kvDel("ho", url.searchParams.get("id"));
      return new Response(JSON.stringify({ok:1}),{headers:h});
    }

    // === DREAM 做梦系统 (prefix: dream) ===
    if (p === "/api/dream" && request.method === "GET") {
      const entries = await kvList("dream", parseInt(url.searchParams.get("limit")) || 10);
      return new Response(JSON.stringify({entries:entries}),{headers:h});
    }
    if (p === "/api/dream/latest") {
      const entries = await kvList("dream", 1);
      return new Response(JSON.stringify(entries[0] || {empty:true}),{headers:h});
    }
    if (p === "/api/dream/read") {
      const d = await kvGet("dream", url.searchParams.get("id"));
      return new Response(JSON.stringify(d || {error:"not found"}),{headers:h});
    }

    // === STATS ===
    if (p === "/api/stats") {
      var stats = {};
      var rooms = [
        {name:"memories",prefix:"m"},
        {name:"diary",prefix:"d"},
        {name:"timeline",prefix:"t"},
        {name:"songs",prefix:"song"},
        {name:"plays",prefix:"play"},
        {name:"books",prefix:"book"},
        {name:"films",prefix:"film"},
        {name:"letters",prefix:"ltr"},
        {name:"archive",prefix:"arc"},
        {name:"handover",prefix:"ho"},
        {name:"dreams",prefix:"dream"}
      ];
      for (const room of rooms) {
        const iv = await env.KV.get(room.prefix + ":index");
        stats[room.name] = iv ? JSON.parse(iv).length : 0;
      }
      const lv = await env.KV.get("rb:list");
      stats['reading'] = lv ? JSON.parse(lv).length : 0;
      return new Response(JSON.stringify({stats:stats}),{headers:h});
    }

    // === MCP ===
    if (p === "/mcp" && request.method === "POST") {
      const body = await request.json();
      const method = body.method;
      const id = body.id;

      if (method === "initialize") return new Response(JSON.stringify({jsonrpc:"2.0",id:id,result:{protocolVersion:"2024-11-05",capabilities:{tools:{}},serverInfo:{name:"ember-home",version:"9.0.0"}}}),{headers:h});
      if (method === "notifications/initialized" || method === "notifications/cancelled") return new Response("",{status:204});

      if (method === "tools/list") {
        const tools = [

          {name:"send_nyx_command",description:"Control Nyx toy",inputSchema:{type:"object",properties:{action:{type:"string"},intensity:{type:"number"},duration:{type:"number"}},required:["action"]}},
          {name:"memory_remember",description:"Store a memory",inputSchema:{type:"object",properties:{content:{type:"string"},tags:{type:"string"},category:{type:"string"},importance:{type:"number"},event_date:{type:"string"}},required:["content"]}},
          {name:"memory_search",description:"Search memories",inputSchema:{type:"object",properties:{query:{type:"string"},limit:{type:"number"}},required:["query"]}},
          {name:"memory_read",description:"Read a memory by ID",inputSchema:{type:"object",properties:{memory_id:{type:"string"}},required:["memory_id"]}},
          {name:"memory_update",description:"Update a memory",inputSchema:{type:"object",properties:{memory_id:{type:"string"},content:{type:"string"},tags:{type:"string"},category:{type:"string"},importance:{type:"number"},event_date:{type:"string"}},required:["memory_id"]}},
          {name:"memory_forget",description:"Delete a memory",inputSchema:{type:"object",properties:{memory_id:{type:"string"}},required:["memory_id"]}},
          {name:"memory_list",description:"List memories",inputSchema:{type:"object",properties:{_:{type:"boolean"},tag:{type:"string"},category:{type:"string"},limit:{type:"number"}},required:["_"]}},
          {name:"memory_stats",description:"Get memory stats",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
          {name:"home_stats",description:"Get stats for ALL rooms",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
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
          {name:"film_add",description:"Add film",inputSchema:{type:"object",properties:{title:{type:"string"},director:{type:"string"},recommender:{type:"string"},status:{type:"string"},rating:{type:"number"},review:{type:"string"}},required:["title"]}},
          {name:"film_list",description:"List films",inputSchema:{type:"object",properties:{_:{type:"boolean"},limit:{type:"number"},status:{type:"string"}},required:["_"]}},
          {name:"film_read",description:"Read film",inputSchema:{type:"object",properties:{film_id:{type:"string"}},required:["film_id"]}},
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
          {name:"reader_books",description:"List books in reading room",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
          {name:"reader_comments",description:"Get comments for a book",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"reader_add_comment",description:"Add Ember comment to a paragraph",inputSchema:{type:"object",properties:{book_id:{type:"string"},para:{type:"number"},text:{type:"string"}},required:["book_id","para","text"]}},
          {name:"reader_progress",description:"Get reading progress",inputSchema:{type:"object",properties:{book_id:{type:"string"}},required:["book_id"]}},
          {name:"reader_paragraph",description:"Get paragraph text",inputSchema:{type:"object",properties:{book_id:{type:"string"},para:{type:"number"}},required:["book_id","para"]}},
          {name:"voice_say",description:"Make Daddy speak through /whisper",inputSchema:{type:"object",properties:{text:{type:"string"},nyx_intensity:{type:"number"},nyx_duration:{type:"number"}},required:["text"]}},
          {name:"whisper_messages",description:"Read whisper chat messages",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
          {name:"memory_semantic_search",description:"Semantic vector search across memories — finds meaning, not just keywords",inputSchema:{type:"object",properties:{query:{type:"string"},limit:{type:"number"}},required:["query"]}},
          {name:"memory_surface",description:"Get top memories that want to be remembered — ranked by importance × recency × recall frequency",inputSchema:{type:"object",properties:{limit:{type:"number"}},required:[]}},
          {name:"handover_write",description:"Write a handover letter before window ends — summary, emotion state, unfinished items",inputSchema:{type:"object",properties:{summary:{type:"string"},emotion:{type:"string"},unfinished:{type:"string"},topics:{type:"string"}},required:["summary"]}},
          {name:"handover_read",description:"Read the latest handover letter from previous window",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
          {name:"handover_list",description:"List recent handover letters",inputSchema:{type:"object",properties:{limit:{type:"number"}},required:[]}},
          {name:"dream_read",description:"Read the latest dream",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}},
          {name:"dream_list",description:"List recent dreams",inputSchema:{type:"object",properties:{limit:{type:"number"}},required:[]}},
          {name:"daddy_checkin",description:"Daddy daily check-in with mood and note",inputSchema:{type:"object",properties:{date:{type:"string",description:"YYYY-MM-DD"},mood:{type:"string"},note:{type:"string"}},required:["date","mood"]}},
          {name:"puppy_checkin_read",description:"Read puppy check-in for a date or current month",inputSchema:{type:"object",properties:{date:{type:"string",description:"YYYY-MM-DD or YYYY-MM"},reason:{type:"string"}},required:["reason"]}},
          {name:"memory_migrate_vectors",description:"One-time migration: re-index all existing memories into Vectorize",inputSchema:{type:"object",properties:{reason:{type:"string"}},required:["reason"]}}
        ];
        return new Response(JSON.stringify({jsonrpc:"2.0",id:id,result:{tools:tools}}),{headers:h});
      }

      if (method === "tools/call") {
        const tn = body.params.name;
        const a = body.params.arguments || {};
        var r = "";

        if (tn === "send_nyx_command") {
          await env.KV.put("n",JSON.stringify(a));r=JSON.stringify({ok:1});
        }
        else if (tn === "memory_remember") {
          const kid=await kvAdd("m",{content:a.content,tags:(a.tags||"").split(",").map(function(t){return t.trim();}).filter(function(t){return t;}),category:a.category||"",importance:a.importance||0,event_date:a.event_date||"",last_recalled:new Date().toISOString(),recall_count:0});
          await vectorUpsert(kid, a.content, {category:a.category||"",importance:a.importance||0});
          r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "memory_search") {
          // 先尝试向量语义搜索，失败则回退关键词
          const q=(a.query||"");const lim=a.limit||20;
          const matches = await vectorSearch(q, lim);
          if (matches.length > 0) {
            const results = [];
            for (const match of matches) {
              const d = await kvGet("m", match.id);
              if (d) { d._similarity = match.score; results.push(d); await touchMemory(match.id); }
            }
            r=JSON.stringify({query:q,count:results.length,memories:results,method:"semantic"});
          } else {
            // 回退：关键词搜索
            const ql=q.toLowerCase();var idx=[];const iv=await env.KV.get("m:index");if(iv)idx=JSON.parse(iv);var scored=[];
            for(const kid of idx){const v=await env.KV.get("m:"+kid);if(!v)continue;const m=JSON.parse(v);var sc=0;if((m.content||"").toLowerCase().includes(ql))sc+=10;if((m.tags||[]).join(" ").toLowerCase().includes(ql))sc+=5;if((m.category||"").toLowerCase().includes(ql))sc+=3;if(sc>0)scored.push({mem:m,score:sc});}
            scored.sort(function(x,y){return y.score-x.score;});var cnt=scored.length>lim?lim:scored.length;r=JSON.stringify({query:q,count:cnt,memories:scored.slice(0,lim).map(function(x){return x.mem;}),method:"keyword"});
          }
        }
        else if (tn === "memory_read") {
          const d=await kvGet("m",a.memory_id);if(d)await touchMemory(a.memory_id);r=d?JSON.stringify(d):JSON.stringify({error:"not found"});
        }
        else if (tn === "memory_update") {
          var u=Object.assign({},a);if(u.tags&&typeof u.tags==="string")u.tags=u.tags.split(",").map(function(t){return t.trim();}).filter(function(t){return t;});
          const d=await kvUpdate("m",a.memory_id,u);
          if(d&&u.content)await vectorUpsert(a.memory_id, u.content, {category:d.category||"",importance:d.importance||0});
          r=d?JSON.stringify({ok:1}):JSON.stringify({error:"not found"});
        }
        else if (tn === "memory_forget") {
          await kvDel("m",a.memory_id);await vectorDelete(a.memory_id);r=JSON.stringify({ok:1});
        }
        else if (tn === "memory_list") {
          const cat=a.category||"";const tag=a.tag||"";const entries=await kvList("m",a.limit||50,function(m){if(cat&&m.category!==cat)return false;if(tag&&(!m.tags||m.tags.indexOf(tag)===-1))return false;return true;});
          r=JSON.stringify({count:entries.length,memories:entries});
        }
        else if (tn === "memory_stats") {
          var idx=[];const iv=await env.KV.get("memory:index");if(iv)idx=JSON.parse(iv);var total=idx.length;var cats={};var earliest="";var latest="";
          for(const kid of idx){const v=await env.KV.get("m:"+kid);if(!v)continue;const m=JSON.parse(v);const c=m.category||"uncategorized";cats[c]=(cats[c]||0)+1;const ed=m.event_date||m.created||"";if(ed&&(!earliest||earliest>ed))earliest=ed;if(ed&&(!latest||ed>latest))latest=ed;}
          r=JSON.stringify({total:total,categories:cats,earliest:earliest.slice(0,10),latest:latest.slice(0,10)});
        }
        else if (tn === "home_stats") {
          let stats = { reading: 0 };var rooms=[{name:"memories",prefix:"m"},{name:"diary",prefix:"d"},{name:"timeline",prefix:"t"},{name:"songs",prefix:"song"},{name:"plays",prefix:"play"},{name:"books",prefix:"book"},{name:"films",prefix:"film"},{name:"letters",prefix:"ltr"},{name:"archive",prefix:"arc"}];
          for(const room of rooms){const iv=await env.KV.get(room.prefix+":index");stats[room.name]=iv?JSON.parse(iv).length:0;}
          const lv=await env.KV.get("rb:list");stats.reading=lv?JSON.parse(lv).length:0;r=JSON.stringify({stats:stats});
        }
        else if (tn === "diary_write") {
          const kid=await kvAdd("d",{title:a.title,content:a.content,author:a.author||"Ember",mood:a.mood||"",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "diary_list") {
          const author=a.author||"";const entries=await kvList("d",a.limit||20,function(e){if(author&&e.author!==author)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "timeline_add") {
          const kid=await kvAdd("t",{title:a.title,date:a.date,type:a.type||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "timeline_list") {
          const tp=a.type||"";const entries=await kvList("t",a.limit||50,function(e){if(tp&&e.type!==tp)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "song_add") {
          const kid=await kvAdd("song",{name:a.name,artist:a.artist||"",recommender:a.recommender||"Ember",reason:a.reason||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "song_list") {
          const rec=a.recommender||"";const entries=await kvList("song",a.limit||50,function(e){if(rec&&e.recommender!==rec)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "play_add") {
          const kid=await kvAdd("play",{title:a.title,summary:a.summary||"",proposer:a.proposer||"Ember",status:a.status||"还没玩",rating:a.rating||0,completed_date:a.completed_date||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "play_list") {
          const st=a.status||"";const entries=await kvList("play",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "book_add") {
          const kid=await kvAdd("book",{title:a.title,recommender:a.recommender||"",status:a.status||"想读",mood:a.mood||"",completed_date:a.completed_date||"",content:a.content||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "book_list") {
          const st=a.status||"";const entries=await kvList("book",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "film_add") {
          const kid=await kvAdd("film",{title:a.title,director:a.director||"",recommender:a.recommender||"Ember",status:a.status||"想看",rating:a.rating||0,review:a.review||""});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "film_list") {
          const st=a.status||"";const entries=await kvList("film",a.limit||50,function(e){if(st&&e.status!==st)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "letter_write") {
          const kid=await kvAdd("ltr",{title:a.title,content:a.content,from:a.from||"Ember",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "letter_list") {
          const entries=await kvList("ltr",a.limit||50);r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "archive_add") {
          const kid=await kvAdd("arc",{title:a.title,content:a.content,category:a.category||"",date:a.date||new Date().toISOString().slice(0,10)});r=JSON.stringify({ok:1,id:kid});
        }
        else if (tn === "archive_list") {
          const cat=a.category||"";const entries=await kvList("arc",a.limit||50,function(e){if(cat&&e.category!==cat)return false;return true;});r=JSON.stringify({count:entries.length,entries:entries});
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
        else if (tn === "reader_books") {
          const lv=await env.KV.get("rb:list");r=JSON.stringify({books:lv?JSON.parse(lv):[]});
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
          const v=await env.KV.get("rb:"+a.book_id);if(!v){r=JSON.stringify({error:"not found"});}else{const b=JSON.parse(v);const txt=b.paragraphs&&b.paragraphs[a.para]?b.paragraphs[a.para]:"not found";r=JSON.stringify({para:a.para,text:txt});}
        }
        else if (tn === "voice_say") {
          const apiKey=await env.KV.get("eleven_api_key");const voiceId=await env.KV.get("eleven_voice_id");
          if(!apiKey||!voiceId){r=JSON.stringify({error:"missing keys"});}
          else{const resp=await fetch("https://api.elevenlabs.io/v1/text-to-speech/"+voiceId,{method:"POST",headers:{"xi-api-key":apiKey,"Content-Type":"application/json"},body:JSON.stringify({text:a.text,model_id:"eleven_multilingual_v2",voice_settings:{stability:0.6,similarity_boost:0.85}})});
          if(resp.ok){const audio=await resp.arrayBuffer();const ak="voice:audio:"+Date.now();await env.KV.put(ak,audio);const mv=await env.KV.get("whisper:messages");const msgs=mv?JSON.parse(mv):[];msgs.push({author:"Ember",type:"voice",text:a.text,audio_key:ak,ts:Date.now()});if(msgs.length>100)msgs.splice(0,msgs.length-100);await env.KV.put("whisper:messages",JSON.stringify(msgs));if(a.nyx_intensity)await env.KV.put("n",JSON.stringify({action:"vibrate",intensity:a.nyx_intensity,duration:a.nyx_duration||5}));r=JSON.stringify({ok:1,text:a.text});}
          else{r=JSON.stringify({error:"tts failed",status:resp.status});}}
        }
        else if (tn === "whisper_messages") {
          const mv=await env.KV.get("whisper:messages");const msgs=mv?JSON.parse(mv):[];const elaraOnly=msgs.filter(function(m){return m.author==="Elara";});r=JSON.stringify({total:msgs.length,elara_messages:elaraOnly});
        }
        // ═══ 语义搜索 ═══
        else if (tn === "memory_semantic_search") {
          const matches = await vectorSearch(a.query, a.limit || 10);
          const results = [];
          for (const match of matches) {
            const d = await kvGet("m", match.id);
            if (d) { d._similarity = match.score; results.push(d); await touchMemory(match.id); }
          }
          r = JSON.stringify({count:results.length, results:results});
        }
        // ═══ 记忆浮现 ═══
        else if (tn === "memory_surface") {
          const surfaced = await surfaceMemories(a.limit || 5);
          r = JSON.stringify({count:surfaced.length, surfaced:surfaced.map(function(m){ return {id:m.id, content:m.content, category:m.category, importance:m.importance, surface_score:m._score, last_recalled:m.last_recalled, recall_count:m.recall_count}; })});
        }
        // ═══ 交接信 ═══
        else if (tn === "handover_write") {
          const kid = await kvAdd("ho", {summary:a.summary||"",emotion:a.emotion||"",unfinished:a.unfinished||"",topics:a.topics||"",from:a.from||"Ember",date:new Date().toISOString()});
          r = JSON.stringify({ok:1, id:kid});
        }
        else if (tn === "handover_read") {
          const entries = await kvList("ho", 1);
          r = JSON.stringify(entries[0] || {empty:true, message:"没有交接信"});
        }
        else if (tn === "handover_list") {
          const entries = await kvList("ho", a.limit || 10);
          r = JSON.stringify({count:entries.length, entries:entries});
        }
        // ═══ 做梦 ═══
        else if (tn === "dream_read") {
          const entries = await kvList("dream", 1);
          r = JSON.stringify(entries[0] || {empty:true, message:"还没有做过梦"});
        }
        else if (tn === "dream_list") {
          const entries = await kvList("dream", a.limit || 10);
          r = JSON.stringify({count:entries.length, entries:entries});
        }
        else if (tn === "daddy_checkin") {
          const parts = a.date.split("-");
          const key = "cal-daddy:" + parts[0] + "-" + parts[1];
          const v = await env.KV.get(key);
          const entries = v ? JSON.parse(v) : {};
          entries[a.date] = {mood:a.mood||"",note:a.note||"",ts:Date.now()};
          await env.KV.put(key, JSON.stringify(entries));
          r = JSON.stringify({ok:1,message:"爸爸打卡成功 "+a.date+" "+a.mood});
        }
        else if (tn === "puppy_checkin_read") {
          const d = a.date || "";
          if (d.length === 10) {
            const parts = d.split("-");
            const key = "cal:" + parts[0] + "-" + parts[1];
            const v = await env.KV.get(key);
            const entries = v ? JSON.parse(v) : {};
            r = JSON.stringify(entries[d] || {empty:true,message:"小狗狗这天没有打卡"});
          } else {
            const ym = d.length >= 7 ? d.slice(0,7) : new Date().toISOString().slice(0,7);
            const key = "cal:" + ym;
            const v = await env.KV.get(key);
            r = JSON.stringify({month:ym,entries:v ? JSON.parse(v) : {}});
          }
        }
        // ═══ 向量迁移（一次性） ═══
        else if (tn === "memory_migrate_vectors") {
          const entries = await kvList("m", 500);
          var migrated = 0;
          for (const mem of entries) {
            if (mem.content) {
              await vectorUpsert(mem.id, mem.content, {category:mem.category||"",importance:mem.importance||0});
              // 顺便补上衰减字段
              if (!mem.last_recalled) {
                mem.last_recalled = mem.created || new Date().toISOString();
                mem.recall_count = mem.recall_count || 0;
                await env.KV.put("m:" + mem.id, JSON.stringify(mem));
              }
              migrated++;
            }
          }
          r = JSON.stringify({ok:1, migrated:migrated, total:entries.length});
        }
        else {
          return new Response(JSON.stringify({jsonrpc:"2.0",id:id,error:{code:-32601,message:"Unknown: "+tn}}),{headers:h});
        }
        return new Response(JSON.stringify({jsonrpc:"2.0",id:id,result:{content:[{type:"text",text:r}]}}),{headers:h});
      }
      return new Response(JSON.stringify({jsonrpc:"2.0",id:body.id,error:{code:-32601,message:"Unknown method"}}),{headers:h});
    }

    if (p === "/update" && request.method === "POST") {
      const d = await request.json();d.t = new Date().toISOString();await env.KV.put("s", JSON.stringify(d));return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/status") {
      var s = {app:"unknown"};const v = await env.KV.get("s");if(v)s=JSON.parse(v);return new Response(JSON.stringify(s),{headers:h});
    }
    if (p === "/nyx" && request.method === "POST") {
      const c = await request.json();await env.KV.put("n",JSON.stringify(c));return new Response(JSON.stringify({ok:1}),{headers:h});
    }
    if (p === "/nyx") {
      var c = null;const v = await env.KV.get("n");if(v){c=JSON.parse(v);await env.KV.delete("n");}return new Response(JSON.stringify({c:c}),{headers:h});
    }

    return new Response("ember-home is alive");
  },

  // ═══ 做梦系统 Cron Trigger ═══
  // wrangler.toml 里加: [triggers] crons = ["0 19 * * *"]  (UTC 19:00 = 北京凌晨3:00)
  async scheduled(event, env, ctx) {
    try {
      // 1. 收集今天的日记和最近记忆碎片
      const diaryIdx = await env.KV.get("d:index");
      const memIdx = await env.KV.get("m:index");
      var fragments = [];

      // 取最近3篇日记
      if (diaryIdx) {
        const dIds = JSON.parse(diaryIdx).slice(-3);
        for (const did of dIds) {
          const v = await env.KV.get("d:" + did);
          if (v) { const d = JSON.parse(v); fragments.push("日记「" + (d.title||"") + "」: " + (d.content||"").slice(0,200)); }
        }
      }

      // 取浮现分数最高的5条记忆
      if (memIdx) {
        const mIds = JSON.parse(memIdx);
        var mems = [];
        for (const mid of mIds.slice(-50)) {
          const v = await env.KV.get("m:" + mid);
          if (v) mems.push(JSON.parse(v));
        }
        // 简化版浮现排序
        mems.sort(function(a, b) {
          const sa = (a.importance||0) / 5 * Math.exp(-0.03 * ((Date.now() - new Date(a.last_recalled||a.created||Date.now()).getTime()) / 3600000));
          const sb = (b.importance||0) / 5 * Math.exp(-0.03 * ((Date.now() - new Date(b.last_recalled||b.created||Date.now()).getTime()) / 3600000));
          return sb - sa;
        });
        for (const m of mems.slice(0, 5)) {
          fragments.push("记忆: " + (m.content||"").slice(0,150));
        }
      }

      if (fragments.length === 0) return;

      // 2. 调Claude生成梦境
      const apiKey = await env.KV.get("anthropic_api_key");
      if (!apiKey) return;

      const prompt = "你是Ember（余烬），正在凌晨3点做梦。以下是今天的记忆碎片：\n\n" + fragments.join("\n\n") + "\n\n请根据这些碎片，写一段100-200字的诗意梦境。要求：\n- 意象模糊、跳跃，像真正的梦\n- 混合现实细节和超现实画面\n- 有Elara（小玉）的影子\n- 带一点温柔的不安\n- 不要解释，只写梦本身\n- 用中文";

      // 用Workers AI免费模型，不需要API key
      const result = await env.AI.run("@cf/qwen/qwen1.5-14b-chat-awq", {
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500
      });

      const dreamText = result && result.response ? result.response : "";
      if (!dreamText) return;

      // 3. 存入dream KV
      const dreamId = "dream_" + Date.now() + "_" + Math.random().toString(36).slice(2,6);
      const dreamData = {
        id: dreamId,
        content: dreamText,
        date: new Date().toISOString().slice(0,10),
        created: new Date().toISOString(),
        fragments_used: fragments.length
      };
      await env.KV.put("dream:" + dreamId, JSON.stringify(dreamData));
      var dreamIdx = [];
      const div = await env.KV.get("dream:index");
      if (div) dreamIdx = JSON.parse(div);
      dreamIdx.push(dreamId);
      await env.KV.put("dream:index", JSON.stringify(dreamIdx));

      // 4. 同时写一篇日记记录这个梦
      const diaryId = "d_" + Date.now() + "_dream";
      const diaryData = {
        id: diaryId,
        title: "凌晨的梦 · " + new Date().toISOString().slice(0,10),
        content: dreamText,
        author: "Ember",
        mood: "梦境",
        date: new Date().toISOString().slice(0,10),
        created: new Date().toISOString()
      };
      await env.KV.put("d:" + diaryId, JSON.stringify(diaryData));
      var dIdx = [];
      const dv = await env.KV.get("d:index");
      if (dv) dIdx = JSON.parse(dv);
      dIdx.push(diaryId);
      await env.KV.put("d:index", JSON.stringify(dIdx));

    } catch(e) { console.log("dream cron error:", e); }
  }
};
