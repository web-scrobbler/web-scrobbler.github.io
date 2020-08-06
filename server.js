'use strict';

const ignoredDirs = ['.github', 'node_modules'];

function getIgnoredPaths() {
	return ignoredDirs.map((dir) => `**/${dir}/**`);
}

require('live-server').start({
	host: '127.0.0.1',
	file: 'index.html',
	ignore: getIgnoredPaths(),
	wait: 1000,
	logLevel: 2,
});
