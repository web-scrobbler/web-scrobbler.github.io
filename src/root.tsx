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
	Link,
} from 'solid-start';
import './global.scss';
import './components/theme/themes.scss';

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
				<Title>SolidStart - Bare</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/wss/apple-touch-icon.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/wss/favicon-32x32.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/wss/favicon-16x16.png"
				/>
				<Link rel="manifest" href="/wss/site.webmanifest" />
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
