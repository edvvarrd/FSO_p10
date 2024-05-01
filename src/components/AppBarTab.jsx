import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
	tab: {
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
});

const AppBarTab = ({ children, to }) => {
	return (
		<Link to={to} style={styles.tab} underlayColor="transparent">
			<Text color="white" fontWeight="bold">
				{children}
			</Text>
		</Link>
	);
};

export default AppBarTab;
