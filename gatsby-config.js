const styleResources = require(`./src/styles/styleConfig`);
const config = require(`./config/siteConfig`);

const activeEnv = process.env.MODE || process.env.NODE_ENV || `development`;
console.log(`Using environment config: '${activeEnv}'`);

// eslint-disable-next-line import/no-extraneous-dependencies
require(`dotenv`).config({
    path: `.env.${activeEnv}`,
});

const defaultQueries = {
    l: '(max-width: 1536px)',
    md: '(max-width: 1024px)',
    sm: '(max-width: 720px)',
    xs: '(max-width: 320px)',
};

module.exports = {
    plugins: [
        'gatsby-plugin-eslint',
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet-async`,
        // {
        //     resolve: `gatsby-plugin-react-helmet-canonical-urls`,
        //     options: {
        //         siteUrl: config.siteUrl,
        //     },
        // },
        {
            options: {
                queries: defaultQueries,
            },
            resolve: 'gatsby-plugin-breakpoints',
        },
        {
            options: {
                pathToConfigModule: `config/typography.js`,
            },
            resolve: `gatsby-plugin-typography`,
        },
        {
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
            resolve: `gatsby-source-filesystem`,
        },
        {
            options: {
                resources: styleResources,
            },
            resolve: `gatsby-plugin-stylus-resources`,
        },
        {
            options: {
                color: `tomato`,
                showSpinner: false,
            },
            resolve: `gatsby-plugin-nprogress`,
        },
        `gatsby-transformer-sharp`,
        // {
        //     resolve: 'gatsby-schema-field-absolute-path',
        //     options: {
        //         // or c. object with named field extension
        //         dirs: {
        //             'content/assets': 'fileByAssetPath',
        //             'src/images': 'fileByImagePath',
        //         },
        //     },
        // },
        'gatsby-schema-field-absolute-path',
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sitemap`,
        {
            options: {
                background_color: config.backgroundColor,
                description: config.langs.default.description,
                display: `minimal-ui`,
                icon: config.icon,
                icons: [
                    {
                        sizes: `48x48`,
                        src: `/favicons/icon-48x48.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `72x72`,
                        src: `/favicons/icon-72x72.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `96x96`,
                        src: `/favicons/icon-96x96.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `144x144`,
                        src: `/favicons/icon-144x144.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `192x192`,
                        src: `/favicons/icon-192x192.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `256x256`,
                        src: `/favicons/icon-256x256.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `384x384`,
                        src: `/favicons/icon-384x384.png`,
                        type: `image/png`,
                    },
                    {
                        sizes: `512x512`,
                        src: `/favicons/icon-512x512.png`,
                        type: `image/png`,
                    },
                ],
                lang: config.langs.default.lang,
                localize: config.langs.others,
                name: config.langs.default.name,
                short_name: config.langs.default.short_name,
                start_url: config.pathPrefix,
                theme_color: config.themeColor,
            },
            resolve: `gatsby-plugin-manifest`,
        },
        {
            options: {
                env: {
                    development: {
                        policy: [{ disallow: [`/`], userAgent: `*` }],
                    },
                    production: {
                        policy: [{ allow: `/`, userAgent: `*` }],
                    },
                    staging: {
                        policy: [{ allow: `/`, userAgent: `*` }],
                    },
                },
                resolveEnv: () => activeEnv,
            },
            resolve: `gatsby-plugin-robots-txt`,
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-webpack-bundle-analyser-v2`,
    ],
    siteMetadata: config,
};
