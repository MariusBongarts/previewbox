import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styles} from './favivon.styles';
import { TEST_IDS } from '../lib/util/test-helper';
import { fallbackFavicon } from '../templates';

@customElement('previewbox-favicon')
export class PreviewBoxFaviconElement extends LitElement {
  static override styles = styles;

  @property()
  faviconUrl: string | null = null;

  @state()
  isFaviconError = false;

  override render() {
    return html`
    ${this.faviconUrl && !this.isFaviconError
      ? html`
          <img
            data-testid="${TEST_IDS.FAVICON}"
            class="previewbox-favicon"
            part="favicon"
            src=${this.faviconUrl ?? ''}
            alt="Favicon"
            @error=${() => (this.isFaviconError = true)}
          />
        `
      : fallbackFavicon}
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'previewbox-favicon': PreviewBoxFaviconElement;
    }
  }