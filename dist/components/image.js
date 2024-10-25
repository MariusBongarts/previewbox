var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './image.styles';
import { TEST_IDS } from '../lib/util/test-helper';
import { fallbackImage } from '../templates';
import './skeleton-shape';
let PreviewBoxImageElement = class PreviewBoxImageElement extends LitElement {
    constructor() {
        super(...arguments);
        this.imageUrl = null;
        this.imageAlt = null;
        this.isLoading = true;
        this.isImageError = false;
    }
    render() {
        if (this.isLoading) {
            return html `<previewbox-skeleton-shape
        height="100%"
        data-testid="${TEST_IDS.IMAGE_SKELETON}"
      >
        ${fallbackImage}
      </previewbox-skeleton-shape>`;
        }
        return html `
      ${this.imageUrl && !this.isImageError
            ? html `
            <img
              data-testid="${TEST_IDS.IMAGE}"
              part="image"
              src=${this.imageUrl ?? ''}
              alt=${this.imageAlt ?? 'Thumbnail image'}
              @error=${() => (this.isImageError = true)}
            />
          `
            : html `
            <figure
              class="fallback-img"
              part="image"
              data-testid="${TEST_IDS.IMAGE_FALLBACK}"
            >
              ${fallbackImage}
            </figure>
          `}
    `;
    }
};
PreviewBoxImageElement.styles = styles;
__decorate([
    property()
], PreviewBoxImageElement.prototype, "imageUrl", void 0);
__decorate([
    property()
], PreviewBoxImageElement.prototype, "imageAlt", void 0);
__decorate([
    property({ type: Boolean })
], PreviewBoxImageElement.prototype, "isLoading", void 0);
__decorate([
    state()
], PreviewBoxImageElement.prototype, "isImageError", void 0);
PreviewBoxImageElement = __decorate([
    customElement('previewbox-image')
], PreviewBoxImageElement);
export { PreviewBoxImageElement };
//# sourceMappingURL=image.js.map