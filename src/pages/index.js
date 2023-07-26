import { Box, Grid } from '@material-ui/core';
import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints.js';
import { MenuContext } from '../context/menu.context.js';
import HomePageHeroButton from '../components/HomePageHeroButton.js';
import InfoPageWrapper from '../components/pageWrappers/InfoPageWrapper.js';

const HomePageStyles = styled.section`
  /* padding: clamp(5px, 5vw, 25px); */
  min-height: 70vh;

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
    .tagline {
      font-weight: 600;
      font-size: 2rem;
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
      '. e d';
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
        .tagline {
          backgroundcolor: var(--yellow);
        }
      }
    }
    .hero-img-wrapper {
      height: 300px;
      width: inherit;
    }
  }
`;

const HomePage = ({ data, location }) => {
  const { setCurrentPage } = useContext(MenuContext);
  const { pathname } = location;

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);
  console.log(data);

  return (
    <>
      <HomePageStyles className="narrow">
        <div className="hero-img-wrapper">
          <span className="tagline">Show image</span>
        </div>

        <div className="hero-text-wrapper">
          <h1 className="site-title">First Trimester</h1>
          <span className="tagline">
            Lorem ipsum dolor sit amet consectetur
          </span>
        </div>
        <HomePageHeroButton />
      </HomePageStyles>
      {/* <InfoPageWrapper data={data.info} /> */}
    </>
  );
};
export default HomePage;

export const query = graphql`
  query HomeQuery {
    info: allSanityInfo {
      nodes {
        id
        # heading
        bslvid
        infoCopy: _rawInfoCopy(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
