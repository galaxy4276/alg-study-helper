import path from 'path';
import { Configuration, DefinePlugin, EnvironmentPlugin } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from "dotenv";
import CopyPlugin from 'copy-webpack-plugin';


const entryDir = path.resolve(__dirname, 'src', 'index.tsx');
const htmlTemplateDir =
  path.resolve(__dirname, 'src', 'public', 'index.html');
type WebPackConfig = Configuration & WebpackDevServer.Configuration;
const setOutputByEnv = () => {
  if (process.env.mode === 'development')
    return {
      path: path.resolve(__dirname, 'public/'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    };
  return {
    path: path.resolve(__dirname, 'public/'),
  };
};


const webpackConfig: WebPackConfig = {
  entry: entryDir,
  output: setOutputByEnv(),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|m?js)$/,
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
                topLevelAwait: false,
                syntax: 'typescript',
                tsx: true,
                dynamicImport: true,
              },
            },
          },
        },
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        include: [
          path.resolve(__dirname, 'images'),
        ],
        use: {
          loader: 'file-loader?name=./images/[name].[ext]',
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    port: 3001,
    hot: true,
    open: false,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: htmlTemplateDir }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
      'REACT_APP_GITHUB_TOKEN': JSON.stringify(process.env.REACT_APP_GITHUB_TOKEN),
    }),
    new EnvironmentPlugin({ ...process.env }),
    new CopyPlugin({
      patterns: [
        { from: './src/public/unchecked.svg', to: 'unchecked.svg', filter: (data) => {
          return data !== "index.html";
          }
        },
        {
          from: './src/public/checked.svg',
          to: 'checked.svg',
        }
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts/'),
      '@components': path.resolve(__dirname, 'src', 'components/'),
      '@public': path.resolve(__dirname, 'src', 'public/'),
      '@images': path.resolve(__dirname, 'images/'),
    },
  },
};

export default webpackConfig;
