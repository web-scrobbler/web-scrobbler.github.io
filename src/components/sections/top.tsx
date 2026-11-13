import { createSignal } from 'solid-js';
import styles from './styles.module.scss';
import {
	WSIcon,
	ChromeIcon,
	FirefoxIcon,
	SafariIcon,
	EdgeIcon,
} from '../../assets/icons';

export default function Top() {
	const [spinning, setSpinning] = createSignal(false);
	const spin = () => {
		setSpinning(false);
		requestAnimationFrame(() => setSpinning(true));
	};

	return (
		<header class={styles.header} id="header">
			<div class={styles.pattern} aria-hidden="true" />
			<button
				class={`${styles.topIcon} ${spinning() ? styles.spinning : ''}`}
				onClick={spin}
				aria-label="Spin the Web Scrobbler logo"
			>
				<WSIcon />
			</button>
			<h1>Web Scrobbler</h1>
			<h2>Scrobble music all around the web!</h2>
			<p class={styles.headerText}>
				Web Scrobbler helps music listeners to scrobble their online
				playback history.
			</p>
			<div class={styles.badges}>
				<a
					href="https://chrome.google.com/webstore/detail/lastfm-scrobbler/hhinaapppaileiechjoiifaancjggfjm"
					title="Download on Chrome Web Store"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ChromeIcon />
					Chrome
				</a>
				<a
					href="https://addons.mozilla.org/en-US/firefox/addon/web-scrobbler/"
					title="Download on Add-ons for Firefox"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FirefoxIcon />
					Firefox
				</a>
				<a
					href="https://apps.apple.com/app/web-scrobbler/id6449224218"
					title="Download on the App Store"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SafariIcon />
					Safari
				</a>
				<a
					href="https://microsoftedge.microsoft.com/addons/detail/web-scrobbler/obiekdelmkmlgnhddmmnpnfhngejbnnc"
					title="Download on Microsoft Edge Addons"
					target="_blank"
					rel="noopener noreferrer"
				>
					<EdgeIcon />
					Edge
				</a>
			</div>
		</header>
	);
}
