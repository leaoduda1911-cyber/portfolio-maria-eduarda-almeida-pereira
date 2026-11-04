(function () {
  var CHAVE = 'tema-efeito-vitrine';
  var raiz = document.documentElement;

  function lerTemaSalvo() {
    try { return localStorage.getItem(CHAVE); } catch (e) { return null; }
  }

  function salvarTema(tema) {
    try { localStorage.setItem(CHAVE, tema); } catch (e) { /* storage indisponível */ }
  }

  function temaInicial() {
    var salvo = lerTemaSalvo();
    if (salvo === 'light' || salvo === 'dark') return salvo;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function aplicarTema(tema) {
    var escuro = tema === 'dark';
    raiz.setAttribute('data-theme', tema);
    raiz.setAttribute('data-bs-theme', tema);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', escuro ? '#111a16' : '#f5f4ef');

    document.querySelectorAll('[data-theme-toggle]').forEach(function (botao) {
      botao.setAttribute('aria-pressed', String(escuro));
      botao.textContent = escuro ? '☀ Tema claro' : '☾ Tema escuro';
    });
  }

  aplicarTema(temaInicial());

  document.querySelectorAll('[data-theme-toggle]').forEach(function (botao) {
    botao.addEventListener('click', function () {
      var novo = raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      aplicarTema(novo);
      salvarTema(novo);
    });
  });
})();
