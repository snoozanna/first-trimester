import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { MenuContext } from '../context/menu.context';

const ParticipatePageStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto;
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */

  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  .hero-img-wrapper {
    background-color: var(--yellow);
    min-height: 400px;
    /* height: 400px; */
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      color: black;
    }
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
        <PortableText value={participate.copy} />
        <p>
          Read
          <Link to="/faqs"> FAQs </Link>to find out more.
        </p>
      </div>
      <div className="hero-img-wrapper">
        <span className="tagline">
          {' '}
          a funny picture of Krishna and Rent holding a doll or something
        </span>
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
