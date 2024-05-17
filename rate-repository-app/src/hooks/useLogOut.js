import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useLogOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const logout = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return logout;
};

export default useLogOut;
