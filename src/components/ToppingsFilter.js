import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

const countPizzasInToppings = (pizzas) => {
  // return pizzas
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if exsisting topping
      const existingTopping = acc[topping.id];
      // if it is increment by one
      if (existingTopping) {
        // console.log('exsiting topping', existingTopping.name);
        existingTopping.count += 1;
      } else {
        // console.log('new topping', topping.name);
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
};

const ToppingsFilter = ({ activeTopping }) => {
  // get a list of all Topping
  // get a list of all pizzas with their Toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      # //this toppings not actually necessary becasue have it below
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // console.clear();
  // console.log({ toppings });

  // count how many pizzas are in each topping
  const toppingWithCounts = countPizzasInToppings(pizzas.nodes);
  // Loop over the list of toppings and
  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingWithCounts.map((topping) => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          className={topping.name === activeTopping ? 'active' : ''}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
};
export default ToppingsFilter;
