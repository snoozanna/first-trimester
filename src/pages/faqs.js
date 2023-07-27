import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import FAQList from '../components/FAQList';

import SEO from '../components/SEO';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context';
import FAQsPageWrapper from '../components/pageWrappers/FAQPageWrapper';

const FAQPage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return <FAQsPageWrapper data={data.faqs} />;
};

export default FAQPage;

export const query = graphql`
  query FAQQuery($FAQRegex: String) {
    faqs: allSanityFaq(
      filter: {
        faqCategories: { elemMatch: { category: { regex: $FAQRegex } } }
      }
    ) {
      nodes {
        question
        id
        answer
        faqCategories {
          category
        }
      }
    }
  }
`;
