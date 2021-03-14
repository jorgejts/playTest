/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, { mode }) => {
  const isDevelopment = mode === 'development';
  const outputScript = 'app';

  const config = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: outputScript + '.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        { parser: { System: false } },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.js?$/,
          exclude: [path.resolve(__dirname, 'node_modules')],
          loader: 'babel-loader',
        },
        {
          test: /\.module\.scss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: outputScript + '--[name]__[local]--[hash:base64:5]',
                },
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: outputScript + '--[name]__[local]--[hash:base64:5]',
                },
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: false,
              },
            },
            {
              loader: 'svg-url-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      port: 3000,
      open: false,
      contentBase: './build',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
      hot: true,
    },
    plugins: [
      new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['build/' + outputScript] }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/styles/styles.css'),
          to: 'styles',
        },
        {
          from: path.resolve(__dirname, 'src/index.html'),
        },
      ]),
    ],
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.scss', '.svg', '.json'],
    },
    // externals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    //   redux: 'Redux',
    //   'react-redux': 'ReactRedux',
    //   'redux-thunk': 'thunkMiddleware', // can't load CommonJS
    //   }
    // },
  };

  return config;
};
