import styles from './styles.module.scss';
import {
	WSIcon,
	ChromeIcon,
	FirefoxIcon,
	SafariIcon,
	EdgeIcon,
} from '../../assets/icons';

export default function Top() {
	return (
		<header class={styles.header} id="header">
			<WSIcon class={styles.topIcon} />
			<h1 class={styles.shadowText}>Web Scrobbler</h1>
			<h2 class={styles.smallShadowText}>
				Scrobble music all around the web!
			</h2>
			<p class={styles.headerText}>
				Web Scrobbler helps music listeners to scrobble their online
				playback history.
			</p>
			<div class={styles.icons}>
				<div class={styles.iconGroup}>
					<a
						href="https://chrome.google.com/webstore/detail/lastfm-scrobbler/hhinaapppaileiechjoiifaancjggfjm"
						title="Download on Chrome Web Store"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ChromeIcon class={styles.icon} />
					</a>
					<a
						href="https://addons.mozilla.org/en-US/firefox/addon/web-scrobbler/"
						title="Download on Add-ons for Firefox"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FirefoxIcon class={styles.icon} />
					</a>
				</div>
				<div class={styles.iconGroup}>
					<a
						href="https://youtu.be/dQw4w9WgXcQ"
						title="Download on the App Store"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SafariIcon class={styles.icon} />
					</a>
					<a
						href="https://microsoftedge.microsoft.com/addons/detail/web-scrobbler/obiekdelmkmlgnhddmmnpnfhngejbnnc"
						title="Download on Microsoft Edge Addons"
						target="_blank"
						rel="noopener noreferrer"
					>
						<EdgeIcon class={styles.icon} />
					</a>
				</div>
			</div>
		</header>
	);
}
