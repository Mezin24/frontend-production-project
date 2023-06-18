import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/buildTypes';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typeScriptLoader, scssLoader];
};
