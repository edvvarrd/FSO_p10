import SignUpForm from './SignUpForm';
import useSignUp from '../../hooks/useSignUp';
import { useNavigate } from 'react-router-native';

const SignUp = () => {
	const [signUp] = useSignUp();
	const navigate = useNavigate();

	const onSubmit = async data => {
		const { username, password } = data;

		try {
			await signUp({ username, password });
		} catch (e) {
			console.log(e.message);
		}
	};

	return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
