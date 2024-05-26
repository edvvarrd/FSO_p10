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
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: '',
};

const validationSchema = yup.object().shape({
	ownerName: yup.string().required('Repository owner name is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup.number().min(0).max(100).required('Rating is required'),
	text: yup.string(),
});

const CreateReviewForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Repository owner name"
					value={formik.values.ownerName}
					onChangeText={formik.handleChange('ownerName')}
					style={[styles.input, formik.touched.ownerName && formik.errors.ownerName && styles.errorInput]}
				/>
				{formik.touched.ownerName && formik.errors.ownerName && <Text style={styles.errorText}>{formik.errors.ownerName}</Text>}
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Repository name"
					value={formik.values.repositoryName}
					onChangeText={formik.handleChange('repositoryName')}
					style={[styles.input, formik.touched.repositoryName && formik.errors.repositoryName && styles.errorInput]}
				/>
				{formik.touched.repositoryName && formik.errors.repositoryName && (
					<Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
				)}
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Rating between 0 and 100"
					inputMode="numeric"
					value={formik.values.rating}
					onChangeText={formik.handleChange('rating')}
					style={[styles.input, formik.touched.rating && formik.errors.rating && styles.errorInput]}
				/>
				{formik.touched.rating && formik.errors.rating && <Text style={styles.errorText}>{formik.errors.rating}</Text>}
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Review"
					multiline={true}
					value={formik.values.text}
					onChangeText={formik.handleChange('text')}
					style={[styles.input, formik.touched.text && formik.errors.text && styles.errorInput]}
				/>
				{formik.touched.text && formik.errors.text && <Text style={styles.errorText}>{formik.errors.text}</Text>}
			</View>
			<Pressable onPress={formik.handleSubmit} style={styles.button}>
				<Text style={styles.buttonText}>Create a review</Text>
			</Pressable>
		</View>
	);
};

export default CreateReviewForm;
