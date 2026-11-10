/* Oribi site interactions. No dependencies.
   Header, scroll progress, hero parallax/zoom, image parallax, word reveal,
   pinned horizontal gallery, reveal, count-up, menu, floating CTA, enquiry form. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('nav');
  var btn = document.querySelector('.menu-btn');
  var vh = window.innerHeight, lastY = window.scrollY;

  /* ---- progress bar ---- */
  var bar = document.createElement('div');
  bar.className = 'progress'; bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  /* ---- floating investor CTA ---- */
  var fc = null;
  if (!document.getElementById('enquiry')) {
    fc = document.createElement('a');
    fc.className = 'float-cta';
    fc.href = 'investors.html#enquire';
    fc.innerHTML = '<i></i><span>Request the investor briefing</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5"/></svg>';
    document.body.appendChild(fc);
  }

  /* ---- collected targets ---- */
  var heroes = $('.hero, .page-hero.has-img');
  var pax = $('[data-parallax]');
  var pimgs = $('.photo.px');
  var words = $('.words');
  var hs = $('.hscroll');

  /* split statement text into words */
  words.forEach(function (el) {
    var out = [];
    (function walk(node, wrapEm) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(function (t) {
            if (!t) return;
            if (/^\s+$/.test(t)) { out.push(' '); return; }
            out.push('<span class="w">' + (wrapEm ? '<em>' + t + '</em>' : t) + '</span>');
          });
        } else if (n.nodeName === 'EM') { walk(n, true); }
      });
    })(el, false);
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    el.innerHTML = out.join('');
    el._w = $('.w', el);
    $('.w', el).forEach(function (w) { w.setAttribute('aria-hidden', 'true'); });
    if (reduce) el._w.forEach(function (w) { w.classList.add('on'); });
  });

  /* ---- pinned horizontal gallery ---- */
  function sizeHS() {
    hs.forEach(function (sec) {
      var track = sec.querySelector('.hs-track');
      var fits = reduce || window.innerWidth < 360;
      sec.classList.toggle('hs-static', fits);
      if (fits) { sec.style.height = ''; return; }
      var dist = Math.max(0, track.scrollWidth - window.innerWidth);
      sec._dist = dist;
      sec.style.height = (dist + window.innerHeight * 1.15) + 'px';
    });
  }

  function frame() {
    var y = window.scrollY;
    vh = window.innerHeight;
    var doc = document.documentElement.scrollHeight - vh;
    bar.style.setProperty('--p', doc > 0 ? (y / doc).toFixed(4) : 0);

    if (header) {
      header.classList.toggle('is-solid', y > 60);
      var open = nav && nav.classList.contains('open');
      header.classList.toggle('is-hidden', y > 500 && y > lastY + 6 && !open);
      if (y < lastY - 4) header.classList.remove('is-hidden');
    }
    lastY = y;

    if (fc) {
      fc.classList.toggle('show', y > vh * 0.9 && y < doc - 500);
    }

    if (!reduce) {
      /* hero: parallax, zoom, darken, fade */
      heroes.forEach(function (h) {
        var r = h.getBoundingClientRect();
        if (r.bottom < -50) return;
        var p = clamp(-r.top / (r.height * 0.9), 0, 1);
        h.style.setProperty('--hp', p.toFixed(3));
        h.style.setProperty('--hd', (p * 0.55).toFixed(3));
        var m = h.querySelector('.hero-media, .bg');
        if (m) m.style.transform = 'translate3d(0,' + (y * 0.28).toFixed(1) + 'px,0) scale(' + (1 + p * 0.14).toFixed(4) + ')';
      });

      /* generic parallax */
      pax.forEach(function (el) {
        if (el.closest('.hero, .page-hero')) return;
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var sp = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        el.style.transform = 'translate3d(0,' + (r.top * -sp).toFixed(1) + 'px,0)';
      });

      /* image parallax inside frames */
      pimgs.forEach(function (f) {
        var r = f.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var c = (r.top + r.height / 2 - vh / 2) / vh;
        f.style.setProperty('--py', (c * -f.offsetHeight * 0.12).toFixed(1) + 'px');
      });

      /* word reveal */
      words.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var p = clamp((vh * 0.88 - r.top) / (vh * 0.55 + r.height * 0.4), 0, 1);
        var n = Math.round(p * el._w.length);
        el._w.forEach(function (w, i) { w.classList.toggle('on', i < n); });
      });

      /* pinned gallery */
      hs.forEach(function (sec) {
        if (sec.classList.contains('hs-static') || sec._dist === undefined) return;
        var r = sec.getBoundingClientRect();
        var total = r.height - vh;
        var p = clamp(-r.top / total, 0, 1);
        var q = clamp(p / 0.92, 0, 1);
        sec.querySelector('.hs-track').style.transform = 'translate3d(' + (-q * sec._dist).toFixed(1) + 'px,0,0)';
        sec.style.setProperty('--hp', q.toFixed(3));
        var cards = sec.querySelectorAll('.hs-card').length;
        var cur = sec.querySelector('.hs-count b');
        if (cur) cur.textContent = ('0' + (Math.min(cards, Math.floor(q * (cards - 0.001)) + 1))).slice(-2);
      });
    }
  }
  var ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; frame(); }); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { sizeHS(); onScroll(); });
  window.addEventListener('load', function () { sizeHS(); frame(); });
  sizeHS(); frame();

  /* ---- mobile menu ---- */
  if (btn && nav) {
    var close = function () { nav.classList.remove('open'); header.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      header.classList.toggle('menu-open', open);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---- reveal on scroll ---- */
  var revealEls = $('.reveal, .reveal-img, .bars');
  function show(el) { el.classList.add('in'); }
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- count-up numbers ---- */
  function fmt(n, f) { return f === 'group' ? Math.round(n).toLocaleString('en-ZA').replace(/\s| /g, ',') : Math.round(n).toString(); }
  function runCount(el) {
    var end = parseFloat(el.getAttribute('data-count')), f = el.getAttribute('data-format');
    if (reduce) { el.textContent = fmt(end, f); return; }
    var t0 = null, dur = 1900;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(end * e, f);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = $('[data-count]');
  if ('IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCount(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { el.textContent = '0'; co.observe(el); });
  } else { counters.forEach(runCount); }

  /* ---- cursor spotlight on cards and steps (fine pointers only) ---- */
  if (window.matchMedia('(hover:hover)').matches && !reduce) {
    $('.card, .step').forEach(function (el) {
      var s = document.createElement('span'); s.className = 'spot'; s.setAttribute('aria-hidden', 'true'); el.appendChild(s);
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---- enquiry form (demo until a contact is set in config.js) ---- */
  var form = document.getElementById('enquiry');
  if (form) {
    var TARGET = (window.ORIBI_CONFIG && window.ORIBI_CONFIG.partnershipsEmail) || '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      $('[required]', form).forEach(function (f) {
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

  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
