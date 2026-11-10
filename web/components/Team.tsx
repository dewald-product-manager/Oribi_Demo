import { asset } from '@/lib/site';

export const people = [
  {
    slug: 'ryno-postma',
    name: 'Ryno Postma',
    role: 'Co-founder and Group CEO',
    bio: 'Chartered accountant and valuation specialist, and co-author of Aquanomics: Building a thriving aquaponic business. Leads strategy, finance and the development of new projects.',
  },
  {
    slug: 'willem-bodenstein',
    name: 'Willem Bodenstein',
    role: 'Chairman',
    bio: 'Heads Bravura Namibia, the Windhoek office of the Bravura advisory group. Leads structuring, governance and investor relationships.',
  },
  {
    slug: 'jan-conradie',
    name: 'Jan Conradie',
    role: 'Agronomy and operations',
    bio: 'Founder of Agricon Mushrooms in Okahandja and a Namibian Agronomic Board horticulture award winner, trained in agriculture and aquaculture. Leads growing and technical decisions.',
  },
  {
    slug: 'stuart-batchelor',
    name: 'Stuart Batchelor',
    role: 'Energy adviser and trustee',
    bio: 'Director of SolarSaver, which finances and operates commercial solar systems in Namibia, South Africa and Botswana, including the system that powers the farm.',
  },
];

export function Team({ bios = true }: { bios?: boolean }) {
  return (
    <div className="team">
      {people.map((p, i) => (
        <figure className="member reveal" key={p.slug} style={{ '--d': `${i * 0.08}s` }}>
          <div className="portrait">
            <img src={asset(`/assets/img/team-${p.slug}.jpg`)} alt={`Portrait of ${p.name}`} loading="lazy" />
          </div>
          <figcaption className="body">
            <span className="role">{p.role}</span>
            <h3>{p.name}</h3>
            {bios && <p>{p.bio}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
