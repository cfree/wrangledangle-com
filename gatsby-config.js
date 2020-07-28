/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wrangle Dangle`,
        short_name: `WrangleDangle`,
        start_url: `/`,
        background_color: `#00696b`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: "static/assets/img/favicon.jpg",
      },
    },
  ],
}
