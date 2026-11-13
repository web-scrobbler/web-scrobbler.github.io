import { Accessor, For, Show, createSignal } from 'solid-js';
import styles from './styles.module.scss';

export default function Connectors(props: {
	connectors: Accessor<string[] | undefined>;
}) {
	const [isExpanded, setExpanded] = createSignal(false);

	return (
		<section class={styles.connectors}>
			<h2>Supported Websites</h2>
			<p class={styles.count}>
				Web Scrobbler works on {props.connectors()?.length || 'many'}{' '}
				websites and counting.
			</p>
			<ul
				class={`${styles.connectorList} ${
					isExpanded() ? '' : styles.collapsed
				}`}
			>
				<For each={props.connectors()}>
					{(connector) => <li>{connector}</li>}
				</For>
			</ul>
			<Show when={!isExpanded()}>
				<div class={styles.expandWrap}>
					<button
						class={styles.expandButton}
						onClick={() => setExpanded(true)}
					>
						Show all sites
					</button>
				</div>
			</Show>
		</section>
	);
}
