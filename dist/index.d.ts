declare module "link.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "lib/domain/types" {
    export interface LinkPreviewData {
        title: string | null;
        imageUrl: string | null;
        imageAlt: string | null;
        description: string | null;
        url: string | null;
        author: string | null;
        favicon: string | null;
        date: string | null;
        origin: string | null;
    }
}
declare module "types/api-types" {
    export enum ApiError {
        API_LIMIT_REACHED = "API_LIMIT_REACHED",
        UNKNOWN_ERROR = "UNKNOWN_ERROR"
    }
    type ApiSuccessResponse<T> = {
        data: T;
    };
    type ApiErrorResponse = {
        error: ApiError;
    };
    export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
    export function isSuccessResponse<T>(response: ApiResponse<T>): response is ApiSuccessResponse<T>;
    export interface OpenGraphImage {
        height?: number;
        type?: string;
        url: string;
        width?: number;
        alt?: string;
    }
    export interface OpenGraphMetaData {
        title?: string;
        image?: OpenGraphImage;
        description?: string;
        url?: string;
        type?: string;
        author?: string;
        favicon?: string;
        date?: string;
    }
}
declare module "lib/util/url-helper" {
    export function urlWithoutSchema(url?: string | null): string;
    export function urlToOrigin(url?: string | null): string;
}
declare module "lib/adapters/meta-api/mapper" {
    import { OpenGraphMetaData } from "types/api-types";
    import { LinkPreviewData } from "lib/domain/types";
    export const mapLinkMetaDataToLinkPreviewData: (data: OpenGraphMetaData) => LinkPreviewData;
}
declare module "lib/adapters/meta-api/index" {
    import { ApiResponse } from "types/api-types";
    import { LinkPreviewData } from "lib/domain/types";
    export const fetchLinkPreviewData: (url: string, options: {
        apiUrl: string;
    }) => Promise<ApiResponse<LinkPreviewData>>;
}
declare module "directives/anchor-element-data.directive" {
    import { LitElement } from 'lit';
    /**
     * A base directive that contains the natural properties of an anchor element.
     */
    export class AnchorElementDataDirective extends LitElement {
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
}
declare module "directives/link-preview-data-directive" {
    import { PropertyValues } from 'lit';
    import { LinkPreviewData } from "lib/domain/types";
    import { AnchorElementDataDirective } from "directives/anchor-element-data.directive";
    import { ApiError } from "types/api-types";
    /**
     * Directive that either fetches link preview data from an external URL or uses manually set properties.
     */
    export class LinkPreviewDataDirective extends AnchorElementDataDirective {
        /**
         *
         * If the href is not provided, the url will be used to fetch the link preview data.
         */
        url: string | null;
        /**
         * A manually set title for the link preview.
         */
        title: string;
        /**
         * A manually set description for the link preview.
         */
        description: string | null;
        /**
         * A manually set author for the link preview.
         */
        author: string | null;
        /**
         * A manually set image URL for the link preview.
         */
        imageUrl: string | null;
        /**
         * A manually set image alt text for the link preview.
         */
        imageAlt: string | null;
        /**
         * A manually set favicon URL for the link preview.
         *
         * If not provided, a fallback favicon will be used.
         */
        faviconUrl: string | null;
        /**
         * A manually set date for the link preview.
         */
        date: string | null;
        /**
         * If set to true, the Powered by Previewbox info will not be shown.
         */
        hidePoweredBy: string | undefined;
        /**
         * The URL of the API to fetch the link preview data from.
         *
         * Defaults to the Previewbox API.
         */
        apiUrl: string;
        protected fetchedLinkPreviewData: LinkPreviewData | null;
        protected _isLoading: boolean;
        protected _isError: boolean;
        protected _apiError: ApiError | null;
        protected get linkData(): LinkPreviewData;
        protected firstUpdated(_changedProperties: PropertyValues): void;
        private _fetchLinkPreviewData;
        private _setManualData;
    }
}
declare module "lib/util/test-helper" {
    export const TEST_IDS: {
        LOADING: string;
        FAVICON: string;
        FAVICON_SKELETON: string;
        FAVICON_FALLBACK: string;
        IMAGE: string;
        IMAGE_SKELETON: string;
        IMAGE_FALLBACK: string;
        AUTHOR: string;
        DATE: string;
        ORIGIN: string;
        ANCHOR_ELEMENT: string;
        TITLE: string;
        TITLE_SKELETON: string;
        DESCRIPTION: string;
    };
    export function byTestId(testId: string): string;
}
declare module "components/skeleton-shape.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "components/skeleton-shape" {
    import { LitElement } from 'lit';
    /**
     * An example element.
     *
     * @slot - This element has a slot
     * @csspart link - The a-element that contains the link
     * @part link-card - The figure element that contains the link card
     */
    export class PreviewBoxSkeletonShapeElement extends LitElement {
        static styles: import("lit").CSSResult;
        width: number | string;
        height: number | string;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-skeleton-shape': PreviewBoxSkeletonShapeElement;
        }
    }
}
declare module "components/limit-info.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "components/limit-info" {
    import { LitElement } from 'lit';
    export class PreviewBoxLimitInfoElement extends LitElement {
        static styles: import("lit").CSSResult;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-limit-info': PreviewBoxLimitInfoElement;
        }
    }
}
declare module "components/powered-by-previewbox.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "components/powered-by-previewbox" {
    import { LitElement } from 'lit';
    export class PoweredByPreviewBoxElement extends LitElement {
        static styles: import("lit").CSSResult;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'powered-by-previewbox': PoweredByPreviewBoxElement;
        }
    }
}
declare module "components/favivon.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "templates/index" {
    export const fallbackImage: import("lit-html").TemplateResult<1>;
    export const fallbackFavicon: import("lit-html").TemplateResult<1>;
}
declare module "components/favicon" {
    import { LitElement } from 'lit';
    export class PreviewBoxFaviconElement extends LitElement {
        static styles: import("lit").CSSResult;
        faviconUrl: string | null;
        isFaviconError: boolean;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-favicon': PreviewBoxFaviconElement;
        }
    }
}
declare module "components/image.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "components/image" {
    import { LitElement } from 'lit';
    import "components/skeleton-shape";
    export class PreviewBoxImageElement extends LitElement {
        static styles: import("lit").CSSResult;
        imageUrl: string | null;
        imageAlt: string | null;
        isLoading: boolean;
        isImageError: boolean;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-image': PreviewBoxImageElement;
        }
    }
}
declare module "link" {
    import { LinkPreviewDataDirective } from "directives/link-preview-data-directive";
    import "components/skeleton-shape";
    import "components/limit-info";
    import "components/powered-by-previewbox";
    import "components/favicon";
    import "components/image";
    /**
     * Previewbox Link
     *
     * @csspart link - The a-element that contains the link
     * @csspart container - The container element that contains the anchor element
     */
    export class PreviewBoxLinkElement extends LinkPreviewDataDirective {
        static styles: import("lit").CSSResult;
        isImgError: boolean;
        isFaviconError: boolean;
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
    export const extractFaviconElement: (el: Element) => import("components/favicon").PreviewBoxFaviconElement | null | undefined;
    export const extractImageElement: (el: Element) => import("components/image").PreviewBoxImageElement | null | undefined;
}
declare module "test/link_test" {
    import "link";
}
//# sourceMappingURL=index.d.ts.map