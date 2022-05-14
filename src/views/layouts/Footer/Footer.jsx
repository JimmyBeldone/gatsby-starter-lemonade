import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { copyright, business, author } from '../../../../config/socialConfig';

import './Footer.styl';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteFooterQuery {
            site {
                siteMetadata {
                    name
                }
            }
        }
    `);

    return (
        <footer>
            <div className='container'>
                <div>
                    {copyright}
                    {` `}
                    <a
                        href={business.networks.github}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {data.site.siteMetadata.name}
                    </a>
                    <br />
                    <span>by </span>
                    <a
                        href={author.networks.github}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {author.username}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
