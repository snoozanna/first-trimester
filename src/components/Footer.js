import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/menu.context';
import logoText from "../assets/images/text_sperm_hor.gif";

import HeroButton from './HeroButton';
import { devices } from '../styles/breakpoints';

const FooterStyles = styled.footer`
  /* background-color:var(--purple); */
  z-index: 9999;
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
      <div className="site-logo">
        <img
          src={logoText}
          alt="a wiggling sperm logo which reads Krishna Istha"
        />
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
