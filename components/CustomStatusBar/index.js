import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

function CustomStatusBar({ backgroundColor, ...props }) {
	return(
		<View style={[styles.viewStyle, { backgroundColor: backgroundColor }]}>
			<StatusBar syle={[{backgroundColor}]} barStyle='dark-content'/>
		</View>
	);
}

const styles = StyleSheet.create({
	viewStyle: {
		height: Constants.statusBarHeight,
	},
});

export default CustomStatusBar;
