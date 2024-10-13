import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styles} from './link.styles';
import {urlToOrigin} from './lib/util/url-helper';
import {BaseDirective} from './directives/base-directive';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 * @part link-card - The figure element that contains the link card
 */
@customElement('previewbox-link')
export class PreviewBoxLinkElement extends BaseDirective {
  static override styles = styles;

  override render() {
    if (!this.href) {
      return html`<div>No 'href' provided</div>`;
    }
    if (!this._linkPreviewProps?.url) {
      return html`<div data-testid="loading">Loading...</div>`;
    }
    const origin = urlToOrigin(this._linkPreviewProps.url);
    return html`
      <figure part="link-card" class="previewbox-link-card">
        <a
          href=${this._linkPreviewProps.url}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="link"
        >
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">${this._linkPreviewProps.title}</div>
            <div class="kg-bookmark-description">
              ${this._linkPreviewProps.description}
            </div>
            <div class="kg-bookmark-metadata">
              <img
                class="kg-bookmark-icon"
                src=${this._linkPreviewProps.favicon ?? ''}
                alt="Favicon of ${origin}"
              /><span class="kg-bookmark-author">${origin}</span>${this
                ._linkPreviewProps.author
                ? html`<span class="kg-bookmark-publisher"
                    >${this._linkPreviewProps.author}</span
                  >`
                : ''}
            </div>
          </div>
          <div class="kg-bookmark-thumbnail">
            <img
              src=${this._linkPreviewProps?.image?.url ?? ''}
              alt=${this._linkPreviewProps.image?.alt ??
              'Thumbnail image of ' + this.url}
            />
          </div>
        </a>
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'previewbox-link': PreviewBoxLinkElement;
  }
}
