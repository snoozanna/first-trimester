import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const FAQListStyles = styled.section`
  display: grid;
  /* Take your row sizing not from pizza styles div but the pizza styles grid  */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  /* chrome doesn't support subgrid  */
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const SingleFAQ = ({ faq }) => (
  <>
    <FAQListStyles>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon sx={{ fontSize: '4rem', color: 'var(--yellow)' }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4>{faq.question}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>{faq.answer}</p>
        </AccordionDetails>
      </Accordion>
    </FAQListStyles>
  </>
);

const FAQList = ({ faqs }) => {
  const faqsByCategory = {};

  faqs.forEach((faq) => {
    const { category } = faq.faqCategories[0];
    if (!faqsByCategory[category]) {
      faqsByCategory[category] = [];
    }
    faqsByCategory[category].push(faq);
  });
  return (
    <>
      {Object.entries(faqsByCategory).map(([category, faqsInCategory]) => (
        <div key={category} id={category.toLowerCase()}>
          <div className="funTitle green">
            <h3 className="catName">{category}</h3>
          </div>
          {faqsInCategory.map((faq) => (
            <SingleFAQ faq={faq} key={faq.id} />
          ))}
        </div>
      ))}
    </>
  );
};
export default FAQList;
