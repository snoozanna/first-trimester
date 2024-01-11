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
  max-width: 1080px;
  margin: auto;
  h2,
  p {
    margin: 0;
  }
  h4.faqQuestionTitle{
margin-right:1rem;
  } 
  .category-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-block-end: 3rem;
  }
  @media ${devices.mobileL} {
    .category-wrapper {
      flex-direction: column;
    }
  }
`;

const SingleFAQStyles = styled.div`
  display: grid;
  /* grid-template-columns: 2fr 1fr; */
  gap: 3rem;
  width: 100%;
  margin-block-end: 2rem;
  @media ${devices.mobileL} {
   display: inherit;
  }
`;

const SingleFAQ = ({ faq }) => {
  const [showVid, setShowVid] = useState(false)

  return (
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
          // onClick={() => setShowVid(!showVid)}
        >
          <h4 className='faqQuestionTitle'>{faq.question}</h4>
        </AccordionSummary>
        <AccordionDetails
          sx={devices.mobileL ? "" : {
            maxWidth:"90%"}}
        >
          <PortableText value={faq.answer} />
        </AccordionDetails>
      </Accordion>
      {/* {showVid ? <Video url={faq.bslvid} /> : null} */}
    </SingleFAQStyles>
  );
      }

const FAQList = ({ faqs }) => {
  const faqsByCategory = {};
console.log("faqs", faqs)
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
          <div className="category-wrapper" key={category}>
            <div  id={category.toLowerCase()}>
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
