/* eslint-disable import/no-extraneous-dependencies */

import isBrowser from '@helpers/isBrowser';

async function getConfig() {
    const ReactotronModule = await import('reactotron-react-js');
    const Reactotron = ReactotronModule.default;

    // Redux config
    // const ReactotronReduxModule = await import('reactotron-redux');
    // const ReactotronRedux = ReactotronReduxModule.default;

    Reactotron.configure()
        // .use(ReactotronRedux()) // yarn add reactotron-redux -D
        .connect(); // let's connect!
}

if (process.env.NODE_ENV === 'development' && isBrowser()) {
    getConfig();
}
