import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './skeleton-shape.styles';

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
    'previewbox-skeleton-shape': PreviewBoxSkeletonShapeElement;
  }
}