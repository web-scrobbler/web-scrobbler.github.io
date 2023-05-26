import { Link, Meta } from 'solid-start';

/**
 * A set of meta and link tags for various icons
 */
export default function IconTags() {
	return (
		<>
			<Link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<Link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<Link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<Link rel="manifest" href="/site.webmanifest" />
			<Link
				rel="mask-icon"
				href="/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<Meta name="msapplication-TileColor" content="#fd3148" />
			<Meta name="theme-color" content="#fd3148" />
		</>
	);
}
