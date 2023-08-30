import { graphql } from 'gatsby';
import React, { forwardRef } from 'react';

import styled from 'styled-components';
import spermAlone from "../../assets/images/SpermAlone.png";
import ProcessStepsListEx from '../ProcessStepsListEx';
import { devices } from '../../styles/breakpoints';

import Header from '../Header';
import Video from '../Video';

const StepsPageStyles = styled.section`
  padding: 0 2rem;
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .funTitle.green.subtitle {
  }
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-block-end: 4rem;

    .disclaimer {
      font-weight: 600;
      letter-spacing: 0.2rem;
      margin-block-end: 2rem;
    }
  }
  @media ${devices.mobileL} {
    padding: 1rem;
    .funTitle > h3 {
      text-align: center;
    }
  }

`;

const WrapperStyles = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  max-width: 1080px;
  @media ${devices.mobileL} {
flex-direction:column;
  }
`;

const TimeStyles = styled.div`
  width: 100%;

  ul.time-list {
    font-family: var(--subheadings);
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    width: 100%;
    padding: var(--padding);
    color: var(--lightgreen);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-wrap: pretty;
    font-variation-settings: "wght" 600;
    li .bullet-wrapper {
      margin-inline-end: 10px;
    }
    li img {
      max-width: 20px;
    }
  }
  @media ${devices.mobileL} {
    ul.time-list {
      padding: var(--padding-mob);
    }
    .funTitle {
      margin-block-end: 2rem;
    }
    .funTitle > h3 {
      text-align: center;
    }
  }

  @media ${devices.tablet} {

    .funTitle > h3 {
      text-align: center;
    }
  }
`;

const StepsPageWrapper = forwardRef(({ data }, ref) => {
  StepsPageWrapper.displayName = 'StepsPageWrapper';
  const steps = data.nodes;

  return (
    <>
      <Header v="ScrollPage" title="Process" />

      <StepsPageStyles ref={ref} id="process">
        <div className="hero-text-wrapper">
          <div className="funTitle green subtitle">
            <h3 className="catName">So, how can you get involved?</h3>
          </div>
          <span className="disclaimer">Click each step to expand</span>
        </div>
        {/* <PortableText value={participate.copy} /> */}
        <ProcessStepsListEx steps={steps} />
        <WrapperStyles className="flex-wrapper">
          <TimeStyles>
            <div className="funTitle green">
              <h3 className="catName">The overall time commitment is:</h3>
            </div>

            <ul className="time-list">
              <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                10 min Zoom
              </li>
              <li data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                <span className="bullet-wrapper">
                  <img src={spermAlone} alt="" />
                </span>
                1 Hour on show day
              </li>
            </ul>
          </TimeStyles>
          <Video url="https://www.youtube.com/embed/8ZhI4Mv9_NU" />
        </WrapperStyles>
      </StepsPageStyles>
    </>
  );
});
export default StepsPageWrapper;
