import {LitElement, PropertyValues} from 'lit';
import {property, state} from 'lit/decorators.js';
import {LinkPreviewData} from '../lib/domain/types';
import {fetchLinkPreviewData} from '../lib/adapters/meta-api';

export class BaseDirective extends LitElement {
  /**
   * The URL to fetch the meta data from. E.g. https://web-highlights.com/.
   *
   * Reads the open graph data from the provided URL.
   */
  @property()
  href = '';

  /**
   * Manually set the URL without fetching the data from the provided href.
   */
  @property()
  url = '';

  /**
   * The target attribute for the a-element. E.g. '_blank'.
   */
  @property()
  target = '_blank';

  /**
   * The rel attribute for the a-element. E.g. 'noopener noreferrer'.
   */
  @property()
  rel = '';

  @state()
  protected _linkPreviewProps: LinkPreviewData | null = null;

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    console.log('firstUpdated', !!this.href);
    if (this.href) {
      fetchLinkPreviewData(this.href).then((data) => {
        this._linkPreviewProps = data;
      });
    }
  }
}
