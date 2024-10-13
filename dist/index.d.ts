declare module "link.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "lib/util/url-helper" {
    export function urlWithoutSchema(url?: string | null): string;
    export function urlToOrigin(url?: string | null): string;
}
declare module "lib/domain/types" {
    interface OpenGraphImage {
        height?: string;
        type: string;
        url: string;
        width?: string;
    }
    export interface LinkPreviewData {
        title?: string;
        image?: OpenGraphImage & {
            alt?: string;
        };
        description?: string;
        url?: string;
        type?: string;
        author?: string;
        favicon?: string;
        date?: string;
    }
}
declare module "lib/adapters/meta-api/index" {
    import { LinkPreviewData } from "lib/domain/types";
    export const fetchLinkPreviewData: (url: string) => Promise<LinkPreviewData>;
}
declare module "directives/base-directive" {
    import { LitElement, PropertyValues } from 'lit';
    import { LinkPreviewData } from "lib/domain/types";
    export class BaseDirective extends LitElement {
        /**
         * The URL to fetch the meta data from. E.g. https://web-highlights.com/.
         *
         * Reads the open graph data from the provided URL.
         */
        href: string;
        /**
         * Manually set the URL without fetching the data from the provided href.
         */
        url: string;
        /**
         * The target attribute for the a-element. E.g. '_blank'.
         */
        target: string;
        /**
         * The rel attribute for the a-element. E.g. 'noopener noreferrer'.
         */
        rel: string;
        protected _linkPreviewProps: LinkPreviewData | null;
        protected firstUpdated(_changedProperties: PropertyValues): void;
    }
}
declare module "link" {
    import { BaseDirective } from "directives/base-directive";
    /**
     * An example element.
     *
     * @slot - This element has a slot
     * @csspart link - The a-element that contains the link
     * @part link-card - The figure element that contains the link card
     */
    export class PreviewBoxLinkElement extends BaseDirective {
        static styles: import("lit").CSSResult;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-link': PreviewBoxLinkElement;
        }
    }
}
declare module "index" {
    export * from "link";
}
declare module "lib/adapters/meta-api/types" {
    interface OpenGraphImage {
        height?: string;
        type: string;
        url: string;
        width?: string;
    }
    export interface LinkMetaData {
        title?: string;
        image?: OpenGraphImage & {
            alt?: string;
        };
        description?: string;
        url?: string;
        type?: string;
        author?: string;
        favicon?: string;
        date?: string;
    }
}
declare module "test/test-utils" {
    export const wait: (ms: number) => Promise<unknown>;
}
declare module "test/link_test" {
    import "link";
}
declare module "types/api-types" {
    interface OpenGraphImage {
        height?: string;
        type: string;
        url: string;
        width?: string;
    }
    export interface LinkMetaData {
        title?: string;
        image?: OpenGraphImage & {
            alt?: string;
        };
        description?: string;
        url?: string;
        type?: string;
        author?: string;
        favicon?: string;
        date?: string;
    }
}
//# sourceMappingURL=index.d.ts.map