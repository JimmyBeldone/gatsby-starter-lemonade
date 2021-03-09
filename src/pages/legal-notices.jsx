import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';

const MLPage = () => (
    // const cnilLink = (
    //     <a
    //         href='http://www.cnil.fr/vos-droits/vos-traces/les-cookies/'
    //         target='_blank'
    //         rel='noreferrer noopener'
    //     >
    //         http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
    //     </a>
    // );
    <MainLayout>
        <SEO title='demo.ml.headerTitle' description='demo.ml.description' />
        <div className='container'>
            <h1>Terms</h1>
        </div>
    </MainLayout>
);

export default MLPage;
