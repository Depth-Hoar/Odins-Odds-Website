const config = require('./config');
require("dotenv").config();

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, 
        timeout: 33500,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
