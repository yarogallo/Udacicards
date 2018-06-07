import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { 
	red,
	yellow
 } from '../../helper/colors';
 import TextButton from '../TextButton';

class DeckView extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>Deck Name</Text>
					<Text style={styles.textCounter}>Nro cards</Text>
				</View>
				<View>
					<TextButton text="Add Card" styleBtn={styles.addCardBtn} styleTextBtn={styles.textBtn}/>
					<TextButton text="Start Quiz" styleBtn={styles.addCardBtn} styleTextBtn={styles.textBtn}/>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		padding: 15
	},
	textTitle: {
		color: red,
		fontSize: 40,
		fontWeight: '500',
		textAlign: 'center'
	},
	textCounter: {
		color: yellow,
		fontSize: 30,
		textAlign: 'center'
	},
	addCardBtn: {
		marginBottom: 20,
		borderColor: red,
		backgroundColor: red
	},
	textBtn: {
		color: yellow
	}
	
});

export default DeckView;