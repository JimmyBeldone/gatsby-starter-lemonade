import { graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../views/components/SEO';
import MainLayout from '../views/layouts/MainLayout';
import Image from '../views/components/Image';

const IndexPage = ({ data, location }) => {
    const breakpoints = useBreakpoint();
    console.log(breakpoints);

    return (
        <MainLayout>
            <SEO
                title='Homepage title'
                location={location}
                description='Page 1 description'
            />
            <div className='container'>
                <h1>Welcome</h1>

                <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>MADE WITH </div>
                    <a
                        href='https://www.gatsbyjs.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Image
                            fixed={data.file.childImageSharp.fixed}
                            alt='gatsby icon'
                        />
                    </a>
                </div>
            </div>
        </MainLayout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
    query homePicture {
        file(relativePath: { eq: "gatsby-icon.png" }) {
            childImageSharp {
                fixed(width: 24) {
                    ...GatsbyImageSharpFixed_withWebp
                    src
                }
            }
        }
    }
`;
