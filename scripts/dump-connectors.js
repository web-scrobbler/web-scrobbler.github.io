'use strict';

require('node-define');
const fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const writeFile = util.promisify(fs.writeFile);
const removeFile = util.promisify(fs.unlink);

const owner = 'web-scrobbler';
const repo = 'web-scrobbler';
const rawContentUrl = `https://raw.githubusercontent.com/${owner}/${repo}`;

const rootDir = '..';
const moduleFile = 'connectors.js';
const listFile = 'resources/connectors.json';

async function main(args) {
	const latestTag = args[2];
	let exitCode = 0;

	try {
		await dowloadModule(latestTag);
		await dumpConnectors();

		console.log(`Dumped connectors from ${latestTag} release.`);
	} catch (e) {
		console.error(`Unable to dump connectors from ${latestTag} release.`);

		exitCode = 1;
	}

	process.exit(exitCode);
}

async function dowloadModule(tagName) {
	const moduleUrl = getModuleUrl(tagName);

	const response = await fetch(moduleUrl);
	if (!response.ok) {
		throw new Error('Cannot download module');
	}

	const moduleCode = await response.text();
	await writeFile(moduleFile, moduleCode);
}

async function dumpConnectors() {
	const connectors = require(`${rootDir}/${moduleFile}`);

	const labelArray = connectors.map((entry) => entry.label);
	const contents = JSON.stringify(labelArray, null, 2);

	await writeFile(listFile, contents);
	await removeFile(moduleFile);
}

function getModuleUrl(tagName) {
	return `${rawContentUrl}/${tagName}/src/core/connectors.js`;
}

main(process.argv);
