import { Link } from 'react-router';
import logo from '../assets/images/logo.svg';
import FontMenu from './FontMenu';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	return (
		<nav className='flex justify-between items-center'>
			<Link to='/'>
				<img src={logo} />
			</Link>
			<div className='flex gap-6 items-center'>
				<FontMenu />
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
