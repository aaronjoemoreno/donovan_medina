module.exports = {
  siteMetadata: {
    title: `Donovan Medina`,
    description: `Southwest Fine Arts Artist`,
    author: `Aaron | Levi`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `q4fnszow`,
        dataset: `production`,
        watchMode: true,
        token:process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
  ],
}
