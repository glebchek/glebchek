import { LitElement, html } from 'lit';
import './components/with-sidebar';

class MyElement extends LitElement {
  render() {
    return html`
      <with-sidebar>
        <header slot="sidebar">sidebar</header>
        <main slot="content">contetnt</main>
      </with-sidebar>
    `;
  }
}

customElements.define('my-app', MyElement);
