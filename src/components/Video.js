import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const VideoStyles = styled.div`
  /* background-color: var(--mintgreen);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100 %; */
  /* min-width: 400px;
  max-height: 300px;
  min-height: 300px; */
  /* margin: auto; */
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  .frame-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    width: 100%;
    left: 0%;
    color: black;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    min-width: 250px;
    min-height: 150px;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    min-width: 150px;
    min-height: 150px;
  }
`;

const Video = ({ url, title }) => (
  <VideoStyles className="hero-video-wrapper">
    <div className='frame-container'>
      <iframe
        title={title}
        src={url}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        rel="0"
      />
    </div>
  </VideoStyles>
);

export default Video;
