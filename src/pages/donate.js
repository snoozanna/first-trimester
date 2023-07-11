import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from 'react-calendly';

const DonatePageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  /* display: flex; */
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DonatePage = () => (
  <>
    <DonatePageStyles>
      <div className="calendarly-wrapper">
        <InlineWidget url="https://calendly.com/hurstsuzanna" />
      </div>
    </DonatePageStyles>
  </>
);
export default DonatePage;
