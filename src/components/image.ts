import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styles} from './image.styles';
import {TEST_IDS} from '../lib/util/test-helper';
import {fallbackImage} from '../templates';
import './skeleton-shape';

@customElement('previewbox-image')
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

declare global {
  interface HTMLElementTagNameMap {
    'previewbox-image': PreviewBoxImageElement;
  }
}
