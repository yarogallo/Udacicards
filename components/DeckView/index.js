import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { 
	red,
	yellow,
	light
 } from '../../helper/colors';
 import TextButton from '../TextButton';

class DeckView extends Component {
	constructor(props) {
		super(props);
		this.navigateToAddDeckView = this.navigateToAddDeckView.bind(this);
	}
	navigateToAddDeckView() {
		this.props.navigation.navigate('AddCardView');
	}
	render() {
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>Deck Name</Text>
					<Text style={styles.textCounter}>Nro cards</Text>
				</View>
				<View>
					<TextButton text="Add Card" 
						styleBtn={styles.addCardBtn} 
						styleTextBtn={styles.textBtn}
						onPress={this.navigateToAddDeckView}/>
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
		padding: 15,
		backgroundColor: light
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