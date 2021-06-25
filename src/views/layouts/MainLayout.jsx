// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-js';
import PropTypes from 'prop-types';
import React from 'react';
import Headroom from 'react-headroom';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from './Footer/Footer';
import Header from './Header/Header';

console.log(
    '%c🚀  Gatsby Stater Lemonade  🍋',
    "color: #40667c; font-size: 28px; margin: 20px auto;font-family: 'Montserrat'; font-weight: 500",
);

const MainLayout = ({ children }) => {
    Reactotron.log('something really interesting happened');
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div id='app'>
            <div id='content-wrap'>
                <Headroom>
                    <Header siteTitle={data.site.siteMetadata.title} />
                </Headroom>
                <main>
                    <div id='content'>{children}</div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
