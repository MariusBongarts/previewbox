import {html, LitElement} from 'lit';
import {styles} from './limit-info.styles';
import { definePreviewBoxCustomElement } from '../lib/util/custom-elements-helper';

export class PreviewBoxLimitInfoElement extends LitElement {
  static override styles = styles;

  override render() {
    const domain = window.location.origin;
    return html`<div class="limit-info-container">
      <span class="limit-info-text"
        >You've reached the API limit for ${domain}</span
      >
      <a
        class="limit-info-cta"
        target="_blank"
        href="https://previewbox.link/usage/${encodeURIComponent(domain)}"
        >Check Usage</a
      >
    </div>`;
  }
}

const customElementName = 'previewbox-limit-info' as const;

declare global {
  interface HTMLElementTagNameMap {
    [customElementName]: PreviewBoxLimitInfoElement;
  }
}

definePreviewBoxCustomElement(customElementName, PreviewBoxLimitInfoElement);