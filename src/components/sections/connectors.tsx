import { Accessor, For, Show, createSignal } from 'solid-js';
import styles from './styles.module.scss';
import { ExpandMore } from '~/assets/icons';

export default function Connectors(props: {
	connectors: Accessor<string[] | undefined>;
}) {
	const [isExpanded, setExpanded] = createSignal(false);

	return (
		<section class={styles.connectors}>
			<h2>Supported Websites</h2>
			<ul class={isExpanded() ? styles.expandedList : ''}>
				<For each={props.connectors()}>
					{(connector) => <li>{connector}</li>}
				</For>
			</ul>
			<Show when={!isExpanded()}>
				<button
					class={styles.expandButton}
					onClick={() => setExpanded(true)}
				>
					<ExpandMore />
				</button>
			</Show>
		</section>
	);
}
