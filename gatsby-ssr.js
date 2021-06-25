import React from 'react';

import MainWrapper from './src/views/layouts/MainWrapper';

export const wrapRootElement = ({ element }) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <MainWrapper>{element}</MainWrapper>
);
