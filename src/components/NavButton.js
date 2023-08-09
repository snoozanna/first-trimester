import React, { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
// import { animated } from '@react-spring/web';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
import icon from '../assets/images/menu.png';

// import sperm from '../assets/images/sperm.gif';
import Nav from './Nav';
import ScrollText from './ScrollText';

const NavButtonStyles = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
  }

  button {
    box-shadow: none;
    /* background-color: var(--pink); */
    z-index: 999;
  }
  @media ${devices.mobileL} {
    padding: 0 1rem;
  }
`;

const MenuToggleButtonStyles = styled.div`
  img {
    width: 30px;
  }
`;

const NavButton = () => {
  const { isOpen, toggle, currentPage } = useContext(MenuContext);
  const isBrowser = typeof window !== 'undefined';

  return (
    <>
      {/* <Scroll /> */}
      <NavButtonStyles>
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
      </NavButtonStyles>

      {isOpen ? <Nav /> : ''}
    </>
  );
};
export default NavButton;
