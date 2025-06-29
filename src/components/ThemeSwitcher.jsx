import { useContext } from 'react';
import { ThemeContext } from '../../ultils/ultils';
import { Switch } from '@headlessui/react';
import iconMoon from '../assets/images/icon-moon.svg';
import iconMoonDark from '../assets/images/icon-moon-dark.svg';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);
	const isDarkTheme = theme === 'dark' ? true : false;

	return (
		<div className='flex gap-3'>
			<Switch
				checked={isDarkTheme ? true : false}
				onChange={() => (isDarkTheme ? setTheme('light') : setTheme('dark'))}
				className='group inline-flex h-6 w-11 items-center rounded-full bg-slate-400 transition data-checked:bg-lavender'
			>
				<span className='size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6' />
			</Switch>
			<img
				id='dark-mode-icon'
				src={isDarkTheme ? iconMoonDark : iconMoon}
				className='h-5'
			/>
		</div>
	);
}
