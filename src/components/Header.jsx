import { Link, useNavigate } from 'react-router';
import logo from '../assets/images/logo.svg';
import FontMenu from './FontMenu';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ setSearchInput }) {
	let navigate = useNavigate();

	return (
		<nav className='flex justify-between items-center'>
			<button onClick={() => navigate('/', setSearchInput(''))}>
				<img src={logo} />
			</button>
			<div className='flex gap-6 items-center'>
				<FontMenu />
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
