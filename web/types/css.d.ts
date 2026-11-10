import 'react';

/** Allows CSS custom properties such as --d or --w in inline styles. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
