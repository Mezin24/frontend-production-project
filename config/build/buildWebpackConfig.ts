import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import webpack from 'webpack';
import { BuildOptions } from './types/buildTypes';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugin(paths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
