import React, { useContext, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
// import { MenuContext } from '../context/menu.context';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import HeaderPage from '../HeaderPage';
import Video from '../Video';

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
    .disclaimer {
      font-weight: 600;
      letter-spacing: 0.2rem;
      margin-block-end: 2rem;
    }
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
const WhoPageWrapper = forwardRef(({ data }, ref) => {
  // const { setCurrentPage } = useContext(MenuContext);
  // const { pathname } = location;
  WhoPageWrapper.displayName = 'WhoPageWrapper';
  const participate = data.nodes[0];

  // useEffect(() => {
  //   setCurrentPage(pathname);
  // }, []);

  return (
    <>
      <HeaderPage title="Who can participate?" />
      <ParticipatePageStyles className="narrow" id="who" ref={ref}>
        <div className="hero-text-wrapper">
          <div className="funTitle green">
            <h3 className="catName">Everyone can participate!</h3>
          </div>
          <span className="disclaimer">As long as you are over 18</span>
          {/* <PortableText value={participate.copy} /> */}
          <p>
            You don't need sperm to be able to participate! Let's say that
            louder for the folks at the back:
          </p>
          <span className="emphasis">
            You don't need sperm to participate!{' '}
          </span>

          <p>
            Why? Each interview will allow me to find the qualities I want in
            our ideal donor. During that process, I might find someone who has
            those qualities as well as the magic ingredient (sperm!), which will
            be a bonus! This show is also, of course, an artistic and social
            experiment, one that allows me to create dialogue around parenting
            as a transgender person.
          </p>
          <p>
            Read
            <AnchorLink to="/#faqs" title="FAQs" className="anchorlink">
              FAQs
            </AnchorLink>
            to find out more.
          </p>
          <Video />
        </div>
        <div className="hero-img-wrapper">
          <span className="tagline">
            {' '}
            a funny picture of Krishna and Rent holding a doll or something
          </span>
        </div>
      </ParticipatePageStyles>
    </>
  );
});

export default WhoPageWrapper;
