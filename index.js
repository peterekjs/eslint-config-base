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
    ignorePatterns: [
        'node_modules/'
    ],
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
        'import/export': 2,
        'import/no-duplicates': 1,
        'import/no-unresolved': 0,
        'new-parens': 0,
        'no-cond-assign': [2, 'except-parens'],
        'no-console': [1, { allow: ['info', 'warn', 'error'] }],
        'no-constant-condition': [2, { checkLoops: true }],
        'no-debugger': 1,
        'no-dupe-else-if': 2,
        'no-empty': 0,
        'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
        'no-undefined': 2,
        'no-void': 0,
        'prefer-const': [
            2,
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
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
