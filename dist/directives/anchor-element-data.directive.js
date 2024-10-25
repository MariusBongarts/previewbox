var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
/**
 * A base directive that contains the natural properties of an anchor element.
 */
export class AnchorElementDataDirective extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The URL to fetch the meta data from. E.g. https://web-highlights.com/.
         *
         * Reads the open graph data from the provided URL.
         */
        this.href = '';
        /**
         * The target attribute for the a-element. E.g. '_blank'.
         */
        this.target = '_blank';
        /**
         * The rel attribute for the a-element. E.g. 'noopener noreferrer'.
         */
        this.rel = '';
    }
}
__decorate([
    property()
], AnchorElementDataDirective.prototype, "href", void 0);
__decorate([
    property()
], AnchorElementDataDirective.prototype, "target", void 0);
__decorate([
    property()
], AnchorElementDataDirective.prototype, "rel", void 0);
//# sourceMappingURL=anchor-element-data.directive.js.map