import {html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {styles} from './link.styles';
import {LinkPreviewDataDirective} from './directives/link-preview-data-directive';
import {TEST_IDS} from './lib/util/test-helper';
import './components/skeleton-shape';
import {fallbackFavicon, fallbackImage} from './templates';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 * @part link-card - The figure element that contains the link card
 */
@customElement('previewbox-link')
export class PreviewBoxLinkElement extends LinkPreviewDataDirective {
  static override styles = styles;

  @state()
  isImgError = false;

  @state()
  isFaviconError = false;

  override render() {
    return html`
      <figure part="link-card" class="previewbox-link-card">
        <a
          href=${this.linkData.url || this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="link"
          data-testid="${TEST_IDS.ANCHOR_ELEMENT}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${TEST_IDS.TITLE}">
              ${this._isLoading
                ? html`<previewbox-skeleton-shape
                    width="200px"
                    height="20px"
                    data-testid="${TEST_IDS.TITLE_SKELETON}"
                  />`
                : this.linkData.title}
            </div>
            <div
              class="previewbox-description"
              data-testid="${TEST_IDS.DESCRIPTION}"
            >
              ${this._isLoading
                ? html`
                    <previewbox-skeleton-shape
                      width="100%"
                      height="16px"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="70%"
                      height="16px"
                      style="margin-top: 4px;"
                    ></previewbox-skeleton-shape>
                  `
                : this.linkData.description}
            </div>
            <div class="previewbox-metadata">
              ${this._isLoading
                ? html`
                    <div class="previewbox-metadata-skeleton">
                      <previewbox-skeleton-shape
                        width="14px"
                        data-testid="${TEST_IDS.FAVICON_SKELETON}"
                        height="14px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="60px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="4px"
                        height="4px"
                        class="rounded"
                      ></previewbox-skeleton-shape>
                      <previewbox-skeleton-shape
                        width="44px"
                        height="14px"
                      ></previewbox-skeleton-shape>
                    </div>
                  `
                : html`
                    ${this.linkData?.favicon && !this.isFaviconError
                      ? html`
                          <img
                            data-testid="${TEST_IDS.FAVICON}"
                            class="previewbox-favicon"
                            src=${this.linkData.favicon ?? ''}
                            alt="Favicon of ${this.linkData.origin}"
                            @error=${() => (this.isFaviconError = true)}
                          />
                        `
                      : fallbackFavicon}
                    <span data-testid="${TEST_IDS.ORIGIN}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author
                      ? html`<span data-testid="${TEST_IDS.AUTHOR}"
                          >${this.linkData.author}</span
                        >`
                      : ''}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            ${this._isLoading
              ? html`<previewbox-skeleton-shape
                  height="100%"
                  data-testid="${TEST_IDS.THUMBNAIL_SKELETON}"
                >
                  ${fallbackImage}
                </previewbox-skeleton-shape>`
              : html`
                  ${this.linkData?.imageUrl && !this.isImgError
                    ? html`
                        <img
                          data-testid="${TEST_IDS.THUMBNAIL}"
                          src=${this.linkData?.imageUrl ?? ''}
                          alt=${this.linkData?.imageAlt ??
                          'Thumbnail image of ' + this.url}
                          @error=${() => (this.isImgError = true)}
                        />
                      `
                    : html`
                        <figure
                          class="fallback-img"
                          data-testid="${TEST_IDS.THUMBNAIL_FALLBACK}"
                        >
                          ${fallbackImage}
                        </figure>
                      `}
                `}
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
