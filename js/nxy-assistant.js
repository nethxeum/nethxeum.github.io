/* Bouton d'accès à l'assistante Xeumon — redirige vers l'explorateur */
(function () {
  'use strict';
  if (document.getElementById('xeumon-fab')) return;

  var css =
    '#xeumon-fab { position:fixed; right:18px; bottom:18px; z-index:99990; width:52px; height:52px;' +
    ' border-radius:50%; border:1px solid rgba(124,58,237,.55); cursor:pointer; text-decoration:none;' +
    ' background:linear-gradient(135deg,#7c3aed,#2563eb); color:#fff; display:flex; align-items:center; justify-content:center;' +
    ' box-shadow:0 4px 24px rgba(124,58,237,.45); transition:transform .2s, box-shadow .2s; }' +
    '#xeumon-fab:hover { transform:scale(1.08); box-shadow:0 6px 30px rgba(124,58,237,.7); }' +
    '#xeumon-fab img { width:30px; height:30px; border-radius:50%; object-fit:cover; }';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var inPages = /\/pages\//.test(location.pathname);
  var fab = document.createElement('a');
  fab.id = 'xeumon-fab';
  fab.href = 'https://explore.nethxeum.com/assistant';
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.title = 'Assistante Xeumon';
  fab.setAttribute('aria-label', 'Ouvrir l\'assistante Xeumon');
  fab.innerHTML = '<img src="' + (inPages ? '../' : '') + 'images/assistant.png" alt="Xeumon"/>';
  document.body.appendChild(fab);
})();