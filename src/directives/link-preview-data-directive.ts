import {PropertyValues} from 'lit';
import {property, state} from 'lit/decorators.js';
import {LinkPreviewData} from '../lib/domain/models/link-preview-data';
import {AnchorElementDataDirective} from './anchor-element-data.directive';
import {urlToOrigin} from '../lib/util/url-helper';
import {
  ApiError,
  apiFetcher,
  isSuccessResponse,
} from '../lib/services/api-fetcher';
import {forceColorMode} from '../lib/util/style-helper';

/**
 * Directive that either fetches link preview data from an external URL or uses manually set properties.
 */
export class LinkPreviewDataDirective extends AnchorElementDataDirective {
  /**
   *
   * If the href is not provided, the url will be used to fetch the link preview data.
   */
  @property()
  url: string | null = null;

  /**
   * A manually set title for the link preview.
   */
  @property()
  override title: string = '';

  /**
   * A manually set description for the link preview.
   */
  @property()
  description: string | null = null;

  /**
   * A manually set author for the link preview.
   */
  @property()
  author: string | null = null;

  /**
   * A manually set image URL for the link preview.
   */
  @property()
  imageUrl: string | null = null;

  /**
   * A manually set image alt text for the link preview.
   */
  @property()
  imageAlt: string | null = null;

  /**
   * A manually set favicon URL for the link preview.
   *
   * If not provided, a fallback favicon will be used.
   */
  @property()
  faviconUrl: string | null = null;

  /**
   * A manually set date for the link preview.
   */
  @property()
  date: string | null = null;

  /**
   * If set to true, the Powered by Previewbox info will not be shown.
   */
  @property()
  hidePoweredBy: string | undefined = undefined;

  /**
   * The URL of the API to fetch the link preview data from.
   *
   * Defaults to the Previewbox API.
   */
  @property()
  apiUrl: string = window.location.href.startsWith('http://localhost:8000/demo')
    ? 'http://localhost:4444/api/v1/meta'
    : 'https://previewbox.link/api/v1/meta';

  /**
   * If set to true, the components will always be in dark mode.
   */
  @property()
  dark: string | undefined = undefined;

  /**
   * If set to true, the components will always be in light mode.
   */
  @property()
  light: string | undefined = undefined;

  @state()
  protected fetchedLinkPreviewData: LinkPreviewData | null = null;

  @state()
  protected _isLoading = false;

  @state()
  protected _isError = false;

  @state()
  protected _apiError: ApiError | null = null;

  protected get linkData(): LinkPreviewData {
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

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    if (typeof this.dark !== 'undefined') {
      forceColorMode(this, 'dark');
    }
    if (typeof this.light !== 'undefined') {
      forceColorMode(this, 'light');
    }
    if (!this.href && !this.url) {
      throw new Error(`No href or url provided for ${this.localName}`);
    }
    if (this.href) {
      this._fetchLinkPreviewData();
    } else {
      this._setManualData();
    }
  }

  private _fetchLinkPreviewData(): void {
    this._isLoading = true;
    apiFetcher
      .fetchLinkPreviewData(this.href, {apiUrl: this.apiUrl})
      .then((response) => {
        if (isSuccessResponse(response)) {
          this.fetchedLinkPreviewData = response.data;
        } else {
          this._isError = true;
          this._apiError = response.error;
        }
      })
      .catch((error) => {
        console.error(
          `Error fetching link preview data for ${this.href}: ${error}`
        );
        this._isError = true;
        this._apiError = ApiError.UNKNOWN_ERROR;
      })
      .finally(() => {
        this._isLoading = false;
      });
  }

  private _setManualData(): void {
    if (!this.url) {
      throw new Error(
        `As no href was provided, url is required for ${this.localName}`
      );
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
