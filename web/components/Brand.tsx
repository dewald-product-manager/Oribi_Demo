import type { CSSProperties } from 'react';
import { asset } from '@/lib/site';

/** The Oribi wordmark, drawn as a mask so it can take any colour and change colour smoothly. */
export function Wordmark({ className = '' }: { className?: string }) {
  const url = `url(${asset('/assets/img/oribi-wordmark-white.png')})`;
  const style = { WebkitMaskImage: url, maskImage: url } as CSSProperties;
  return <span className={`wordmark ${className}`.trim()} role="img" aria-label="Oribi" style={style} />;
}
