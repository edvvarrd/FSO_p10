import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 15,
		backgroundColor: theme.colors.white,
	},
	input: {
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: theme.colors.grey,
		color: theme.colors.textPrimary,
	},
	inputContainer: {
		gap: 5,
	},
	button: {
		padding: 10,
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
	},
	buttonText: {
		color: theme.colors.white,
	},
	errorText: {
		color: theme.colors.red,
		fontSize: 12,
	},
	errorInput: {
		borderWidth: 1,
		borderColor: theme.colors.red,
	},
});

const initialValues = {
	username: '',
	password: '',
	confirmPassword: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required').min(5).max(30),
	password: yup.string().required('Password is required').min(5).max(50),
	confirmPassword: yup
		.string()
		.required('Password confirmation is required')
		.oneOf([yup.ref('password')], "Passwords don't match"),
});

const SignUpForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Username"
					value={formik.values.username}
					onChangeText={formik.handleChange('username')}
					style={[styles.input, formik.touched.username && formik.errors.username && styles.errorInput]}
				/>
				{formik.touched.username && formik.errors.username && <Text style={styles.errorText}>{formik.errors.username}</Text>}
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Password"
					value={formik.values.password}
					onChangeText={formik.handleChange('password')}
					secureTextEntry={true}
					style={[styles.input, formik.touched.password && formik.errors.password && styles.errorInput]}
				/>
				{formik.touched.password && formik.errors.password && <Text style={styles.errorText}>{formik.errors.password}</Text>}
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Confirm password"
					value={formik.values.confirmPassword}
					onChangeText={formik.handleChange('confirmPassword')}
					secureTextEntry={true}
					style={[styles.input, formik.touched.confirmPassword && formik.errors.confirmPassword && styles.errorInput]}
				/>
				{formik.touched.confirmPassword && formik.errors.confirmPassword && (
					<Text style={styles.errorText}>{formik.errors.confirmPassword}</Text>
				)}
			</View>
			<Pressable onPress={formik.handleSubmit} style={styles.button}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</Pressable>
		</View>
	);
};

export default SignUpForm;
