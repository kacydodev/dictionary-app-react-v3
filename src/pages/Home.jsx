import { useContext } from 'react';
import { ThemeContext } from '../../ultils/ultils';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';

export default function Home() {
	const { font } = useContext(ThemeContext);

	return (
		<>
			<Header />
			<main className={`grow space-y-12 ${font}`}>
				<Search />
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
