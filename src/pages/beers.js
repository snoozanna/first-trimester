import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 500px;
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
    color: black;
  }
`;

export default function BeersPage({ data }) {
  // console.log(data);
  return (
    <>
      <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
      <h2 className="center">We have {data.beers.nodes.length}beers</h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => (
          // const rating = Math.round(beer.rating.average);
          <SingleBeerStyles key={beer.id}>
            <h3>{beer.name}</h3>
            <strong>{beer.tagline}</strong>
            {/* <p title={`${rating} out of 5 stars`}>
              {`🦚`.repeat(rating)}
              <span style={{ filter: `greyscale(100%)` }}>
                {`🦚`.repeat(5 - rating)}
              </span>
            </p> */}
            <p>{beer.description}</p>
            {/* <span>({beer.rating.reviews})</span> */}
          </SingleBeerStyles>
        ))}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        tagline
        description
      }
    }
  }
`;
