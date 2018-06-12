import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import TextButton from '../TextButton';
import { connect } from 'react-redux';
import { red, green, light } from '../../helper/colors';
import QuizEnd from './QuizEnd';

class QuizView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			correctQuestion: 0,
			showAnswer: false
		};
		this.pressCorrectButtonHandler = this.pressCorrectButtonHandler.bind(this);
		this.toggleAnswearHandler = this.toggleAnswearHandler.bind(this);
		this.pressButtonHandler = this.pressButtonHandler.bind(this);
	}
	
	pressCorrectButtonHandler() {
		this.setState({
			correctQuestion: this.state.correctQuestion + 1,
		});
	}
	
	pressButtonHandler() {
		this.setState({
			currentIndex: this.state.currentIndex + 1,
			showAnswer: false,
		});
	}
	
	toggleAnswearHandler() {
		this.setState((prevState) => ({
			showAnswer: !prevState.showAnswer
		}));
	}
	
	render() {
		const { listQuestions } = this.props;
		const { currentIndex, showAnswer, correctQuestion } = this.state;
		const totalQuestions = listQuestions.length;
		return(
			<View style={styles.container}>
			{ currentIndex === totalQuestions
				? <QuizEnd totalQuestions={totalQuestions} totalCorrectQuestions={correctQuestion}/>
				:<View style={styles.container}>
					<View style={{marginBottom: 20}}>
						<Text style={styles.quizCounter}>{`${currentIndex + 1}/${totalQuestions}`}</Text>
					</View>
					<View style={{marginBottom: 40}}>
						<Text style={styles.headerText}>Question</Text>
						<Text style={styles.questionText}>{listQuestions[currentIndex].question}</Text>
					</View>
					<View style={{marginBottom: 40}}>
						<Button 
							title="answer here:"
							textStyle={[styles.headerText, {
								textDecorationColor: red,
								textDecorationStyle: "solid",
								textDecorationLine: "underline"
							}]}
							raised= {true}
							buttonStyle={{
								backgroundColor: "transparent"
							}}
							containerStyle={{ marginTop: 20 }}
							onPress={this.toggleAnswearHandler}/>
						{ showAnswer && <Text style={styles.questionText}>{listQuestions[currentIndex].answer}</Text>}
						
					</View>
					<View>
						<TextButton 
							text="Correct" 
							styleBtn={[styles.quizBtn, {backgroundColor: red, marginBottom: 20}]} 
							styleTextBtn={styles.textBtn}
							onPress={() => {
								this.pressButtonHandler();
								this.pressCorrectButtonHandler();
							}}/>
						<TextButton 
							text="Incorrect" 
							styleBtn={[styles.quizBtn, {backgroundColor: green}]} 
							styleTextBtn={styles.textBtn}
							onPress={() => {
								this.pressButtonHandler();	
							}}/>
					</View>
				</View>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: light,
		justifyContent: 'flex-start',
		alignItems: 'stretch'
	},
	quizCounter: {
		color: green,
		fontWeight: '500',
		fontSize: 20
	},
	headerText: {
		color: red,
		fontWeight: '800',
		fontSize: 20,
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

function mapStateToProps(state, { navigation }) {
	const title = navigation.getParam('deck');
	return {
		listQuestions: [...state[title].questions]
	};
}

export default connect(mapStateToProps)(QuizView);