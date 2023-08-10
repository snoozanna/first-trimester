import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const HugeButtonStyles = styled.div`
  width: 100%;
  background-color: var(--yellow);
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .huge-button {
    background-color: var(--purple);
    padding: 2rem;
    border-radius: 10px;
    span {
      font-family: var(--headings);
      color: white;
      font-size: 4rem;
    }
  }
  .huge-button:hover {
    background-color: var(--brightpurple);
    span {
    }
  }
  @media ${devices.mobileL} {
    background-color: transparent;
  }
`;

const HugeButton = () => (
  <HugeButtonStyles>
    <Link to="/participate" className="huge-button">
      <span className="huge-button-text-wrapper">
        <h2>Apply to participate!</h2>
      </span>
    </Link>
  </HugeButtonStyles>
);
export default HugeButton;
