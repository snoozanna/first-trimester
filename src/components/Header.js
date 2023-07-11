import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { MenuContext } from '../context/menu.context';

import icon from '../assets/images/baby.png';
import Nav from './Nav';

const HeaderStyles = styled.header`
  background-color: var(--pink);
  /* margin: -1vw; */
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 5rem;
  padding: 2rem;
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
`;

const MenuToggleButtonStyles = styled.div`
  width: 40px;
`;

const Header = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isOpen, toggle } = useContext(MenuContext);
  const pageName = window.location.pathname;
  let pageToShow;
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
    default:
      pageToShow = 'First Trimester';
  }
  return (
    <>
      <HeaderStyles>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
        >
          <MenuToggleButtonStyles>
            <img src={icon} alt="baby" />
          </MenuToggleButtonStyles>
          {/* <AddIcon /> */}
        </IconButton>

        {/* <div className="scroller-wrapper">
          <h3 className="tagline">Could you be our ideal sperm donor?</h3>
        </div> */}
        <h2>{pageToShow}</h2>
      </HeaderStyles>
      {/* <Nav /> */}
      {isOpen ? <Nav /> : ''}
    </>
  );
};
export default Header;
