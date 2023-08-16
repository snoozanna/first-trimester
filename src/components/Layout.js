import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

// import { ScrollReveal } from 'gatsby-plugin-scroll-reveal';
import { devices } from '../styles/breakpoints.js';





const LayoutStyles = styled.div`
  min-height: 100vh;
  @media ${devices.mobileL} {
    margin-bottom: 8rem;
  }
`;

const Layout = ({ children, location }) => {
  console.log("location.pathname", location.pathname)
  return(
 <>
    <GlobalStyles />
    <Typography />

    <LayoutStyles>
      {children}
    {location.pathname !== "/participate/" ? <Footer /> : null}
    </LayoutStyles>
  </>

  )
};

export default Layout;
