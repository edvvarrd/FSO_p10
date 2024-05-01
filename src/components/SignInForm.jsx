import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
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
		container: {
			gap: 5,
		},
	},
	button: {
		padding: 10,
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
		text: {
			color: theme.colors.white,
		},
	},
	error: {
		text: {
			color: theme.colors.red,
			fontSize: 12,
		},
		input: {
			borderWidth: 1,
			borderColor: theme.colors.red,
		},
	},
});

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});
	return (
		<View style={styles.container}>
			<View style={styles.input.container}>
				<TextInput
					placeholder="Username"
					value={formik.values.username}
					onChangeText={formik.handleChange('username')}
					style={[styles.input, formik.touched.username && formik.errors.username && styles.error.input]}
				/>
				{formik.touched.username && formik.errors.username && <Text style={styles.error.text}>{formik.errors.username}</Text>}
			</View>
			<View style={styles.input.container}>
				<TextInput
					placeholder="Password"
					value={formik.values.password}
					onChangeText={formik.handleChange('password')}
					secureTextEntry={true}
					style={[styles.input, formik.touched.password && formik.errors.password && styles.error.input]}
				/>
				{formik.touched.password && formik.errors.password && <Text style={styles.error.text}>{formik.errors.password}</Text>}
			</View>
			<Pressable onPress={formik.handleSubmit} style={styles.button}>
				<Text style={styles.button.text}>Log in</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
