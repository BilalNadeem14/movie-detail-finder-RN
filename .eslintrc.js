// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint-config-react-native',
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // <-- Ensure this points to your tsconfig.json file
  },
  env: {
    node: true, // Add this line to specify the Node.js environment
  },
  rules: {
    // Add any specific ESLint rules or overrides here
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    indent: ['error', 2],
    'max-len': ['warn', {code: 250, ignoreComments: true}],
    'prefer-const': 'error',
    'func-style': ['error', 'expression'],
    'no-unused-vars': 'warn',
    'object-shorthand': 'error',
    // 'operator-linebreak': ['error', 'after'],
  },
};
