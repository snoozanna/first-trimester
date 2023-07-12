import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Video from '../components/Video.js';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context';

const AccessPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media ${devices.mobileS} {
    flex-direction: column;
  }
`;

const InfoTextStyles = styled.div`
  padding: 3rem;
`;

const VideoStyles = styled.div`
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-height: 300px;
  margin: auto;
`;

const AccessPage = ({ location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <>
      <AccessPageStyles className="narrow">
        <Video url="https://player.vimeo.com/video/679155212?h=d0027f695c" />

        <InfoTextStyles className="info-text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis. Quod, labore? Quidem voluptates eveniet culpa
            ratione corrupti, praesentium quam impedit saepe cumque harum magnam
            delectus ut accusantium excepturi animi!
          </p>
        </InfoTextStyles>
      </AccessPageStyles>
    </>
  );
};

export default AccessPage;
