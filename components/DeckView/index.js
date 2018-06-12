import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { 
	red,
	yellow,
	light,
	blue
 } from '../../helper/colors';
 import TextButton from '../TextButton';

class DeckView extends Component {
	constructor(props) {
		super(props);
		this.navigateToAddDeckView = this.navigateToAddDeckView.bind(this);
		this.navigateToQuizView = this.navigateToQuizView.bind(this);
	}
	
	static navigationOptions({ navigation }) {
		return {
			title: navigation.getParam('deck', 'no_deck'),
			headerBackTitle: null
		};
	}
	
	navigateToAddDeckView(deck) {
		this.props.navigation.navigate('AddCardView', { deck });
	}
	
	navigateToQuizView(deck) {
		this.props.navigation.navigate('QuizView', { deck });
	}
	
	render() {
		const { deckTitle, deckNroCards }= this.props;
		return(
			<View style={styles.container}>
				<View>
					<Ionicon name={Platform === 'ios' ? 'ios-book' : 'md-book'} size={60} style={styles.icon} color={red}/>
					<Text style={styles.textTitle}>{deckTitle}</Text>
					<Text style={styles.textCounter}>{deckNroCards} Cards</Text>
				</View>
				<View>
					<TextButton text="Add Card" 
						styleBtn={styles.deckBtn} 
						styleTextBtn={styles.textBtn}
						onPress={() => this.navigateToAddDeckView(deckTitle)}/>
					<TextButton 
						text="Start Quiz"
						styleBtn={styles.deckBtn} 
						styleTextBtn={styles.textBtn}
						disabled={deckNroCards === 0 ? true: false}
						onPress={() => this.navigateToQuizView(deckTitle)}/>
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
		borderColor: blue,
		backgroundColor: blue,
		width: 250,
	},
	textBtn: {
		color: yellow,
		fontWeight: '500'
	},
	icon: {
		textAlign: 'center',
	}
	
});

function mapStateToProps(state, { navigation }) {
	const title = navigation.getParam('deck', 'no_deck')
	return {
		deckTitle : title,
		deckNroCards: state[title].questions.length
	}
}

export default connect(mapStateToProps)(DeckView);