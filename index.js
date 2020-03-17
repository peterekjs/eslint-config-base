module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['json', 'node', 'promise']
}
