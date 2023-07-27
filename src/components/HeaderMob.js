import React, { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
// import { animated } from '@react-spring/web';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';

import Nav from './Nav';
import ScrollText from './ScrollText';

const HeaderStyles = styled.header`
  background-color: var(--purple);
  /* margin: -1vw; */
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 5rem;
  padding: 1rem var(--padding);
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem; /* margin-left: -10rem; */
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
  }

  @media ${devices.mobileL} {
    margin-bottom: var(--padding);
    margin-left: -4rem;
    margin-right: -4rem;
    margin-top: -5rem;
    /* padding-top: 3rem; */
    .siteTitle > h1 {
      text-align: center;
      font-size: 2rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  }
`;

const Header = ({ title }) => {
  console.log('');

  return (
    <>
      {/* <Scroll /> */}
      <HeaderStyles>
        <div className="flex-col">
          <h2>{title}</h2>
        </div>
      </HeaderStyles>
    </>
  );
};
export default Header;
