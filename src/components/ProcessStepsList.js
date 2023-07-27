import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import styled from 'styled-components';

const StepStyles = styled.div`
  &.bggreen {
    background-color: #32d7b9;
  }
  &.bgyellow {
    background-color: #fdc24c;
  }
  &.bgpink {
    background-color: #ef5ea8;
  }
  padding: 2.5rem;
  position: relative;
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: baseline;
  width: 100%%;
  border-radius: 20px;
  h2,
  p {
    margin: 0;
    color: black;
  }
  h2 {
    font-size: 3.5rem;
    text-align: end;
    margin-inline-end: -4rem;
    margin-bottom: 2rem;
  }
  .step-number-wrapper {
    background-color: var(--mustyblue);
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: -2rem;
    left: -1.5rem;

    .step-number {
      font-size: 4rem;
      font-family: var(--headings);
    }
  }
`;

const SingleStep = ({ step, bgColor }) => (
  <>
    <Grid item xs={12} sm={6} md={4}>
      <StepStyles className={`bg${bgColor}`}>
        <div className="step-number-wrapper">
          <span className="step-number">{step.stepNumber}</span>
        </div>

        <div className="step-info-wrapper">
          <h2>{step.heading}</h2>
          <p>{step.explanation}</p>
        </div>
      </StepStyles>
    </Grid>
  </>
);

const ProcessStepsList = ({ steps }) => {
  const bgOptions = ['yellow', 'pink', 'green'];
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 1080,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={10}
        // columns={{ xs: 1, sm: 2, md: 12 }}
      >
        {/* <ProcessGridStyles> */}
        {steps.map((step, i) => {
          const bgColor = bgOptions[i % bgOptions.length];

          return <SingleStep step={step} key={step.id} bgColor={bgColor} />;
        })}
        {/* </ProcessGridStyles> */}
      </Grid>
    </Box>
  );
};

export default ProcessStepsList;
