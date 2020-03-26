const config = require("platformsh-config").config();

// var backend_route = config.getRoute("strapi").url;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby + Strapi Blog",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        // apiURL: backend_route.substring(0, backend_route.length - 1),
        apiURL: "https://www.backend.pr-1-djjnuwy-muwzogvpcpoe2.eu-3.platformsh.site",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}
