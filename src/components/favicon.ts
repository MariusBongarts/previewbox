import {html, LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import {styles} from './favivon.styles';
import {TEST_IDS} from '../lib/util/test-helper';
import {fallbackFavicon} from '../templates';
import { definePreviewBoxCustomElement } from '../lib/util/custom-elements-helper';

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

const customElementName = 'previewbox-favicon' as const;

declare global {
  interface HTMLElementTagNameMap {
    [customElementName]: PreviewBoxFaviconElement;
  }
}

definePreviewBoxCustomElement(customElementName, PreviewBoxFaviconElement);