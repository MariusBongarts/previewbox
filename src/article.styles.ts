import {css} from 'lit';

import {sharedStyles} from './shared.styles';

export const styles = css`
  ${sharedStyles}

  :host {
    max-width: 320px;
  }

  .container {
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .previewbox-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  .previewbox-content {
    padding: 16px;
    overflow: hidden;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .previewbox-title {
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .previewbox-description {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    width: 100%;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }


  .previewbox-thumbnail {
    position: relative;
    width: 100%;
    height: 180px;
  }

  .previewbox-read-more-container {
    margin-top: auto;
  }

  .previewbox-read-more {
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 8px;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: transparent;
    color: var(--pb-text-color-light);
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--pb-border-color);
    transition: background-color 0.2s ease-in-out;
    svg {
      width: 12px;
      height: 12px;
      fill: var(--pb-text-color-light);
      margin-left: 4px;
    }
  }

  .previewbox-read-more:hover {
    background-color: var(--pb-background-color-hover);
  }
`;
