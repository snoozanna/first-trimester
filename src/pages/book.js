import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BookPageStyles = styled.section`
  padding: clamp(5px, 5vw, 25px);
  min-height: 60vh;
  /* margin: -1vw; */
  /* display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  gap: 2rem;
  .hero-text-wrapper {
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
    background-color: var(--yellow);
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      color: black;
    }
  }
  .hero-button {
    background-color: var(--pink);
    padding: 4rem;
    display: block;
    position: relative;
    min-width: 10rem;
    min-height: 8rem;
    width: fit-content;
    align-self: end;
    cursor: pointer;
    --cast: 5px;
    box-shadow: var(--cast) var(--cast) 0 var(--black);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 8px;
    }
    span {
      font-size: 4rem;
      font-family: Impact;
      color: white;
      text-align: right;
      position: absolute;
      right: 50%;
      top: 50%;
      margin-left: 3rem;
    }
  }
`;

const BookPage = () => {
  console.log('');
  return (
    <BookPageStyles className="narrow">
      <div className="hero-img-wrapper">
        <span className="tagline">Show image</span>
      </div>
      <div className="hero-text-wrapper">
        <h1 className="site-title">First Trimester</h1>
        <Link to="/donate" className="hero-button">
          <span>Register to donate</span>
        </Link>
        {/* <button type="button">Register to donate</button> */}
      </div>
    </BookPageStyles>
  );
};
export default BookPage;
