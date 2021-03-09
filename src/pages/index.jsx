// import { useBreakpoint } from 'gatsby-plugin-breakpoints';
// import PropTypes from 'prop-types';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../views/components/SEO/index';
import MainLayout from '../views/layouts/MainLayout';
// import logo from '../contents/images/icons/gatsby-icon.png';

// eslint-disable-next-line arrow-body-style
const IndexPage = () => {
    // const breakpoints = useBreakpoint();
    // console.log(breakpoints);

    return (
        <MainLayout>
            <SEO title='Homepage title' description='Page 1 description' />
            <div className='container'>
                <h1>Welcome</h1>

                <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>MADE WITH </div>
                    <a
                        href='https://www.gatsbyjs.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <StaticImage
                            alt='gatsby icon'
                            src='../contents/images/icons/gatsby-icon.png'
                            // src={logo}
                            formats={['AUTO', 'WEBP', 'AVIF']}
                            layout='fixed'
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
            </div>
        </MainLayout>
    );
};

export default IndexPage;
