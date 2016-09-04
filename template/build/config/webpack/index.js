import {
    Config,
    ConfigEnvironment
} from 'webpack-config';
import Constants from './config/constants';

ConfigEnvironment.INSTANCE.setAll({
    ENV_NAME: () => process.env.WEBPACK_ENV || process.env.NODE_ENV
});

export default new Config().extend('build/webpack.[ENV_NAME].config.js');
