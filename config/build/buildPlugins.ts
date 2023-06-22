import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildPaths } from './types/buildTypes';

export const buildPlugin = (
  paths: BuildPaths,
  isDev: boolean,
): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: isDev,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
];
