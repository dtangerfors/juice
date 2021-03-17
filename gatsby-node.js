/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
  {
    allPrismicProject {
      nodes {
        id
        uid
        type
        url
      }
    }
  }
  
  `)

  projects.data.allPrismicProject.nodes.forEach((project) => {
    createPage({
      path: project.url,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: { ...project },
    })
  })
}