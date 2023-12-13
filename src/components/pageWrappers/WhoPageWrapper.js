import React, {  forwardRef } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Video from '../Video';
import Header from '../Header';

const ParticipatePageStyles = styled.section`
  display: grid;
  grid-template-columns: var(--grid-pad-set);
  gap: 4rem;
  grid-auto-rows: auto;
  min-height: 40vh;

  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    .disclaimer {
      font-weight: 600;
      letter-spacing: 0.2rem;
      margin-block-end: 2rem;
    }
  }

  .hero-img-wrapper {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--yellow);
      text-align: center;
      color: black;
      min-height: 200px;
      height: 300px;
    }
  }
`;
const WhoPageWrapper = forwardRef(({ data }, ref) => {

  WhoPageWrapper.displayName = 'WhoPageWrapper';
  const participate = data.nodes[0];


  return (
    <>
      <Header v="ScrollPage" title="Who can participate?" />
      <ParticipatePageStyles className="narrow" ref={ref} id="who">
        <div className="hero-text-wrapper">
          <div className="funTitle green">
            <h3 className="catName">{participate.heading}</h3>
          </div>
          <span className="disclaimer">As long as you are over 18</span>
          <PortableText value={participate.copy} />

          <p>
            Read
            <AnchorLink to="/#faqs" title="FAQs" className="anchorlink">
              FAQs
            </AnchorLink>
            to find out more.
          </p>
        </div>

        {/* <div className="hero-img-wrapper">
         
          <Video url={participate.bslvid} />
        </div> */}
      </ParticipatePageStyles>
    </>
  );
});

export default WhoPageWrapper;
