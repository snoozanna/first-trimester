import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeroButtonStyles = styled.div`
  .hero-button {
    position: relative;
    width: fit-content;
    align-self: end;
    cursor: pointer;
    --cast: 5px;
    box-shadow: var(--cast) var(--cast) 0 var(--black);
    &:hover {
      --cast: 8px;
      box-shadow: var(--cast) var(--cast) 0 var(--black);
      text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.2s;
    }
    .hero-button-text-wrapper {
      position: absolute;
      right: 50%;
      top: -50%;
      margin-left: inherit;
      display: flex;
      flex-direction: column;
      span {
        font-size: 1.5rem;
        font-family: Impact;
        color: white;
        text-align: right;
        margin-left: inherit;
      }
    }
    .hero-button-color {
      background-color: var(--pink);
      min-width: 5rem;
      min-height: 4rem;
      box-shadow: var(--cast) var(--cast) 0 var(--black);
    }
  }
`;

const HeroButton = () => (
  <HeroButtonStyles>
    <Link to="/donate" className="hero-button">
      <div className="hero-button-color" />
      <div className="hero-button-text-wrapper">
        <span>Apply </span>
        <span>online today!</span>
      </div>
    </Link>
  </HeroButtonStyles>
);
export default HeroButton;
