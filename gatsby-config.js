module.exports = {
  siteMetadata: {
    title: `Daniel Tängerfors`,
    description: `A driven and multifaceted frontend developer with a background in design and photography.`,
    author: `@dtangerfors`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        pages: [{ // (optional, builds pages dynamically)
          type: 'project',         // TypeName from prismic
          match: '/work/:uid',  // Pages will be generated under this pattern
          path: '/projects',        // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/project.js'),
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
