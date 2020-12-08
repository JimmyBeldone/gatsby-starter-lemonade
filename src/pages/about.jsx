import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const About = ({ location }) => (
    <MainLayout>
        <SEO
            title='demo.about.headerTitle'
            location={location}
            description='demo.about.description'
        />
        <div className='container'>
            <h1>About</h1>

            <Link to='/'>Home</Link>
        </div>
    </MainLayout>
);

About.propTypes = {
    location: PropTypes.object.isRequired,
};

export default About;
