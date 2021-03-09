exports.onCreateWebpackConfig = ({ actions, plugins }) => {
    actions.setWebpackConfig({
        // eslint-disable-next-line new-cap
        plugins: [new plugins.provide({ process: 'process/browser' })],
        resolve: {
            alias: {
                path: require.resolve('path-browserify'),
            },
            fallback: {
                fs: false,
            },
        },
    });
};
