import { useContext } from 'react';
import { ThemeContext } from '../../ultils/ultils';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';

export default function Home({ searchInput, setSearchInput }) {
	const { font } = useContext(ThemeContext);

	return (
		<>
			<Header setSearchInput={setSearchInput} />
			<main className={`grow space-y-12 mb-12 ${font}`}>
				<Search searchInput={searchInput} setSearchInput={setSearchInput} />
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
