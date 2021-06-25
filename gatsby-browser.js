import React from 'react';
import 'typeface-montserrat';
import 'typeface-lato';

import './src/styles/global.styl';
import MainWrapper from './src/views/layouts/MainWrapper';

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

// export const onClientEntry = async () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (typeof window.IntersectionObserver === `undefined`) {
//         await import(`intersection-observer`);
//         console.log(`# IntersectionObserver is polyfilled!`);
//     }
// };

export const wrapRootElement = ({ element }) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <MainWrapper>{element}</MainWrapper>
);
