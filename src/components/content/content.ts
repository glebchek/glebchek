import { LitElement, html, css } from 'lit';
import { commonCss } from '../../css';

export class Content extends LitElement {
  static styles = [
    commonCss,
    css`
      :host {
        color: var(--color-2);
        padding: var(--space-s-m);
      }
    `,
  ];

  render() {
    return html`<main>Content</main>`;
  }
}

customElements.define('my-content', Content);
