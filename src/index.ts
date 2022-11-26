import { LitElement, html, css } from 'lit';

import { rootCss } from './css';
import './components/with-sidebar';
import './components/sidebar/sidebar';
import './components/content/content';

class App extends LitElement {
  static styles = [
    rootCss,
    css`
      :host {
        background-color: var(--color-6);
      }

      :host > with-sidebar {
        height: 100%;
        box-shadow: 0 0 8px rgba(13, 13, 13, 0.15);
        margin-left: auto;
        margin-right: auto;
        max-width: 70rem;
      }
    `,
  ];

  render() {
    return html`
      <with-sidebar>
        <my-sidebar slot="sidebar"></my-sidebar>
        <my-content slot="content"></my-content>
      </with-sidebar>
    `;
  }
}

customElements.define('my-app', App);
