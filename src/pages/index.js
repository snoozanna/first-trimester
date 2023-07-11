import { Box, Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HomePageStyles = styled.section`
  /* padding: clamp(5px, 5vw, 25px);
  min-height: 60vh; */
  /* margin: -1vw; */
  /* display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center; */
  /* display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  gap: 2rem; */
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

const HomePage = () => {
  console.log('landing');
  return (
    <HomePageStyles className="narrow">
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 1080,
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={5}
          columns={12}
          // columns={{ xs: 1, sm: 2, md: 12 }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="hero-img-wrapper">
              <span className="tagline">
                The Danish Sperm Bank That’s Born to Help
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="hero-text-wrapper">
              <h1 className="site-title">First Trimester</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} />
          <Grid
            item
            sx={{ justifyContent: 'end', display: 'flex', marginTop: '-10rem' }}
            xs={12}
            sm={6}
            md={6}
          >
            <Link to="/donate" className="hero-button">
              <span>Register to donate</span>
            </Link>
          </Grid>
          {/* <button type="button">Register to donate</button> */}
        </Grid>
      </Box>
    </HomePageStyles>
  );
};
export default HomePage;
