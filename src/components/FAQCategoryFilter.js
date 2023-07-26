import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    font-weight: 600;
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    color: white;
    border: 2px solid white;
    /* background: var(--grey); */
    border-radius: 3px;
    font-family: var(--subheadings);
    &:hover {
      background: var(--purple);
    }
    &[aria-current='page'] {
      background: var(--mintgreen);
      color: white;
    }
  }
`;

const FAQCategoryFilter = () => {
  // get a list of all Topping
  // get a list of all pizzas with their Toppings
  const { categories, faqs } = useStaticQuery(graphql`
    query {
      # //this toppings not actually necessary becasue have it below
      categories: allSanityFaqCategory {
        nodes {
          category
        }
      }
      faqs: allSanityFaq {
        nodes {
          question
          id
          answer
          faqCategories {
            category
          }
        }
      }
    }
  `);
  // console.clear();
  // console.log({ toppings });

  // count how many pizzas are in each topping
  const faqsToShow = faqs.nodes;
  const catsToShow = categories.nodes;
  // Loop over the list of toppings and
  return (
    <ToppingsStyles>
      <Link to="/faqs">
        <span>All</span>
      </Link>

      {catsToShow.map((category) => (
        <Link to="/">
          <div key={category.id}>
            <span>{category.category}</span>
          </div>
        </Link>
      ))}
    </ToppingsStyles>
  );
};
export default FAQCategoryFilter;
