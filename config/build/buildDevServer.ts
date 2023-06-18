import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import { BuildOptions } from './types/buildTypes';

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
});
