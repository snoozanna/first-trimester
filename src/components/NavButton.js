import React, { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
// import { animated } from '@react-spring/web';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';
import icon from '../assets/images/menu.png';

// import sperm from '../assets/images/sperm.gif';
import Nav from './Nav';


const NavButtonStyles = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 2rem;
  left: 3rem;
  gap: 2rem;
  z-index: 9999;
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
  }

  button {
    box-shadow: none;

    z-index: 999;
  }
  @media ${devices.mobileL} {
    width: 25px;
    top: 1rem;
    left: 2rem;
  }
`;

const MenuToggleButtonStyles = styled.div`
  img {
    width: 30px;
  }
  @media ${devices.mobileL} {
    width: 25px;
  }
`;

const NavButton = () => {
  const { isOpen, toggle } = useContext(MenuContext);
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
