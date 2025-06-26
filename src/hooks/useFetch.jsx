import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { URL } from '../../ultils/ultils';

export default function useFetch(query) {
	const data = useQuery({
		queryKey: ['query', query],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		retry: 1,
		// Disables fetch until query changes
		enabled: !!query,
	});

	return data;
}
