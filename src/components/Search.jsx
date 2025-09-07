import searchIcon from '../assets/images/icon-search.svg';
import { Input } from '@headlessui/react';
import { useNavigate } from 'react-router';

export default function Search({
	searchInput: input,
	setSearchInput: setInput,
}) {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate(`/lookup/${input}`);
	}

	return (
		<form onSubmit={handleSubmit} className='relative flex items-center'>
			<button type='submit' className='absolute right-3 '>
				<img src={searchIcon} className='h-3.5' />
			</button>
			<Input
				type='text'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className='w-full px-4 py-2 rounded-md bg-slate-200 text-black active:border-primary focus:border-primary focus:outline-primary dark:bg-slate-900 dark:text-white'
			/>
		</form>
	);
}
