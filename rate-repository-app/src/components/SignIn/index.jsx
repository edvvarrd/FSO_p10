import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async data => {
		const { username, password } = data;

		try {
			await signIn({ username, password });
		} catch (e) {
			console.error(e.message);
		}
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
