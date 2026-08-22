// ---------- theme: respect saved choice, else system preference ----------
(function(){
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function(){
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ---------- nav-aware scrolling to same-page sections ----------
// Relies on scroll-margin-top (set in styles.css) so the target section's
// own heading always lands cleanly below the sticky nav, with nothing
// left over from the previous section still in view.
(function(){
  function scrollToId(id, behavior){
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: behavior || 'smooth', block: 'start' });
  }
  function isSamePageHref(path){
    if (path === '') return true;
    var here = window.location.pathname.split('/').pop() || 'index.html';
    return path === here;
  }

  document.querySelectorAll('a[href*="#"]').forEach(function(a){
    var href = a.getAttribute('href') || '';
    var hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;
    var path = href.slice(0, hashIndex);
    var id = href.slice(hashIndex + 1);
    if (!id || !isSamePageHref(path) || !document.getElementById(id)) return;
    a.addEventListener('click', function(e){
      e.preventDefault();
      scrollToId(id, 'smooth');
      if (history.pushState) history.pushState(null, '', href);
    });
  });

  // Land correctly if the page is opened/reloaded with a hash already in the
  // URL. Web fonts and the profile photo can still be loading at this point
  // and change the page's layout height, so the position is re-checked a
  // few times as things settle rather than corrected just once.
  function correctInitialScroll(){
    if (!location.hash) return;
    scrollToId(location.hash.slice(1), 'auto');
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(correctInitialScroll);
  }
  window.addEventListener('load', function(){
    correctInitialScroll();
    setTimeout(correctInitialScroll, 300);
  });
  window.addEventListener('hashchange', function(){
    if (location.hash) scrollToId(location.hash.slice(1), 'smooth');
  });
})();

// ---------- mobile nav ----------
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function(){
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- scroll-spy active nav link (only meaningful on pages with sections) ----------
if (navLinks) {
  var sectionIds = ['about','research','publications','experience','projects','awards','education','contact'];
  var sections = sectionIds
    .map(function(id){ return document.getElementById(id); })
    .filter(Boolean);
  var links = Array.from(navLinks.querySelectorAll('a'));

  if (sections.length) {
    var ticking = false;

    function updateActiveLink(){
      var navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      var line = navH + 40; // where in the viewport a section "counts" as current
      var current = sections[0];
      for (var i = 0; i < sections.length; i++){
        if (sections[i].getBoundingClientRect().top <= line) current = sections[i];
      }
      // near the very bottom of the page, force the last section (handles short/tall mismatches)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2){
        current = sections[sections.length - 1];
      }
      var match = links.find(function(l){
        var href = l.getAttribute('href') || '';
        return href.indexOf('#' + current.id) !== -1;
      });
      links.forEach(function(l){ l.classList.remove('active'); });
      if (match) match.classList.add('active');
    }

    function onScroll(){
      if (!ticking){
        window.requestAnimationFrame(function(){ updateActiveLink(); ticking = false; });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActiveLink();
  }
}

var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
