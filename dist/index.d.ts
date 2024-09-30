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
declare module "link.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "lib/util/url-helper" {
    export function urlWithoutSchema(url?: string | null): string;
    export function urlToOrigin(url?: string | null): string;
}
declare module "link" {
    import { LitElement, PropertyValues } from 'lit';
    /**
     * An example element.
     *
     * @slot - This element has a slot
     * @csspart link - The a-element that contains the link
     */
    export class PreviewBoxLinkElement extends LitElement {
        static styles: import("lit").CSSResult;
        /**
         * The URL to fetch the meta data from. E.g. https://web-highlights.com/
         */
        url: string;
        private _linkPreviewProps;
        protected firstUpdated(_changedProperties: PropertyValues): void;
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