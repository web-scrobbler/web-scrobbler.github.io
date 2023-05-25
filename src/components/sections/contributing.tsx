import styles from './styles.module.scss';

export default function Contributing() {
	return (
		<section class={styles.contributing} id="contributing">
			<h2>Contributing</h2>
			<p class={styles.intro}>
				Web Scrobbler is an open source project being developed by a
				great number of
				<a
					href="https://github.com/web-scrobbler/web-scrobbler/graphs/contributors"
					target="_blank"
					rel="noopener noreferrer"
				>
					contributors
				</a>
				. We always welcome any kind of contributions!
				<br />
				Here are some of the things you can do to improve Web Scrobbler:
			</p>
			<ul>
				<li>
					<a
						href="https://github.com/web-scrobbler/web-scrobbler/issues"
						target="_blank"
						rel="noopener noreferrer"
					>
						File
					</a>
					&nbsp;bug reports or feature requests
				</li>
				<li>
					Develop new features and submit
					<a
						href="https://github.com/web-scrobbler/web-scrobbler/pulls"
						target="_blank"
						rel="noopener noreferrer"
					>
						pull requests
					</a>
				</li>
				<li>
					Create or improve
					<a
						href="https://github.com/web-scrobbler/web-scrobbler/wiki/Translate-the-extension"
						target="_blank"
						rel="noopener noreferrer"
					>
						translations
					</a>
				</li>
				<li>Tell your friends about Web Scrobbler</li>
			</ul>
			<p>
				If you want to support development of the extension, consider
				<a
					href="https://opencollective.com/web-scrobbler/donate"
					target="_blank"
					rel="noopener noreferrer"
				>
					donating to
				</a>
				&nbsp;Web Scrobbler via OpenCollective. Your support is greatly
				appreciated!
				<br />
				Donations made in 2023 may be used to have one of our primary
				contributors work full time on the project for a limited time,
				see our
				<a
					href="https://opencollective.com/web-scrobbler"
					target="_blank"
					rel="noopener noreferrer"
				>
					OpenCollective
				</a>
				&nbsp;page for more details.
			</p>
		</section>
	);
}
