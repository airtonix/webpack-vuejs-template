import path from 'path';
import webpack from 'webpack';
import Config from 'webpack-config';
import cssLoaders from './css-loaders';
import Constants from './config/constants';


export default new Config()
  .extend({
    'build/config/webpack/dev.js': config => {
        delete config.entry;
        return config;
      }
  })
  .merge({
    filename: __filename,
  });
