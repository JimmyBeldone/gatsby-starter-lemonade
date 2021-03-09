// import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// import getJsonLd from './getJsonLd';
// import getOpenGraphMeta from './getOpenGraphMeta';
// import getTwitterMeta from './getTwitterMeta';

// const SEO = ({
//     description,
//     image,
//     location,
//     meta,
//     pageType,
//     post,
//     product,
//     robots,
//     title,
// }) => {
//     const data = useStaticQuery(graphql`
//         query DefaultSEOQuery {
//             file(name: { eq: "gatsby-icon" }) {
//                 childImageSharp {
//                     gatsbyImageData(
//                         width: 500
//                         placeholder: NONE
//                         layout: FIXED
//                     )
//                 }
//             }
//             site {
//                 siteMetadata {
//                     title
//                     description
//                     articlePrefix
//                     backgroundColor
//                     googleSiteVerification
//                     icon
//                     iconName
//                     name
//                     pathPrefix
//                     siteUrl
//                     themeColor
//                     titleAlt
//                 }
//             }
//         }
//     `);

//     const { file, site } = data;
//     const siteConfig = site.siteMetadata;

//     // Fomat title & escription
//     let formattedTitle;
//     let metaDescription;

//     const formattedTitleAlt = siteConfig.titleAlt;

//     if (pageType === 'website') {
//         formattedTitle = title;
//         metaDescription = description || siteConfig.description;
//     } else {
//         formattedTitle = title.trim();
//         metaDescription = description.trim();
//     }

//     // Image
//     const metaImage =
//         image !== null ? image.url : file.childImageSharp.gatsbyImageData.src;
//     const metaImageUrl = siteConfig.siteUrl + metaImage;
//     const metaImageAlt = image !== null ? image.alt : metaDescription;

//     // Manage 404
//     if (pageType === '404') {
//         return (
//             <Helmet
//                 htmlAttributes={{
//                     lang: 'fr',
//                 }}
//                 title={formattedTitle}
//                 titleTemplate={`%s | ${siteConfig.title}`}
//                 defer={false}
//             />
//         );
//     }

//     const defaultLang = {
//         link: location.href,
//         locale: `Fr`,
//         path: `fr`,
//         territory: `fr_FR`,
//     };
//     const defaultUrl = siteConfig.siteUrl + defaultLang.link;

//     // Manage i18n
//     const alternateLinks = [];
//     const ogLocaleAlternateMeta = [];

//     // Manage Twitter CArds & Open Graph Meta
//     const base = [formattedTitle, metaDescription, metaImageUrl, metaImageAlt];
//     const ogBase = [...base, pageType, location.href, defaultLang.territory]
//         .concat(pageType === 'article' ? post : null)
//         .concat(pageType === 'product' ? product : null)
//         .concat(file.childImageSharp.gatsbyImageData.src)
//         .concat(formattedTitleAlt);

//     const twitterCard = getTwitterMeta(...base);
//     const ogMeta = getOpenGraphMeta(...ogBase);
//     const jsonLd = getJsonLd(...ogBase);

//     return (
//         <Helmet
//             defer={false}
//             htmlAttributes={{
//                 lang: 'fr',
//             }}
//             title={formattedTitle}
//             titleTemplate={`%s | ${siteConfig.title}`}
//             link={[{ href: location.href, rel: 'canonical' }]
//                 .concat(alternateLinks)
//                 .concat({
//                     href: defaultUrl,
//                     hrefLang: 'x-default',
//                     rel: 'alternate',
//                 })}
//             meta={[
//                 {
//                     content: siteConfig.googleSiteVerification,
//                     name: `google-site-verification`,
//                 },
//                 {
//                     content: metaDescription,
//                     name: `description`,
//                 },
//                 {
//                     content: metaImageUrl,
//                     name: `image`,
//                 },
//             ]
//                 .concat(twitterCard)
//                 .concat(ogMeta)
//                 .concat(ogLocaleAlternateMeta)
//                 .concat(
//                     robots ? { content: 'index, follow', name: 'robots' } : [],
//                 )
//                 // Rest of optional meta props
//                 .concat(meta)}
//         >
//             {/* Schema.org tags */}
//             <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
//         </Helmet>
//     );
// };

// SEO.defaultProps = {
//     image: null,
//     meta: [],
//     pageType: 'website',
//     post: null,
//     product: null,
//     robots: true,
// };

// SEO.propTypes = {
//     description: PropTypes.string.isRequired,
//     image: PropTypes.shape({
//         alt: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//     }),
//     location: PropTypes.object.isRequired,
//     meta: PropTypes.arrayOf(
//         PropTypes.shape({
//             content: PropTypes.string.isRequired,
//             property: PropTypes.string.isRequired,
//         }),
//     ),
//     pageType: PropTypes.PropTypes.oneOf([
//         'website',
//         'article',
//         'product',
//         'tag',
//         '404',
//     ]),
//     post: PropTypes.object,
//     product: PropTypes.object,
//     robots: PropTypes.bool,
//     title: PropTypes.string.isRequired,
// };

// export default SEO;
