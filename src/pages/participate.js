import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
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
const ParticipatePage = ({ location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <ParticipatePageStyles className="narrow">
      <div className="hero-text-wrapper">
        <div className="funTitle">
          <div className="color green" />
          <h3>Everyone!</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          cupiditate quod illum! Excepturi recusandae eos aliquam, dolor hic
          alias fugit accusamus, animi rerum vel ab, dolores porro qui quam
          quisquam.
        </p>
      </div>
    </ParticipatePageStyles>
  );
};

export default ParticipatePage;
