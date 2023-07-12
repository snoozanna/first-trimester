import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import FAQList from '../components/FAQList';
import SEO from '../components/SEO';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context';

const FAQPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;

  @media ${devices.mobileL} {
  }
`;

const FAQPage = ({ data, pageContext, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;
  const faqs = data.faqs.nodes;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

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
