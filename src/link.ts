import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {LinkPreviewData} from './lib/domain/types';
import {fetchLinkPreviewData} from './lib/adapters/meta-api';
import {styles} from './link.styles';
import {urlToOrigin} from './lib/util/url-helper';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 */
@customElement('previewbox-link')
export class PreviewBoxLinkElement extends LitElement {
  static override styles = styles;

  /**
   * The URL to fetch the meta data from. E.g. https://web-highlights.com/
   */
  @property()
  url = '';

  @state()
  private _linkPreviewProps: LinkPreviewData | null = null;

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    fetchLinkPreviewData(this.url).then((data) => {
      this._linkPreviewProps = data;
    });
  }

  override render() {
    if (!this.url) {
      return html`<div>No URL provided</div>`;
    }
    if (!this._linkPreviewProps) {
      return html`<div data-testid="loading">Loading...</div>`;
    }
    const origin = urlToOrigin(this.url);
    return html`
      <figure part="link-card" class="previewbox-link-card">
        <a href=${this.url} part="link" class="link">
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
              /><span class="kg-bookmark-author"
                >${origin}</span
              >${this._linkPreviewProps.author ? html`<span class="kg-bookmark-publisher"
                >${this._linkPreviewProps.author}</span
              >` : ''}
            </div>
          </div>
          <div class="kg-bookmark-thumbnail">
            <img
              src=${this._linkPreviewProps?.image?.url ?? ''}
              alt=${this._linkPreviewProps.image?.alt ?? 'Thumbnail image of ' + this.url}
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
