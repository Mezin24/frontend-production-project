import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildPaths } from './types/buildTypes';

export const buildPlugin = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
