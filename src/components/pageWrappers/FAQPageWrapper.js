import { Link, graphql } from 'gatsby';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import FAQList from '../FAQList';

// import SEO from '../SEO';
import { devices } from '../../styles/breakpoints';


import Header from '../Header';

const FAQPageStyles = styled.section`

  min-height: 60vh;
  /* margin: -1vw; */
  max-width: 1920px;
  width:100% ;
  display: flex;
  flex-direction: column;
  margin:auto
  margin-bottom:0;
  .css-wldg4a-MuiPaper-root-MuiAccordion-root:before {
    background-color: transparent;
  }
  @media ${devices.mobileL} {
  }
`;

const FAQPageWrapper = forwardRef(({ data }, ref) => {
  FAQPageWrapper.displayName = 'FAQPageWrapper';
  const faqs = data.nodes;

  return (
    <>
  
      <Header v="ScrollPage" title="FAQs" />
      <FAQPageStyles ref={ref} id="faqs">
  
   
        <FAQList faqs={faqs} />
      </FAQPageStyles>
    </>
  );
});

export default FAQPageWrapper;
