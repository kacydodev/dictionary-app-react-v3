import { Link, useNavigate } from 'react-router';

export default function NotFound({ setSearchInput }) {
	let navigate = useNavigate();

	return (
		<article className='flex flex-col gap-8 justify-center items-center text-center'>
			<h3 className='text-5xl'>😕</h3>
			<h3 className='text-2xl '>Page Not Found</h3>
			<button
				onClick={() => navigate('/', setSearchInput(''))}
				className=' underline underline-offset-2'
			>
				Return Home
			</button>
		</article>
	);
}
