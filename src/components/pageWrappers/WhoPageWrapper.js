import React, {  forwardRef } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Video from '../Video';
import Header from '../Header';

const ParticipatePageStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto;
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */

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
    background-color: var(--yellow);
    min-height: 400px;
    /* height: 400px; */
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      color: black;
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
          <Video />
        </div>
        <div className="hero-img-wrapper">
          <span className="tagline">
            {" "}
            a funny picture of Krishna and Rent holding a doll or something
          </span>
        </div>
      </ParticipatePageStyles>
    </>
  );
});

export default WhoPageWrapper;
