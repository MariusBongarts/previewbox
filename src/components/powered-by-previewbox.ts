import {html, LitElement} from 'lit';
import {styles} from './powered-by-previewbox.styles';
import {definePreviewBoxCustomElement} from '../lib/util/custom-elements-helper';
export class PoweredByPreviewBoxElement extends LitElement {
  static override styles = styles;

  override render() {
    return html`<span class="powered-by">
      Powered by
      <a href="https://previewbox.link">Previewbox</a>
    </span> `;
  }
}

const customElementName = 'powered-by-previewbox' as const;
declare global {
  interface HTMLElementTagNameMap {
    [customElementName]: PoweredByPreviewBoxElement;
  }
}

definePreviewBoxCustomElement(customElementName, PoweredByPreviewBoxElement);
