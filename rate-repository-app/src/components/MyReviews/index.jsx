import { View, FlatList, StyleSheet } from 'react-native';

import ReviewItem from '../ReviewItem';

import useLoggedIn from '../../hooks/useLoggedIn';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const MyReviewsContainer = ({ data }) => {
	const reviewNodes = data ? data.reviews.edges.map(edge => edge.node) : [];
	return (
		<FlatList
			data={reviewNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <ReviewItem review={item} manage={true} />}
			keyExtractor={item => item.id}
		/>
	);
};

const MyReviews = () => {
	const loggedIn = useLoggedIn(true);

	return <MyReviewsContainer data={loggedIn?.me} />;
};

export default MyReviews;
