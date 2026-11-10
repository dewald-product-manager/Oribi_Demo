import { asset } from '@/lib/site';

const partners = [
  { src: '/assets/img/logo-checkers.png', alt: 'Checkers', name: 'Shoprite Checkers', w: 200, h: 40 },
  { src: '/assets/img/logo-spar.svg', alt: 'SPAR', name: 'The SPAR Group Limited', w: 160, h: 40 },
  { src: '/assets/img/logo-foodlovers.png', alt: "Food Lover's Market", name: "Food Lover's Market", w: 120, h: 74 },
  { src: '/assets/img/logo-metro.png', alt: 'Metro', name: 'Metro Namibia', w: 150, h: 62 },
  { src: '/assets/img/logo-nfpm.png', alt: 'Namibian Fresh Produce Market', name: 'Namibian Fresh Produce Market', w: 118, h: 74 },
];

/** Logos sit at their natural proportions inside a ruled wall, so none are cropped or squashed. */
export function PartnerWall({ narrow = false }: { narrow?: boolean }) {
  const scale = narrow ? 0.8 : 1;
  return (
    <div className={`pwall reveal${narrow ? ' narrow' : ''}`}>
      {partners.map((p) => (
        <span className="p" key={p.name}>
          <img
            src={asset(p.src)}
            alt={p.alt}
            loading="lazy"
            style={{ '--w': `${Math.round(p.w * scale)}px`, '--h': `${Math.round(p.h * scale)}px` }}
          />
          <span className="nm">{p.name}</span>
        </span>
      ))}
    </div>
  );
}
