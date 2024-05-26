import { useState, Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import RepositoryPicker from './RepositoryPicker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends Component {
	renderHeader = () => {
		const { sortBy, setSortBy, searchQuery, setSearchQuery } = this.props;

		return (
			<>
				<Searchbar placeholder="Search" value={searchQuery} onChangeText={setSearchQuery} />
				<RepositoryPicker selectedValue={sortBy} onValueChange={setSortBy} />
			</>
		);
	};

	render() {
		const { data, onEndReach } = this.props;
		const repositoryNodes = data ? data.edges.map(edge => edge.node) : [];
		return (
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => (
					<Link to={`/repository/${item.id}`}>
						<RepositoryItem repository={item} link={false} />
					</Link>
				)}
				keyExtractor={item => item.id}
				ListHeaderComponent={this.renderHeader}
				onEndReached={onEndReach}
				onEndReachedThreshold={0.5}
			/>
		);
	}
}

const RepositoryList = () => {
	const [sortBy, setSortBy] = useState(['CREATED_AT', 'DESC']);
	const [searchQuery, setSearchQuery] = useState('');
	const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
	const { data, fetchMore } = useRepositories(sortBy[0], sortBy[1], debouncedSearchQuery, 5);

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			data={data?.repositories}
			onEndReach={onEndReach}
			sortBy={sortBy}
			setSortBy={setSortBy}
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
		/>
	);
};

export default RepositoryList;
