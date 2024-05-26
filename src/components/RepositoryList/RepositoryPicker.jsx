import { StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
	picker: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: 'transparent',
	},
	pickerItem: {
		height: 50,
	},
});

const RepositoryPicker = ({ selectedValue, onValueChange }) => {
	return (
		<Picker
			selectedValue={selectedValue.join(',')}
			onValueChange={value => onValueChange(value.split(','))}
			mode={'dropdown'}
			style={styles.picker}
			itemStyle={styles.pickerItem}>
			<Picker.Item label="Lastest repositories" value={['CREATED_AT', 'DESC']} />
			<Picker.Item label="Highest rated repositories" value={['RATING_AVERAGE', 'DESC']} />
			<Picker.Item label="Lowest rated repositories" value={['RATING_AVERAGE', 'ASC']} />
		</Picker>
	);
};

export default RepositoryPicker;
