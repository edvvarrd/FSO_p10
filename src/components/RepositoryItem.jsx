import { Text, View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		gap: 20,
		backgroundColor: theme.colors.white,
	},
	top: {
		flexDirection: 'row',
		gap: 20,
	},
	avatar: {
		flex: 0,
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	details: {
		flex: 1,
		gap: 7.5,
	},
	name: {
		fontWeight: theme.fontWeights.bold,
	},
	description: {
		color: theme.colors.textSecondary,
	},
	language: {
		padding: 5,
		alignSelf: 'flex-start',
		borderRadius: 5,
		backgroundColor: theme.colors.primary,
	},
	languageText: {
		color: theme.colors.white,
	},
	statistics: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	statisticBlock: {
		alignItems: 'center',
		gap: 7.5,
	},
	statisticNumber: {
		fontWeight: theme.fontWeights.bold,
	},
	statisticText: {
		color: theme.colors.textSecondary,
	},
});

const RepositoryItem = ({ repository }) => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
				<View style={styles.details}>
					<Text style={styles.name}>{repository.fullName}</Text>
					<Text style={styles.description}>{repository.description}</Text>
					<View style={styles.language}>
						<Text style={styles.languageText}>{repository.language}</Text>
					</View>
				</View>
			</View>
			<View style={styles.statistics}>
				<View style={styles.statisticBlock}>
					<Text style={styles.statisticNumber}>
						{repository.stargazersCount > 999 ? `${(repository.stargazersCount / 1000).toFixed(1)}K` : repository.stargazersCount}
					</Text>
					<Text style={styles.statisticText}>Stars</Text>
				</View>
				<View style={styles.statisticBlock}>
					<Text style={styles.statisticNumber}>
						{repository.forksCount > 999 ? `${(repository.forksCount / 1000).toFixed(1)}K` : repository.forksCount}
					</Text>
					<Text style={styles.statisticText}>Forks</Text>
				</View>
				<View style={styles.statisticBlock}>
					<Text style={styles.statisticNumber}>
						{repository.reviewCount > 999 ? `${(repository.reviewCount / 1000).toFixed(1)}K` : repository.reviewCount}
					</Text>
					<Text style={styles.statisticText}>Reviews</Text>
				</View>
				<View style={styles.statisticBlock}>
					<Text style={styles.statisticNumber}>
						{repository.ratingAverage > 999 ? `${(repository.ratingAverage / 1000).toFixed(1)}K` : repository.ratingAverage}
					</Text>
					<Text style={styles.statisticText}>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
