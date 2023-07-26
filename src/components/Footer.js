import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MenuContext } from '../context/menu.context';
import Nav from './Nav';
import BSLToggle from './BSLToggle';
import HeroButton from './HeroButton';
import { devices } from '../styles/breakpoints';

const FooterStyles = styled.footer`
/* background-color:var(--yellow); */
position:fixed;
bottom:0;
padding:  var(--padding);
padding-top: 0;
width: 100vw;
  display: flex;
  justify-content: flex-start;
  justify-content: space-between; 
   align-items:end;
  .scroller-wrapper{
    back
  }
    @media ${devices.mobileL} {
     align-items:end;

    }
`;

const Footer = () => {
  const { currentPage } = useContext(MenuContext);
  return (
    <FooterStyles>
      {/* <div className="scroller-wrapper">
      <h3 className="tagline">Could you be our ideal sperm donor?</h3>
    </div> */}
      <BSLToggle />
      {currentPage !== '/donate' && currentPage !== '/' ? <HeroButton /> : ''}
    </FooterStyles>
  );
};

export default Footer;
