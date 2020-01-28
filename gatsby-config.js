const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: `Eder Munhoz Santos`,
    description: `A blog about personal content and front end experiences`,
    author: `Eder Munhoz Santos`,
    siteUrl: `http://edermunhozsantos.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    // It needs to be the first one to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/img`,
        name: `uploads`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://edermunhozsantos.netlify.com',
        sitemap: 'https://edermunhozsantos.netlify.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/menu`,
        name: `menu`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1040,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs` // It needs to be the last one
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`]
          }
        ]
      }
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eder Munhoz Santos`,
        short_name: `@emunhoz`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
