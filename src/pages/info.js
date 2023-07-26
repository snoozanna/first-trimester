import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { PortableText } from '@portabletext/react';

import Video from '../components/Video';
import AccessContext from '../context/access.context';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context';
import InfoPageWrapper from '../components/pageWrappers/InfoPageWrapper';

const InfoPage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <>
      <InfoPageWrapper data={data.info} />
    </>
  );
};
export default InfoPage;

export const query = graphql`
  query InfoQuery {
    info: allSanityInfo {
      nodes {
        id
        # heading
        bslvid
        infoCopy: _rawInfoCopy(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
