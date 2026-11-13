import {
	Accessor,
	Match,
	Setter,
	Switch,
	createSignal,
	onMount,
} from 'solid-js';
import styles from '../components/sections/styles.module.scss';

enum State {
	Waiting = 'WAITING',
	Rejected = 'REJECTED',
	Accepted = 'ACCEPTED',
	Confirmed = 'CONFIRMED',
}

declare global {
	interface Window {
		wsState: Accessor<State>;
		setWSState: Setter<State>;
	}
}

export default function WebHook() {
	const [params, setParams] = createSignal<URLSearchParams>();

	onMount(() => {
		setParams(new URLSearchParams(window.location.search));

		const [a, b] = createSignal(State.Waiting);
		window.wsState = a;
		window.setWSState = b;
	});

	return (
		<header class={styles.header} id="header">
			<Switch>
				<Match
					when={
						!params()?.get('applicationName') ||
						!params()?.get('userApiUrl')
					}
				>
					<h1>Missing parameters</h1>
				</Match>

				<Match when={window.wsState() === State.Waiting}>
					<h1>
						{params()?.get('applicationName')} would like to receive
						data from Web Scrobbler at URL{' '}
						{params()?.get('userApiUrl')}.
					</h1>
					<div class={styles.buttonWrapper}>
						<button
							class={`${styles.actionButton} ${styles.acceptButton}`}
							onClick={() => window.setWSState(State.Accepted)}
						>
							Accept
						</button>
						<button
							class={`${styles.actionButton} ${styles.rejectButton}`}
							onClick={() => window.setWSState(State.Rejected)}
						>
							Reject
						</button>
					</div>
					<p>
						Note: Web Scrobbler does no verification of
						applications.
					</p>
				</Match>

				<Match when={window.wsState() === State.Accepted}>
					<h1>Waiting for communications with extension...</h1>
					<p>
						This shouldn&apos;t take more than a couple of seconds.
						Did you <a href="./">install Web Scrobbler?</a>
					</p>
				</Match>

				<Match when={window.wsState() === State.Rejected}>
					<h1>
						Rejected data access for{' '}
						{params()?.get('applicationName')}
					</h1>
				</Match>

				<Match when={window.wsState() === State.Confirmed}>
					<h1>
						You have given data access to{' '}
						{params()?.get('applicationName')}!
					</h1>
					<p>
						Note that you may have to restart your browser for the
						changes to take effect.
					</p>
				</Match>
			</Switch>
		</header>
	);
}
