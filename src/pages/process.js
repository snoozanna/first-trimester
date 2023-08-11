import { graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import { MenuContext } from '../context/menu.context';
import StepsPageWrapper from '../components/pageWrappers/ProcessPageWrapper';

const StepsPage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return <StepsPageWrapper data={data.steps} />;
};
export default StepsPage;

export const query = graphql`
  query ProcessQuery {
    steps: allSanitySteps(sort: { stepNumber: ASC }) {
      nodes {
        stepNumber
        id
        heading
        explanation: _rawExplanation(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
