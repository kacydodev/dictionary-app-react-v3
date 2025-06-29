import { Link } from 'react-router';

export default function NotFound() {
	return (
		<article className='flex flex-col gap-8 justify-center items-center text-center'>
			<h3 className='text-5xl'>😕</h3>
			<h3 className='text-2xl font-bold'>Page Not Found</h3>
			<Link to='/' className='text-lavender underline underline-offset-2'>
				Return Home
			</Link>
		</article>
	);
}
