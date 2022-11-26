import { css } from 'lit';

export const globalVariables = css`
  :host {
    --color-1: #0b0a0a;
    --color-2: #403a3a;
    --color-3: #707070;
    --color-4: #fafafa;
    --color-5: #f0efef;
    --color-6: #fcfcfc;

    /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1248,18,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
    --step--2: clamp(0.69rem, calc(0.69rem + 0.04vw), 0.72rem);
    --step--1: clamp(0.83rem, calc(0.81rem + 0.12vw), 0.9rem);
    --step-0: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);
    --step-1: clamp(1.2rem, calc(1.13rem + 0.36vw), 1.41rem);
    --step-2: clamp(1.44rem, calc(1.33rem + 0.55vw), 1.76rem);
    --step-3: clamp(1.73rem, calc(1.57rem + 0.81vw), 2.2rem);
    --step-4: clamp(2.07rem, calc(1.84rem + 1.16vw), 2.75rem);
    --step-5: clamp(2.49rem, calc(2.16rem + 1.63vw), 3.43rem);

    --space-3xs: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);
    --space-2xs: clamp(0.5rem, calc(0.48rem + 0.11vw), 0.56rem);
    --space-xs: clamp(0.75rem, calc(0.71rem + 0.22vw), 0.88rem);
    --space-s: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);
    --space-m: clamp(1.5rem, calc(1.44rem + 0.32vw), 1.69rem);
    --space-l: clamp(2rem, calc(1.91rem + 0.43vw), 2.25rem);
    --space-xl: clamp(3rem, calc(2.87rem + 0.65vw), 3.38rem);
    --space-2xl: clamp(4rem, calc(3.83rem + 0.86vw), 4.5rem);
    --space-3xl: clamp(6rem, calc(5.74rem + 1.29vw), 6.75rem);

    --space-3xs-2xs: clamp(0.25rem, calc(0.14rem + 0.54vw), 0.56rem);
    --space-2xs-xs: clamp(0.5rem, calc(0.37rem + 0.65vw), 0.88rem);
    --space-xs-s: clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem);
    --space-s-m: clamp(1rem, calc(0.76rem + 1.19vw), 1.69rem);
    --space-m-l: clamp(1.5rem, calc(1.24rem + 1.29vw), 2.25rem);
    --space-l-xl: clamp(2rem, calc(1.53rem + 2.37vw), 3.38rem);
    --space-xl-2xl: clamp(3rem, calc(2.48rem + 2.59vw), 4.5rem);
    --space-2xl-3xl: clamp(4rem, calc(3.05rem + 4.74vw), 6.75rem);
  }
`;
