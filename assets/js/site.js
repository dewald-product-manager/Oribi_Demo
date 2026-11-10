/* Oribi site interactions: header, reveal, count-up, parallax, menu, enquiry form. No dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('nav');
  var btn = document.querySelector('.menu-btn');
  var lastY = window.scrollY;

  /* Header: solid after the hero, hides on scroll down, returns on scroll up */
  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle('is-solid', y > 60);
      var open = nav && nav.classList.contains('open');
      header.classList.toggle('is-hidden', y > 500 && y > lastY + 6 && !open);
      if (y < lastY - 4) header.classList.remove('is-hidden');
    }
    lastY = y;
    if (!reduce) parallax(y);
  }
  var pax = [].slice.call(document.querySelectorAll('[data-parallax]'));
  function parallax(y) {
    pax.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      el.style.transform = 'translate3d(0,' + (r.top * -speed).toFixed(1) + 'px,0)';
    });
  }
  window.addEventListener('scroll', function () { window.requestAnimationFrame(onScroll); }, { passive: true });
  onScroll();

  /* Mobile menu */
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      header.classList.toggle('menu-open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); header.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { nav.classList.remove('open'); header.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* Reveal on scroll */
  var revealEls = [].slice.call(document.querySelectorAll('.reveal, .reveal-img, .bars'));
  function show(el) { el.classList.add('in'); }
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Count-up numbers: <span data-count="9500" data-format="group"> */
  function fmt(n, f) { return f === 'group' ? Math.round(n).toLocaleString('en-ZA').replace(/ /g, ',') : Math.round(n).toString(); }
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  function runCount(el) {
    var end = parseFloat(el.getAttribute('data-count')), f = el.getAttribute('data-format');
    if (reduce) { el.textContent = fmt(end, f); return; }
    var t0 = null, dur = 1800;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(end * e, f);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCount(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { el.textContent = '0'; co.observe(el); });
  } else { counters.forEach(runCount); }

  /* Enquiry form. Demo: composes an email to the address below. Replace with a form service when live. */
  var form = document.getElementById('enquiry');
  if (form) {
    var TARGET = (window.ORIBI_CONFIG && window.ORIBI_CONFIG.partnershipsEmail) || '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      [].slice.call(form.querySelectorAll('[required]')).forEach(function (f) {
        var err = f.parentElement.querySelector('.err');
        var bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
        if (err) err.textContent = bad ? (f.type === 'email' ? 'Enter an email address we can reply to.' : 'This field is needed so we can route your enquiry.') : '';
        if (bad) ok = false;
      });
      if (!ok) return;
      var d = new FormData(form);
      var body = ['Name: ' + d.get('name'), 'Organisation: ' + d.get('org'), 'Email: ' + d.get('email'),
        'I am a: ' + d.get('type'), 'Interested in: ' + d.get('region'), 'Indicative size: ' + d.get('size'), '', d.get('message')].join('\n');
      var msg = form.querySelector('.ok');
      if (TARGET) {
        window.location.href = 'mailto:' + TARGET + '?subject=' + encodeURIComponent('Oribi partnerships and investment enquiry') + '&body=' + encodeURIComponent(body);
        msg.textContent = 'Thank you. Your email app should open with the enquiry ready to send.';
      } else {
        msg.textContent = 'Demo mode: the form is not connected yet, so nothing was sent. The partnerships contact is added before launch.';
      }
      msg.classList.add('show');
    });
  }

  /* Footer year */
  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
