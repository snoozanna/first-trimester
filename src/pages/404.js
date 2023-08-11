import React from 'react';
import { styled } from 'styled-components';
import { devices } from '../styles/breakpoints';
import { Link } from 'gatsby';
import HeaderHome from '../components/HeaderHome';

const HomePageStyles = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  

  @media ${devices.mobileL} {
    min-height: 85vh;

  }
`;

export default function FourOhFourPage() {
  return (
  <>
    <HeaderHome />
    <HomePageStyles>
      <h3>Sorry, that page doesn't exist!</h3>
      <h4>
        Head <Link to="/">Home</Link>
      </h4>
    </HomePageStyles>
  </>
  )
}
