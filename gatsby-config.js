const path = require('path');

const styleResources = require(`./src/styles/styleConfig`);
const config = require(`./config/siteConfig`);

const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;
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

const contentsPath = path.join(__dirname, 'src', 'contents');

const sourceFilesystem = (name, dir = null) => {
    const sourcePath = dir !== null ? dir : name;
    return {
        options: {
            name,
            path: path.join(contentsPath, sourcePath),
        },
        resolve: 'gatsby-source-filesystem',
    };
};

module.exports = {
    flags: { DEV_SSR: false },
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
        sourceFilesystem('images-app', 'images/app'),
        sourceFilesystem('icons', 'images/icons'),
        {
            options: {
                resources: styleResources,
            },
            resolve: `gatsby-plugin-stylus-resources`,
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        // {
        //     resolve: 'gatsby-schema-field-absolute-path',
        //     options: {
        //         // or c. object with named field extension
        //         dirs: {
        //             'content/assets': 'fileByAssetPath',
        //             'src/contents/images': 'fileByImagePath',
        //         },
        //     },
        // },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sitemap`,
        {
            options: {
                background_color: config.backgroundColor,
                description: config.langs.default.description,
                display: `minimal-ui`,
                icon: config.icon,
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
        {
            options: {
                alias: {
                    '@assets': 'src/contents',
                    '@components': 'src/views/components',
                    '@config': 'src/config',
                    '@constants': 'src/constants',
                    '@helpers': 'src/helpers',
                    '@layouts': 'src/views/layouts',
                    '@modules': 'src/views/modules',
                    '@pages': 'src/pages',
                    '@screens': 'src/views/screens',
                    '@services': 'src/services',
                    '@src': 'src',
                    '@styles': 'src/styles',
                },
                extensions: ['js', 'jsx'],
            },
            resolve: `gatsby-plugin-alias-imports`,
        },
    ],
    siteMetadata: config,
};
