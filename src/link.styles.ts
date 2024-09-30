import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    --background-color: #ffffff;
    --text-color: #000000;
    --border-color: rgb(124 139 154 / 25%);
    --metadata-color: rgba(0, 0, 0, 0.7);
    --dark-background-color: #121212;
    --dark-text-color: #e0e0e0;
    --dark-border-color: #8080803a;
    --dark-metadata-color: rgba(255, 255, 255, 0.7);
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

  .kg-bookmark-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
  }

  .kg-bookmark-title {
    font-size: 1rem;
    line-height: 1.4em;
    font-weight: 500;
    color: var(--text-color);
  }

  .kg-bookmark-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    max-height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--metadata-color);
  }

  .kg-bookmark-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--metadata-color);
  }

  .kg-bookmark-metadata > span:nth-of-type(2)::before {
    content: '•';
    margin: 0px 6px;
  }

  .kg-bookmark-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kg-bookmark-metadata > :not(img) {
    opacity: 0.7;
  }

  .kg-bookmark-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  .kg-bookmark-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0 2px 2px 0;
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

    .kg-bookmark-title {
      color: var(--dark-text-color);
    }

    .kg-bookmark-description {
      color: var(--dark-metadata-color);
    }

    .kg-bookmark-metadata {
      color: var(--dark-metadata-color);
    }
  }
`;
