// eslint-disable-next-line import/no-commonjs
const path = require('path');

const config = {
	projectName: 'taro_ts_template',
	date: '2019-3-12',
	designWidth: 750,
	deviceRatio: {
		'640': 2.34 / 2,
		'750': 1,
		'828': 1.81 / 2
	},
	alias: {
		'~/': path.resolve(__dirname, '..', 'src/'),
		'~/components': path.resolve(__dirname, '..', 'src/components'),
		'~/config': path.resolve(__dirname, '..', 'src/config'),
		'~/interfaces': path.resolve(__dirname, '..', 'src/interfaces'),
		'~/models': path.resolve(__dirname, '..', 'src/models'),
		'~/pages': path.resolve(__dirname, '..', 'src/pages'),
		'~/services': path.resolve(__dirname, '..', 'src/services'),
		'~/utils': path.resolve(__dirname, '..', 'src/utils')
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	plugins: {
		babel: {
			sourceMap: true,
			presets: [
				[
					'env',
					{
						modules: false
					}
				]
			],
			plugins: [
				'transform-decorators-legacy',
				'transform-class-properties',
				'transform-object-rest-spread'
			]
		}
	},
	defineConstants: {},
	copy: {
		patterns: [],
		options: {}
	},
	weapp: {
		module: {
			postcss: {
				autoprefixer: {
					enable: true,
					config: {
						browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
					}
				},
				pxtransform: {
					enable: true,
					config: {}
				},
				url: {
					enable: true,
					config: {
						limit: 10240 // 设定转换尺寸上限
					}
				},
				cssModules: {
					enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
					config: {
						namingPattern: 'module', // 转换模式，取值为 global/module
						generateScopedName: '[name]__[local]___[hash:base64:5]'
					}
				}
			}
		}
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'static',
		esnextModules: ['taro-ui'],
		router: {
			mode: 'browser' // 或者是 'hash'
		},
		module: {
			postcss: {
				autoprefixer: {
					enable: true,
					config: {
						browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
					}
				},
				cssModules: {
					enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
					config: {
						namingPattern: 'module', // 转换模式，取值为 global/module
						generateScopedName: '[name]__[local]___[hash:base64:5]'
					}
				}
			}
		}
	}
};

module.exports = function(merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'));
	}
	return merge({}, config, require('./prod'));
};
