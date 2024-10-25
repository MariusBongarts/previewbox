import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styles} from './limit-info.styles';

@customElement('previewbox-limit-info')
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

declare global {
  interface HTMLElementTagNameMap {
    'previewbox-limit-info': PreviewBoxLimitInfoElement;
  }
}