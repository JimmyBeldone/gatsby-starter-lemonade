module.exports = {
    defaultSeverity: 'warning',
    extends: [
        // add more generic rulesets here, such as:
        // "stylelint-config-standard",
        'stylelint-prettier/recommended',
        'stylelint-stylus/standard',
    ],
    // fix: true,
    plugins: ['stylelint-stylus', 'stylelint-prettier'],
    rules: {
        // override/add rules settings here, such as:
        'stylus/declaration-colon': 'never',
        'stylus/semicolon': 'never',
    },
};
