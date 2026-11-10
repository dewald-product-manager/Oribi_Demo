/** Partnerships and investment form: validates in the browser, then posts to the enquiry API. */

const MESSAGES = {
  name: 'Please tell us your name.',
  email: 'Please give an email address we can reply to.',
  emailFormat: 'That email address does not look complete.',
  sending: 'Sending your enquiry…',
  sent: 'Thank you. Your enquiry has reached the team, and one of us will reply personally.',
  preview:
    'Thank you. This preview is not connected to an inbox yet, so nothing was sent. The live site sends enquiries straight to the partnerships team.',
  failed: 'Something went wrong on our side. Please try again in a moment, or use the contact page.',
};

export function initEnquiryForm(): () => void {
  const form = document.getElementById('enquiry') as HTMLFormElement | null;
  if (!form) return () => {};

  const status = form.querySelector<HTMLElement>('.ok');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const endpoint = form.dataset.endpoint ?? '';

  const fieldError = (name: string, text: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    const slot = input?.parentElement?.querySelector<HTMLElement>('.err');
    if (slot) slot.textContent = text;
    input?.setAttribute('aria-invalid', text ? 'true' : 'false');
  };

  const show = (text: string, tone: 'ok' | 'bad' | 'wait') => {
    if (!status) return;
    status.textContent = text;
    status.dataset.tone = tone;
    status.classList.add('show');
  };

  const validate = (data: FormData) => {
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    let ok = true;
    fieldError('name', name.length >= 2 ? '' : MESSAGES.name);
    if (name.length < 2) ok = false;
    if (!email) {
      fieldError('email', MESSAGES.email);
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      fieldError('email', MESSAGES.emailFormat);
      ok = false;
    } else fieldError('email', '');
    return ok;
  };

  const onInput = (e: Event) => {
    const t = e.target as HTMLInputElement;
    if (t.getAttribute('aria-invalid') === 'true') fieldError(t.name, '');
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const data = new FormData(form);
    if (!validate(data)) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    if (!endpoint) {
      show(MESSAGES.preview, 'ok');
      return;
    }
    const payload: Record<string, string> = { page: window.location.pathname };
    data.forEach((v, k) => (payload[k] = String(v)));
    button?.setAttribute('disabled', '');
    show(MESSAGES.sending, 'wait');
    try {
      const res = await fetch(`${endpoint.replace(/\/$/, '')}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 201) {
        form.reset();
        show(MESSAGES.sent, 'ok');
      } else if (res.status === 422) {
        const body = (await res.json()) as { errors?: Record<string, string> };
        Object.entries(body.errors ?? {}).forEach(([k, v]) => fieldError(k, v));
        show('Please check the highlighted fields.', 'bad');
      } else if (res.status === 429) {
        show('We have received several enquiries from this connection. Please try again shortly.', 'bad');
      } else show(MESSAGES.failed, 'bad');
    } catch {
      show(MESSAGES.failed, 'bad');
    } finally {
      button?.removeAttribute('disabled');
    }
  };

  form.addEventListener('submit', onSubmit);
  form.addEventListener('input', onInput);
  return () => {
    form.removeEventListener('submit', onSubmit);
    form.removeEventListener('input', onInput);
  };
}
