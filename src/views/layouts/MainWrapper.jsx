import React from 'react';
import PropTypes from 'prop-types';
// import ReduxProvider from '../../providers/ReduxProvider';

import '@config/ReactotronConfig';

function MainWrapper({ children }) {
    // return <ReduxProvider>{children}</ReduxProvider>;
    return <>{children}</>;
}

MainWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainWrapper;
