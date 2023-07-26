import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { MenuContext } from '../context/menu.context';
import WhoPageWrapper from '../components/pageWrappers/WhoPageWrapper';

const WhoPage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;
  // const participate = data.participate.nodes[0];

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return <WhoPageWrapper data={data.participate} />;
};

export default WhoPage;

export const query = graphql`
  query ParticipateQuery {
    participate: allSanityParticipate {
      nodes {
        id
        heading
        bslvid
        copy: _rawCopy(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
