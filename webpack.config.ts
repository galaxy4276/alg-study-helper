import { Configuration, ProvidePlugin } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';


const entryDir = path.resolve(__dirname, 'src', 'index.tsx');
const htmlTemplateDir =
  path.resolve(__dirname, 'src', 'public', 'index.html');

const webpackConfig: Configuration & WebpackDevServer.Configuration = {
  mode: 'development',
  entry: entryDir,
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_module)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              target: 'es2015',
              externalHelpers: true,
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
              parser: {
                syntax: 'typescript',
                tsx: true,
                dynamicImport: true,
              },
            },
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: false,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: htmlTemplateDir }),
    new ProvidePlugin({ React: 'react' }),
  ],
  resolve: {},
};

export default webpackConfig;
