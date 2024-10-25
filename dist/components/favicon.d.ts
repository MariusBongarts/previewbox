import { LitElement } from 'lit';
export declare class PreviewBoxFaviconElement extends LitElement {
    static styles: import("lit").CSSResult;
    faviconUrl: string | null;
    isFaviconError: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'previewbox-favicon': PreviewBoxFaviconElement;
    }
}
//# sourceMappingURL=favicon.d.ts.map