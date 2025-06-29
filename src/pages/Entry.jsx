import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import EntryHeader from '../components/EntryHeader';
import EntryDefinition from '../components/EntryDefinition';

export default function Entry() {
	const { query } = useParams();

	const { isLoading, isSuccess, isError, error, data } = useFetch(query);

	if (isLoading) return <Loading />;

	if (isError) return <Error error={error} />;

	return (
		<article className='space-y-6'>
			{isSuccess && <EntryHeader data={data[0]} />}
			{isSuccess && <EntryDefinition data={data[0]} />}
		</article>
	);
}
