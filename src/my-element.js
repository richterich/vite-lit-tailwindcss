import {LitElement, html} from 'lit';

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
      <link rel="stylesheet" href="/styles.css" />
      <div class="flex justify-center">
        <a
          href="https://vitejs.dev"
          class="font-medium text-[#646cff] hover:text-[#747bff] dark:hover:text-[#535bf2]"
          target="_blank">
          <img
            src="vite.svg"
            class="box-content h-[6em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo" />
        </a>
        <a
          href="https://lit.dev"
          class="font-medium text-[#646cff] hover:text-[#747bff] dark:hover:text-[#535bf2]"
          target="_blank">
          <img
            src="lit.svg"
            class="box-content h-[6em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#325cffaa]"
            alt="Lit logo" />
        </a>
      </div>
      <slot name="heading">%header%</slot>
      <div class="p-8">
        <button
          @click=${this._onClick}
          part="button"
          class="cursor-pointer rounded-lg border border-transparent bg-[#f9f9f9] px-[1.2em] py-[0.6em] text-base transition-colors duration-[0.25s] hover:border-[#646cff] dark:bg-[#1a1a1a]">
          count is ${this.count}
        </button>
      </div>
      <slot name="text">%text%</slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}
