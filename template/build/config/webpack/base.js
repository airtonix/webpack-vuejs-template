import path from 'path';
import Config from 'webpack-config';
import Constants from '../constants';


export default new Config()
	.merge({
		entry: "./src",
		output: {
				path: "./dist",
				filename: "[name].[hash].[ext]",
		},
		watch: {
			aggregateTimeout: 300,
			poll: true
		},
		stats: true,
		statsOutputPath: path.join(Constants.CWD, 'dist', 'stats.json'),
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: /node_modules/,
				},
				{
					test: /\.json$/,
					loader: 'json'
				},
			]
		},
		resolveLoader: {
			fallback: [path.join(Constants.CWD, 'node_modules')]
		},
		resolve: {
			extensions: ['', '.js'],
			fallback: [path.join(Constants.CWD, 'node_modules')],
			alias: {
				'src': path.resolve(Constants.CWD, 'src')
			}
		}
	});
