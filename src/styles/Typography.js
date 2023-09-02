import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints.js';

const Typography = createGlobalStyle`



  html {
     font-family: "Roboto", -apple-system, 
     BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-weight: 300;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    line-height: 3rem;
    font-weight: 400;
  }

  
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;

  }
  h1, h2{
    font-family: var(--headings);
    text-transform:uppercase;
    font-weight: 500;
    letter-spacing:0.3rem;
    font-variation-settings: 'wght' 900;
    
  }
  h3,h4,h5,h6{
    font-family: var(--subheadings); 
    font-variation-settings: 'wght' 600;
  }
h2{
  font-size:4rem;
}
  h3{
    font-size: 3.3rem;
    letter-spacing: 0.15rem;
  }

   h4{
    font-size: 2.5rem;
    letter-spacing: 0.15rem;
  }

  li{
    
  }

  .funTitle{
    border-bottom: 2px solid var(--yellow);
    width: fit-content;
 /* line-height: 5rem; */
 margin-block-end:1rem;
  
  }


  .funTitle > h3{
  font-weight: 600;
     width: calc(fit-content + 5rem);
     padding-bottom: 5px;
  }

    .funTitle > h3.catName{
    font-family: var(--subheadings);
  }

  .funTitle > .color.pink{
    color: var(--pink);
  }

   .funTitle.green{
    color: var(--white);
  }

  span.emphasis, blockquote{
   font-family: var(--subheadings);
  font-variation-settings: 'wght' 900;
  font-size: 2rem;
  letter-spacing: 0.2rem;
     color: var(--white);
     text-transform:uppercase;
     margin-block-end:2rem;
     margin-inline-start:inherit;
     margin-inline-end:inherit;
  }

  
  a {
    color: var(--yellow);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    font-weight: 600;
  }

    a:hover {
    color: var(--yellow);
    
  }

  a.anchorlink{
    margin: 0 5px;
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
  font-size:2.4rem;
}
  h3{
    font-size: 2.2rem;
    letter-spacing: 0.15rem;
  }
   h4{
    font-size: 2rem;
    letter-spacing: 0.15rem;
  }
  }
`;

export default Typography;
