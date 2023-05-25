import {
	DiscordIcon,
	EmailIcon,
	GitHubIcon,
	TwitterIcon,
} from '~/assets/icons';
import styles from './styles.module.scss';

export default function Footer() {
	return (
		<footer class={styles.footer}>
			<div class={styles.footerContent}>
				<div class={styles.footerColumn}>
					<h3>For Users</h3>
					<ul>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/issues"
								target="_blank"
								rel="noopener noreferrer"
							>
								Issues
							</a>
						</li>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/discussions"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discussions
							</a>
						</li>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/releases"
								target="_blank"
								rel="noopener noreferrer"
							>
								Release Notes
							</a>
						</li>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/blob/master/src/_locales/en/privacy.md"
								target="_blank"
								rel="noopener noreferrer"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div class={styles.footerColumn}>
					<h3>For Developers</h3>
					<ul>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub Page
							</a>
						</li>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/wiki"
								target="_blank"
								rel="noopener noreferrer"
							>
								Project Wiki
							</a>
						</li>
						<li>
							<a
								href="https://github.com/web-scrobbler/web-scrobbler/blob/master/.github/CONTRIBUTING.md"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contributing Guide
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class={styles.icons}>
				<div class={styles.iconGroup}>
					<a
						href="https://discord.gg/u99wNWw"
						title="Discord"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DiscordIcon class={styles.icon} />
					</a>
					<a
						href="mailto:web.scrobbler@gmail.com"
						title="E-mail"
						target="_blank"
						rel="noopener noreferrer"
					>
						<EmailIcon class={styles.icon} />
					</a>
				</div>
				<div class={styles.iconGroup}>
					<a
						href="https://github.com/web-scrobbler/web-scrobbler"
						title="GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon class={styles.icon} />
					</a>
					<a
						href="https://twitter.com/web_scrobbler"
						title="Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TwitterIcon class={styles.icon} />
					</a>
				</div>
			</div>
			<span class={styles.copyright}>
				© 2023&nbsp;
				<a
					href="https://github.com/web-scrobbler/web-scrobbler/graphs/contributors"
					target="_blank"
					rel="noopener noreferrer"
				>
					Web Scrobbler Team
				</a>
			</span>
		</footer>
	);
}
