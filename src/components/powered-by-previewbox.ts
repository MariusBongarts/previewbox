import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styles} from './powered-by-previewbox.styles';

@customElement('powered-by-previewbox')
export class PoweredByPreviewBoxElement extends LitElement {
  static override styles = styles;

  override render() {
    return html`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'powered-by-previewbox': PoweredByPreviewBoxElement;
  }
}
