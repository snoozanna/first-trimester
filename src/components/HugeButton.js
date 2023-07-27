import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const HugeButtonStyles = styled.div`
  width: 100%;
  background-color: var(--mustyblue);
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
    background-color: var(--mintgreen);
    span {
      color: black;
    }
  }
`;

const HugeButton = () => (
  <HugeButtonStyles>
    <Link to="/participate" className="huge-button">
      <span className="huge-button-text-wrapper">Apply to participate!</span>
    </Link>
  </HugeButtonStyles>
);
export default HugeButton;
