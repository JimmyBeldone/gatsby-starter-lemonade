/* eslint-disable import/no-import-module-exports */
import { configureStore } from '@reduxjs/toolkit';
import propTypes from 'prop-types';
import React from 'react';
import storage from '@helpers/storage';
import { Provider } from 'react-redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from '../store';
import isBrowser from '../helpers/isBrowser';

const ReduxProvider = ({ children }) => {
    const persistConfig = {
        // blacklist: [],
        key: 'root',
        storage,
        whitelist: [],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        devTools: true,
        enhancers:
            process.env.NODE_ENV === 'development' && isBrowser()
                ? [console.tron.createEnhancer()]
                : [],
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                // immutableCheck: { ignoredPaths: 'taxonomy' },
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                    // ignoredPaths: 'taxonomy',
                },
            }),
        reducer: persistedReducer,
    });

    const persistor = persistStore(store);

    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('../store', () => {
            store.replaceReducer(persistReducer(persistConfig, rootReducer));
        });
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};

ReduxProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export default ReduxProvider;
