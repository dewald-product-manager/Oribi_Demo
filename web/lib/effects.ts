/**
 * Scroll, reveal and hover behaviour for the whole site.
 * Plain DOM code with no dependencies; returns a cleanup function so it can re-run on navigation.
 */
import { basePath } from './site';
import { initEnquiryForm } from './enquiry';

type Cleanup = () => void;

const ITEMS = '.card, .step, .numbered li, .unlock li, .route, .thesis > div, .member, .press-item, .market';
const REVEAL = '.reveal, .reveal-img, .bars, .dots, .distance';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const all = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
const pad = (n: number) => String(n).padStart(2, '0');

function currentPath(): string {
  let p = window.location.pathname;
  if (basePath && p.startsWith(basePath)) p = p.slice(basePath.length);
  p = p.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p || '/';
}

export function initEffects(): Cleanup {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const disposers: Cleanup[] = [];
  const listen = (target: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
    target.addEventListener(type, fn, opts);
    disposers.push(() => target.removeEventListener(type, fn, opts));
  };

  const header = document.querySelector<HTMLElement>('.site-header');
  const nav = document.getElementById('nav');
  const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
  const floatCta = document.querySelector<HTMLElement>('.float-cta');
  const page = document.querySelector('main .page') ?? document.querySelector('main');
  const first = page?.firstElementChild;
  const darkTop = !!first && (first.classList.contains('hero') || first.matches('.page-hero.has-img'));
  header?.classList.toggle('on-light', !darkTop);

  /* current page in the main navigation */
  const here = currentPath();
  all<HTMLAnchorElement>('[data-nav]').forEach((a) => {
    const target = a.dataset.nav ?? '';
    const active = here === target || here.startsWith(target + '/');
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  /* scroll progress line */
  const bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  disposers.push(() => bar.remove());

  /* statement text: split into words that light up as you read */
  const words = all('.words');
  words.forEach((el) => {
    if (el.dataset.split) return;
    const out: string[] = [];
    const walk = (node: Node, italic: boolean) => {
      node.childNodes.forEach((n) => {
        if (n.nodeType === Node.TEXT_NODE) {
          (n.textContent ?? '').split(/(\s+)/).forEach((t) => {
            if (!t) return;
            if (/^\s+$/.test(t)) out.push(' ');
            else out.push(`<span class="w" aria-hidden="true">${italic ? `<em>${t}</em>` : t}</span>`);
          });
        } else if (n.nodeName === 'EM') walk(n, true);
      });
    };
    walk(el, false);
    el.setAttribute('aria-label', (el.textContent ?? '').replace(/\s+/g, ' ').trim());
    el.innerHTML = out.join('');
    el.dataset.split = '1';
    if (reduce) all('.w', el).forEach((w) => w.classList.add('on'));
  });

  const heroes = all('.hero, .page-hero.has-img');
  const parallax = all('[data-parallax]');
  const framed = all('.photo.px');
  const bigs = all('.bigtext');
  const galleries = all<HTMLElement & { _dist?: number }>('.hscroll');
  const clashers = all('.cta-band, .next-up, .site-footer');
  const hasEnquiry = !!document.getElementById('enquiry');

  const sizeGalleries = () => {
    galleries.forEach((sec) => {
      const track = sec.querySelector<HTMLElement>('.hs-track');
      if (!track) return;
      const fits = reduce || window.innerWidth < 360;
      sec.classList.toggle('hs-static', fits);
      if (fits) {
        sec.style.height = '';
        return;
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth);
      sec._dist = dist;
      sec.style.height = `${dist * 0.7 + window.innerHeight * 1.05}px`;
    });
  };

  const frame = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;
    bar.style.setProperty('--p', docH > 0 ? (y / docH).toFixed(4) : '0');
    header?.classList.toggle('is-solid', y > 24);

    if (floatCta) {
      const clash = clashers.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < vh && r.bottom > 0;
      });
      floatCta.classList.toggle('show', !hasEnquiry && y > vh * 0.9 && !clash);
    }

    if (reduce) return;

    heroes.forEach((h) => {
      const r = h.getBoundingClientRect();
      if (r.bottom < -50) return;
      const p = clamp(-r.top / (r.height * 0.9), 0, 1);
      h.style.setProperty('--hp', p.toFixed(3));
      h.style.setProperty('--hd', (p * 0.55).toFixed(3));
      const media = h.querySelector<HTMLElement>('.hero-media, .bg');
      if (media) media.style.transform = `translate3d(0,${(y * 0.28).toFixed(1)}px,0) scale(${(1 + p * 0.12).toFixed(4)})`;
    });

    parallax.forEach((el) => {
      if (el.closest('.hero, .page-hero')) return;
      const r = el.parentElement?.getBoundingClientRect();
      if (!r || r.bottom < 0 || r.top > vh) return;
      const speed = parseFloat(el.dataset.parallax ?? '') || 0.15;
      el.style.transform = `translate3d(0,${(r.top * -speed).toFixed(1)}px,0)`;
    });

    framed.forEach((f) => {
      const r = f.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const c = (r.top + r.height / 2 - vh / 2) / vh;
      f.style.setProperty('--py', `${(c * -f.offsetHeight * 0.12).toFixed(1)}px`);
    });

    words.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const list = all('.w', el);
      const p = clamp((vh * 0.88 - r.top) / (vh * 0.55 + r.height * 0.4), 0, 1);
      const n = Math.round(p * list.length);
      list.forEach((w, i) => w.classList.toggle('on', i < n));
    });

    bigs.forEach((b) => {
      const r = b.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = clamp((vh - r.top) / (vh + r.height), 0, 1);
      all('.row', b).forEach((row, i) => {
        const over = Math.max(0, row.scrollWidth - window.innerWidth);
        const x = i % 2 === 0 ? -p * over : -(1 - p) * over;
        row.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
      });
    });

    galleries.forEach((sec) => {
      if (sec.classList.contains('hs-static') || sec._dist === undefined) return;
      const r = sec.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - vh), 0, 1);
      const q = clamp(p / 0.92, 0, 1);
      const track = sec.querySelector<HTMLElement>('.hs-track');
      if (track) track.style.transform = `translate3d(${(-q * sec._dist).toFixed(1)}px,0,0)`;
      sec.style.setProperty('--hp', q.toFixed(3));
      const cards = sec.querySelectorAll('.hs-card').length;
      const counter = sec.querySelector('.hs-count b');
      if (counter) counter.textContent = pad(Math.min(cards, Math.floor(q * (cards - 0.001)) + 1));
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      frame();
    });
  };
  listen(window, 'scroll', onScroll, { passive: true });
  listen(window, 'resize', () => {
    sizeGalleries();
    onScroll();
  });
  listen(window, 'load', () => {
    sizeGalleries();
    frame();
  });
  sizeGalleries();
  frame();

  /* scrollytelling: the step in view drives the sticky photo */
  all('.story').forEach((story) => {
    const steps = all('.story-step', story);
    const figures = all('.story-media figure', story);
    const count = story.querySelector('.story-media .count');
    const set = (i: number) => {
      steps.forEach((s, k) => s.classList.toggle('on', k === i));
      figures.forEach((f, k) => f.classList.toggle('on', k === i));
      if (count) count.textContent = `${pad(i + 1)} / ${pad(steps.length)}`;
    };
    set(0);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && set(steps.indexOf(en.target as HTMLElement))),
      { rootMargin: '-42% 0px -42% 0px' },
    );
    steps.forEach((s) => io.observe(s));
    disposers.push(() => io.disconnect());
  });

  /* chapter navigation follows the reader */
  all('.subnav').forEach((sub) => {
    const links = all<HTMLAnchorElement>('a[href^="#"]:not(.cta)', sub);
    const pairs = links
      .map((a) => [a, document.getElementById(a.getAttribute('href')!.slice(1))] as const)
      .filter((p): p is readonly [HTMLAnchorElement, HTMLElement] => !!p[1]);
    const strip = sub.firstElementChild as HTMLElement | null;
    const spy = () => {
      let cur: HTMLAnchorElement | null = null;
      const line = window.innerHeight * 0.38;
      pairs.forEach(([a, s]) => {
        if (s.getBoundingClientRect().top <= line) cur = a;
      });
      links.forEach((a) => a.classList.toggle('on', a === cur));
      if (cur && strip && strip.scrollWidth > strip.clientWidth) strip.scrollLeft = (cur as HTMLElement).offsetLeft - 24;
    };
    listen(window, 'scroll', spy, { passive: true });
    spy();
  });

  /* mobile menu */
  if (menuBtn && nav && header) {
    const setOpen = (open: boolean) => {
      nav.classList.toggle('open', open);
      header.classList.toggle('menu-open', open);
      document.documentElement.classList.toggle('menu-lock', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    listen(menuBtn, 'click', () => setOpen(!nav.classList.contains('open')));
    listen(nav, 'click', (e) => {
      if ((e.target as Element).closest('a')) setOpen(false);
    });
    listen(document, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape') setOpen(false);
    });
    disposers.push(() => setOpen(false));
  }

  /* dot matrix: built here so the markup stays short */
  all('[data-dots]').forEach((el) => {
    const on = parseInt(el.dataset.dots ?? '0', 10);
    const total = parseInt(el.dataset.dotsTotal ?? '100', 10);
    let html = '';
    for (let i = 0; i < total; i++) html += `<i${i < on ? ' class="on"' : ''} style="--i:${i}"></i>`;
    el.innerHTML = html;
    el.setAttribute('aria-hidden', 'true');
  });

  /* reveal on scroll. Masked headings are fully clipped before they reveal, which the observer
     treats as invisible, so they are watched through their parent element instead. */
  const revealEls = all(REVEAL);
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const groups = new Map<Element, Element[]>();
    revealEls.forEach((el) => {
      const target = el.matches('h1, h2') ? (el.parentElement ?? el) : el;
      groups.set(target, [...(groups.get(target) ?? []), el]);
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          groups.get(en.target)?.forEach((el) => el.classList.add('in'));
          io.unobserve(en.target);
        }),
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    groups.forEach((_, target) => io.observe(target));
    disposers.push(() => io.disconnect());
  }

  /* numbers count up when they come into view */
  const format = (n: number, group: boolean, decimals: number) => {
    if (decimals) return n.toFixed(decimals);
    const r = Math.round(n);
    return group ? r.toLocaleString('en-GB') : String(r);
  };
  const runCount = (el: HTMLElement) => {
    const end = parseFloat(el.dataset.count ?? '0');
    const group = el.dataset.format === 'group';
    const decimals = parseInt(el.dataset.decimals ?? '0', 10);
    if (reduce) {
      el.textContent = format(end, group, decimals);
      return;
    }
    let t0 = 0;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 1900, 1);
      el.textContent = format(end * (1 - Math.pow(1 - p, 4)), group, decimals);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counters = all('[data-count]');
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          runCount(en.target as HTMLElement);
          io.unobserve(en.target);
        }),
      { threshold: 0.6 },
    );
    counters.forEach((el) => {
      el.textContent = format(0, false, parseInt(el.dataset.decimals ?? '0', 10));
      io.observe(el);
    });
    disposers.push(() => io.disconnect());
  } else counters.forEach(runCount);

  /* one hover language for every card, step and list row: a soft light that follows the pointer */
  if (finePointer && !reduce) {
    all(ITEMS).forEach((el) => {
      if (!el.querySelector(':scope > .spot')) {
        const s = document.createElement('span');
        s.className = 'spot';
        s.setAttribute('aria-hidden', 'true');
        el.appendChild(s);
      }
      listen(el, 'pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const p = e as PointerEvent;
        el.style.setProperty('--mx', `${p.clientX - r.left}px`);
        el.style.setProperty('--my', `${p.clientY - r.top}px`);
      });
    });
  }

  disposers.push(initEnquiryForm());

  const year = document.getElementById('yr');
  if (year) year.textContent = String(new Date().getFullYear());

  return () => disposers.splice(0).reverse().forEach((d) => d());
}
