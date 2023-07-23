import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { MenuContext } from '../context/menu.context';

const ParticipatePageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  flex-direction: column;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
`;
const ParticipatePage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;
  const participate = data.participate.nodes[0];

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <ParticipatePageStyles className="narrow">
      <div className="hero-text-wrapper">
        <div className="funTitle">
          <div className="color green" />
          <h3>{participate.heading}</h3>
        </div>
        <PortableText
          value={participate.copy}
          // components={/* optional object of custom components to use */}
        />

        <p>
          Read
          <Link to="/faqs"> FAQs</Link>to find out more.
        </p>
        <p>
          {/* todo add image */}
          ADD IMAGE
        </p>
      </div>
    </ParticipatePageStyles>
  );
};

export default ParticipatePage;

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
