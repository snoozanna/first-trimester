import { graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ProcessStepsList from '../components/ProcessStepsList';
import { devices } from '../styles/breakpoints.js';
import MenuContext from '../context/menu.context';

// import SEO from '../components/SEO';
const StepsPageStyles = styled.section`
  padding: 5rem;
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobileL} {
    padding: 2rem;
  }
`;

const StepsPage = ({ data, pageContext, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;
  const steps = data.steps.nodes;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <StepsPageStyles>
      {/* <SEO
        title={
          pageContext.topping
            ? `Pizza's With ${pageContext.topping}`
            : `All Pizzas`
        }
      /> */}

      <ProcessStepsList steps={steps} />
    </StepsPageStyles>
  );
};
export default StepsPage;

export const query = graphql`
  query ProcessQuery {
    steps: allSanitySteps {
      nodes {
        stepNumber
        id
        heading
        explanation
      }
    }
  }
`;
