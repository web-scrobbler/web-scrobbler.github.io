'use strict';

const CONNECTORS_URL = 'https://raw.githubusercontent.com/web-scrobbler/website-resources/master/resources/connectors.json';

const VIEW_LINK_ID = '#view-connectors';
const CONNECTORS_LIST_ID = '#connectors';

function onDomContentLoaded() {
	initControls();
	updateConnectors();
}

function initControls() {
	const aElement = document.querySelector(VIEW_LINK_ID);
	aElement.addEventListener('click', (e) => {
		e.preventDefault();

		const ulElement = document.querySelector(CONNECTORS_LIST_ID);
		ulElement.classList.remove('hidden');
		aElement.classList.add('hidden');
	});
}

async function updateConnectors() {
	const connectors = (await getConnectors()).sort(compareIgnoreCase);
	const ulElement = document.querySelector(CONNECTORS_LIST_ID);

	for (const connector of connectors) {
		const liElement = document.createElement('li');
		const textNode = document.createTextNode(connector);

		liElement.appendChild(textNode);
		ulElement.appendChild(liElement);
	}
}

async function getConnectors() {
	const response = await fetch(CONNECTORS_URL);
	const connectors = await response.json();

	return connectors;
}

function compareIgnoreCase(a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded);
