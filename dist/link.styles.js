import { css } from 'lit';
export const styles = css `
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    --pb-background-color: #ffffff;
    --pb-dark-background-color: #121212;
    --pb-text-color: #000000;
    --pb-border-color: rgb(124 139 154 / 25%);
    --pb-metadata-color: rgba(0, 0, 0, 0.7);
    --pb-dark-text-color: #e0e0e0;
    --pb-dark-border-color: #8080803a;
    --pb-dark-metadata-color: rgba(255, 255, 255, 0.7);
    --pb-skeleton-color: rgb(229, 231, 235);
    --pb-dark-skeleton-color: rgb(55, 65, 81);
    --pb-fallback-img-color: hsl(220, 13%, 80%);
    --pb-fallback-img-background: rgb(229, 231, 235);
    --pb-dark-fallback-img-color: hsl(220, 13%, 40%);
    --pb-dark-fallback-img-background: rgb(55, 65, 81);
    --pb-favicon-size: 20px;
  }

  .container {
    margin: 0;
    padding: 0;
    background-color: var(--pb-background-color);
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--pb-border-color);
    position: relative;
  }

  .previewbox-link {
    text-decoration: none;
    color: var(--pb-text-color);
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  .previewbox-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
    position: relative;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    height: 40px;
    overflow: hidden;
    @media (min-width: 768px) {
      line-height: 1.4;
      height: 24px;
    }
    color: var(--pb-text-color);
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--pb-metadata-color);
  }

  .previewbox-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    height: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--pb-metadata-color);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--pb-favicon-size);
      height: var(--pb-favicon-size);
      margin-right: 6px;
    }
  }

  .previewbox-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .previewbox-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .previewbox-metadata > :not(previewbox-favicon) {
    opacity: 0.7;
  }

  previewbox-favicon {
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --pb-background-color: var(--pb-dark-background-color);
      --pb-text-color: var(--pb-dark-text-color);
      --pb-border-color: var(--pb-dark-border-color);
      --pb-metadata-color: var(--pb-dark-metadata-color);
    }

    .previewbox-title {
      color: var(--pb-dark-text-color);
    }

    .previewbox-description {
      color: var(--pb-dark-metadata-color);
    }

    .previewbox-metadata {
      color: var(--pb-dark-metadata-color);
    }
  }

`;
//# sourceMappingURL=link.styles.js.map