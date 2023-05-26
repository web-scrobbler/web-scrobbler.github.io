// @refresh reload
import { Suspense, onMount } from 'solid-js';
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from 'solid-start';
import './global.scss';
import './components/theme/themes.scss';
import MetaTags from './components/metatags';
import IconTags from './components/icontags';

function getElementScrollScale() {
	return window.scrollY / (document.body.scrollHeight - window.innerHeight);
}

export default function Root() {
	onMount(() => {
		const setScroll = () => {
			const scroll = getElementScrollScale();
			document.body.style.setProperty('--scrollPct', scroll.toString());
		};
		setScroll();
		document.addEventListener('scroll', setScroll);
		return () => document.removeEventListener('scroll', setScroll);
	});

	return (
		<Html lang="en">
			<Head>
				<Title>
					Web Scrobbler — Scrobble music all around the web!
				</Title>
				<MetaTags />
				<Meta charset="utf-8" />
				<IconTags />
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
