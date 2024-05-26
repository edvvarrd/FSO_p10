import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';

import theme from '../../theme';

import RepositoryItem from '../RepositoryItem';
import ReviewItem from '../ReviewItem';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		alignItems: 'center',
	},
	message: {
		fontWeight: theme.fontWeights.bold,
	},
	separator: {
		height: 10,
	},
});

const RepositorySingle = () => {
	const { id } = useParams();

	const { data, loading, error, fetchMore } = useRepository(id, 5);

	if (loading) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Loading...</Text>
			</View>
		);
	}

	if (error) {
		console.log(error);
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Something went wrong.</Text>
			</View>
		);
	}

	const reviewNodes = data.repository.reviews.edges ? data.repository.reviews.edges.map(edge => edge.node) : [];

	const ItemSeparator = () => <View style={styles.separator} />;

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<FlatList
			data={reviewNodes}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={item => item.id}
			ListHeaderComponent={() => <RepositoryItem repository={data.repository} />}
			ListHeaderComponentStyle={{ marginBottom: 10 }}
			ItemSeparatorComponent={ItemSeparator}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.1}
		/>
	);
};

export default RepositorySingle;
