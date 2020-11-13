/* eslint-disable react/jsx-pascal-case */
import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const MLPage = ({ location }) => {
    // const cnilLink = (
    //     <a
    //         href='http://www.cnil.fr/vos-droits/vos-traces/les-cookies/'
    //         target='_blank'
    //         rel='noreferrer noopener'
    //     >
    //         http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
    //     </a>
    // );
    return (
        <MainLayout>
            <SEO
                title='demo.ml.headerTitle'
                location={location}
                description='demo.ml.description'
            />
            <div className='container'>
                <h1>Terms</h1>
            </div>
        </MainLayout>
    );
};

MLPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default MLPage;
