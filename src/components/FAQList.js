import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Video from './Video';
import { PortableText } from "@portabletext/react";
import { devices } from '../styles/breakpoints';

const FAQListStyles = styled.div`
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
  .category-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-block-end:3rem;
  }
  @media ${devices.mobileL} {
    .category-wrapper {
      flex-direction: column;
    }
  }
`;

const SingleFAQStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  width: 100%;
  margin-block-end: 2rem;
  @media ${devices.mobileL} {
   display: inherit;
  }
`;

const SingleFAQ = ({ faq }) => {
  const [showVid, setShowVid] = useState(false)
  console.log("hello")
  return(
     <SingleFAQStyles>
    <Accordion
      sx={{
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none",
      }}
     
    >
      <AccordionSummary
        expandIcon={
          <AddIcon sx={{ fontSize: "4rem", color: "var(--yellow)" }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
       onClick={() => setShowVid(!showVid)}
      >
        <h4>{faq.question}</h4>
      </AccordionSummary>
      <AccordionDetails>
        {/* <p>{faq.answer}</p> */}
        <PortableText value={faq.answer} />
      </AccordionDetails>
    </Accordion>
    {showVid ? <Video url="https://www.youtube.com/embed/U0OTc567ubg" /> : null}
  </SingleFAQStyles>
    )
      }

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
      <FAQListStyles>
        {Object.entries(faqsByCategory).map(([category, faqsInCategory]) => (
          <div className="category-wrapper">
            <div key={category} id={category.toLowerCase()}>
              <div className="funTitle green">
                <h3 className="catName">{category}</h3>
              </div>

              {faqsInCategory.map((faq) => (
                <SingleFAQ faq={faq} key={faq.id} />
              ))}
            </div>
      
          </div>
        ))}
      </FAQListStyles>
    </>
  );
};
export default FAQList;
