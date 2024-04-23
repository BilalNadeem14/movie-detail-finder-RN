// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@store': './src/store',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@commonSlices': './src/commonSlices',
          '@features': './src/features',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
