import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const useLogOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const navigate = useNavigate();

	const logout = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
		navigate('/');
	};

	return logout;
};

export default useLogOut;
