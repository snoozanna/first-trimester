import React, { useContext } from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
// import { animated } from '@react-spring/web';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
import logoText from '../assets/images/text_sperm.gif';
import Nav from './Nav';
import ScrollText from './ScrollText';
import NavButton from './NavButton';

const HeaderPageStyles = styled.div`
  background-color: var(--purple);
  /* margin: -1vw; */
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 5rem;
  padding: 1rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem; /* margin-left: -10rem; */
  .site-logo {
    position: fixed;
    right: 0;
    top: 0;
    /* static */
    /* transform: rotate(-21deg) translate(-19px, 36px); */
    /* max-width: 200px; */
    /* gif */
    transform: rotate(45deg) translate(-46px, 47px);
    max-width: 80px;
  }
  .site-title {
    z-index: 2;
    h1,
    h2 {
      font-weight: 700;
      letter-spacing: 0.2rem;
      text-align: right;
    }
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }

  @media ${devices.tablet} {
    margin-bottom: 5rem;
    margin-left: -4rem;
    margin-right: -4rem;
    margin-top: -5rem;
    h2 {
      font-size: 2.4rem;
    }
    .site-logo {
      transform: rotate(45deg) translate(-42px, 39px);
      max-width: 70px;
      top: 0;
    }
  }
`;

const HeaderPage = ({ title }) => {
  console.log('');

  return (
    <>
      {/* <Scroll /> */}
      <HeaderPageStyles>
        <NavButton />
        <div className="page-title">
          <h2>{title}</h2>
        </div>
        <div />
        <div className="site-logo">
          <img src={logoText} alt="logo" />
        </div>
      </HeaderPageStyles>
    </>
  );
};
export default HeaderPage;
