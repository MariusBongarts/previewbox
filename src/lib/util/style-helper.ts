import {css, CSSResultGroup} from 'lit';

type ColorMode = 'light' | 'dark';
const cssVars: Record<string, Record<ColorMode, CSSResultGroup>> = {
  '--pb-background-color': {
    light: css`#ffffff`,
    dark: css`#121212`,
  },
  '--pb-background-color-hover': {
    light: css`#f9fafb`,
    dark: css`#1e293b`,
  },
  '--pb-text-color': {
    light: css`#000000`,
    dark: css`#e0e0e0`,
  },
  '--pb-border-color': {
    light: css`rgba(124, 139, 154, 0.25)`,
    dark: css`#80808034`,
  },
  '--pb-text-color-light': {
    light: css`rgba(0, 0, 0, 0.7)`,
    dark: css`rgba(255, 255, 255, 0.8)`,
  },
  '--pb-fallback-img-color': {
    light: css`hsl(220, 13%, 80%)`,
    dark: css`hsl(220, 13%, 40%)`,
  },
  '--pb-fallback-img-background': {
    light: css`rgb(229, 231, 235)`,
    dark: css`rgb(55, 65, 81)`,
  },
  '--pb-skeleton-color': {
    light: css`rgb(229, 231, 235)`,
    dark: css`rgb(55, 65, 81)`,
  },
};

export function generateDefaultCssVars(): CSSResultGroup {
  return css`
    :host {
      --pb-background-color: ${cssVars['--pb-background-color'].light};
      --pb-dark-background-color: ${cssVars['--pb-background-color'].dark};
      --pb-background-color-hover: ${cssVars['--pb-background-color-hover'].light};
      --pb-dark-background-color-hover: ${cssVars['--pb-background-color-hover']
        .dark};
      --pb-text-color: ${cssVars['--pb-text-color'].light};
      --pb-dark-text-color: ${cssVars['--pb-text-color'].dark};
      --pb-border-color: ${cssVars['--pb-border-color'].light};
      --pb-dark-border-color: ${cssVars['--pb-border-color'].dark};
      --pb-text-color-light: ${cssVars['--pb-text-color-light'].light};
      --pb-dark-metadata-color: ${cssVars['--pb-text-color-light'].dark};
      --pb-skeleton-color: ${cssVars['--pb-skeleton-color'].light};
      --pb-dark-skeleton-color: ${cssVars['--pb-skeleton-color'].dark};
      --pb-fallback-img-color: ${cssVars['--pb-fallback-img-color'].light};
      --pb-dark-fallback-img-color: ${cssVars['--pb-fallback-img-color'].dark};
      --pb-fallback-img-background: ${cssVars['--pb-fallback-img-background']
        .light};
      --pb-dark-fallback-img-background: ${cssVars[
        '--pb-fallback-img-background'
      ].dark};
      --pb-favicon-size: 20px;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --pb-background-color: var(--pb-dark-background-color);
        --pb-background-color-hover: var(--pb-dark-background-color-hover);
        --pb-text-color: var(--pb-dark-text-color);
        --pb-border-color: var(--pb-dark-border-color);
        --pb-text-color-light: var(--pb-dark-metadata-color);
        --pb-fallback-img-color: var(--pb-dark-fallback-img-color);
        --pb-fallback-img-background: var(--pb-dark-fallback-img-background);
        --pb-skeleton-color: var(--pb-dark-skeleton-color);
      }
    }
  `;
}

export function forceColorMode(element: HTMLElement, colorMode: ColorMode) {
  Object.keys(cssVars).forEach((key) => {
    element.style.setProperty(
      key,
      cssVars[key as keyof typeof cssVars][colorMode].toString()
    );
  });
}
