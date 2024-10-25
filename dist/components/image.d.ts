import { LitElement } from 'lit';
import './skeleton-shape';
export declare class PreviewBoxImageElement extends LitElement {
    static styles: import("lit").CSSResult;
    imageUrl: string | null;
    imageAlt: string | null;
    isLoading: boolean;
    isImageError: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'previewbox-image': PreviewBoxImageElement;
    }
}
//# sourceMappingURL=image.d.ts.map