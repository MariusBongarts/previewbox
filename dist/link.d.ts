import { LinkPreviewDataDirective } from './directives/link-preview-data-directive';
import './components/skeleton-shape';
import './components/limit-info';
import './components/powered-by-previewbox';
import './components/favicon';
import './components/image';
/**
 * Previewbox Link
 *
 * @csspart link - The a-element that contains the link
 * @csspart container - The container element that contains the anchor element
 */
export declare class PreviewBoxLinkElement extends LinkPreviewDataDirective {
    static styles: import("lit").CSSResult;
    isImgError: boolean;
    isFaviconError: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'previewbox-link': PreviewBoxLinkElement;
    }
}
//# sourceMappingURL=link.d.ts.map