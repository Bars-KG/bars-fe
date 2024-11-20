module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_.*' }
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-fragments': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.ts', '.tsx', 'js', 'jsx'] }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
