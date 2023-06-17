import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildMode,
  BuildOptions,
  BuildPaths,
} from './config/build/types/buildTypes';
import path from 'path';

const mode: BuildMode = 'development';
const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
