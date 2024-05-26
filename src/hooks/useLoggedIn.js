import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useLoggedIn = includeReviews => {
	const { data } = useQuery(ME, { variables: { includeReviews: includeReviews ? true : false } });
	return data;
};

export default useLoggedIn;
