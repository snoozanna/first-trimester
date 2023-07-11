import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// export default {
//   pathPrefix: '/pizza',
//   siteMetadata: {
//     title: `First Trimester`,
//     siteUrl: '',
//     description: 'First Trimester',
//     twitter: '@KrishnaIstha',
//   },
//   plugins: [
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-styled-components',
//     {
//       // this is the name of the plugin you are adding
//       resolve: 'gatsby-source-sanity',
//       options: {
//         projectId: '1mkamazd',
//         dataset: 'production',
//         watchMode: true,
//         apiVersion: '2023-06-19', // use a UTC date string
//         token: process.env.SANITY_TOKEN,
//       },
//     },
//   ],
// };

module.exports = {
  siteMetadata: {
    title: `First Trimester`,
    siteUrl: 'https://first.trimester',
    description: 'First Trimester by Krisha Istha',
    twitter: '@KrishnaIstha',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1mkamazd',
        dataset: 'production',
        watchMode: true,
        apiVersion: '2023-06-19', // use a UTC date string
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Glory`,
            file: `https://fonts.googleapis.com/css2?family=Glory:ital,wght@0,300;0,600;0,700;1,300;1,500&display=swap`,
          },
          {
            name: `Inconsolata`,
            file: `https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600;700;800;900&display=swap`,
          },
        ],
      },
    },
  ],
};
