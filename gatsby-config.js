module.exports = {
  siteMetadata: {
    title: `Daniel Tängerfors`,
    description: `A driven and multifaceted frontend developer with a background in design and photography.`,
    author: `@dtangerfors`,
    siteUrl: `https://dtangerfors.se/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#f7f7f7`,
        display: `minimal-ui`,
        icon: `src/images/juice-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'dtangerforsportfolio',
        path: '/preview',
        previews: true,
        pages: [{ // (optional, builds pages dynamically)
          type: 'project',         // TypeName from prismic
          match: '/work/:uid',  // Pages will be generated under this pattern
          path: '/projects',        // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/project.js'),
        }],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WP8KW96",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
