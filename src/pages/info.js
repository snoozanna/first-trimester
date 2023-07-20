import { Link } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Video from '../components/Video';
import AccessContext from '../context/access.context';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context';

const InfoPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  .info-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const InfoPage = ({ location }) => {
  const { isBSLShowing } = useContext(AccessContext);
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <>
      <InfoPageStyles className="narrow">
        <div className="hero-text-wrapper">
          <div className="funTitle">
            <div className="color green" />
            <h3>Hello!</h3>
          </div>
          <p>
            Hello! Are you thinking of participating in FIRST TRIMESTER?! You’ll
            find everything you need to know below.
          </p>
          <p>
            First Trimester is a one-of-a-kind durational theatre experience, in
            which performance artist Krishna Istha will interview 100’s of
            diverse participants in a quest to find Krishna and their partner a
            sperm donor, or at least discover the qualities that bring them
            closer to their perfect match.
          </p>
          <p>
            The interviews last 10 minutes each, and take place on stage in
            front of a live audience. Krishna asks questions that range from
            funny to serious, from matter-of-fact personal data to philosophical
            perspectives in order to make the ultimate connection.
          </p>
          <ul className="typographic">
            <li>"Did you grow up with pets?” </li>
            <li>“Where do you store your memories?” </li>
            <li>“Are you kind?"</li>
            <li>
              …and, most importantly for Krishna, "Have you watched The Princess
              Diaries?"
            </li>
          </ul>
          <p>
            These questions have been sourced from Krishna, their partner, and a
            whole community of queer and trans people, as well as midwives,
            family law experts, and academics.
          </p>
          <p>
            We are aware this could be a daunting experience so here is
            everything you need to know to make an informed decision on whether
            or not you would like to participate!
          </p>
          <p>
            And if you want to know more about the show itself click{' '}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{' '}
            to be redirected to the venue’s website
          </p>
        </div>
        {isBSLShowing ? (
          <Video url="https://player.vimeo.com/video/679155212?h=d0027f695c" />
        ) : (
          ''
        )}
      </InfoPageStyles>
    </>
  );
};
export default InfoPage;
