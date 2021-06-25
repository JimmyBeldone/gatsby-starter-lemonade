/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from 'reactotron-core-client';

import isBrowser from '@helpers/isBrowser';

function getNavigatorProperty(name) {
    if (!name) return undefined;
    if (isBrowser()) return undefined;
    if (!window.navigator && typeof window.navigator !== 'object')
        return undefined;
    return window.navigator[name];
}

if (process.env.NODE_ENV === 'development' && isBrowser()) {
    const REACTOTRON_ASYNC_CLIENT_ID = '@REACTOTRON/clientId';

    const client = {
        client: {
            platform: 'browser',
            platformVersion: getNavigatorProperty('platform'),
            reactotronLibraryName: 'reactotron-react-js',
            reactotronLibraryVersion: 'REACTOTRON_REACT_JS_VERSION',
            screenHeight: (screen && screen.height) || undefined,
            screenScale: (window && window.devicePixelRatio) || 1,
            screenWidth: (screen && screen.width) || undefined,
            userAgent: getNavigatorProperty('userAgent'),
            windowHeight: (window && window.innerHeight) || undefined,
            windowWidth: (window && window.innerWidth) || undefined,
        },
        createSocket: (path) => new WebSocket(path),
        getClientId: () =>
            Promise.resolve(localStorage.getItem(REACTOTRON_ASYNC_CLIENT_ID)),

        // eslint-disable-line
        host: 'localhost',

        name: 'React JS App',
        onConnect: () => console.log('hi'),
        port: 9090,
        setClientId: (clientId) => {
            localStorage.setItem(REACTOTRON_ASYNC_CLIENT_ID, clientId);
            return Promise.resolve();
        },
    };

    const Reactotron = createClient(client);

    const tron = Reactotron.configure().connect();

    tron.clear();

    console.tron = tron;
}
