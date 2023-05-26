import { Meta } from 'solid-start';

/**
 * Component containing a bunch of different meta tags for crawlers, embed cards, etc.
 */
export default function MetaTags() {
	return (
		<>
			<Meta
				name="title"
				content="Web Scrobbler — Scrobble music all around the web!"
			/>
			<Meta
				name="description"
				content="Web Scrobbler helps music listeners to scrobble their online playback history."
			/>

			{/* Open Graph / Facebook */}
			<Meta property="og:type" content="website" />
			<Meta property="og:url" content="https://web-scrobbler.com/" />
			<Meta
				property="og:title"
				content="Web Scrobbler — Scrobble music all around the web!"
			/>
			<Meta
				property="og:description"
				content="Web Scrobbler helps music listeners to scrobble their online playback history."
			/>
			<Meta
				property="og:image"
				content="https://raw.githubusercontent.com/web-scrobbler/media-resources/master/images/social-media-preview.png"
			/>

			{/* Twitter */}
			<Meta property="twitter:card" content="summary_large_image" />
			<Meta property="twitter:url" content="https://web-scrobbler.com/" />
			<Meta
				property="twitter:title"
				content="Web Scrobbler — Scrobble music all around the web!"
			/>
			<Meta
				property="twitter:description"
				content="Web Scrobbler helps music listeners to scrobble their online playback history."
			/>
			<Meta
				property="twitter:image"
				content="https://raw.githubusercontent.com/web-scrobbler/media-resources/master/images/social-media-preview.png"
			/>
		</>
	);
}
