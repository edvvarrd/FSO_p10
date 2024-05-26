import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const client = useApolloClient();
	const navigate = useNavigate();
	const [mutate, result] = useMutation(AUTHENTICATE, {
		onCompleted: data => {
			authStorage.setAccessToken(data.authenticate.accessToken);
			client.resetStore();
			navigate('/');
		},
	});

	const signIn = async ({ username, password }) => {
		const result = await mutate({ variables: { credentials: { username, password } } });

		return result;
	};

	return [signIn, result];
};

export default useSignIn;
