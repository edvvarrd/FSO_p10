import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword, first) => {
	const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: { first, orderBy, orderDirection, searchKeyword },
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				first,
				after: data.repositories.pageInfo.endCursor,
				orderBy,
				orderDirection,
				searchKeyword,
			},
		});
	};

	return { data, fetchMore: handleFetchMore, error, loading, ...result };
};

export default useRepositories;
