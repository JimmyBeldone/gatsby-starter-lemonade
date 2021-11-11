module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },

    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
        __PATH_PREFIX__: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'import',
        'prettier',
        'sort-keys-fix',
        'sort-destructure-keys',
    ],
    rules: {
        'global-require': 0,
        'implicit-arrow-linebreak': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        indent: [0, 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-console': 0,
        'object-curly-newline': 0,
        'operator-linebreak': 0,
        'prettier/prettier': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/forbid-prop-types': 0,
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unused-prop-types': 1,
        'react/prop-types': 1,
        'react/sort-prop-types': 1,
        'sort-destructure-keys/sort-destructure-keys': 1,
        'sort-keys-fix/sort-keys-fix': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
