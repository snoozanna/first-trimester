import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import BSLToggle from './BSLToggle';

const FooterStyles = styled.footer`
/* background-color:var(--yellow); */
position:fixed;
bottom:0;
padding: 1rem;
width: 100vw;
  display: flex;
  justify-content: flex-end;
  .scroller-wrapper{
    back
  }
`;

const Footer = () => (
  <FooterStyles>
    {/* <div className="scroller-wrapper">
      <h3 className="tagline">Could you be our ideal sperm donor?</h3>
    </div> */}
    <BSLToggle />
  </FooterStyles>
);
export default Footer;
