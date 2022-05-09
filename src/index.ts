import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  render() {
    return html`<h1>Hello World!</h1>`;
  }
}

customElements.define('my-app', MyElement);
