import { LitElement } from 'lit';
/**
 * A base directive that contains the natural properties of an anchor element.
 */
export declare class AnchorElementDataDirective extends LitElement {
    /**
     * The URL to fetch the meta data from. E.g. https://web-highlights.com/.
     *
     * Reads the open graph data from the provided URL.
     */
    href: string;
    /**
     * The target attribute for the a-element. E.g. '_blank'.
     */
    target: string;
    /**
     * The rel attribute for the a-element. E.g. 'noopener noreferrer'.
     */
    rel: string;
}
//# sourceMappingURL=anchor-element-data.directive.d.ts.map