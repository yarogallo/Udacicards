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
		this.state = {
			deckTitle: this.props.navigation.getParam('deck', 'no_deck'),
			deckNroCards: this.props.navigation.getParam('nroCards', 0)	
		};
		this.navigateToAddDeckView = this.navigateToAddDeckView.bind(this);
		this.navigateToQuizView = this.navigateToQuizView.bind(this);
	}
	
	navigateToAddDeckView() {
		this.props.navigation.navigate('AddCardView');
	}
	
	navigateToQuizView() {
		this.props.navigation.navigate('QuizView');
	}
	
	render() {
		const { deckTitle, deckNroCards } = this.state;
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>{deckTitle}</Text>
					<Text style={styles.textCounter}>{deckNroCards} Cards</Text>
				</View>
				<View>
					<TextButton text="Add Card" 
						styleBtn={styles.deckBtn} 
						styleTextBtn={styles.textBtn}
						onPress={this.navigateToAddDeckView}/>
					<TextButton 
						text="Start Quiz" 
						styleBtn={styles.deckBtn} 
						styleTextBtn={styles.textBtn}
						onPress={this.navigateToQuizView}/>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
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
	deckBtn: {
		marginBottom: 20,
		borderColor: red,
		backgroundColor: red,
		width: 350,
	},
	textBtn: {
		color: yellow
	}
	
});

export default DeckView;