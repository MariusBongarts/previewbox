import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {styles} from './skeleton-shape.styles';
import { definePreviewBoxCustomElement } from '../lib/util/custom-elements-helper';

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

const customElementName = 'previewbox-skeleton-shape' as const;

declare global {
  interface HTMLElementTagNameMap {
    [customElementName]: PreviewBoxSkeletonShapeElement;
  }
}

definePreviewBoxCustomElement(customElementName, PreviewBoxSkeletonShapeElement);

