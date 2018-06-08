import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from '../TextButton';
import { red, green, light } from '../../helper/colors';

class QuizView extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.quizCounter}>5/20</Text>
				</View>
				<View>
					<Text style={styles.question}>Question</Text>
					<Text style={styles.questionText}>Does React Native work width android?</Text>	
				</View>
				<View>
					<TextButton 
						text="Correct" 
						styleBtn={[styles.quizBtn, {backgroundColor: red, marginBottom: 20}]} 
						styleTextBtn={styles.textBtn}/>
					<TextButton 
						text="Incorrect" 
						styleBtn={[styles.quizBtn, {backgroundColor: green}]} 
						styleTextBtn={styles.textBtn}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: light,
		justifyContent: 'space-around',
		alignItems: 'stretch'
	},
	quizCounter: {
		color: green,
		fontWeight: '500',
		fontSize: 20
	},
	question: {
		color: red,
		fontWeight: '800',
		fontSize: 30,
		marginBottom: 10,
		textAlign: 'center'
	},
	questionText: {
		color: green,
		fontSize: 30,
		fontWeight: 'normal',
	},
	quizBtn: {
		alignSelf: 'stretch',
		borderColor: light,
		width: 350,
		alignSelf: 'center'
	},
	textBtn: {
		color: light
	}
	
});

export default QuizView;