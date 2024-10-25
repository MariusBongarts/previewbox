import { PropertyValues } from 'lit';
import { LinkPreviewData } from '../lib/domain/models/link-preview-data';
import { AnchorElementDataDirective } from './anchor-element-data.directive';
import { ApiError } from '../lib/services/api-fetcher';
/**
 * Directive that either fetches link preview data from an external URL or uses manually set properties.
 */
export declare class LinkPreviewDataDirective extends AnchorElementDataDirective {
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
//# sourceMappingURL=link-preview-data-directive.d.ts.map