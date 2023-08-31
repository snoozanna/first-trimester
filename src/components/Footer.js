import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/menu.context';
import logoText from "../assets/images/text_sperm_hor.gif";
import sperm from "./../assets/images/sperm.gif";
import HeroButton from './HeroButton';
import { devices } from '../styles/breakpoints';

const FooterStyles = styled.footer`
  /* background-color:var(--purple); */
  z-index: 999;
  position: sticky;
  bottom: 0;
  padding: var(--padding);
  /* padding-top: 0; */
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: end;
  .site-logo {
    /* background-color:var(--purple); */
    z-index: 99;
    transform: rotate(-9deg);
    img {
      max-width: 13vw;
    }
  }

  .site-logo-sperm {
    /* background-color:var(--purple); */
    z-index: 99;
    display: flex;
    gap: 0.5rem;

    animation: enterWiggle 3s ease-in-out forwards;
    img {
      max-width: 20px;
    }
    img:nth-child(2) {
      transform: translate(3px, -30px) scale(1.1);
      /* display:none; */
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
    .site-logo {
      /* background-color:var(--purple); */
      z-index: 99;
      transform: rotate(-9deg);
      img {
        max-width: 35vw;
      }
    }
  }

  @media ${devices.tablet} {
    .site-logo {
      z-index: 99;
      transform: rotate(-13deg);
      max-width: 33%;
      img {
        max-width: 25vw;
      }
    }
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
