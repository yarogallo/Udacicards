import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { green } from '../../helper/colors';
import PropTypes from 'prop-types';

function TextButton(props) {
	const { text, onPress, styleBtn, styleTextBtn, disabled } = props;
	const customStyle = disabled ? [styles.button, styleBtn] : [styles.button, styles.shadow, styleBtn];
	return(
		<TouchableOpacity 
			style={customStyle}
			onPress={onPress}
			disabled={disabled}>
			<Text style={[styles.text, styleTextBtn]}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderWidth: 2,
		borderRadius: 7,
		padding: 20,
		opacity: 0.5
	},
	shadow: {
		shadowColor: green,
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.4,
		opacity: 1,
	},
	text: {
		textAlign: 'center',
		fontSize: 30
	}
});

export default TextButton;