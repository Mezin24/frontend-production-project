import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import webpack from 'webpack';
import { BuildOptions } from './types/buildTypes';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, mode, paths, port } = options;
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
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
