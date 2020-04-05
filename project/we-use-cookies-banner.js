import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {style} from './we-use-cookies-banner-styles.js';

/**
 * `we-use-cookies-banner`
 * A light &amp; flexible npm package for making your website GDPR compliant. 👌
 *
 * ## Styling
 *
 * | Custom property | Description | Default |
 * | --- | --- | --- |
 * | `--custom-property` | What it does | `value` |
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class WeUseCookiesBanner extends LitElement {
  /**
   * Declare the properties that will
   * trigger calls to `_render`
   */
  static get properties() {
    return {
      greeting: String,
    };
  }
  /**
   * Use the constructor to set defaults to your properties.
   */
  constructor() {
    super();
    this.greeting = 'hello';
  }
  /**
   * Style application abstracted from the main template for ease of
   * extendability when making child classes with custom styles
   *
   * @return {TemplateResult}
   */
  _renderStyle() {
    return style;
  }
  /**
   * Build the TemplateResult that represents the elements DOM representation
   *
   * @return {TemplateResult}
   */
  render() {
    return html`
        ${this._renderStyle()}
        <h1>we-use-cookies-banner says '${this.greeting}'</h1>
    `;
  }
};

customElements.define(
  'we-use-cookies-banner',
  WeUseCookiesBanner
);
