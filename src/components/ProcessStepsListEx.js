import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';

const StepStyles = styled.div`
  &.bggreen {
    /* background-color: #32d7b9; */
    background-color: transparent;
  }
  &.bgyellow {
    /* background-color: #fdc24c; */
    background-color: transparent;
  }
  &.bgpink {
    /* background-color: #ef5ea8; */
    background-color: transparent;
  }
  border: solid 2px white;
  padding: 2.5rem;
  position: relative;
  /* min-height: 300px; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: baseline;
  width: fit-content;
  border-radius: 20px;
  h2,
  p {
    margin: 0;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
  }
  .step-heading-wrapper {
    width: 100%;
  }
  .step-number-wrapper {
    background-color: var(--mintgreen);
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: -5rem;
    left: -5.5rem;

    .step-number {
      font-size: 4rem;
      font-weight: 600;
      font-family: var(--headings);
      color: var(--black);
    }
  }
`;

const SingleStep = ({ step, bgColor }) => (
  <>
    <Grid item xs={12} sm={6} md={4}>
      <StepStyles className={`bg${bgColor}`}>
        <Accordion
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            boxShadow: 'none',
          }}
        >
          <AccordionSummary
            // expandIcon={
            //   <AddIcon sx={{ fontSize: '4rem', color: 'var(--yellow)' }} />
            // }
            sx={{ textAlign: 'center', width: '100%' }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="step-number-wrapper">
              <span className="step-number">{step.stepNumber}</span>
            </div>

            <div className="step-heading-wrapper">
              <h2>{step.heading}</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <p>{step.explanation}</p>
          </AccordionDetails>
        </Accordion>
      </StepStyles>
    </Grid>
  </>
);

const ProcessStepsList = ({ steps }) => {
  const bgOptions = ['yellow', 'pink', 'green'];
  return (
    <>
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
          {steps.map((step, i) => {
            const bgColor = bgOptions[i % bgOptions.length];
            return <SingleStep step={step} key={step.id} bgColor={bgColor} />;
          })}

          {/* <Accordion /> */}
        </Grid>
      </Box>
    </>
  );
};

export default ProcessStepsList;
