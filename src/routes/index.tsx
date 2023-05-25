import { createSignal, onMount } from 'solid-js';
import { Title } from 'solid-start';
import Connectors from '~/components/sections/connectors';
import Contributing from '~/components/sections/contributing';
import Features from '~/components/sections/features';
import Footer from '~/components/sections/footer';
import Starter from '~/components/sections/starter';
import Top from '~/components/sections/top';

console.log('Index JS running.');

export default function Home() {
	const [connectors, setConnectors] = createSignal<string[]>();
	console.log('Loaded Component');
	console.log(connectors());
	setInterval(() => console.log(connectors()), 1000);
	onMount(async () => {
		console.log('Mounting...');
		const fetchedConnectors = await getConnectors();
		console.log('Got connectors', fetchedConnectors);
		setConnectors(fetchedConnectors);
		console.log('Set connectors', connectors());
	});
	return (
		<main>
			<Title>Web Scrobbler — Scrobble music all around the web!</Title>
			<Top />
			<Starter />
			<Features connectors={connectors} />
			<Connectors connectors={connectors} />
			<Contributing />
			<Footer />
		</main>
	);
}

async function getConnectors() {
	const res = await fetch(
		'https://raw.githubusercontent.com/web-scrobbler/website-resources/master/resources/connectors.json'
	);
	const connectors = (await res.json()) as string[];
	return connectors.sort(compareIgnoreCase);
}

function compareIgnoreCase(a: string, b: string) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
}
