const config = require("platformsh-config").config();

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// require("dotenv").config();

var backend_route = "";
if ( config.isValidPlatform() ) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  backend_route = config.getRoute("strapi").url.substring(0, config.getRoute("strapi").url.length - 1);
} else {
  require("dotenv").config()
  backend_route = process.env.API_URL;
}

// try {
//   backend_route = config.getRoute("strapi").url.substring(0, config.getRoute("strapi").url.length - 1);
// } catch {
//   backend_route = process.env.API_URL;
// }

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
        apiURL: backend_route,
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
