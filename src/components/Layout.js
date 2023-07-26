import React, { useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';
// import { ScrollReveal } from 'gatsby-plugin-scroll-reveal';
import { devices } from '../styles/breakpoints.js';

const SiteBorderStyles = styled.div`
  /* height: 100%; */
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 2vw, 12rem);
  background: white url(${stripes});
  background: white;
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  /* background: white;*/
  /* padding: 2rem;
  padding: clamp(5px, 1vw, 25px); */
  /* min-height: 100vh; */
  /* margin: 12rem auto 4rem auto; */
`;

const MainStyles = styled.main`
  @media ${devices.mobileL} {
    margin-bottom: 8rem;
  }
`;

const Layout = ({ children }) => {
  // Function to handle the scroll event
  const handleScroll = () => {
    // Check if the user has scrolled to the bottom of the page
    const isAtBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    // If at the bottom, trigger the transition to SecretPage2
    if (isAtBottom) {
      // Use Gatsby's navigate to programmatically navigate to the next secret page
      // navigate('/book');
      console.log('at the bottom');
    }
    // Add a scroll event listener when the component mounts
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <GlobalStyles />
      <Typography />
      {/* <SiteBorderStyles> */}
      <ContentStyles>
        <Header />
        <MainStyles>
          {/* <ScrollReveal> */}
          {children}

          {/* </ScrollReveal> */}
        </MainStyles>
        <Footer />
      </ContentStyles>
      {/* </SiteBorderStyles> */}
    </>
  );
};

export default Layout;
