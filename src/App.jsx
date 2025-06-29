import { useState, useEffect } from 'react';
import { isDarkMode, ThemeContext } from '../ultils/ultils';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Error from './components/Error';
import NotFound from './pages/404';

export default function App() {
	const [font, setFont] = useState('font-mono');
	const [theme, setTheme] = useState(isDarkMode ? 'dark' : 'light');

	// const { isLoading, isSuccess, isError, error, data } = useFetch(query);

	useEffect(() => {
		const rootElement = document.getElementsByTagName('html')[0];
		// Theme
		if (theme === 'light') {
			rootElement.classList.remove('dark');
			// setThemeIcon(moonIcon);
		} else {
			rootElement.classList.add('dark');
			// setThemeIcon(moonIconDark);
		}
		localStorage.theme = theme;

		// Font
		localStorage.font !== font && setFont(localStorage.font);
	}, [theme, font]);

	return (
		<ThemeContext
			value={{ font: font, setFont: setFont, theme: theme, setTheme: setTheme }}
		>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='lookup/:query' element={<Entry />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</ThemeContext>
	);
}
