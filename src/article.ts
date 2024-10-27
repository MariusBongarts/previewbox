import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './article.styles';
import {LinkPreviewDataDirective} from './directives/link-preview-data-directive';
import {TEST_IDS} from './lib/util/test-helper';
import './components/skeleton-shape';
import './components/limit-info';
import './components/powered-by-previewbox';
import './components/favicon';
import './components/image';
import {ApiError} from './lib/services/api-fetcher';

/**
 * Previewbox Link | <previewbox-article>
 *
 * @csspart link - The a-element that contains the link
 * @csspart container - The container element that contains the anchor element
 * @csspart thumbnail - The thumbnail element that contains the image
 */
@customElement('previewbox-article')
export class PreviewBoxArticleElement extends LinkPreviewDataDirective {
  static override styles = styles;

  /**
   * If attribute is present, the read more button will not be shown.
   */
  @property()
  hideReadMoreBtn: string | undefined;

  /**
   * The text for the read more button.
   *
   * Default: 'Read more'
   */
  @property()
  readMoreBtnText: string = 'Read more';

  override render() {
    return html`
      <article part="container" class="container">
        ${this._apiError === ApiError.API_LIMIT_REACHED
          ? html`<previewbox-limit-info></previewbox-limit-info>`
          : ''}
        <a
          href=${this.linkData.url || this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${TEST_IDS.ANCHOR_ELEMENT}"
        >
          <div class="previewbox-thumbnail" part="thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${TEST_IDS.TITLE}">
              ${this._isLoading
                ? html`<previewbox-skeleton-shape
                      width="100%"
                      height="20px"
                      data-testid="${TEST_IDS.TITLE_SKELETON}"
                    ></previewbox-skeleton-shape>
                    <previewbox-skeleton-shape
                      width="90%"
                      height="20px"
                      style="margin-top: 4px;"
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

            <div class="previewbox-read-more-container">
              ${typeof this.hideReadMoreBtn === 'undefined'
                ? html`
                    <button
                      class="previewbox-read-more"
                      data-testid="${TEST_IDS.READ_MORE_BUTTON}"
                      title=${this.readMoreBtnText}
                    >
                      ${this.readMoreBtnText}
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        ></path>
                      </svg>
                    </button>
                  `
                : html``}
            </div>
          </div>
        </a>
        ${typeof this.hidePoweredBy !== 'undefined'
          ? ''
          : html`<powered-by-previewbox
              data-testid="${TEST_IDS.POWERED_BY}"
            ></powered-by-previewbox>`}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'previewbox-article': PreviewBoxArticleElement;
  }
}
