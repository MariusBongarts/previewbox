import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './skeleton-shape.styles';
import {PreviewBoxLinkElement} from '../link';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart link - The a-element that contains the link
 * @part link-card - The figure element that contains the link card
 */
@customElement('previewbox-skeleton-shape')
export class PreviewBoxSkeletonShapeElement extends LitElement {
  static override styles = styles;

  @property()
  width: number | string = '100%';

  @property()
  height: number | string = '16px';

  override render() {
    return html`<div
      class="skeleton-shape"
      part="skeleton-shape"
      role="progressbar"
      style="width: ${this.width}; height: ${this.height};"
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'previewbox-skeleton-shape': PreviewBoxLinkElement;
  }
}
