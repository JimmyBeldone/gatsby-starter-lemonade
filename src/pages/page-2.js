import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const SecondPage = ({ location }) => (
    <MainLayout>
        <SEO
            title='demo.page2.headerTitle'
            location={location}
            description='demo.page2.description'
        />
        <div className='container'>
            <h1>Page 2</h1>
            <Link to='/'>Home</Link>
        </div>
    </MainLayout>
);

SecondPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default SecondPage;
