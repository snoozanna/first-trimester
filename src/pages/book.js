import { Link } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/menu.context';
import { devices } from '../styles/breakpoints.js';

const BookPageStyles = styled.section`
  /* padding: clamp(5px, 5vw, 25px); */
  min-height: 60vh;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: auto auto;
  grid-template-areas:
    'a a b b'
    'a a . d';
  /* gap: 2rem; */
  .hero-text-wrapper {
    grid-area: b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .site-title {
      font-size: 10rem;
      margin-bottom: 2rem;
    }
  }
  .hero-img-wrapper {
    grid-area: a;
    background-color: var(--yellow);
    width: 80%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      color: black;
    }
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'a a .'
      'a a b'
      '. . d';
    gap: 2rem;
    .hero-text-wrapper {
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 4;
      align-items: end;
      .site-title {
        font-size: 6rem;
        margin-bottom: 2rem;
        text-align: right;
        width: min-content;
      }
    }
    .hero-img-wrapper {
      height: 300px;
      width: inherit;
    }
  }
`;

const BookPage = ({ location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);
  return (
    <BookPageStyles className="narrow">
      <div className="hero-img-wrapper">
        <span className="tagline">Show image</span>
      </div>
      <div className="hero-text-wrapper">
        <h1 className="site-title">First Trimester</h1>
      </div>{' '}
      {/* <p className="show-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        earum optio, sapiente similique hic beatae. Nam ipsa corrupti
        consectetur quod, error nisi voluptate qui perspiciatis unde ipsum
        corporis fuga eos!
      </p> */}
    </BookPageStyles>
  );
};
export default BookPage;
