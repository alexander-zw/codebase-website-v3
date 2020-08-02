require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Codebase`,
    description: `Codebase is a UC Berkeley student organization that builds software projects for high growth tech companies.`,
    author: `@codebase-berkeley`,
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
        name: `Codebase`,
        short_name: `Codebase`,
        start_url: `/`,
        background_color: `#336ee2`,
        theme_color: `#336ee2`,
        display: `minimal-ui`,
        icon: `src/images/cb-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appMWiDJv5hAFHvHA",
            tableName: "Projects",
            tableView: "Current",
          },
          {
            baseId: "appMWiDJv5hAFHvHA",
            tableName: "Testimonials",
            tableView: "Content",
          },
          {
            baseId: "appMWiDJv5hAFHvHA",
            tableName: "Roles",
            tableView: "Content",
          },
          {
            baseId: "appMWiDJv5hAFHvHA",
            tableName: "Experiences",
            tableView: "Content",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
