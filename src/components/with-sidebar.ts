import { LitElement, html, css } from 'lit';

export class WithSidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s1);
    }

    ::slotted([slot='sidebar']) {
      flex-grow: 1;
    }

    ::slotted([slot='content']) {
      flex-basis: 0;
      flex-grow: 999;
      min-inline-size: 50%;
    }
  `;

  render() {
    return html`<slot name="sidebar"></slot><slot name="content"></slot>`;
  }
}

customElements.define('with-sidebar', WithSidebar);
