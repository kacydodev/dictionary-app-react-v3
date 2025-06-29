export default function Error({ error: { code, status, message, response } }) {
	if (status === 404) {
		const {
			data: { message, resolution },
		} = response;
		return (
			<article className='flex flex-col gap-8 justify-center items-center text-center'>
				<h3 className='text-5xl'>😕</h3>
				<h3 className='text-2xl font-bold'>No Definition Found</h3>
				<p>{`${message} ${resolution}`}</p>
			</article>
		);
	}

	return (
		<article className='flex flex-col gap-8 justify-center items-center text-center'>
			<h3 className='text-2xl font-bold'>{code}</h3>
			<p>{message}</p>
		</article>
	);
}
