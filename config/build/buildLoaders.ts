import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/buildTypes';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const scssLoader = buildCssLoader(isDev);

  return [typeScriptLoader, svgrLoader, scssLoader];
};
