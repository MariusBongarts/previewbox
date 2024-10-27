declare module "lib/util/style-helper" {
    import { CSSResultGroup } from 'lit';
    type ColorMode = 'light' | 'dark';
    export function generateDefaultCssVars(): CSSResultGroup;
    export function forceColorMode(element: HTMLElement, colorMode: ColorMode): void;
}
declare module "shared.styles" {
    export const sharedStyles: import("lit").CSSResult;
}
declare module "article.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "lib/domain/models/link-preview-data" {
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
declare module "lib/util/url-helper" {
    export function urlWithoutSchema(url?: string | null): string;
    export function urlToOrigin(url?: string | null): string;
}
declare module "lib/services/api-fetcher" {
    import { LinkPreviewData } from "lib/domain/models/link-preview-data";
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
    class ApiFetcher {
        fetchLinkPreviewData(url: string, options: {
            apiUrl: string;
        }): Promise<ApiResponse<LinkPreviewData>>;
    }
    export const apiFetcher: ApiFetcher;
}
declare module "directives/link-preview-data-directive" {
    import { PropertyValues } from 'lit';
    import { LinkPreviewData } from "lib/domain/models/link-preview-data";
    import { AnchorElementDataDirective } from "directives/anchor-element-data.directive";
    import { ApiError } from "lib/services/api-fetcher";
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
        /**
         * If set to true, the components will always be in dark mode.
         */
        dark: string | undefined;
        /**
         * If set to true, the components will always be in light mode.
         */
        light: string | undefined;
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
        READ_MORE_BUTTON: string;
        POWERED_BY: string;
    };
    export function byTestId(testId: string): string;
}
declare module "components/skeleton-shape.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "lib/util/custom-elements-helper" {
    export const customElementIsRegistered: (name: string) => boolean;
    export const definePreviewBoxCustomElement: (name: string, element: CustomElementConstructor) => void;
}
declare module "components/skeleton-shape" {
    import { LitElement } from 'lit';
    export class PreviewBoxSkeletonShapeElement extends LitElement {
        static styles: import("lit").CSSResult;
        width: number | string;
        height: number | string;
        render(): import("lit-html").TemplateResult<1>;
    }
    const customElementName: "previewbox-skeleton-shape";
    global {
        interface HTMLElementTagNameMap {
            [customElementName]: PreviewBoxSkeletonShapeElement;
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
    const customElementName: "previewbox-limit-info";
    global {
        interface HTMLElementTagNameMap {
            [customElementName]: PreviewBoxLimitInfoElement;
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
    const customElementName: "powered-by-previewbox";
    global {
        interface HTMLElementTagNameMap {
            [customElementName]: PoweredByPreviewBoxElement;
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
    const customElementName: "previewbox-favicon";
    global {
        interface HTMLElementTagNameMap {
            [customElementName]: PreviewBoxFaviconElement;
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
    const customElementName: "previewbox-image";
    global {
        interface HTMLElementTagNameMap {
            [customElementName]: PreviewBoxImageElement;
        }
    }
}
declare module "article" {
    import { LinkPreviewDataDirective } from "directives/link-preview-data-directive";
    import "components/skeleton-shape";
    import "components/limit-info";
    import "components/powered-by-previewbox";
    import "components/favicon";
    import "components/image";
    /**
     * Previewbox Link | <previewbox-article>
     *
     * @csspart link - The a-element that contains the link
     * @csspart container - The container element that contains the anchor element
     * @csspart thumbnail - The thumbnail element that contains the image
     */
    export class PreviewBoxArticleElement extends LinkPreviewDataDirective {
        static styles: import("lit").CSSResult;
        /**
         * If attribute is present, the read more button will not be shown.
         */
        hideReadMoreBtn: string | undefined;
        /**
         * The text for the read more button.
         *
         * Default: 'Read more'
         */
        readMoreBtnText: string;
        render(): import("lit-html").TemplateResult<1>;
    }
    global {
        interface HTMLElementTagNameMap {
            'previewbox-article': PreviewBoxArticleElement;
        }
    }
}
declare module "link.styles" {
    export const styles: import("lit").CSSResult;
}
declare module "link" {
    import { LinkPreviewDataDirective } from "directives/link-preview-data-directive";
    import "components/skeleton-shape";
    import "components/limit-info";
    import "components/powered-by-previewbox";
    import "components/favicon";
    import "components/image";
    /**
     * Previewbox Link | <previewbox-link>
     *
     * @csspart link - The a-element that contains the link
     * @csspart container - The container element that contains the anchor element
     */
    export class PreviewBoxLinkElement extends LinkPreviewDataDirective {
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
    export * from "article";
}
declare module "lib/adapters/meta-api/model/open-graph-meta-data" {
    export interface OpenGraphImage {
        height?: number;
        type?: string;
        url: string;
        width?: number;
        alt?: string;
    }
    export interface OpenGraphMetaData {
        url: string | null;
        title?: string | null;
        description?: string | null;
        image?: OpenGraphImage;
        author?: string | null;
        favicon?: string | null;
        date?: string | null;
        origin?: string | null;
        type?: string | null;
    }
}
declare module "lib/adapters/meta-api/mapper/open-graph-meta-data-mapper" {
    import { LinkPreviewData } from "lib/domain/models/link-preview-data";
    import { OpenGraphMetaData } from "lib/adapters/meta-api/model/open-graph-meta-data";
    export const mapLinkMetaDataToLinkPreviewData: (data: OpenGraphMetaData) => LinkPreviewData;
}
declare module "test/test-utils" {
    export const wait: (ms: number) => Promise<unknown>;
    export const extractFaviconElement: (el: Element) => import("components/favicon").PreviewBoxFaviconElement | null | undefined;
    export const extractImageElement: (el: Element) => import("components/image").PreviewBoxImageElement | null | undefined;
}
declare module "test/article_test" {
    import "article";
}
declare module "test/link_test" {
    import "link";
}
//# sourceMappingURL=index.d.ts.map