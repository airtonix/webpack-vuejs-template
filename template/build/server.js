import jsonfile from 'jsonfile';
import debug from 'debug';
import webpack from 'webpack';

import config from './config/webpack';
import Constants from './config/constants';


const log = debug(`${Constants.name}:Build/Server`);

webpack(config)
	.watch(config.watch, (err, stats) => {
		if (err) { log(err); }
		if (config.stats && config.statsOutputPath) {
			jsonfile.writeFile(config.statsOutputPath, stats, (err) => log);
		}
	});