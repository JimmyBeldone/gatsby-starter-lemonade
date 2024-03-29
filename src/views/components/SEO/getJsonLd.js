// import siteConfig from '../../../../config/siteConfig';
import { author, business } from '../../../../config/socialConfig';

const getJsonLd = (
    title,
    description,
    image,
    imageAlt,
    contentType,
    url,
    lang,
    name,
    // product = null,
    logo,
    titleAlt,
    articlePrefix,
    siteUrl,
    post = null,
) => {
    const schemaOrgJSONLD = {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        alternateName: titleAlt,
        name: title,
        url,
    };

    if (contentType !== 'article') {
        return schemaOrgJSONLD;
    }
    const keywords = post.tags.length > 0 ? post.tags.join(', ') : '';
    const article =
        // {
        //     '@context': 'https://khalilstemmler.com',
        //     '@type': 'BreadcrumbList',
        //     itemListElement: [
        //         {
        //             '@type': 'ListItem',
        //             position: 1,
        //             item: {
        //                 '@id': url,
        //                 name: title,
        //                 image,
        //             },
        //         },
        //     ],
        // },
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            alternateName: titleAlt,
            articleBody: post.body,
            articleSection: post.category,
            author: {
                '@type': 'Person',
                name: author.username,
            },
            dateModified: post.updatedAt,
            datePublished: post.publishedAt,
            description,
            headline: title,
            image: {
                '@type': 'ImageObject',
                name: imageAlt,
                url: image,
            },
            keywords,
            mainEntityOfPage: {
                '@id': siteUrl + articlePrefix,
                '@type': 'WebPage',
            },
            publisher: {
                '@type': 'Organization',
                logo: siteUrl + logo,
                name: business.title,
                url: business.url,
            },
            url,
        };
    return article;
};

export default getJsonLd;
