import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.styl';
import Nav from '../Nav';

// const logo = require("../../../assets/img/logo_white.svg");

const Header = ({ siteTitle }) => (
    <header>
        <div className='container'>
            <div className='content'>
                <Link to='/'>
                    <div className='logo'>{siteTitle}</div>
                </Link>
                <Nav />
            </div>
        </div>
    </header>
);

Header.defaultProps = {
    siteTitle: ``,
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

export default Header;
