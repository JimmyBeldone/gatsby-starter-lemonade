import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import React from 'react';
import { Helmet } from 'react-helmet-async';

// import getJsonLd from './getJsonLd';
import getOpenGraphMeta from './getOpenGraphMeta';
import getTwitterMeta from './getTwitterMeta';

const query = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultImage: image
                articlePrefix
                backgroundColor
                googleSiteVerification
                icon
                iconName
                name
                pathPrefix
                siteUrl
                themeColor
                titleAlt
            }
        }
    }
`;

const SEO = ({
    description,
    image,
    meta,
    pageType,
    post,
    product,
    robots,
    title,
}) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const {
        articlePrefix,
        defaultDescription,
        defaultImage,
        defaultTitle,
        googleSiteVerification,
        name,
        siteUrl,
        titleAlt,
    } = site.siteMetadata;

    // Fomat title & escription
    let formattedTitle;
    let metaDescription;

    const formattedTitleAlt = titleAlt;

    if (pageType === 'website') {
        formattedTitle = title;
        metaDescription = description || defaultDescription;
    } else {
        formattedTitle = title.trim();
        metaDescription = description.trim();
    }

    const metaUrl = `${siteUrl}${pathname}`;
    // Image
    const metaImage = `${siteUrl}${image !== null ? image.url : defaultImage}`;
    const metaImageAlt = image !== null ? image.alt : metaDescription;

    // Manage 404
    if (pageType === '404') {
        return (
            <Helmet
                htmlAttributes={{
                    lang: 'fr',
                }}
                title={formattedTitle}
                titleTemplate={`%s | ${defaultTitle}`}
                defer={false}
            />
        );
    }

    const defaultLang = {
        link: metaUrl,
        locale: `Fr`,
        path: `fr`,
        territory: `fr_FR`,
    };
    const defaultUrl = defaultLang.link;

    // Manage i18n
    const alternateLinks = [];
    const ogLocaleAlternateMeta = [];

    // Manage Twitter CArds & Open Graph Meta
    const base = [formattedTitle, metaDescription, metaImage, metaImageAlt];
    const ogBase = [...base, pageType, metaUrl, defaultLang.territory, name]
        .concat(pageType === 'article' ? post : null)
        .concat(pageType === 'product' ? product : null)
        .concat(metaImage)
        .concat(formattedTitleAlt)
        .concat(articlePrefix)
        .concat(siteUrl);

    const twitterCard = getTwitterMeta(...base);
    const ogMeta = getOpenGraphMeta(...ogBase);
    // const jsonLd = getJsonLd(...ogBase);

    return (
        <Helmet
            defer={false}
            htmlAttributes={{
                lang: 'fr',
            }}
            title={formattedTitle}
            titleTemplate={`%s | ${defaultTitle}`}
            link={[{ href: metaUrl, rel: 'canonical' }]
                .concat(alternateLinks)
                .concat({
                    href: defaultUrl,
                    hrefLang: 'x-default',
                    rel: 'alternate',
                })}
            meta={[
                {
                    content: googleSiteVerification,
                    name: `google-site-verification`,
                },
                {
                    content: metaDescription,
                    name: `description`,
                },
                {
                    content: metaImage,
                    name: `image`,
                },
            ]
                .concat(twitterCard)
                .concat(ogMeta)
                .concat(ogLocaleAlternateMeta)
                .concat(
                    robots ? { content: 'index, follow', name: 'robots' } : [],
                )
                // Rest of optional meta props
                .concat(meta)}
        >
            {/* Schema.org tags */}
            {/* <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script> */}
        </Helmet>
    );
};

SEO.defaultProps = {
    image: null,
    meta: [],
    pageType: 'website',
    post: null,
    product: null,
    robots: true,
};

SEO.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
    meta: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            property: PropTypes.string.isRequired,
        }),
    ),
    pageType: PropTypes.PropTypes.oneOf([
        'website',
        'article',
        'product',
        'tag',
        '404',
    ]),
    post: PropTypes.object,
    product: PropTypes.object,
    robots: PropTypes.bool,
    title: PropTypes.string.isRequired,
};

export default SEO;
