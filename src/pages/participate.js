import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
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
  console.log(participate);

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
        <p>
          You don’t need sperm to be able to participate! Let’s say that louder
          for the folks at the back, YOU DON’T NEED SPERM TO PARTICIPATE!{' '}
        </p>
        <p>
          This is because the aim of the show is for Krishna to chat to as many
          people as possible to decipher what sort of person they might be
          looking for, and each interview will allow them to get closer to
          finding the qualities they wish for in their ideal donor. During that
          process, we might find someone who has those qualities as well as the
          magic ingredient (sperm!), which will be a bonus! This show is also,
          of course, an artistic & social experiment, one that allows Krishna to
          create dialogue around trans reproductive healthcare in a creative
          way, therefore we are keen to engage with as many different people as
          possible.
        </p>
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
        copy
        bslvid
      }
    }
  }
`;
