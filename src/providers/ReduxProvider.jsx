import { configureStore } from '@reduxjs/toolkit';
import propTypes from 'prop-types';
import React from 'react';
import storage from 'redux-persist/lib/storage';
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
import Reactotron from '@config/ReactotronConfig';

import rootReducer from '../store';

const ReduxProvider = ({ children }) => {
    const persistConfig = {
        // blacklist: ['auth'],
        blacklist: [],
        key: 'root',
        storage,
        version: 1,
        // whitelist: ['auth', 'taxonomy'],
        whitelist: [
            'auth',
            'profile',
            'taxonomy',
            'interactions',
            'userView',
            'chat',
            'settings',
        ],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        devTools: true,
        enhancers: __DEV__ ? [Reactotron.createEnhancer()] : [],
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
            const newRootReducer = require('../store').default;
            store.replaceReducer(persistReducer(persistConfig, newRootReducer));
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
