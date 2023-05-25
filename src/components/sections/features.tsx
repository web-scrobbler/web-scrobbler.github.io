import styles from './styles.module.scss';
import { Accessor } from 'solid-js';

export default function Features(props: {
	connectors: Accessor<string[] | undefined>;
}) {
	return (
		<section class={styles.features}>
			<h2>Key Features</h2>
			<ul>
				<li>
					<h3>Multiple Scrobbling Services</h3>
					<p>
						Scrobble your music to
						<a
							href="https://www.last.fm/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Last.fm
						</a>
						,
						<a
							href="https://libre.fm/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Libre.fm
						</a>
						, and
						<a
							href="https://listenbrainz.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							ListenBrainz
						</a>
						.
					</p>
				</li>
				<li>
					<h3>Built-in Metadata Filter</h3>
					<p>
						The
						<a
							href="http://metadata-filter.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							metadata filter
						</a>
						&nbsp;cleans track info up and removes redundant track
						suffixes.
					</p>
				</li>
				<li>
					<h3>Now Playing Notifications</h3>
					<p>
						Notifications of now playing tracks with extended track
						info (a website name, a track play count). Note: this
						does not currently work in Safari.
					</p>
				</li>
				<li>
					<h3>Many Websites Supported</h3>
					<p>
						We currently support scrobbling to{' '}
						{props.connectors()?.length || 'many'} different
						websites with more being added with each release.
					</p>
				</li>
				<li>
					<h3>Powered by WebExtensions</h3>
					<p>
						Available for Chrome, Chromium-based browsers (Opera,
						Vivaldi, etc), Firefox, and Safari (macOS and iOS).
					</p>
				</li>
				<li>
					<h3>Open Source & Ad-free</h3>
					<p>
						The extension is free for everyone and does not contain
						ads or banners.
					</p>
				</li>
			</ul>
		</section>
	);
}
