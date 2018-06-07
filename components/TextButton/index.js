import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function DeckView(props) {
	const { text, onPress, styleBtn, styleTextBtn } = props;
	return(
		<TouchableOpacity 
			style={[styles.button, styleBtn]}
			onPress={onPress}>
			<Text style={[styles.text, styleTextBtn]}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderWidth: 2,
		borderRadius: 7,
		padding: 20,
	},
	text: {
		textAlign: 'center',
		fontSize: 30
	}
});

export default DeckView;