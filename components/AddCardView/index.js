import React, { Component } from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../../helper/api';
import TextButton from '../TextButton';
import { addCardTodDeck } from '../../actions';
import {
	light,
	red,
	blue,
	green
} from '../../helper/colors';

class AddCardView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
			title: this.props.navigation.getParam('deck', 'no_deck')
		};
		this.resetAnswer = this.resetAnswer.bind(this);
		this.resetQuestion = this.resetQuestion.bind(this);
		this.submitNewCard = this.submitNewCard.bind(this);
		this.resetState = this.resetState.bind(this);
		this.onChangeQuestionHandler = this.onChangeQuestionHandler.bind(this);
		this.onChangeAnswerHandler = this.onChangeAnswerHandler.bind(this);
	}
	
	onChangeQuestionHandler(value) {
		this.setState( () => ({question: value}));
	}
	onChangeAnswerHandler(value) {
		this.setState( () => ({answer: value}));
	}
	resetState() {
		this.setState({ question: '', answer: ''});
	}
	submitNewCard() {
		const { title, question, answer } = this.state;
		const card = {question, answer};
		if(question.length === 0 || answer.length === 0) {
			return;
		}
		addCard(title, card)
			.then(() => {
				this.resetState();
				return this.props.dispatch(addCardTodDeck(title, card))	
			});		
	} 
	resetAnswer() {
		this.setState({
			answer: ''
		});
	}
	resetQuestion() {
		this.setState({
			question: ''
		});
	}
	render() {
		return(
			<KeyboardAvoidingView 
				style={styles.container}
				behavior="padding" 
				enabled>
				<View>
					<Text style={styles.label}>Enter the question</Text>
					<TextInput
						style={styles.inputText}
						value={this.state.question}
						name="question"
						multiline={false}
						onChangeText={ value => this.onChangeQuestionHandler(value)}
						onFocus={this.resetQuestion}/>
					<Text style={styles.label}>Enter the answer</Text>	
					<TextInput
						style={styles.inputText}
						value={this.state.answer}
						multiline={false}
						name="answer"
						onChangeText={ value => this.onChangeAnswerHandler(value)}
						onFocus={this.resetAnswer}/>
				</View>
				<TextButton
					text="Submit"
					styleBtn={styles.submitBtn}
					styleTextBtn={styles.textBtn}
					onPress={() => this.submitNewCard()}
				/>
				<View style={{ height: 60 }} />
			</KeyboardAvoidingView>
		);
	}	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		justifyContent: 'space-around',
		alignItems: 'stretch',
		backgroundColor: light	
	},
	inputText: {
		color: green,
		fontSize: 20,
		borderWidth: 1,
		height: 60,
		padding: 10,
		borderColor: blue,
		borderRadius: 7,
		marginBottom: 15,
	},
	submitBtn: {
		backgroundColor: blue,
		borderColor: blue,
		width: 200,
		alignSelf: 'center'
	},
	textBtn: {
		color: green
	},
	label: {
		color: red,
		fontSize: 20,
		fontWeight: '800',
		marginBottom: 10,
		textDecorationColor: red,
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
		textAlign: 'center'
	}
});

export default connect()(AddCardView);
