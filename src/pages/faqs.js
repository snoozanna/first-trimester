import { Link, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import FAQList from '../components/FAQList';

import SEO from '../components/SEO';

const FAQPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
`;

const FAQPage = ({ data, pageContext }) => {
  const faqs = data.faqs.nodes;
  return (
    <FAQPageStyles className="narrow">
      <SEO title="FAQs" />
      <FAQList faqs={faqs} />
    </FAQPageStyles>
  );
};

export default FAQPage;

export const query = graphql`
  query FAQQuery {
    faqs: allSanityFaq {
      nodes {
        question
        id
        answer
      }
    }
  }
`;
