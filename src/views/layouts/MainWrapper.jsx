import React from 'react';
import PropTypes from 'prop-types';
import ReduxProvider from '../../providers/ReduxProvider';

import '@config/ReactotronConfig';

const MainWrapper = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;

MainWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainWrapper;
