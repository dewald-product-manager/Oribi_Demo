'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initEffects } from '@/lib/effects';

/** Runs the scroll and reveal behaviour, and re-runs it after each client-side navigation. */
export function Effects() {
  const pathname = usePathname();
  useEffect(() => initEffects(), [pathname]);
  return null;
}
