import { View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../../theme';
import useLoggedIn from '../../hooks/useLoggedIn';
import useLogOut from '../../hooks/useLogOut';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.primary,
	},
});

const AppBar = () => {
	const loggedIn = useLoggedIn();
	const logout = useLogOut();

	return (
		<View style={styles.container}>
			<ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
				<AppBarTab to="/">Repositories</AppBarTab>
				{loggedIn?.me ? (
					<>
						<AppBarTab to="/createreview">Create a review</AppBarTab>
						<AppBarTab to="/myreviews">My reviews</AppBarTab>
						<AppBarTab onPress={logout}>Log out</AppBarTab>
					</>
				) : (
					<>
						<AppBarTab to="/signin">Sign In</AppBarTab>
						<AppBarTab to="/signup">Sign up</AppBarTab>
					</>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
