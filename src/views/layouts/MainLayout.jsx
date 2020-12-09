import PropTypes from 'prop-types';
import React from 'react';
import Headroom from 'react-headroom';

import siteConfig from '../../../config/siteConfig';
import Footer from './Footer/Footer';
import Header from './Header/Header';

console.log(
    '%c🚀  Gatsby Stater Lemonade  🍋',
    "color: #40667c; font-size: 28px; margin: 20px auto;font-family: 'Montserrat'; font-weight: 500",
);

const MainLayout = ({ children }) => (
    <div id='app'>
        <div id='content-wrap'>
            <Headroom>
                <Header siteTitle={siteConfig.title} />
            </Headroom>
            <main>
                <div id='content'>{children}</div>
            </main>
        </div>
        <Footer />
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
