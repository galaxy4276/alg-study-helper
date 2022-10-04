import { Configuration, EnvironmentPlugin } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';


const entryDir = path.resolve(__dirname, 'src', 'index.tsx');
const htmlTemplateDir =
  path.resolve(__dirname, 'src', 'public', 'index.html');
type WebPackConfig = Configuration & WebpackDevServer.Configuration;
const setOutputByEnv = () => {
  if (process.env.mode === 'development')
    return {
      filename: '[name].[contenthash].js',
      publicPath: '/',
    };
  return {};
};


const webpackConfig: WebPackConfig = {
  entry: entryDir,
  output: setOutputByEnv(),
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
    new EnvironmentPlugin(['REACT_APP_GITHUB_TOKEN']),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts/'),
      '@components': path.resolve(__dirname, 'src', 'components/'),
      '@public': path.resolve(__dirname, 'src', 'public/'),
    },
  },
};

export default webpackConfig;
