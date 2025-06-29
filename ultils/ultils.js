import { createContext } from 'react';

export const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const ThemeContext = createContext({
	font: '',
	setFont: () => {},
	theme: '',
	setTheme: () => {},
});

export const isDarkMode =
	localStorage.theme === 'dark' ||
	(!('theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches);

export const FONTS = [
	{ name: 'Serif', ref: 'font-serif' },
	{ name: 'Monospace', ref: 'font-mono' },
	{ name: 'Sans-Serif', ref: 'font-sans' },
];
