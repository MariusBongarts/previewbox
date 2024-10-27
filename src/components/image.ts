import {html, LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import {styles} from './image.styles';
import {TEST_IDS} from '../lib/util/test-helper';
import {fallbackImage} from '../templates';
import './skeleton-shape';
import {customElementIsRegistered, definePreviewBoxCustomElement} from '../lib/util/custom-elements-helper';

export class PreviewBoxImageElement extends LitElement {
  static override styles = styles;

  @property()
  imageUrl: string | null = null;

  @property()
  imageAlt: string | null = null;

  @property({type: Boolean})
  isLoading = true;

  @state()
  isImageError = false;

  override render() {
    if (this.isLoading) {
      return html`<previewbox-skeleton-shape
        height="100%"
        data-testid="${TEST_IDS.IMAGE_SKELETON}"
      >
        ${fallbackImage}
      </previewbox-skeleton-shape>`;
    }
    return html`
      ${this.imageUrl && !this.isImageError
        ? html`
            <img
              data-testid="${TEST_IDS.IMAGE}"
              part="image"
              src=${this.imageUrl ?? ''}
              alt=${this.imageAlt ?? 'Thumbnail image'}
              @error=${() => (this.isImageError = true)}
            />
          `
        : html`
            <figure
              class="fallback-img"
              part="image"
              data-testid="${TEST_IDS.IMAGE_FALLBACK}"
            >
              ${fallbackImage}
            </figure>
          `}
    `;
  }
}

const customElementName = 'previewbox-image' as const;

declare global {
  interface HTMLElementTagNameMap {
    [customElementName]: PreviewBoxImageElement;
  }
}

definePreviewBoxCustomElement(customElementName, PreviewBoxImageElement);
