var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './favivon.styles';
import { TEST_IDS } from '../lib/util/test-helper';
import { fallbackFavicon } from '../templates';
let PreviewBoxFaviconElement = class PreviewBoxFaviconElement extends LitElement {
    constructor() {
        super(...arguments);
        this.faviconUrl = null;
        this.isFaviconError = false;
    }
    render() {
        return html `
    ${this.faviconUrl && !this.isFaviconError
            ? html `
          <img
            data-testid="${TEST_IDS.FAVICON}"
            class="previewbox-favicon"
            part="favicon"
            src=${this.faviconUrl ?? ''}
            alt="Favicon"
            @error=${() => (this.isFaviconError = true)}
          />
        `
            : fallbackFavicon}
    `;
    }
};
PreviewBoxFaviconElement.styles = styles;
__decorate([
    property()
], PreviewBoxFaviconElement.prototype, "faviconUrl", void 0);
__decorate([
    state()
], PreviewBoxFaviconElement.prototype, "isFaviconError", void 0);
PreviewBoxFaviconElement = __decorate([
    customElement('previewbox-favicon')
], PreviewBoxFaviconElement);
export { PreviewBoxFaviconElement };
//# sourceMappingURL=favicon.js.map