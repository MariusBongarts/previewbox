var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, state } from 'lit/decorators.js';
import { AnchorElementDataDirective } from './anchor-element-data.directive';
import { urlToOrigin } from '../lib/util/url-helper';
import { ApiError, fetchLinkPreviewData, isSuccessResponse, } from '../lib/services/api-fetcher';
/**
 * Directive that either fetches link preview data from an external URL or uses manually set properties.
 */
export class LinkPreviewDataDirective extends AnchorElementDataDirective {
    constructor() {
        super(...arguments);
        /**
         *
         * If the href is not provided, the url will be used to fetch the link preview data.
         */
        this.url = null;
        /**
         * A manually set title for the link preview.
         */
        this.title = '';
        /**
         * A manually set description for the link preview.
         */
        this.description = null;
        /**
         * A manually set author for the link preview.
         */
        this.author = null;
        /**
         * A manually set image URL for the link preview.
         */
        this.imageUrl = null;
        /**
         * A manually set image alt text for the link preview.
         */
        this.imageAlt = null;
        /**
         * A manually set favicon URL for the link preview.
         *
         * If not provided, a fallback favicon will be used.
         */
        this.faviconUrl = null;
        /**
         * A manually set date for the link preview.
         */
        this.date = null;
        /**
         * If set to true, the Powered by Previewbox info will not be shown.
         */
        this.hidePoweredBy = undefined;
        /**
         * The URL of the API to fetch the link preview data from.
         *
         * Defaults to the Previewbox API.
         */
        this.apiUrl = window.location.origin.startsWith('http://localhost:8080/demo')
            ? 'http://localhost:4444/v1/meta'
            : 'https://previewbox.link/api/v1/meta';
        this.fetchedLinkPreviewData = null;
        this._isLoading = false;
        this._isError = false;
        this._apiError = null;
    }
    get linkData() {
        if (this.fetchedLinkPreviewData) {
            return this.fetchedLinkPreviewData;
        }
        return {
            url: this.url,
            description: this.description,
            title: this.title,
            author: this.author,
            imageUrl: this.imageUrl,
            imageAlt: this.imageAlt,
            favicon: this.faviconUrl,
            date: this.date,
            origin: urlToOrigin(this.url),
        };
    }
    firstUpdated(_changedProperties) {
        if (!this.href && !this.url) {
            throw new Error(`No href or url provided for ${this.localName}`);
        }
        if (this.href) {
            this._fetchLinkPreviewData();
        }
        else {
            this._setManualData();
        }
    }
    _fetchLinkPreviewData() {
        this._isLoading = true;
        fetchLinkPreviewData(this.href, { apiUrl: this.apiUrl })
            .then((response) => {
            if (isSuccessResponse(response)) {
                this.fetchedLinkPreviewData = response.data;
            }
            else {
                this._isError = true;
                this._apiError = response.error;
            }
        })
            .catch((error) => {
            console.error(`Error fetching link preview data for ${this.href}: ${error}`);
            this._isError = true;
            this._apiError = ApiError.UNKNOWN_ERROR;
        })
            .finally(() => {
            this._isLoading = false;
        });
    }
    _setManualData() {
        if (!this.url) {
            throw new Error(`As no href was provided, url is required for ${this.localName}`);
        }
        this.fetchedLinkPreviewData = {
            url: this.url,
            description: this.description,
            title: this.title,
            author: this.author,
            imageUrl: this.imageUrl,
            imageAlt: this.imageAlt,
            favicon: this.faviconUrl,
            date: this.date,
            origin: urlToOrigin(this.url),
        };
    }
}
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "url", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "title", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "description", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "author", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "imageUrl", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "imageAlt", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "faviconUrl", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "date", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "hidePoweredBy", void 0);
__decorate([
    property()
], LinkPreviewDataDirective.prototype, "apiUrl", void 0);
__decorate([
    state()
], LinkPreviewDataDirective.prototype, "fetchedLinkPreviewData", void 0);
__decorate([
    state()
], LinkPreviewDataDirective.prototype, "_isLoading", void 0);
__decorate([
    state()
], LinkPreviewDataDirective.prototype, "_isError", void 0);
__decorate([
    state()
], LinkPreviewDataDirective.prototype, "_apiError", void 0);
//# sourceMappingURL=link-preview-data-directive.js.map