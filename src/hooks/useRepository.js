import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first) => {
	const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
		fetchPolicy: 'cache-and-network',
		variables: { id, first },
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				first,
				id,
				after: data.repository.reviews.pageInfo.endCursor,
			},
		});
	};

	return { data, error, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepository;
