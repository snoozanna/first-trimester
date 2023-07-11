// import { graphql } from 'gatsby';
import path, { resolve } from 'path';
// have to use "isomorphic fetch to fetch in a node file "
import fetch from 'isomorphic-fetch';

async function turnPizzasIntoPages({ graphql, actions }) {
  // get template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // query all pizzas
  // the reason this is await rather than not like in previous graph ql queries is becasue we're using node
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data);
  // loop over each one and create page for each
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // what is the url for this new page?
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      // context is how you pass data in to this component from above
      // you could also get the slug fro url but this is proper way to do it
      // use pageContext not pathContext
      context: {
        message: 'hello this is context from the gatsy-node',
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  console.log('toppings into pages ');
  // get template
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');
  // query toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  // createPage for each topping
  data.toppings.nodes.forEach((topping) => {
    // console.log('topping', topping.name);
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        // TODO regex topping,
        toppingRegex: `/${topping.name}/i`,
      },
    });
  });
  // pass topping data to pizza.js
}

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  console.log('turn beers into nodes');
  // const res = await fetch('https://api.sampleapis.com/beers/ale');
  // this site was down so found another but doesn't have image...
  // fetch a list of beers
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const beers = await res.json();
  // console.log('beers', beers);

  // loop over each one
  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/JSON',
        contentDigest: createContentDigest(beer),
      },
    };
    // create a node for that beer
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
}

async function turnSlicemastersIntoPages({ graphql, actions }) {
  // 1. query all slicemaster
  const { data } = await graphql(`
    query {
      slicemasters: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // TODO 2. turn each SM into their own page
  data.slicemasters.nodes.forEach((slicemaster) => {
    actions.createPage({
      component: resolve('./src/templates/SliceMaster.js'),
      path: `slicemasters/slicemaster/${slicemaster.slug.current}`,
      context: {
        name: slicemaster.person,
        slug: slicemaster.slug.current,
      },
    });
  });
  // 3. figure out how many pages there are based on no of slicemasters and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
  console.log(
    `There are ${data.slicemasters.totalCount} total people and ${pageCount} pages with ${pageSize} per page `
  );
  // 4. Loop from 1 to n and create pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    // console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/slicemasters/${i + 1}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      // This data is passed to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function sourceNodes(params) {
  // fetch a list of beers and source them into gatsby api
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  // create pages dynamically
  // wait for all promises to be resolved before finsihing this fn
  await Promise.all([
    // pizzas
    turnPizzasIntoPages(params),
    // toppings
    turnToppingsIntoPages(params),
    turnSlicemastersIntoPages(params),
  ]);

  // slicemasters
}

// Sourcing nodes
