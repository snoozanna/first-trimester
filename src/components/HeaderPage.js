import React, { useContext } from 'react';
import styled from 'styled-components';

import { devices } from '../styles/breakpoints.js';

const HeaderPageStyles = styled.div`
  background-color: var(--purple);
  /* margin: -1vw; */
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 1; */
  margin-bottom: 5rem;
  padding: 1rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem; /* margin-left: -10rem; */
  .page-title {
    position: sticky;
    top: 10%;
    z-index: 99;
    text-align: center;
  }

  @media ${devices.tablet} {
    margin-bottom: var(--padding);
    margin-left: -4rem;
    margin-right: -4rem;
    margin-top: -5rem;
    justify-content: center;

    h2 {
      font-size: 2.4rem;
    }
  }
`;

const HeaderPage = ({ title }) => (
  <>
    <HeaderPageStyles>
      <div />
      <div className="page-title">
        <h2>{title}</h2>
      </div>
      <div>
        {/* <h2>Krishna Istha</h2>
          <h1>First Trimester</h1> */}
      </div>
    </HeaderPageStyles>
  </>
);
export default HeaderPage;
