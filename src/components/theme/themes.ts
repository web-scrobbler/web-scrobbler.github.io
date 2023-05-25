/**
 * Handles everything related to theming
 * Ripped from https://github.com/yayuyokitano/Eggs-Enhancement-Suite
 */

/**
 * Initializes the theme from storage. To be run on load.
 */
export function initializeThemes() {
	const theme = localStorage.getItem('theme');
	if (theme) {
		document.body.classList.add(processTheme(theme));
		return;
	}

	updateTheme('theme-system');
}

/**
 * Change the theme and update DOM to reflect the change.
 *
 * @param theme - New theme
 */
export async function updateTheme(theme: ModifiedTheme) {
	document.body.className = '';
	document.body.classList.add(await processTheme(theme));
	await localStorage.setItem('theme', theme);
}

/**
 * Process the current theme, to get the correct display theme for themes that have multiple possibilities
 *
 * @param theme - current theme
 * @returns the corresponding display theme
 */
function processTheme(theme: string) {
	if (theme === 'theme-system') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'theme-dark';
		}
		return 'theme-light';
	}
	return theme;
}

type Theme = 'system' | 'dark' | 'light';
export type ModifiedTheme = `theme-${Theme}`;

export const themeList: Theme[] = ['system', 'dark', 'light'];
export const modifiedThemeList = themeList.map(
	(theme) => `theme-${theme}`
) as ModifiedTheme[];

/**
 * Get the current theme from storage
 *
 * @returns current theme
 */
export async function getTheme(): Promise<ModifiedTheme> {
	return (localStorage.getItem('theme') || 'theme-system') as ModifiedTheme;
}
