import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Drawer from '@mui/material/Drawer';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MenuContext } from '../context/menu.context';
import { StaticImage } from 'gatsby-plugin-image';
// import '../styles/components/Nav.css';

const NavWrapperStyles = styled.div`
  height: 100%;
`;
const NavStyles = styled.nav`
  height: 100%;
  background-color: var(--orange);
  padding: 2rem;
  z-index: 99999;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2rem;
    text-align: center;
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
    background-color: var(--orange);
    padding: 2rem;
  }
  li {
    font-family: var(--subheadings);
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
    &:nth-child(6) {
      --rotate: 2.5deg;
    }
  }
  a {
    color: white;
    font-size: 2.5rem;
    text-decoration: none;
    &:hover {
      color: var(--rusty);
    }
    /* &[aria-current='page'] {
      color: var(--yellow);
    } */
  }
  .gatsby-image-wrapper {
    overflow:inherit
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
          <StaticImage
            src="./../assets/images/FTShowTitle.png"
            alt={"First Trimester Logo"}
            placeholder="blurred"
            // layout="fixed"
            // width={200}
            height={60}
            className="nav-logo"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <AnchorLink to="/#info" title="Info">
                Info
              </AnchorLink>
            </li>

            <li>
              <AnchorLink to="/#who" title="Who can participate?">
                Who can participate?
              </AnchorLink>
            </li>

            <li>
              <AnchorLink to="/#process" title="Process">
                Process
              </AnchorLink>
            </li>

            <li>
              <AnchorLink to="/#faqs" title="FAQs">
                FAQs
              </AnchorLink>
            </li>

            <li>
              <AnchorLink to="/#accessibility" title="Accessiblity">
                Accessiblity
              </AnchorLink>
            </li>

            <li>
              <Link to="/participate">Apply to Participate</Link>
            </li>
            <li>
              <a
                href="https://www.iticket.co.nz/events/2024/feb/first-trimester"
                rel="noreferrer"
                target="blank"
              >
                Book tickets
              </a>
            </li>
          </ul>
        </NavStyles>
      </NavWrapperStyles>
    </Drawer>
  );
};

export default Nav;
