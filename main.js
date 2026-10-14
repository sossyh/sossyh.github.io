/* ============================================================
   main.js
   Shared behavior for every page on the site.
     1. dark / light theme toggle, remembered between visits
     2. mobile hamburger menu
     3. highlighting the nav link for the section you are reading
     4. the year in the footer
   You should not need to edit this file when adding content.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. theme ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    saved = null;
  }

  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage blocked, theme still works for this visit */
      }
    });
  }

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function (e) {
      var choice = null;
      try {
        choice = localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        choice = null;
      }
      if (!choice) applyTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", onSystemChange);
    } else if (mq.addListener) {
      mq.addListener(onSystemChange);
    }
  }

  /* ---------- 2. mobile menu ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var header = document.querySelector("header.site-nav");

  /* Must match the breakpoint in styles.css where the menu collapses. */
  var MOBILE_BREAKPOINT = 1000;

  function closeMenu() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
    });
  }

  /* ---------- 3. active nav link while scrolling ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var anchors = navLinks
    ? Array.prototype.slice.call(navLinks.querySelectorAll('a[href*="#"]'))
    : [];

  var linkFor = {};
  anchors.forEach(function (a) {
    var hash = a.getAttribute("href").split("#")[1];
    if (hash) linkFor[hash] = a;
  });

  /* Only sections that actually have a nav link. On writing.html
     nothing matches, so the hardcoded active link is left alone. */
  var tracked = sections.filter(function (s) {
    return linkFor[s.id];
  });

  if (tracked.length) {
    var pinnedId = null;
    var idleTimer = null;

    function setActive(id) {
      anchors.forEach(function (a) {
        a.classList.remove("active");
      });
      if (linkFor[id]) linkFor[id].classList.add("active");
    }

    function navHeight() {
      return header ? header.offsetHeight : 60;
    }

    function currentId() {
      // At the bottom of the document the last section always wins.
      // Without this, a short final section can never push the one
      // above it out of view, so the wrong link stays highlighted.
      var atBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) return tracked[tracked.length - 1].id;

      var line = navHeight() + 24;
      var current = tracked[0].id;
      for (var i = 0; i < tracked.length; i++) {
        if (tracked[i].getBoundingClientRect().top <= line) {
          current = tracked[i].id;
        } else {
          break;
        }
      }
      return current;
    }

    var ticking = false;
    function onScroll() {
      // A click pins the highlight to its destination. The pin is
      // released only once scrolling has actually stopped, so the
      // links in between never flash on the way there, however long
      // the smooth scroll takes.
      if (pinnedId) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () {
          pinnedId = null;
          setActive(currentId());
        }, 150);
        return;
      }
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        setActive(currentId());
      });
    }

    function pinTo(hash) {
      if (!hash || !linkFor[hash]) return false;
      pinnedId = hash;
      setActive(hash);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () {
        pinnedId = null;
      }, 1200);
      return true;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    anchors.forEach(function (a) {
      a.addEventListener("click", function () {
        pinTo(a.getAttribute("href").split("#")[1]);
      });
    });

    if (!window.location.hash || !pinTo(window.location.hash.slice(1))) {
      setActive(currentId());
    }
  }

  /* ---------- 4. footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
