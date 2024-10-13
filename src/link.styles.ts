import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    --background-color: var(--background-color, #ffffff);
    --text-color: var(--text-color, #000000);
    --border-color: var(--border-color, rgb(124 139 154 / 25%));
    --metadata-color: var(--metadata-color, rgba(0, 0, 0, 0.7));
    --dark-background-color: var(--dark-background-color, #121212);
    --dark-text-color: var(--dark-text-color, #e0e0e0);
    --dark-border-color: var(--dark-border-color, #8080803a);
    --dark-metadata-color: rgba(255, 255, 255, 0.7);
    --skeleton-color: var(--skeleton-color, rgb(229, 231, 235));
    --dark-skeleton-color: var(--dark-skeleton-color, rgb(55, 65, 81));
    --fallback-img-color: var(--fallback-img-color, hsl(220, 13%, 80%));
    --fallback-img-background: var(
      --fallback-img-background,
      rgb(229, 231, 235)
    );
    --dark-fallback-img-color: var(
      --dark-fallback-img-color,
      hsl(220, 13%, 40%)
    );
    --dark-fallback-img-background: var(
      --dark-fallback-img-background,
      rgb(55, 65, 81)
    );
    --favicon-size: var(--favicon-size, 20px);
  }

  .previewbox-link-card {
    margin: 0;
    padding: 0;
    background-color: var(--background-color, red);
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid var(--border-color);
  }

  .link {
    text-decoration: none;
    color: var(--text-color);
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
    color: var(--text-color);
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
    color: var(--metadata-color);
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
    color: var(--metadata-color);
    .previewbox-metadata-skeleton {
      display: flex;
      column-gap: 4px;
      align-items: center;

      .rounded::part(skeleton-shape) {
        border-radius: 50%;
      }
    }
    svg {
      width: var(--favicon-size);
      height: var(--favicon-size);
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

  .previewbox-metadata > :not(img) {
    opacity: 0.7;
  }

  .previewbox-favicon {
    width: var(--favicon-size);
    height: var(--favicon-size);
    margin-right: 6px;
  }

  .previewbox-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
    img,
    previewbox-skeleton-shape,
    .fallback-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      border-radius: 0 2px 2px 0;
      margin: 0;
      background-color: var(--fallback-img-background);

      @media (prefers-color-scheme: dark) {
        background-color: var(--dark-fallback-img-background);
      }

      svg {
        width: 40px;
        height: 40px;
        color: var(--fallback-img-color);
      }

      @media (prefers-color-scheme: dark) {
        svg {
          color: var(--dark-fallback-img-color);
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --background-color: var(--dark-background-color);
      --text-color: var(--dark-text-color);
      --border-color: var(--dark-border-color);
      --metadata-color: var(--dark-metadata-color);
    }

    .link {
      border: 1px solid var(--dark-border-color);
    }

    a {
      border: 1px solid var(--dark-border-color);
    }

    .previewbox-title {
      color: var(--dark-text-color);
    }

    .previewbox-description {
      color: var(--dark-metadata-color);
    }

    .previewbox-metadata {
      color: var(--dark-metadata-color);
    }
  }
`;
