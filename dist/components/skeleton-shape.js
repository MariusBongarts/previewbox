var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './skeleton-shape.styles';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 * @part link-card - The figure element that contains the link card
 */
let PreviewBoxSkeletonShapeElement = class PreviewBoxSkeletonShapeElement extends LitElement {
    constructor() {
        super(...arguments);
        this.width = '100%';
        this.height = '16px';
    }
    render() {
        return html `<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`;
    }
};
PreviewBoxSkeletonShapeElement.styles = styles;
__decorate([
    property()
], PreviewBoxSkeletonShapeElement.prototype, "width", void 0);
__decorate([
    property()
], PreviewBoxSkeletonShapeElement.prototype, "height", void 0);
PreviewBoxSkeletonShapeElement = __decorate([
    customElement('previewbox-skeleton-shape')
], PreviewBoxSkeletonShapeElement);
export { PreviewBoxSkeletonShapeElement };
//# sourceMappingURL=skeleton-shape.js.map