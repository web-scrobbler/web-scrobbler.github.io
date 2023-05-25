import { createSignal, onMount } from 'solid-js';
import { Title } from 'solid-start';
import Connectors from '~/components/sections/connectors';
import Contributing from '~/components/sections/contributing';
import Features from '~/components/sections/features';
import Footer from '~/components/sections/footer';
import Starter from '~/components/sections/starter';
import Top from '~/components/sections/top';

export default function Home() {
	const [connectors, setConnectors] = createSignal<string[]>();
	onMount(async () => {
		const fetchedConnectors = await getConnectors();
		setConnectors(fetchedConnectors);
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
