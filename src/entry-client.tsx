import { mount, StartClient } from 'solid-start/entry-client';
import { initializeThemes } from './components/theme/themes';

mount(() => <StartClient />, document);
initializeThemes();
