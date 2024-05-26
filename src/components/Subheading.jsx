import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
	subheading: {
		color: theme.textPrimary,
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		fontFamily: theme.fonts.main,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
});

const Subheading = ({ color, ...props }) => {
	const subheadingStyle = [styles.subheading, color === 'primary' && styles.colorPrimary];

	return <NativeText style={subheadingStyle} {...props} />;
};

export default Subheading;
