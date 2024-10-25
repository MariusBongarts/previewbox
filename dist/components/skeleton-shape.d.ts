import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 * @part link-card - The figure element that contains the link card
 */
export declare class PreviewBoxSkeletonShapeElement extends LitElement {
    static styles: import("lit").CSSResult;
    width: number | string;
    height: number | string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'previewbox-skeleton-shape': PreviewBoxSkeletonShapeElement;
    }
}
//# sourceMappingURL=skeleton-shape.d.ts.map