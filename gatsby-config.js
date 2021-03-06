require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: "Eugene Triguba",
    siteUrl: "https://triguba.com",
    siteHeadline: "Eugene Triguba",
    siteDescription: "A Personal Portfolio.",
    siteLanguage: `en`,
    siteTitleAlt: `Portfolio - Eugene Triguba`,
    siteImage: "null",
    author: "Eugene Triguba",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Email`,
            url: `mailto:eugenetriguba@gmail.com`,
          },
          {
            name: `Github`,
            url: `https://github.com/eugenetriguba`,
          },
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/eugenetriguba`,
          },
        ],
        feed: true,
        feedTitle: "Blog - Eugene Triguba",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio - Eugene Triguba`,
        short_name: `Portfolio`,
        description: `A Personal Portfolio.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
