module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {},
      {
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
  },
};
