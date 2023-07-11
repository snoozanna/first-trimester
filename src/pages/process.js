import { graphql } from 'gatsby';
import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ProcessStepsList from '../components/ProcessStepsList';

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
`;

const StepsPage = ({ data, pageContext }) => {
  console.log(data);
  const steps = data.steps.nodes;
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
