import { LitElement, html, css } from 'lit';

export class Sidebar extends LitElement {
  static styles = css`
    :host {
      color: var(--color-2);
      background-color: var(--color-5);
      padding: var(--space-s-m);
    }
  `;

  render() {
    return html`<header>Header</header>`;
  }
}

customElements.define('my-sidebar', Sidebar);
