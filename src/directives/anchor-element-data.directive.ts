import {LitElement} from 'lit';
import {property} from 'lit/decorators.js';

/**
 * A base directive that contains the natural properties of an anchor element.
 */
export class AnchorElementDataDirective extends LitElement {
  /**
   * The URL to fetch the meta data from. E.g. https://web-highlights.com/.
   *
   * Reads the open graph data from the provided URL.
   */
  @property()
  href = '';

  /**
   * The target attribute for the a-element. E.g. '_blank'.
   */
  @property()
  target = '_blank';

  /**
   * The rel attribute for the a-element. E.g. 'noopener noreferrer'.
   */
  @property()
  rel = '';
}
