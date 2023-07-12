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
  padding: 1rem var(--padding);
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
  @media ${devices.mobileL} {
    padding: 0 1rem;
    margin-bottom: var(--padding);
    h2 {
      font-size: 2.8rem;
    }
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
          pageToShow = <h2>Who can participate?</h2>;
          break;
        case '/access':
          pageToShow = <h2>Accessiblity</h2>;
          break;
        case '/info':
          pageToShow = <h2>Info</h2>;
          break;
        case '/process':
          pageToShow = <h2>Process</h2>;
          break;
        case '/faqs':
          pageToShow = <h2>FAQs</h2>;
          break;
        case '/book':
          pageToShow = <h2>Book tickets</h2>;
          break;
        case '/donate':
          pageToShow = <h2>Apply to donate</h2>;
          break;
        case '/':
          pageToShow = <ScrollText />;
          break;
        default:
          pageToShow = <h2>First Trimester</h2>;
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
        {/* ({isBrowser ? pageToShow() : `First Trimester`})  */}
        {isBrowser ? findPageToShow() : <h2>First Trimester</h2>}
      </HeaderStyles>

      {isOpen ? <Nav /> : ''}
    </>
  );
};
export default Header;
