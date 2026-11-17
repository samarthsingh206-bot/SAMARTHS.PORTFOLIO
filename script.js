(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');
  var copyToast = document.getElementById('copy-toast');
  var toastTimer = null;

  function initTheme() {
    var saved = localStorage.getItem('theme_preference');
    var theme = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);

    if (themeToggle) {
      themeToggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme_preference', next);
      });
    }
  }

  function initMobileMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px'
    });

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

  function showToast(message) {
    if (!copyToast) return;
    var msgEl = copyToast.querySelector('.toast-msg');
    if (msgEl && message) {
      msgEl.textContent = message;
    }
    copyToast.classList.add('is-active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      copyToast.classList.remove('is-active');
    }, 2400);
  }

  function initClipboard() {
    var copyButtons = document.querySelectorAll('[data-copy-email]');

    copyButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var email = btn.getAttribute('data-copy-email') || 'samarthsingh206@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(function () {
            showToast('Email copied to clipboard: ' + email);
          }).catch(function () {
            fallbackCopy(email);
          });
        } else {
          fallbackCopy(email);
        }
      });
    });

    function fallbackCopy(text) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast('Email copied: ' + text);
      } catch (err) {
        showToast('Please copy: ' + text);
      }
      document.body.removeChild(textarea);
    }
  }

  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal-item');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileMenu();
    initScrollSpy();
    initClipboard();
    initScrollReveal();
  });
})();