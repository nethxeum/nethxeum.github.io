/* ═════════════════════════════════════════════════════════════
   NXY — Assistante officielle Nethxeum (widget flottant)
   À inclure sur nethxeum.com et explore.nethxeum.com.
   API : POST https://explore.nethxeum.com/assistant/chat
   ═════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var API_URL = 'https://explore.nethxeum.com/assistant/chat';
  var API_KEY = 'jir63n28vug95behsqofwmpaytk47dczxl10';

  if (document.getElementById('nxy-widget-root')) return; // déjà présent

  var css = `
    #nxy-btn { position:fixed; right:20px; bottom:20px; z-index:99999; width:52px; height:52px;
      border-radius:50%; border:1px solid rgba(124,58,237,.5); cursor:pointer;
      background:linear-gradient(135deg,#7c3aed,#2dd4ff); color:#fff; font-size:22px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 24px rgba(124,58,237,.45); transition:transform .2s, box-shadow .2s; }
    #nxy-btn:hover { transform:scale(1.08); box-shadow:0 6px 30px rgba(124,58,237,.65); }
    #nxy-panel { position:fixed; right:20px; bottom:80px; z-index:99999; width:340px; max-width:calc(100vw - 40px);
      height:440px; max-height:calc(100vh - 120px); display:none; flex-direction:column;
      background:#0c0c1e; border:1px solid rgba(124,58,237,.4); border-radius:16px;
      box-shadow:0 20px 60px rgba(0,0,0,.6); overflow:hidden; font-family:system-ui,sans-serif; }
    #nxy-panel.nxy-open { display:flex; }
    #nxy-head { padding:12px 14px; background:linear-gradient(135deg, rgba(124,58,237,.25), rgba(45,212,255,.12));
      border-bottom:1px solid rgba(124,58,237,.3); color:#EEF2FF; font-weight:600; font-size:13px;
      display:flex; align-items:center; justify-content:space-between; }
    #nxy-head span.nxy-status { font-size:11px; font-weight:400; color:#34d399; }
    #nxy-close { background:none; border:none; color:#94a3b8; cursor:pointer; font-size:16px; }
    #nxy-msgs { flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:8px; }
    .nxy-msg { max-width:85%; padding:9px 12px; border-radius:14px; font-size:13px; line-height:1.5;
      white-space:pre-wrap; overflow-wrap:break-word; }
    .nxy-user { align-self:flex-end; background:linear-gradient(135deg,#7c3aed,#5b21b6); color:#fff;
      border-bottom-right-radius:4px; }
    .nxy-bot { align-self:flex-start; background:rgba(124,58,237,.14); color:#EEF2FF;
      border:1px solid rgba(124,58,237,.25); border-bottom-left-radius:4px; }
    .nxy-typing { align-self:flex-start; color:#94a3b8; font-size:12px; padding:4px 6px; }
    #nxy-form { display:flex; gap:8px; padding:10px; border-top:1px solid rgba(124,58,237,.25); }
    #nxy-input { flex:1; background:#13132a; border:1px solid rgba(124,58,237,.3); border-radius:10px;
      color:#EEF2FF; padding:9px 11px; font-size:13px; outline:none; resize:none; }
    #nxy-input:focus { border-color:#2dd4ff; }
    #nxy-send { background:linear-gradient(135deg,#7c3aed,#2dd4ff); border:none; border-radius:10px;
      color:#fff; padding:0 14px; cursor:pointer; font-size:15px; }
    #nxy-send:disabled { opacity:.4; cursor:not-allowed; }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'nxy-widget-root';
  root.innerHTML =
    '<div id="nxy-panel" role="dialog" aria-label="Assistante Nethxeum">' +
      '<div id="nxy-head"><span>NXY · Assistante Nethxeum</span><span class="nxy-status">● en ligne</span>' +
      '<button id="nxy-close" aria-label="Fermer">✕</button></div>' +
      '<div id="nxy-msgs"></div>' +
      '<form id="nxy-form"><input id="nxy-input" type="text" autocomplete="off" ' +
           'placeholder="Question sur le réseau, un bloc, le projet…" />' +
      '<button id="nxy-send" type="submit">➤</button></form>' +
    '</div>' +
    '<button id="nxy-btn" aria-label="Ouvrir l’assistante">✦</button>';
  document.body.appendChild(root);

  var panel = document.getElementById('nxy-panel');
  var msgs = document.getElementById('nxy-msgs');
  var form = document.getElementById('nxy-form');
  var input = document.getElementById('nxy-input');
  var sendBtn = document.getElementById('nxy-send');

  document.getElementById('nxy-btn').addEventListener('click', function () {
    panel.classList.toggle('nxy-open');
    if (panel.classList.contains('nxy-open')) input.focus();
  });
  document.getElementById('nxy-close').addEventListener('click', function () {
    panel.classList.remove('nxy-open');
  });

  function addMsg(role, text) {
    var div = document.createElement('div');
    div.className = 'nxy-msg ' + (role === 'user' ? 'nxy-user' : 'nxy-bot');
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    addMsg('user', text);
    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;
    var tip = document.createElement('div');
    tip.className = 'nxy-typing';
    tip.textContent = '…';
    msgs.appendChild(tip);
    msgs.scrollTop = msgs.scrollHeight;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
      body: JSON.stringify({ message: text }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        tip.remove();
        addMsg('bot', data.reply || data.detail || 'Pas de réponse.');
      })
      .catch(function () {
        tip.remove();
        addMsg('bot', 'Erreur réseau — réessaie dans un instant.');
      })
      .finally(function () {
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      });
  });

  addMsg('bot', 'Salut ! Je connais la chaîne en direct (blocs, hauteurs, txs) et tout le contenu du site (whitepaper, mining, FAQ…). Pose-moi ta question.');
})();
