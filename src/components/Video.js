import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const VideoStyles = styled.div`
  background-color: var(--mintgreen);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100 %;
  min-width: 400px;
  max-height: 300px;
  min-height: 300px;
  /* margin: auto; */
  color: black;
  @media ${devices.mobileL} {
    flex-direction: column;
    min-width: 200px;
  }
`;

const Video = () => (
  <VideoStyles className="hero-video-wrapper">
    {/* <iframe
      title="Video about Access"
      src={url}
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    /> */}
    <p>BSL VIDEO</p>
  </VideoStyles>
);

export default Video;
