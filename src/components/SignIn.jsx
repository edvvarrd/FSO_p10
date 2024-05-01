import SignInForm from './SignInForm';

const onSubmit = data => {
	console.log(data);
};

const SignIn = () => {
	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
