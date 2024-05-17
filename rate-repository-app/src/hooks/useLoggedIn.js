import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useLoggedIn = () => {
	const result = useQuery(ME);
	return result;
};

export default useLoggedIn;
