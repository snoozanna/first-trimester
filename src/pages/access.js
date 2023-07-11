import React from 'react';
import styled from 'styled-components';

const AccessPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: grid;
  /* side by side  */
  /* grid-template-columns: repeat(auto-fit); */
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
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
  margin: auto;
`;

const AccessPage = () => (
  <>
    <AccessPageStyles>
      <VideoStyles className="hero-video-wrapper">
        <iframe
          title="Video about Access"
          src="https://player.vimeo.com/video/679155212?h=d0027f695c"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </VideoStyles>
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
export default AccessPage;
