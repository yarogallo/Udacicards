import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

function CustomStatusBar({ backgroundColor }) {
	return(
		<View style={[styles.viewStyle, { backgroundColor: backgroundColor }]}>
			<StatusBar syle={[{backgroundColor}]} barStyle='light-content'/>
		</View>
	);
}

const styles = StyleSheet.create({
	viewStyle: {
		height: Constants.statusBarHeight,
	},
});

export default CustomStatusBar;
