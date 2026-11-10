import { ArrowOut } from './Arrow';

export const coverage = [
  {
    pub: 'HortiDaily',
    when: 'November 2025',
    title: 'Namibian aquaponics group geared for regional expansion',
    url: 'https://www.hortidaily.com/article/9786653/namibian-aquaponics-group-geared-for-regional-expansion',
  },
  {
    pub: 'The Namibian Farmer',
    when: 'October to December 2025 issue',
    title: 'Oribi Aquaponics scales up for regional market dominance',
    url: 'https://namibianfarming.com/oribi-aquaponics-scales-up-for-regional-market-dominance/',
  },
  {
    pub: 'ProAgri',
    when: 'Feature',
    title: 'Growing beyond borders: Namibia’s Oribi Aquaponics takes its next leap',
    url: 'https://www.proagrimedia.com/innovation/growing-beyond-borders-namibias-oribi-aquaponics-takes-its-next-leap/',
  },
  {
    pub: 'HortiDaily and FreshPlaza',
    when: 'Report',
    title: 'Aquaponics lettuce grower supplies major retailer in Namibia',
    url: 'https://www.hortidaily.com/article/9576879/aquaponics-lettuce-grower-supplies-major-retailer-in-namibia/',
  },
];

export function PressList({ limit }: { limit?: number }) {
  const items = limit ? coverage.slice(0, limit) : coverage;
  return (
    <ul className="press">
      {items.map((c, i) => (
        <li key={c.url} className="reveal" style={{ '--d': `${i * 0.06}s` }}>
          <a className="press-item" href={c.url} target="_blank" rel="noopener">
            <span className="pub">
              {c.pub}
              <small>{c.when}</small>
            </span>
            <span className="ttl">{c.title}</span>
            <span className="go">
              <ArrowOut />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
