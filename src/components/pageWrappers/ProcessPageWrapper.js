import { graphql } from 'gatsby';
import React, { useContext, useEffect, forwardRef } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ProcessStepsListEx from '../ProcessStepsListEx';
import { devices } from '../../styles/breakpoints';
import HeaderPage from '../HeaderPage';

// import SEO from '../components/SEO';
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
  }
`;

const StepsPageWrapper = forwardRef(({ data }, ref) => {
  StepsPageWrapper.displayName = 'StepsPageWrapper';
  const steps = data.nodes;

  return (
    <>
      <HeaderPage title="Process" />

      <StepsPageStyles ref={ref} id="process">
        <div className="hero-text-wrapper">
          <div className="funTitle green subtitle">
            <h3 className="catName">So, how can you get involved?</h3>
          </div>
          <span className="disclaimer">Click each step to expand</span>
        </div>
        {/* <PortableText value={participate.copy} /> */}
        <ProcessStepsListEx steps={steps} />
      </StepsPageStyles>
    </>
  );
});
export default StepsPageWrapper;
