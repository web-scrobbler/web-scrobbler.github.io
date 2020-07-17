'use strict';

const CONNECTORS_URL =
	'https://raw.githubusercontent.com/web-scrobbler/website-resources/master/resources/connectors.json';

const websitesFirstId = 'websites-first';
const websitesMoreId = 'websites-more';
const btnShowAllId = 'show-all';

const websitesCountId = 'websites-count';

function onDomContentLoaded() {
	initControls();
	updateWebsites();
}

function initControls() {
	const btnShowAll = document.getElementById(btnShowAllId);
	btnShowAll.addEventListener('click', (e) => {
		e.preventDefault();

		document.getElementById(websitesMoreId).hidden = false;
		btnShowAll.hidden = true;
	});
}

async function updateWebsites() {
	const connectors = (await getConnectors()).sort(compareIgnoreCase);

	const websitesCount = document.getElementById(websitesCountId);
	websitesCount.innerHTML = connectors.length;


	const initialWebsitesCount = getInitialWebsitesCount();
	appendConnectors(websitesFirstId, connectors.slice(0, initialWebsitesCount));
	appendConnectors(websitesMoreId, connectors.slice(initialWebsitesCount));
}

function appendConnectors(containerId, websites) {
	const container = document.getElementById(containerId);

	for (const websiteName of websites) {
		const websiteLabel = document.createTextNode(websiteName);
		const websiteElement = document.createElement('li');
		websiteElement.className = 'websites__item';
		websiteElement.appendChild(websiteLabel);

		container.appendChild(websiteElement);
	}
}

async function getConnectors() {
	const response = await fetch(CONNECTORS_URL);
	const connectors = await response.json();

	return connectors;
}

function getInitialWebsitesCount() {
	return document.body.clientWidth >= 768 ? 36 : 18;
}

function compareIgnoreCase(a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded);
