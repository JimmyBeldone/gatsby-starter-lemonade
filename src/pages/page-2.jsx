import { Link } from 'gatsby';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const SecondPage = () => (
    <MainLayout>
        <SEO
            title='demo.page2.headerTitle'
            description='demo.page2.description'
        />
        <div className='container'>
            <h1>Page 2</h1>
            <Link to='/'>Home</Link>
        </div>
    </MainLayout>
);

export default SecondPage;
