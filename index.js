'use strict';

const CONNECTORS_URL =
	'https://raw.githubusercontent.com/web-scrobbler/website-resources/master/resources/connectors.json';

const websitesContainerId = 'websites';
const websitesCountId = 'websites-count';
const btnShowAllId = 'show-all';

initControls();

async function initControls() {
	const connectors = (await getConnectors()).sort(compareIgnoreCase);

	const websitesContainer = document.getElementById(websitesContainerId);

	const btnShowAll = document.getElementById(btnShowAllId);
	btnShowAll.addEventListener('click', (e) => {
		e.preventDefault();

		websitesContainer.classList.add('websites--more');
		btnShowAll.hidden = true;
	});

	const websitesCount = document.getElementById(websitesCountId);
	websitesCount.innerHTML = connectors.length;

	for (const websiteName of connectors) {
		const websiteLabel = document.createTextNode(websiteName);
		const websiteElement = document.createElement('li');
		websiteElement.className = 'websites__item';
		websiteElement.appendChild(websiteLabel);

		websitesContainer.appendChild(websiteElement);
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
