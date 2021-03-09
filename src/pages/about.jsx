import { Link } from 'gatsby';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const About = () => (
    <MainLayout>
        <SEO
            title='demo.about.headerTitle'
            description='demo.about.description'
        />
        <div className='container'>
            <h1>About</h1>

            <Link to='/'>Home</Link>
        </div>
    </MainLayout>
);

export default About;
