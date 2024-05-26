import { View, Pressable, Alert, StyleSheet, Platform } from 'react-native';
import Text from './Text';
import Subheading from './Subheading';

import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		gap: 15,
		backgroundColor: theme.colors.white,
	},
	reviewContainer: {
		gap: 15,
		flexDirection: 'row',
	},
	rating: {
		width: 45,
		height: 45,
		flexGrow: 0,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2.5,
		borderColor: theme.colors.primary,
		borderRadius: '50%',
	},
	content: {
		flex: 1,
	},
	reviewText: {
		marginTop: 10,
	},
	buttons: {
		flexDirection: 'row',
		gap: 15,
	},
	button: {
		padding: 10,
		alignItems: 'center',
		flex: 1,
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
	},
	buttonText: {
		color: theme.colors.white,
	},
	buttonDelete: {
		backgroundColor: theme.colors.red,
	},
});

const ReviewItem = ({ review, manage }) => {
	const navigate = useNavigate();
	const [deleteReview] = useDeleteReview();

	const deleteReviewOnPress = deleteReviewId => {
		Alert.alert(
			'Delete review',
			'Are you sure you want to delete this review?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Delete',
					onPress: async () => {
						try {
							await deleteReview({ deleteReviewId });
						} catch (e) {
							console.log(e.message);
						}
					},
				},
			],
			{ cancelable: true }
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.reviewContainer}>
				<View style={styles.rating}>
					<Text fontSize="subheading" fontWeight="bold" color="primary">
						{review.rating}
					</Text>
				</View>
				<View style={styles.content}>
					<Subheading>{review.user.username}</Subheading>
					<Text color="textSecondary">{format(new Date(review.createdAt), 'dd.LL.yyyy')}</Text>
					<Text style={styles.reviewText}>{review.text}</Text>
				</View>
			</View>
			{manage && (
				<View style={styles.buttons}>
					<Pressable onPress={() => navigate(`/repository/${review.repositoryId}`)} style={styles.button}>
						<Text style={styles.buttonText}>View repository</Text>
					</Pressable>
					<Pressable onPress={() => deleteReviewOnPress(review.id)} style={[styles.button, styles.buttonDelete]}>
						<Text style={styles.buttonText}>Delete</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};

export default ReviewItem;
