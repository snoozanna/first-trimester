import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Drawer from '@mui/material/Drawer';
import styled from 'styled-components';
import { MenuContext } from '../context/menu.context';
// import '../styles/components/Nav.css';

const NavWrapperStyles = styled.div`
  height: 100%;
`;
const NavStyles = styled.nav`
  height: 100%;
  background-color: var(--pink);
  .logo {
    transform: translateY(-25%;);
  }
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: flex;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    flex-direction: column;
    background-color: var(--pink);
    padding: 2rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
  }
  a {
    color: white;
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--mintgreen);
    }
    &[aria-current='page'] {
      color: var(--yellow);
    }
  }
`;

const Nav = () => {
  const { isOpen, toggle } = useContext(MenuContext);
  const handleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    toggle();
  };
  return (
    <Drawer anchor="left" open={isOpen} onClose={handleDrawer()}>
      <NavWrapperStyles
        role="presentation"
        onClick={handleDrawer()}
        onKeyDown={handleDrawer()}
      >
        <NavStyles>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/info">Info</Link>
            </li>

            <li>
              <Link to="/participate">Who can participate?</Link>
            </li>

            <li>
              <Link to="/process">Process</Link>
            </li>

            <li>
              <Link to="/faqs">FAQs</Link>
            </li>

            <li>
              <Link to="/access">Accessibility</Link>
            </li>

            <li>
              <Link to="/donate">Apply to Donate</Link>
            </li>

            <li>
              <Link to="/book">Book tickets</Link>
            </li>
          </ul>
        </NavStyles>
      </NavWrapperStyles>
    </Drawer>
  );
};

export default Nav;
