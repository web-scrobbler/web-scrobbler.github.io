// @refresh reload
import { Suspense } from 'solid-js';
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

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>
					Web Scrobbler — Scrobble music all around the web!
				</Title>
				<MetaTags />
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="initial-scale=1.0,width=device-width"
				/>
				<IconTags />
				{/* eslint-disable solid/no-innerhtml -- inline theme bootstrap script */}
				<script
					innerHTML={`try{var t=localStorage.getItem('theme')||'theme-system';if(t==='theme-system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'theme-dark':'theme-light'}document.documentElement.classList.add(t)}catch(e){}`}
				/>
				{/* eslint-enable solid/no-innerhtml */}
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
