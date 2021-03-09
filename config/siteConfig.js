const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;

require(`dotenv`).config({
    path: `.env.${activeEnv}`,
});

module.exports = {
    articlePrefix: '/blog/',

    backgroundColor: `#e0e0e0`,

    description: `demo.meta.description`,

    googleSiteVerification: process.env.GATSBY_GOOGLE_SITE_VERIFICATION || ``,

    icon: `src/contents/images/icons/gatsby-icon.png`,

    iconName: 'gatsby-icon',

    image: '/images/gatsby-astronaut.png',

    keywords: [
        `gatsby-starter-lemonade`,
        `gatsby starter`,
        `gatsby intl`,
        `gatsby seo`,
        `gatsby gdpr`,
        `gatsby rgpd`,
    ],

    // manifest config
    langs: {
        all: ['fr', 'en'],
        default: {
            description: `Un kit de démarrage Gatsby avec i18n`,
            lang: `fr`,
            name: `gatsby starter lemonade`,
            short_name: `gatsby starter lemonade`,
        },
        others: [
            {
                description: `A Gatsby Starter with i18n`,
                lang: `en`,
                name: `gatsby starter lemonade`,
                short_name: `gatsby starter lemonade`,
                start_url: `/en/`,
            },
        ],
    },

    // SEO
    name: `Gatsby Starter Lemonade`,

    pathPrefix: `/`,

    siteUrl: process.env.GATSBY_SITE_URL || `http://localhost:8000`,

    themeColor: `#663399`,

    title: `Gatsby Starter Lemonade`,
    titleAlt: `Gatsby Starter Lemonade`,
};
