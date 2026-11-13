/**
 * Handles everything related to theming
 * Ripped from https://github.com/yayuyokitano/Eggs-Enhancement-Suite
 */

/**
 * Change the theme and update DOM to reflect the change.
 *
 * @param theme - New theme
 */
export function updateTheme(theme: ModifiedTheme) {
	document.documentElement.classList.remove(
		'theme-light',
		'theme-dark',
	);
	document.documentElement.classList.add(processTheme(theme));
	localStorage.setItem('theme', theme);
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
	(theme) => `theme-${theme}`,
) as ModifiedTheme[];

/**
 * Get the current theme from storage
 *
 * @returns current theme
 */
export function getTheme(): ModifiedTheme {
	return (localStorage.getItem('theme') || 'theme-system') as ModifiedTheme;
}
