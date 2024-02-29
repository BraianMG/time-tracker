// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  target: 'node',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
};
