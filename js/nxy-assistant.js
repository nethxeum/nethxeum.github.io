/* ═════════════════════════════════════════════════════════════
   Xeumon — Assistante officielle Nethxeum (widget flottant)
   À inclure sur nethxeum.com et explore.nethxeum.com.
   API : POST https://explore.nethxeum.com/api/assistant/chat
   ═════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var API_URL = 'https://explore.nethxeum.com/api/assistant/chat';
  var API_KEY = 'jir63n28vug95behsqofwmpaytk47dczxl10';

  if (document.getElementById('Xeumon-widget-root')) return; // déjà présent

  var css = `
    #Xeumon-btn { position:fixed; right:20px; bottom:20px; z-index:99999; width:52px; height:52px;
      border-radius:50%; border:1px solid rgba(124,58,237,.5); cursor:pointer;
      background:linear-gradient(135deg,#7c3aed,#2dd4ff); color:#fff; font-size:22px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 24px rgba(124,58,237,.45); transition:transform .2s, box-shadow .2s; }
    #Xeumon-btn:hover { transform:scale(1.08); box-shadow:0 6px 30px rgba(124,58,237,.65); }
    #Xeumon-panel { position:fixed; right:20px; bottom:80px; z-index:99999; width:340px; max-width:calc(100vw - 40px);
      height:440px; max-height:calc(100vh - 120px); display:none; flex-direction:column;
      background:#0c0c1e; border:1px solid rgba(124,58,237,.4); border-radius:16px;
      box-shadow:0 20px 60px rgba(0,0,0,.6); overflow:hidden; font-family:system-ui,sans-serif; }
    #Xeumon-panel.Xeumon-open { display:flex; }
    #Xeumon-head { padding:12px 14px; background:linear-gradient(135deg, rgba(124,58,237,.25), rgba(45,212,255,.12));
      border-bottom:1px solid rgba(124,58,237,.3); color:#EEF2FF; font-weight:600; font-size:13px;
      display:flex; align-items:center; justify-content:space-between; }
    #Xeumon-head span.Xeumon-status { font-size:11px; font-weight:400; color:#34d399; }
    #Xeumon-close { background:none; border:none; color:#94a3b8; cursor:pointer; font-size:16px; }
    #Xeumon-msgs { flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:8px; }
    .Xeumon-msg { max-width:85%; padding:9px 12px; border-radius:14px; font-size:13px; line-height:1.5;
      white-space:pre-wrap; overflow-wrap:break-word; }
    .Xeumon-user { align-self:flex-end; background:linear-gradient(135deg,#7c3aed,#5b21b6); color:#fff;
      border-bottom-right-radius:4px; }
    .Xeumon-bot { align-self:flex-start; background:rgba(124,58,237,.14); color:#EEF2FF;
      border:1px solid rgba(124,58,237,.25); border-bottom-left-radius:4px; }
    .Xeumon-typing { align-self:flex-start; color:#94a3b8; font-size:12px; padding:4px 6px; }
    #Xeumon-form { display:flex; gap:8px; padding:10px; border-top:1px solid rgba(124,58,237,.25); }
    #Xeumon-input { flex:1; background:#13132a; border:1px solid rgba(124,58,237,.3); border-radius:10px;
      color:#EEF2FF; padding:9px 11px; font-size:13px; outline:none; resize:none; }
    #Xeumon-input:focus { border-color:#2dd4ff; }
    #Xeumon-send { background:linear-gradient(135deg,#7c3aed,#2dd4ff); border:none; border-radius:10px;
      color:#fff; padding:0 14px; cursor:pointer; font-size:15px; }
    #Xeumon-send:disabled { opacity:.4; cursor:not-allowed; }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'Xeumon-widget-root';
  root.innerHTML =
    '<div id="Xeumon-panel" role="dialog" aria-label="Assistante Nethxeum">' +
      '<div id="Xeumon-head"><span>Xeumon · Assistante Nethxeum</span><span class="Xeumon-status">● en ligne</span>' +
      '<button id="Xeumon-close" aria-label="Fermer">✕</button></div>' +
      '<div id="Xeumon-msgs"></div>' +
      '<form id="Xeumon-form"><input id="Xeumon-input" type="text" autocomplete="off" ' +
           'placeholder="Question sur le réseau, un bloc, le projet…" />' +
      '<button id="Xeumon-send" type="submit">➤</button></form>' +
    '</div>' +
    '<button id="Xeumon-btn" aria-label="Ouvrir l’assistante">✦</button>';
  document.body.appendChild(root);

  var panel = document.getElementById('Xeumon-panel');
  var msgs = document.getElementById('Xeumon-msgs');
  var form = document.getElementById('Xeumon-form');
  var input = document.getElementById('Xeumon-input');
  var sendBtn = document.getElementById('Xeumon-send');

  document.getElementById('Xeumon-btn').addEventListener('click', function () {
    panel.classList.toggle('Xeumon-open');
    if (panel.classList.contains('Xeumon-open')) input.focus();
  });
  document.getElementById('Xeumon-close').addEventListener('click', function () {
    panel.classList.remove('Xeumon-open');
  });

  // API programmable : Xeumon.toggle() depuis n'importe quelle page
  window.Xeumon = {
    toggle: function () {
      panel.classList.toggle('Xeumon-open');
      if (panel.classList.contains('Xeumon-open')) input.focus();
    },
    open: function () { panel.classList.add('Xeumon-open'); input.focus(); },
    close: function () { panel.classList.remove('Xeumon-open'); },
  };
  // If the page host asks to hide the floating button (explorer: icon inside search bar)
  if (window.Xeumon_HIDE_FAB) {
    document.getElementById('Xeumon-btn').style.display = 'none';
  }

  function cleanText(t) {
    if (typeof t !== 'string') return String(t);
    return t
      .replace(/\*\*(.+?)\*\*/g, '$1')   // **gras**
      .replace(/\*(.+?)\*/g, '$1')       // *italique*
      .replace(/__(.+?)__/g, '$1')
      .replace(/_(.+?)_/g, '$1')
      .replace(/`{1,3}([^`]+)`{0,3}/g, '$1')
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/^\s*[-•*]\s+/gm, '• ')   // puces propres
      .trim();
  }

  function addMsg(role, text) {
    var div = document.createElement('div');
    div.className = 'Xeumon-msg ' + (role === 'user' ? 'Xeumon-user' : 'Xeumon-bot');
    div.textContent = cleanText(text);
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  // Mémoire de conversation (persiste pendant la session)
  var history = [];
  try {
    history = JSON.parse(sessionStorage.getItem('Xeumon-history') || '[]');
    history.forEach(function (m) { addMsg(m.role, m.content); });
  } catch (_) { history = []; }

  function pushHistory(role, content) {
    history.push({ role: role, content: content });
    if (history.length > 20) history = history.slice(-20);
    try { sessionStorage.setItem('Xeumon-history', JSON.stringify(history)); } catch (_) {}
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    addMsg('user', text);
    pushHistory('user', text);
    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;
    var tip = document.createElement('div');
    tip.className = 'Xeumon-typing';
    tip.textContent = 'Xeumon écrit…';
    msgs.appendChild(tip);
    msgs.scrollTop = msgs.scrollHeight;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
      body: JSON.stringify({ message: text, history: history }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        tip.remove();
        var reply = data.reply || data.detail || 'Pas de réponse.';
        addMsg('bot', reply);
        pushHistory('assistant', reply);
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
