import path from 'path';
import webpack from 'webpack';
import Config from 'webpack-config';
import LoaderStrings from '../../lib/loader-strings';
import Constants from './config/constants';


export default new Config()
  .extend({
    'build/config/webpack/base.js': config => {
        delete config.entry;
        return config;
      }
  })
  .merge({
    filename: __filename,
    debug: true,
    devtool: '#source-map',
    output: {
        pathinfo: true
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.html$/,
          loaders: [
			  'html',
			  'swig?raw'
		  ]
        },
        {
          test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash:7]'
          }
        }
      ]
    },
    vue: {
      loaders: Object.assign(LoaderStrings.css(), {
        js: 'isparta'
      })
    },
    resolve: {
      extensions: ['', '.js', '.vue'],
    }
  });
