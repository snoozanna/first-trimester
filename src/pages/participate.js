import React from 'react';
import styled from 'styled-components';

const ParticipatePageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ParticipatePage = () => {
  console.log(window.location.pathname);
  return (
    <ParticipatePageStyles className="narrow">
      <div className="funTitle">
        <div className="color green" />
        <h3>Everyone!</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        cupiditate quod illum! Excepturi recusandae eos aliquam, dolor hic alias
        fugit accusamus, animi rerum vel ab, dolores porro qui quam quisquam.
      </p>
    </ParticipatePageStyles>
  );
};

export default ParticipatePage;
