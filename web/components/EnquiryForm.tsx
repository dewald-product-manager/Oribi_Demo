import { Arrow } from './Arrow';
import { enquiryApi } from '@/lib/site';

const types = ['Investor', 'Development finance institution', 'Operator', 'Off-taker', 'Other'];
const regions = ['Namibia', 'South Africa', 'Elsewhere in SADC'];

export function EnquiryForm() {
  return (
    <form className="form reveal" id="enquiry" noValidate data-endpoint={enquiryApi}>
      <div className="row">
        <div>
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" required autoComplete="name" />
          <div className="err" aria-live="polite" />
        </div>
        <div>
          <label htmlFor="f-org">Organisation</label>
          <input id="f-org" name="organisation" autoComplete="organization" />
        </div>
      </div>
      <div>
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" required autoComplete="email" />
        <div className="err" aria-live="polite" />
      </div>
      <div className="row">
        <div>
          <label htmlFor="f-type">I am</label>
          <select id="f-type" name="type" defaultValue={types[0]}>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-region">Interested in</label>
          <select id="f-region" name="region" defaultValue={regions[0]}>
            {regions.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="f-size">Indicative size, optional</label>
        <input id="f-size" name="size" />
      </div>
      <div>
        <label htmlFor="f-msg">What would you like to know?</label>
        <textarea id="f-msg" name="message" />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-web">Website</label>
        <input id="f-web" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn-primary" type="submit">
        Request the briefing <Arrow />
      </button>
      <div className="ok" role="status" />
    </form>
  );
}
