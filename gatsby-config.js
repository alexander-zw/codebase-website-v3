module.exports = {
  siteMetadata: {
    title: `Codebase`,
    description: `Codebase is a UC Berkeley student organization that builds software projects for high growth tech companies.`,
    author: `@codebase-berkeley`,
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
        external: false,
        action: false,
      },
      {
        name: `Projects`,
        link: `/projects`,
        external: false,
        action: false,
      },
      {
        name: `Blog`,
        link: `https://medium.com/berkeley-codebase`,
        external: true,
        action: false,
      },
      {
        name: `Contact Us`,
        link: `/contact`,
        external: false,
        action: false,
      },
      {
        name: `Apply`,
        link: `/apply`,
        external: false,
        action: true,
      },
    ],
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
