import React from 'react';
import styled from 'styled-components';

const VideoStyles = styled.div`
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-height: 300px;
  margin: auto;
`;

const Video = ({ url }) => (
  <VideoStyles className="hero-video-wrapper">
    <iframe
      title="Video about Access"
      src={url}
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  </VideoStyles>
);

export default Video;
