import { LitElement, html, css } from 'lit';
import './components/with-sidebar';
import './components/sidebar/sidebar';
import './components/content/content';

class App extends LitElement {
  static styles = css`
    :host {
      --color-1: #0b0a0a;
      --color-2: #403a3a;
      --color-3: #707070;
      --color-4: #fafafa;
      --color-5: #f0efef;
      --color-6: #fcfcfc;

      --step--2: clamp(0.69rem, calc(0.69rem + 0.04vw), 0.72rem);
      --step--1: clamp(0.83rem, calc(0.81rem + 0.12vw), 0.9rem);
      --step-0: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);
      --step-1: clamp(1.2rem, calc(1.13rem + 0.36vw), 1.41rem);
      --step-2: clamp(1.44rem, calc(1.33rem + 0.55vw), 1.76rem);
      --step-3: clamp(1.73rem, calc(1.57rem + 0.81vw), 2.2rem);
      --step-4: clamp(2.07rem, calc(1.84rem + 1.16vw), 2.75rem);
      --step-5: clamp(2.49rem, calc(2.16rem + 1.63vw), 3.43rem);

      --space-3xs: clamp(0.31rem, calc(0.29rem + 0.12vw), 0.38rem);
      --space-2xs: clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem);
      --space-xs: clamp(1rem, calc(0.95rem + 0.24vw), 1.13rem);
      --space-s: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
      --space-m: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
      --space-l: clamp(2.63rem, calc(2.48rem + 0.73vw), 3rem);
      --space-xl: clamp(3.94rem, calc(3.72rem + 1.1vw), 4.5rem);
      --space-2xl: clamp(5.25rem, calc(4.96rem + 1.46vw), 6rem);
      --space-3xl: clamp(7.88rem, calc(7.44rem + 2.2vw), 9rem);

      /* One-up pairs */
      --space-3xs-2xs: clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem);
      --space-2xs-xs: clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem);
      --space-xs-s: clamp(1rem, calc(0.8rem + 0.98vw), 1.5rem);
      --space-s-m: clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem);
      --space-m-l: clamp(2rem, calc(1.61rem + 1.95vw), 3rem);
      --space-l-xl: clamp(2.63rem, calc(1.89rem + 3.66vw), 4.5rem);
      --space-xl-2xl: clamp(3.94rem, calc(3.13rem + 4.02vw), 6rem);
      --space-2xl-3xl: clamp(5.25rem, calc(3.79rem + 7.32vw), 9rem);

      font-size: var(--step-0);
      background-color: var(--color-6);
    }

    :host > with-sidebar {
      height: 100%;
      box-shadow: 0 0 8px rgba(13, 13, 13, 0.15);
      margin-left: auto;
      margin-right: auto;
      max-width: 70rem;
    }
  `;

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
