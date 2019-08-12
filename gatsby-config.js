/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `exemplifi`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-source-exemplifi",
      options: {
        key: "vasi-api-v1",
        q: "yellow flowers",
      },
    },
  
  ],
}
