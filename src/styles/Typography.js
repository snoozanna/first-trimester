import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints.js';
import heading from '../assets/fonts/impact.ttf';

const Typography = createGlobalStyle`

 @font-face {
    font-family: Impact;
    src: url(${heading});
  } 

  html {
     font-family: "Glory", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Impact;
    font-weight: normal;
    margin: 0;
  }
h2{
  font-size:4rem;
}
  h3{
    font-size: 3.5rem;
    letter-spacing: 0.15rem;
  }

  .funTitle{
    /* background-color: var(--pink); */
    position: relative;
    width: fit-content;
    margin-block-end: 1rem;
  }

    .funTitle > .color{
    /* background-color: var(--pink); */
    width: fit-content;
        width: 100%;
    height: 6rem;
    top: -2rem;
    left: -3rem;
    position: absolute;
    z-index: -1;
  }

  .funTitle > .color.pink{
    background-color: var(--pink);
  }

   .funTitle > .color.green{
    background-color: var(--mintgreen);
  }

  p{
    line-height: 3rem;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .tagline{
     font-family: 'Inconsolata', monospace;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
   @media ${devices.mobileL} {
  h2{
  font-size:3.5rem;
}
  h3{
    font-size: 2.5rem;
    letter-spacing: 0.15rem;
  }
  }
`;

export default Typography;
