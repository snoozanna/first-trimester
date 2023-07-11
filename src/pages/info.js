import { Link } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';

import Video from '../components/Video';
import AccessContext from '../context/access.context';

const InfoPageStyles = styled.section`
  padding: clamp(5px, 1vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  display: flex;
  .hero-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const InfoPage = () => {
  const { isBSLShowing } = useContext(AccessContext);
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
