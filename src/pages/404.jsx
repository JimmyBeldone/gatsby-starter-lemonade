import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const NotFoundPage = () => (
    <MainLayout>
        <SEO
            title='demo.p404.headerTitle'
            description='demo.p404.description'
            pageType='404'
        />
        <h1>404</h1>
        <p>Not found</p>
        <Link to='/'>Page 2</Link>
    </MainLayout>
);

export default NotFoundPage;
