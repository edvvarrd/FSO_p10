import { View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.primary,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
				<AppBarTab to="/">Repositories</AppBarTab>
				<AppBarTab to="/signin">Sign In</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
