const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `First Trimester`,
    siteUrl: "https://www.first-trimester.co.uk",
    description: `Looking to participate in First Trimester by Krisha Istha? You're in the right place!`,
    twitter: "@KrishnaIstha",
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-material-ui`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      // this is the name of the plugin you are adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "1mkamazd",
        dataset: "production",
        watchMode: true,
        apiVersion: "2023-06-19", // use a UTC date string
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
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap`,
          },
          {
            name: `Glory`,
            file: `https://fonts.googleapis.com/css2?family=Glory:ital,wght@0,300;0,600;0,700;1,300;1,500&display=swap`,
          },
          {
            name: `Inconsolata`,
            file: `https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600;700;800;900&display=swap`,
          },
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400;1,700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          // Add the custom headers here
          "/*": [
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            "Referrer-Policy: no-referrer",
            "X-Content-Type-Options: nosniff",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-S4BKSJP30B", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
      },
    },
  ],
};
