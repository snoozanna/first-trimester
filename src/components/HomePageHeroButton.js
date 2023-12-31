import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const HeroButtonStyles = styled.div`
  grid-area: d;

  .hero-button-text-wrapper {
    margin-left: inherit;
    display: flex;
    flex-direction: column;
    span {
      font-size: 3rem;
      font-family: var(--subheadings);
      color: white;
      text-align: center;
      margin-left: inherit;
      @media ${devices.mobileL} {
        font-size: 1.5rem;
      }
    }
  }
  /* neon button  */
  .neon-button {
    font-size: 4rem;
    background: var(--clr-blue-neon);
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: var(--clr-blue-neon);
    border: var(--clr-blue-neon) 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
    box-shadow: inset 0 0 0.5em 0 var(--clr-blue-neon),
      0 0 0.5em 0 var(--clr-blue-neon);

    position: relative;
  }

  .neon-button::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em var(--clr-blue-neon);
    opacity: 0;
    background-color: var(--clr-blue-neon);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  .neon-button:hover,
  .neon-button:focus {
    color: var(--clr-bg);
    text-shadow: none;
  }

  .neon-button:hover::before,
  .neon-button:focus::before {
    opacity: 1;
  }
  .neon-button:hover::after,
  .neon-button:focus::after {
    opacity: 1;
  }

  @media ${devices.mobileL} {
    grid-row-start: d;
    grid-column-start: e;
    grid-row-end: d;
    grid-column-end: d;
    display: flex;
    justify-content: end;
  }
`;

const HomePageHeroButton = () => (
  <HeroButtonStyles>
    <Link to="/participate" className="neon-button">
      <div className="hero-button-text-wrapper">
        <span>Apply to</span>
        <span>participate</span>
      </div>
    </Link>
  </HeroButtonStyles>
);
export default HomePageHeroButton;
