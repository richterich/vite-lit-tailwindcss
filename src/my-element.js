import {LitElement, unsafeCSS, html} from 'lit';
import styles from '@/my-element.component.css?inline';
/**
 * An example component.
 *
 * @slot {h1} heading - Heading node
 * @slot {p} text - Paragraph node
 * @csspart button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/normalize.css" />
      <div class="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src="vite.svg" class="vite" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src="lit.svg" class="lit" alt="Lit logo" />
        </a>
      </div>
      <slot name="heading">%header%</slot>
      <div class="counter">
        <button @click=${this._onClick} part="button">count is ${this.count}</button>
      </div>
      <slot name="text">%text%</slot>
    `;
  }

  _onClick() {
    this.count++;
  }

  static get styles() {
    return unsafeCSS(styles);
  }
}
