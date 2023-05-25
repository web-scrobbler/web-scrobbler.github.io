import styles from './styles.module.scss';

export default function Starter() {
	return (
		<section class={styles.starter}>
			<p class={styles.intro}>
				Web Scrobbler is a browser extension created for people who
				listen to music online through their browser, and would like to
				keep an updated playback history using scrobbling services, such
				as Last.fm, Libre.fm and ListenBrainz.
			</p>
			<h2>Want to get started?</h2>
			<ol>
				<li>
					<h3>Install the extension</h3>
					<p>
						Download and install the extension for your browser. You
						can use the download buttons&nbsp;
						<a href="#header">above</a>.
					</p>
				</li>
				<li>
					<h3>Sign in to your accounts</h3>
					<p>
						Open the extension options, and go to the
						&quot;Accounts&quot; section, then sign in to a
						scrobbling service you want to use.
					</p>
				</li>
				<li>
					<h3>Start listening to music!</h3>
					<p>
						Just open any of websites supported (e.g.&nbsp;
						<a
							href="https://open.spotify.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Spotify
						</a>
						) and start listening to music.
					</p>
				</li>
			</ol>
		</section>
	);
}
