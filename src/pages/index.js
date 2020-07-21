import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const IndexPage = ({ location }) => {
    const breakpoints = useBreakpoint();
    console.log(breakpoints);
    return (
        <MainLayout>
            <SEO title='demo.home.headerTitle' location={location} />
            <div className='container'>
                <h1>Hello</h1>

                <Link to='/page-2/'>Page 2</Link>
            </div>
        </MainLayout>
    );
};

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;
