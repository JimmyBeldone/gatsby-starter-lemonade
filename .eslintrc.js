module.exports = {
    // globals: {
    //     __PATH_PREFIX__: true,
    // },
    extends: [
        'universe/node',
        'universe/shared/react',
        'universe/web',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['jsx-a11y', 'sort-keys-fix', 'sort-destructure-keys'],
    rules: {
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/no-unused-prop-types': 1,
        'react/prop-types': 1,
        'react/sort-prop-types': 1,
        'sort-destructure-keys/sort-destructure-keys': 1,
        'sort-keys-fix/sort-keys-fix': 'warn',
    },
};
