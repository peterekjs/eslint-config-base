const braceStyle = require('./lib/brace-style.js')

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'standard'
    ],
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: [
        'import',
        'json',
        'node',
        'promise',
        'standard'
    ],

    rules: {
        'brace-style': braceStyle,
        'arrow-parens': [2, 'as-needed'],
        'comma-dangle': [2, 'only-multiline'],
        'curly': [2, 'multi-line'],
        'import/no-unresolved': 0,
        'new-parens': [2, 'never'],
        'no-cond-assign': [2, 'except-parens'],
        'no-console': [1, { allow: ['info', 'warn', 'error'] }],
        'no-constant-condition': [2, { checkLoops: true }],
        'no-dupe-else-if': 2,
        'no-empty': 0,
        'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
        'no-undefined': 2,
        'no-void': 0,
        'quote-props': [2, 'consistent-as-needed']
    },
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.json'
        ],
        'import/parsers': {
            'babel': ['.js', '.jsx']
        }
    }
}
