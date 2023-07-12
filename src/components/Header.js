import React, { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
// import { animated } from '@react-spring/web';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
import icon from '../assets/images/baby.png';
import Nav from './Nav';
import ScrollText from './ScrollText';

const HeaderStyles = styled.header`
  background-color: var(--pink);
  /* margin: -1vw; */
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 5rem;
  padding: var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem; /* margin-left: -10rem; */
  .scroller-wrapper {
    display: flex;
    align-items: center;
    justify-content: left;
    h3.tagline {
      font-weight: 900;
      color: white;
      font-size: 3rem;
    }
  }
  button {
    box-shadow: none;
    background-color: var(--pink);
    z-index: 999;
  }
  @media ${devices.mobileS} {
    margin-bottom: var(--padding);
  }
`;

const MenuToggleButtonStyles = styled.div`
  width: 40px;
`;

const Header = () => {
  let pageToShow = 'First Trimester';
  const { isOpen, toggle, currentPage } = useContext(MenuContext);
  const isBrowser = typeof window !== 'undefined';
  const findPageToShow = () => {
    if (isBrowser) {
      const pageName = currentPage;
      switch (pageName) {
        case '/participate':
          pageToShow = 'Who can participate?';
          break;
        case '/access':
          pageToShow = 'Accessiblity';
          break;
        case '/info':
          pageToShow = 'Information';
          break;
        case '/process':
          pageToShow = 'Process';
          break;
        case '/faqs':
          pageToShow = 'FAQs';
          break;
        case '/book':
          pageToShow = 'Book tickets';
          break;
        case '/donate':
          pageToShow = 'Apply to donate';
          break;
        case '/':
          pageToShow = <ScrollText />;
          break;
        default:
          pageToShow = 'First Trimester';
      }
    } else {
      return pageToShow;
    }
    return pageToShow;
  };

  return (
    <>
      {/* <Scroll /> */}
      <HeaderStyles>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
          sx={{ boxShadow: 'none' }}
        >
          <MenuToggleButtonStyles>
            <img src={icon} alt="baby" />
          </MenuToggleButtonStyles>
        </IconButton>
        {/* <ScrollText /> */}

        <h2>{isBrowser ? findPageToShow() : 'First Trimester'}</h2>
      </HeaderStyles>

      {isOpen ? <Nav /> : ''}
    </>
  );
};
export default Header;
