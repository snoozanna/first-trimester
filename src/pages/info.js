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
        <div className="info-text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quis. Quod, labore? Quidem voluptates eveniet culpa
            ratione corrupti, praesentium quam impedit saepe cumque harum magnam
            delectus ut accusantium excepturi animi!
          </p>
          <p>
            Got questions? See our
            <Link to="/faqs">FAQs</Link>.
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
