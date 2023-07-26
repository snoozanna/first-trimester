import React, { useContext, useEffect, forwardRef } from 'react';
import styled from 'styled-components';

import { PortableText } from '@portabletext/react';

import Video from '../Video';
import AccessContext from '../../context/access.context';
import { devices } from '../../styles/breakpoints';
import { MenuContext } from '../../context/menu.context';

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

const InfoPageWrapper = forwardRef(({ data }, ref) => {
  const { isBSLShowing } = useContext(AccessContext);
  InfoPageWrapper.displayName = 'InfoPageWrapper';
  const info = data.nodes[0];

  // useEffect(() => {
  //   setCurrentPage(pathname);
  // }, []);

  return (
    <>
      <InfoPageStyles className="narrow" ref={ref}>
        <div className="hero-text-wrapper">
          <div className="funTitle">
            <div className="color green" />
            <h3>Hello!</h3>
          </div>
          <PortableText value={info.infoCopy} />
        </div>
        {isBSLShowing ? <Video url={info.bslvid} /> : ''}
      </InfoPageStyles>
    </>
  );
});
export default InfoPageWrapper;
