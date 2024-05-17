import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const SignIn = () => {
	const [signIn] = useSignIn();
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const navigate = useNavigate();

	const onSubmit = async data => {
		const { username, password } = data;

		try {
			const { data } = await signIn({ username, password });
			await authStorage.setAccessToken(data.authenticate.accessToken);
			await apolloClient.resetStore();
			navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
