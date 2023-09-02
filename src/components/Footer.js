import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/menu.context';
import logoText from "../assets/images/text_sperm_hor.gif";
import sperm from "./../assets/images/sperm.gif";
import HeroButton from './HeroButton';
import { devices } from '../styles/breakpoints';

const FooterStyles = styled.footer`
  z-index: 999;
  position: sticky;
  bottom: 0;
  padding: var(--padding);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: end;
  .site-logo-sperm {
    z-index: 99;
    display: flex;
    gap: 0.5rem;
    animation: enterWiggle 3s ease-in-out forwards;
    img {
      max-width: 20px;
    }
    img:nth-child(2) {
      transform: translate(3px, -30px) scale(1.1);
  
    }
  }

  @keyframes enterWiggle {
    0% {
      transform: translate(-150px, 50px) rotate(70deg);
    }
   
    100% {
      transform: translateX(0px) rotate(70deg);
    }
  }

  @media ${devices.mobileL} {
    align-items: end;
    
  }

  @media ${devices.tablet} {
  
  }
`;

const Footer = () => {
  const { currentPage } = useContext(MenuContext);

  return (
    <FooterStyles>

      <div className="site-logo-sperm">
    
        <img src={sperm} />
        <img src={sperm} />
        <img src={sperm} />
      </div>
      {currentPage !== "/participate" && currentPage !== "/" ? (
        <HeroButton />
      ) : (
        ""
      )}
    </FooterStyles>
  );
};

export default Footer;
