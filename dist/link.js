var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles } from './link.styles';
import { LinkPreviewDataDirective } from './directives/link-preview-data-directive';
import { TEST_IDS } from './lib/util/test-helper';
import './components/skeleton-shape';
import './components/limit-info';
import './components/powered-by-previewbox';
import './components/favicon';
import './components/image';
import { ApiError } from './lib/services/api-fetcher';
/**
 * Previewbox Link
 *
 * @csspart link - The a-element that contains the link
 * @csspart container - The container element that contains the anchor element
 */
let PreviewBoxLinkElement = class PreviewBoxLinkElement extends LinkPreviewDataDirective {
    constructor() {
        super(...arguments);
        this.isImgError = false;
        this.isFaviconError = false;
    }
    render() {
        return html `
      <figure part="container" class="container">
        ${this._apiError === ApiError.API_LIMIT_REACHED
            ? html `<previewbox-limit-info></previewbox-limit-info>`
            : ''}
        <a
          href=${this.linkData.url || this.href}
          target=${this.target}
          part="link"
          rel=${this.rel}
          class="previewbox-link"
          data-testid="${TEST_IDS.ANCHOR_ELEMENT}"
        >
          <div class="previewbox-content">
            <div class="previewbox-title" data-testid="${TEST_IDS.TITLE}">
              ${this._isLoading
            ? html `<previewbox-skeleton-shape
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
            ? html `
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
            ? html `
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
            : html `
                    <previewbox-favicon
                      .faviconUrl=${this.linkData.favicon}
                    ></previewbox-favicon>
                    <span data-testid="${TEST_IDS.ORIGIN}"
                      >${this.linkData.origin}</span
                    >${this.linkData.author
                ? html `<span data-testid="${TEST_IDS.AUTHOR}"
                          >${this.linkData.author}</span
                        >`
                : ''}
                  `}
            </div>
          </div>
          <div class="previewbox-thumbnail">
            <previewbox-image
              .isLoading=${this._isLoading}
              .imageUrl=${this.linkData?.imageUrl}
              .imageAlt=${this.linkData?.imageAlt}
            ></previewbox-image>
          </div>
        </a>
        ${typeof this.hidePoweredBy !== 'undefined'
            ? ''
            : html `<powered-by-previewbox></powered-by-previewbox>`}
      </figure>
    `;
    }
};
PreviewBoxLinkElement.styles = styles;
__decorate([
    state()
], PreviewBoxLinkElement.prototype, "isImgError", void 0);
__decorate([
    state()
], PreviewBoxLinkElement.prototype, "isFaviconError", void 0);
PreviewBoxLinkElement = __decorate([
    customElement('previewbox-link')
], PreviewBoxLinkElement);
export { PreviewBoxLinkElement };
//# sourceMappingURL=link.js.map